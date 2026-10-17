import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";

export default function FlexibilitySection() {
  return (
    <section className="section why-section" id="why-interstate">
      <div className="container why-grid">
        <div className="why-visual">
          <Image
            src="/behind-wheel-v2.webp"
            alt="Hands-on practice behind the wheel of a commercial truck"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
          <div className="experience-note">
            <strong>
              13<span>+</span>
            </strong>
            <p>
              YEARS OF EXPERIENCE.
              <br />
              ONE MISSION: YOUR FUTURE.
            </p>
          </div>
        </div>
        <div className="why-copy">
          <p className="eyebrow">THE INTERSTATE DIFFERENCE</p>
          <h2>
            A bigger future.
            <br />
            <em>A team in your corner.</em>
          </h2>
          <p>
            Changing careers is a big decision. We make the next step feel a
            little smaller, with practical training and people who care about
            where you’re headed.
          </p>
          <div className="benefit">
            <span>
              <Check size={16} />
            </span>
            <div>
              <h3>Real skills. From day one.</h3>
              <p>
                From pre-trip inspections to highway driving, build confidence
                through hands-on instruction.
              </p>
            </div>
          </div>
          <div className="benefit">
            <span>
              <Check size={16} />
            </span>
            <div>
              <h3>Your life doesn’t have to go on hold.</h3>
              <p>
                Day, evening, and weekend classes help you train while keeping
                your other commitments.
              </p>
            </div>
          </div>
          <div className="benefit">
            <span>
              <Check size={16} />
            </span>
            <div>
              <h3>A connection to what comes next.</h3>
              <p>
                Get job placement assistance and support as you prepare to take
                your next professional step.
              </p>
            </div>
          </div>
          <a className="text-link" href="#apply">
            Meet your next chapter <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
