import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
export const metadata: Metadata = {
  title: "Inquiry privacy notice",
  alternates: { canonical: "/privacy/" },
  openGraph: {
    title: "Inquiry privacy notice | Interstate Connections",
    url: new URL("/privacy/", SITE.url).toString(),
    description:
      "How information submitted through the Interstate Connections inquiry form is used.",
    siteName: SITE.name,
    type: "website",
    images: [{ url: "/social-preview.png", width: 1200, height: 630 }],
  },
  description:
    "How information submitted through the Interstate Connections inquiry form is used.",
};
export default function Privacy() {
  return (
    <main className="privacy-page container">
      <Link className="text-link" href="/">
        ← Back to Interstate Connections
      </Link>
      <p className="eyebrow">YOUR INFORMATION</p>
      <h1>Inquiry privacy notice</h1>
      <p>
        When you use our inquiry form, you provide your name, telephone number,
        program interest, optional email address, and permission to contact you.
      </p>
      <h2>How your inquiry is handled</h2>
      <p>
        Your information is sent through FormSubmit to {SITE.email} so
        Interstate Connections can respond to your request and discuss training,
        tuition, scheduling, and enrollment options. Submitting an inquiry does
        not enroll you in a program.
      </p>
      <h2>Third-party form processing</h2>
      <p>
        FormSubmit processes the information you submit. Please review{" "}
        <a
          href="https://formsubmit.co/privacy.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          FormSubmit’s privacy policy
        </a>{" "}
        for information about its processing practices. Do not include sensitive
        identity documents, payment information, or medical information in an
        inquiry.
      </p>
      <h2>Your choices</h2>
      <p>
        You can call or email us instead of completing the form. To ask about
        information you have submitted, request its deletion, or stop further
        follow-up, contact <a href={SITE.emailHref}>{SITE.email}</a> or call{" "}
        <a href={SITE.phoneHref}>{SITE.phone}</a>.
      </p>
    </main>
  );
}
