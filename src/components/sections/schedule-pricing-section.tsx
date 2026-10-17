"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Clock3, Wallet, Sun, Moon } from "lucide-react";
import LeadForm from "@/components/lead-form";
import { SITE } from "@/lib/site";

const plans = [
  {
    name: "Class B CDL",
    program: "Class B CDL Training",
    price: "2,500",
    duration: "2–3 weeks",
    description: "Local routes. Lasting opportunity.",
    features: [
      "Classroom & pre-trip instruction",
      "Yard skills and road practice",
      "One DMV road test included",
    ],
    featured: false,
  },
  {
    name: "Class A CDL",
    program: "Class A CDL Training",
    price: "4,500",
    duration: "3–4 weeks",
    description: "Open the door to the open road.",
    features: [
      "Combination vehicle training",
      "Coupling, backing & road skills",
      "Manual transmission option",
      "Job placement assistance",
    ],
    featured: true,
  },
  {
    name: "Refresher Training",
    program: "Refresher & On-the-Job Training",
    price: "1,200",
    duration: "1 week",
    description: "Get back behind the wheel.",
    features: [
      "Personalized skills assessment",
      "Targeted maneuver practice",
      "Road evaluation & feedback",
    ],
    featured: false,
  },
];

export default function SchedulePricingSection() {
  const [schedule, setSchedule] = useState("weekday");
  return (
    <>
      <section className="section pricing-section" id="pricing">
        <div className="container">
          <div className="center-heading">
            <p className="eyebrow">INVEST IN YOUR NEXT CHAPTER</p>
            <h2>
              Your future.
              <br className="mobile-only" /> <em>Within reach.</em>
            </h2>
            <p>Clear tuition. Flexible schedules. A practical path forward.</p>
          </div>
          <div className="schedule-picker" id="schedule">
            <div className="schedule-options" aria-label="Class schedule">
              <button
                type="button"
                aria-pressed={schedule === "weekday"}
                onClick={() => setSchedule("weekday")}
              >
                <Sun size={16} /> Weekdays
              </button>
              <button
                type="button"
                aria-pressed={schedule === "flexible"}
                onClick={() => setSchedule("flexible")}
              >
                <Moon size={16} /> Evenings & weekends
              </button>
            </div>
            <p className="schedule-times" aria-live="polite">
              <Clock3 size={15} />
              {schedule === "weekday"
                ? "Monday–Friday · 7:00 AM–3:30 PM"
                : "Evenings · 5:00–9:00 PM  /  Sat–Sun · 7:00 AM–5:30 PM"}
            </p>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                className={`pricing-card ${plan.featured ? "featured" : ""}`}
                key={plan.name}
              >
                {plan.featured && (
                  <span className="recommended">THE ROAD MOST TRAVELED</span>
                )}
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
                <div className="price">
                  <small>From</small>
                  <strong>${plan.price}</strong>
                  <span>{plan.duration} · full-time</span>
                </div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className={`button ${plan.featured ? "button-primary" : "button-outline"}`}
                  href={`?program=${encodeURIComponent(plan.program)}#apply`}
                >
                  Explore this path <ArrowUpRight size={17} />
                </a>
              </article>
            ))}
          </div>
          <p className="pricing-footnote">
            Published starting tuition and typical full-time timelines. Confirm
            current pricing, inclusions, eligibility, and class availability
            with admissions. Part-time completion times vary.
          </p>
          <div className="aid-banner" id="financial-aid">
            <span className="aid-icon">
              <Wallet size={25} />
            </span>
            <div>
              <h3>A little support can go a long way.</h3>
              <p>
                Financial aid for those who qualify. Flexible payment schedules.
                Let’s explore your options.
              </p>
            </div>
            <a href="#apply" className="text-link">
              Talk financial aid <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
      <section className="section apply-section" id="apply">
        <div className="container apply-grid">
          <div className="apply-copy">
            <p className="eyebrow">YOU DON’T NEED IT ALL FIGURED OUT</p>
            <h2>
              Just take
              <br />
              <em>the first step.</em>
            </h2>
            <p>
              Tell us a little about yourself. Our admissions team will help you
              find the right program, understand your options, and plan what
              comes next.
            </p>
            <div className="apply-points">
              <span>
                <Check size={17} /> No obligation. Just a conversation.
              </span>
              <span>
                <Check size={17} /> Support in English and Spanish.
              </span>
            </div>
            <div className="apply-contact">
              <span>Prefer a real conversation?</span>
              <a href={SITE.phoneHref}>
                {SITE.phone} <ArrowUpRight size={23} />
              </a>
            </div>
          </div>
          <div className="form-card">
            <p className="eyebrow">LET’S GET YOU MOVING</p>
            <h3>Your next chapter starts here.</h3>
            <p>Request information about our programs.</p>
            <LeadForm
              variant="light"
              sourceLabel="Admissions"
              submitLabel="Request information"
            />
          </div>
        </div>
      </section>
    </>
  );
}
