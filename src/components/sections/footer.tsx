'use client';

import { ArrowUpRight, Phone } from 'lucide-react';
import { SITE } from '@/lib/site';

const footerLinks = {
  programs: [
    { label: 'Class A CDL Training', href: '#programs' },
    { label: 'Class B CDL Training', href: '#programs' },
    { label: 'Manual & Shifting Courses', href: '#programs' },
    { label: 'Refresher & On-the-Job Training', href: '#programs' },
    { label: 'School & Charter Bus Training', href: '#programs' },
  ],
  admissions: [
    { label: 'Apply Online', href: '#apply' },
    { label: 'Financial Aid', href: '#financial-aid' },
    { label: 'Class Schedule', href: '#schedule' },
    { label: 'Pricing', href: '#pricing' },
  ],
  support: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Why Choose Us', href: '#top' },
    { label: `Call ${SITE.phone}`, href: SITE.phoneHref },
    { label: 'Email Admissions', href: SITE.emailHref },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-snow border-t border-charcoal/10 pt-12 md:pt-16">
      {/* PRE-FOOTER CTA BAND */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16 relative z-20">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(201,162,39,0.35)] bg-void group">
          {/* Branded highway shot */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: 'url("/cta-highway.webp")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-void/95 via-void/80 to-void/50 z-0" />
          <div className="absolute bottom-0 left-0 right-0 gold-hairline z-10" />
          <div className="absolute top-0 left-0 right-0 gold-hairline z-10" />

          <div className="relative z-10 px-6 sm:px-8 md:px-14 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-10">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-5">
                Next Class Starts Soon
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-snow tracking-tighter leading-[1.1] uppercase">
                Your New Career <br />
                <span className="text-gold-gradient">Starts Today.</span>
              </h2>
              <p className="mt-6 text-snow/70 text-lg font-medium max-w-xl leading-relaxed">
                Stop waiting. Start earning. Our intensive hands-on CDL training will put
                you in the driver&apos;s seat of a recession-proof career.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href="#apply"
                className="flex items-center justify-center bg-crimson hover:bg-crimson-deep text-snow rounded-xl px-10 py-6 text-lg font-extrabold uppercase tracking-widest shadow-[0_0_40px_-10px_#8E1F2C] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Apply Now
              </a>
              <a
                href={SITE.phoneHref}
                className="flex items-center justify-center gap-3 rounded-xl px-10 py-6 text-lg font-bold uppercase tracking-widest border border-gold/40 text-snow hover:bg-snow/10 backdrop-blur-md transition-all hover:border-gold/70 whitespace-nowrap"
              >
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <a href="#top" className="inline-block mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-shield.webp"
                alt="Interstate Connections LLC shield logo"
                className="h-20 w-auto"
              />
            </a>
            <p className="text-lg font-extrabold text-void uppercase tracking-tight leading-none mb-1.5">
              {SITE.name}
            </p>
            <p className="text-[10px] font-bold text-gold uppercase tracking-[0.25em] mb-5">
              {SITE.legalName}
            </p>
            <p className="text-charcoal/70 font-medium mb-8 max-w-sm leading-relaxed">
              Professional CDL training backed by 13+ years of experience. FMCSA compliant
              and dedicated to producing safe, professional drivers.
            </p>

            <div className="space-y-3">
              <a
                href={SITE.phoneHref}
                className="block text-void font-bold text-lg hover:text-crimson transition-colors"
              >
                {SITE.phone}
              </a>
              <a
                href={SITE.emailHref}
                className="block text-void font-semibold hover:text-crimson transition-colors"
              >
                {SITE.email}
              </a>
            </div>
          </div>

          {/* Link Cols */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {(
              [
                ['Programs', footerLinks.programs],
                ['Admissions', footerLinks.admissions],
                ['Support', footerLinks.support],
              ] as const
            ).map(([title, links]) => (
              <div key={title} className={title === 'Support' ? 'col-span-2 sm:col-span-1' : ''}>
                <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-charcoal/50 mb-6">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-charcoal/80 font-medium hover:text-void transition-colors inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-charcoal/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-charcoal/60 font-medium text-sm text-center md:text-left">
            © {new Date().getFullYear()} {SITE.name} · {SITE.legalName}. All rights reserved.
          </p>
          <a
            href={SITE.emailHref}
            className="text-charcoal/60 hover:text-void transition-colors text-sm font-medium"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
