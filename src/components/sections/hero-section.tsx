import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  Check,
  BadgeCheck,
  Languages,
  Clock3,
  Handshake,
} from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <Image
          className="hero-image"
          src="/hero-training-v2.webp"
          alt="Illustration of a white tractor-trailer at a commercial driver training yard"
          fill
          sizes="100vw"
          preload
        />
        <div className="hero-wash" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> A NEW DIRECTION STARTS HERE
            </p>
            <h1 id="hero-title">
              Put your career
              <br />
              in <em>high gear.</em>
            </h1>
            <p className="hero-description">
              More than a CDL. A road to what’s next.
              <br />
              Hands-on training, real-world confidence, and a team
              <br className="desktop-break" /> that’s with you from your first
              lesson to the open road.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#apply">
                Find your path <ArrowUpRight size={18} />
              </a>
              <a className="button button-outline" href="#programs">
                Explore programs <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-checks">
              <span>
                <Check size={14} /> No experience needed
              </span>
              <span>
                <Check size={14} /> Bilingual instruction
              </span>
            </div>
          </div>
          <div className="hero-note">
            <span className="note-icon">
              <BadgeCheck size={25} />
            </span>
            <div>
              <strong>Built for the road ahead.</strong>
              <span>Professional training. Personal support.</span>
            </div>
          </div>
          <a className="scroll-cue" href="#programs">
            <ArrowDown size={14} /> YOUR NEXT CHAPTER, THIS WAY
          </a>
          <span className="hero-image-caption">
            A vision of your road ahead · Illustrative image
          </span>
        </div>
      </section>
      <div className="trust-strip">
        <div className="container trust-grid">
          <div>
            <BadgeCheck />
            <span>
              <strong>13+ years</strong>
              <small>of training experience</small>
            </span>
          </div>
          <div>
            <Languages />
            <span>
              <strong>English & Español</strong>
              <small>Learn with confidence</small>
            </span>
          </div>
          <div>
            <Clock3 />
            <span>
              <strong>Training on your time</strong>
              <small>Day, evening & weekend options</small>
            </span>
          </div>
          <div>
            <Handshake />
            <span>
              <strong>Support beyond the test</strong>
              <small>Job placement assistance</small>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
