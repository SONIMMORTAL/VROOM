import Image from "next/image";
import { ArrowUpRight, Clock3, Truck, BusFront, Gauge } from "lucide-react";

const programs = [
  {
    name: "Class A CDL",
    description:
      "Think bigger. Train for tractor-trailers, combination vehicles, and the long road ahead.",
    image: "/hero-training-v2.webp",
    duration: "3–4 weeks",
    tag: "THE OPEN ROAD",
    price: "$4,500",
    program: "Class A CDL Training",
  },
  {
    name: "Class B CDL",
    description:
      "Make a local impact. Build the skills to operate straight trucks and delivery vehicles.",
    image: "/class-b-training-v2.webp",
    duration: "2–3 weeks",
    tag: "YOUR CITY. YOUR CAREER.",
    price: "$2,500",
    program: "Class B CDL Training",
  },
  {
    name: "School & Charter Bus",
    description:
      "Move people forward. Prepare for passenger and school bus endorsement requirements.",
    image: "/bus.webp",
    duration: "Flexible training",
    tag: "DRIVE WITH PURPOSE",
    price: null,
    program: "School & Charter Bus Training",
  },
];

export default function ServicesSection() {
  return (
    <section className="section programs-section" id="programs">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FIND YOUR DIRECTION</p>
            <h2>
              Different roads.
              <br />
              <em>One strong start.</em>
            </h2>
          </div>
          <div className="section-intro">
            <p>
              Your goals aren’t one-size-fits-all. Your training shouldn’t be
              either. Find the program that moves you forward.
            </p>
            <a className="text-link" href="#pricing">
              Compare tuition & schedules <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="program-grid">
          {programs.map((program, index) => (
            <article className="program-card" key={program.name}>
              <a
                className="program-photo"
                href={`?program=${encodeURIComponent(program.program)}#apply`}
                aria-label={`Ask about ${program.name}`}
              >
                <Image
                  src={program.image}
                  alt={
                    program.name === "Class A CDL"
                      ? "Illustrative tractor-trailer in a training yard"
                      : program.name === "Class B CDL"
                        ? "Illustrative Class B straight truck"
                        : "School bus for passenger vehicle training"
                  }
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
                <span className="photo-tag">
                  {index === 0 ? "MOST POPULAR" : program.tag}
                </span>
                <span className="photo-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </a>
              <div className="program-body">
                <p className="program-index">
                  0{index + 1} <span>/ CDL TRAINING</span>
                </p>
                <h3>{program.name}</h3>
                <p>{program.description}</p>
                <div className="program-bottom">
                  <span>
                    <Clock3 size={14} /> {program.duration}
                  </span>
                  <a
                    href={`?program=${encodeURIComponent(program.program)}#apply`}
                  >
                    {program.price ? (
                      <>
                        From <strong>{program.price}</strong>
                      </>
                    ) : (
                      <>
                        Let’s talk <ArrowUpRight size={14} />
                      </>
                    )}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="more-programs">
          <span>Already have your CDL?</span>
          <a href="?program=Manual%20%26%20Shifting%20Courses#apply">
            <Truck size={18} /> Manual & shifting <ArrowUpRight size={14} />
          </a>
          <a href="?program=Refresher%20%26%20On-the-Job%20Training#apply">
            <Gauge size={18} /> Refresher training <ArrowUpRight size={14} />
          </a>
          <a href="#schedule">
            <BusFront size={18} /> Flexible schedules <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
