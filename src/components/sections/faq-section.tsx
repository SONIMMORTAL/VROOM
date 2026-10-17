import { ArrowUpRight, Plus } from "lucide-react";
import { SITE } from "@/lib/site";

const faqs = [
  [
    "Do I need experience to get started?",
    "No prior truck-driving experience is needed. Our beginner programs guide you through the skills you need, from pre-trip inspections to behind-the-wheel practice and road test preparation. Contact admissions to confirm permit and enrollment requirements.",
  ],
  [
    "How long does CDL training take?",
    "Typical full-time training takes 3–4 weeks for Class A and 2–3 weeks for Class B. Evening and weekend training takes longer and depends on your schedule and progress. Admissions can help you plan a realistic timeline.",
  ],
  [
    "Can I keep working while I train?",
    "Yes. Day, evening, and weekend options are available. Talk to our team about current class availability and a schedule that fits your responsibilities.",
  ],
  [
    "Is financial aid available?",
    "Financial aid is available for those who qualify, along with flexible payment schedules. Our admissions team can explain current options and help you understand eligibility before you enroll.",
  ],
  [
    "Do you offer instruction in Spanish?",
    "Yes. Bilingual instruction is available in English and Spanish, including classroom learning and practical training.",
  ],
  [
    "Will you help me find a job?",
    "We offer job placement assistance and help connect graduates with hiring carriers. Employment is not guaranteed; hiring decisions and requirements are set by each employer.",
  ],
];
export default function FaqSection() {
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-grid">
        <div>
          <p className="eyebrow">A LITTLE CLARITY GOES A LONG WAY</p>
          <h2>
            Good questions.
            <br />
            <em>Straight answers.</em>
          </h2>
          <p>
            Starting something new comes with questions.
            <br />
            We’re here for all of them.
          </p>
          <a className="text-link" href={SITE.phoneHref}>
            Talk to admissions <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], i) => (
            <details key={question} open={i === 0}>
              <summary>
                {question}
                <Plus size={19} />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
