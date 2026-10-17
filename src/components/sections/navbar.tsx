"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, Phone, X, Languages } from "lucide-react";
import { SITE } from "@/lib/site";

const links = [
  ["Programs", "#programs"],
  ["Why Interstate", "#why-interstate"],
  ["Tuition & Schedule", "#pricing"],
  ["FAQ", "#faq"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function close(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    if (open) document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header" id="top">
      <div className="utility-bar">
        <div className="container utility-content">
          <span>Real skills. Real opportunity. Your road starts here.</span>
          <div>
            <span className="bilingual">
              <Languages size={14} /> English & Español
            </span>
            <a href={SITE.phoneHref}>
              <Phone size={13} /> Let’s talk: <strong>{SITE.phone}</strong>
            </a>
          </div>
        </div>
      </div>
      <div className="nav-wrap">
        <div className="container main-nav">
          <a
            className="brand"
            href="#top"
            aria-label="Interstate Connections home"
          >
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
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(([name, href]) => (
              <a key={href} href={href}>
                {name}
              </a>
            ))}
          </nav>
          <a className="button button-primary nav-cta" href="#apply">
            Start your journey <ArrowUpRight size={17} />
          </a>
          <button
            className="menu-toggle"
            ref={toggle}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
          hidden={!open}
        >
          {links.map(([name, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {name}
              <ArrowUpRight size={16} />
            </a>
          ))}
          <a href="#apply" onClick={() => setOpen(false)}>
            Start your journey <ArrowUpRight size={16} />
          </a>
          <a href={SITE.phoneHref}>
            <Phone size={16} /> {SITE.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
