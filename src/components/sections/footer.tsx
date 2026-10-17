import Image from "next/image";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <p className="eyebrow">THE ROAD AHEAD IS YOURS</p>
            <h2>
              Let’s get you <em>moving.</em>
            </h2>
          </div>
          <a className="button button-light" href="#apply">
            Take the first step <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="footer-grid">
          <div className="footer-about">
            <a className="brand" href="#top">
              <Image src="/logo-shield.webp" width={48} height={57} alt="" />
              <span>
                <strong>
                  INTERSTATE
                  <br />
                  CONNECTIONS
                </strong>
                <small>CDL TRAINING & LOGISTICS</small>
              </span>
            </a>
            <p>
              Practical training. Personal support.
              <br />A better road ahead.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <a href="#programs">Our programs</a>
            <a href="#why-interstate">Why Interstate</a>
            <a href="#pricing">Tuition & schedule</a>
            <a href="#financial-aid">Financial aid</a>
          </div>
          <div>
            <h3>Your next step</h3>
            <a href="#apply">Request information</a>
            <a href="#faq">Common questions</a>
            <a href="/privacy">Privacy notice</a>
          </div>
          <div className="footer-contact">
            <h3>Let’s connect</h3>
            <a href={SITE.phoneHref}>
              <Phone size={16} />
              {SITE.phone}
            </a>
            <a href={SITE.emailHref}>
              <Mail size={16} />
              {SITE.email}
            </a>
            <span>English & Español</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </span>
          <span>Built for the road ahead.</span>
        </div>
      </div>
    </footer>
  );
}
