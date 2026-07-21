'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import LeadForm from '@/components/lead-form';
import { SITE } from '@/lib/site';

const valueProps = [
  { title: 'No Experience Needed', desc: 'We train you from day one to test day.' },
  { title: 'Financial Aid Available', desc: 'State grants and financing for those who qualify.' },
  { title: 'Job Placement Support', desc: 'We connect graduates with top carriers who are hiring.' },
  { title: 'Bilingual Instruction', desc: 'Expert training in both English and Spanish.' },
];

export default function HeroSection() {
  return (
    <section id="top" className="relative w-full bg-snow overflow-hidden">
      {/*
        ====================================================================
        TOP HALF: THE IMMERSIVE BILLBOARD
        ====================================================================
      */}
      <div className="relative w-full min-h-[85vh] md:min-h-0 pt-28 pb-32 sm:pt-32 sm:pb-36 md:pt-40 md:pb-48 flex flex-col items-center justify-center text-center">
        {/* Background Image & Overlays — branded fleet at golden hour */}
        <div
          className="bg-stable absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/hero-mobile.webp')] md:bg-[url('/hero.webp')]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/85 via-void/60 to-void/90" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-[2.75rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black text-snow uppercase tracking-tighter leading-[0.90] sm:leading-[0.95] drop-shadow-2xl">
              Your Career <br />
              <span className="text-gold-gradient">In High Gear</span>
            </h1>

            <p className="mt-5 sm:mt-8 text-base sm:text-xl md:text-2xl text-snow/90 font-medium max-w-2xl leading-relaxed px-2 sm:px-0">
              Earn your Class A or B CDL in weeks. Professional, bilingual instruction
              backed by 13+ years of putting drivers behind the wheel.
            </p>

            <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0">
              <a
                href="#apply"
                className="w-full sm:w-auto text-center bg-crimson hover:bg-crimson-deep text-snow rounded-xl px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-extrabold uppercase tracking-widest shadow-[0_0_40px_-10px_#8E1F2C] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Apply Now
              </a>
              <a
                href={SITE.phoneHref}
                className="w-full sm:w-auto text-center flex items-center justify-center gap-3 rounded-xl px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold uppercase tracking-widest border border-gold/40 text-gold-light hover:bg-gold/10 backdrop-blur-md transition-all whitespace-nowrap"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                {SITE.phone}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Diagonal slice divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20">
          <svg
            className="relative block w-full h-[60px] md:h-[120px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M1200 120L0 120 0 0 1200 120z" className="fill-snow" />
          </svg>
        </div>
      </div>

      {/*
        ====================================================================
        BOTTOM HALF: THE LEAD CAPTURE & VALUE PROPS
        ====================================================================
      */}
      <div className="relative z-30 bg-snow w-full pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 relative -mt-16 md:-mt-32">
            {/* LEFT: Editorial value props */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 pt-16 md:pt-40 pr-0 lg:pr-16"
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-crimson mb-4">
                Why Interstate Connections
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-void uppercase tracking-tight mb-10">
                Built to Get You Hired.
              </h2>

              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-9">
                {valueProps.map((point, idx) => (
                  <div key={point.title} className="relative pl-6 border-l-2 border-gold/50">
                    <span className="absolute -left-px top-0 h-7 w-0.5 bg-gold" />
                    <p className="font-mono text-xs font-bold text-gold tracking-widest mb-2">
                      {String(idx + 1).padStart(2, '0')}
                    </p>
                    <h3 className="text-lg font-bold text-void leading-snug">{point.title}</h3>
                    <p className="text-charcoal/70 font-medium mt-1.5 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Typographic trust stamps */}
              <div className="mt-12 pt-8 border-t border-charcoal/10 flex flex-wrap items-center gap-4">
                <span className="px-4 py-2 border border-charcoal/20 rounded-md text-[11px] font-bold uppercase tracking-[0.25em] text-charcoal/70">
                  FMCSA Compliant
                </span>
                <span className="px-4 py-2 border border-charcoal/20 rounded-md text-[11px] font-bold uppercase tracking-[0.25em] text-charcoal/70">
                  State Approved
                </span>
                <span className="px-4 py-2 border border-charcoal/20 rounded-md text-[11px] font-bold uppercase tracking-[0.25em] text-charcoal/70">
                  Est. 2011
                </span>
              </div>
            </motion.div>

            {/* RIGHT: The Lead Form Card (Overlapping the hero image) */}
            <motion.div
              id="apply"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto scroll-mt-32"
            >
              <div className="bg-void rounded-[2rem] p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-gold/20 relative overflow-hidden">
                {/* Form Background Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/15 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />

                <div className="relative z-10">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-6">
                    Fast Track Enrollment
                  </p>

                  <h3 className="text-3xl font-extrabold text-snow tracking-tight leading-tight">
                    Start Your <br /> Application
                  </h3>
                  <p className="text-snow/60 text-sm font-medium mt-3 mb-8">
                    Fill out the form below and our admissions team will contact you within 24 hours.
                  </p>

                  <LeadForm variant="dark" sourceLabel="Hero Application" submitLabel="Get Started" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
