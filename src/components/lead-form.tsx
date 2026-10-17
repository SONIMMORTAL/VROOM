"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { SITE } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";
const programs = [
  "Class A CDL Training",
  "Class B CDL Training",
  "Manual & Shifting Courses",
  "Refresher & On-the-Job Training",
  "School & Charter Bus Training",
  "Help me choose a program",
];

export default function LeadForm({
  sourceLabel,
  submitLabel = "Request information",
}: {
  variant: "dark" | "light";
  sourceLabel: string;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const programSelect = useRef<HTMLSelectElement>(null);
  const confirmation = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const program = new URLSearchParams(window.location.search).get("program");
    if (program && programs.includes(program) && programSelect.current)
      programSelect.current.value = program;
  }, []);
  useEffect(() => {
    if (status === "sent") confirmation.current?.focus();
  }, [status]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const phone = form.elements.namedItem("Phone") as HTMLInputElement;
    if (phone.value.replace(/\D/g, "").length < 10) {
      phone.setCustomValidity("Enter a phone number with at least 10 digits.");
      phone.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    if (data._honey) return;
    setStatus("sending");
    try {
      const response = await fetch(SITE.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: `CDL program inquiry — ${sourceLabel}`,
          _template: "table",
        }),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (
        !response.ok ||
        (result.success !== true && result.success !== "true")
      )
        throw new Error("Submission unsuccessful");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent")
    return (
      <div
        className="form-success"
        ref={confirmation}
        tabIndex={-1}
        role="status"
      >
        <CheckCircle2 size={42} />
        <h4>Thanks for taking the first step.</h4>
        <p>
          Your inquiry was submitted. Our admissions team will be in touch to
          talk through your options.
        </p>
        <p>
          Want to speak sooner? <a href={SITE.phoneHref}>{SITE.phone}</a>
        </p>
        <button className="text-link" onClick={() => setStatus("idle")}>
          Send another inquiry <ArrowUpRight size={16} />
        </button>
      </div>
    );

  return (
    <form
      className="lead-form"
      onSubmit={handleSubmit}
      aria-busy={status === "sending"}
    >
      <div className="form-row">
        <label htmlFor="first-name">
          First name
          <input
            id="first-name"
            name="First Name"
            autoComplete="given-name"
            placeholder="First name"
            maxLength={80}
            required
          />
        </label>
        <label htmlFor="last-name">
          Last name
          <input
            id="last-name"
            name="Last Name"
            autoComplete="family-name"
            placeholder="Last name"
            maxLength={80}
            required
          />
        </label>
      </div>
      <label htmlFor="phone">
        Phone number
        <input
          id="phone"
          name="Phone"
          onChange={(event) => event.currentTarget.setCustomValidity("")}
          type="tel"
          autoComplete="tel"
          placeholder="(845) 000-0000"
          minLength={10}
          maxLength={25}
          required
        />
      </label>
      <label htmlFor="email">
        Email address <span className="optional">(optional)</span>
        <input
          id="email"
          name="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          maxLength={254}
        />
      </label>
      <label htmlFor="program">
        I’m interested in
        <select
          id="program"
          name="Program"
          ref={programSelect}
          defaultValue=""
          required
        >
          <option value="" disabled>
            Select a program
          </option>
          {programs.map((program) => (
            <option key={program}>{program}</option>
          ))}
        </select>
      </label>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">
          Leave this field empty
          <input id="website" name="_honey" autoComplete="off" tabIndex={-1} />
        </label>
      </div>
      <label className="consent">
        <input
          type="checkbox"
          name="Contact permission"
          value="Agreed"
          required
        />
        <span>
          I agree to be contacted by {SITE.name} about my inquiry by phone,
          text, or email. <a href="/privacy">Privacy notice</a>.
        </span>
      </label>
      {status === "error" && (
        <p className="form-error" role="alert">
          We couldn’t confirm your submission. Your details are still here so
          you can try again. Or call <a href={SITE.phoneHref}>{SITE.phone}</a>{" "}
          or <a href={SITE.emailHref}>email admissions</a>.
        </p>
      )}
      <button
        className="button button-primary form-submit"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          <>
            <LoaderCircle className="spinner" size={18} /> Sending…
          </>
        ) : (
          <>
            {submitLabel}
            <ArrowUpRight size={18} />
          </>
        )}
      </button>
      <p className="form-note">
        No commitment required. We’ll help you find your fit.
      </p>
    </form>
  );
}
