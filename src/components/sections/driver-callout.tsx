'use client';

import { motion } from 'framer-motion';
import { Truck, ShieldCheck, ChevronRight } from 'lucide-react';

const classes = ['Class A', 'Class B', 'Box Trucks'];

export default function DriverCallout() {
  return (
    <section id="drivers-wanted" className="relative w-full bg-void overflow-hidden">
      {/* Ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/25 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/15 rounded-full blur-[120px] -ml-40 -mb-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10"
        >
          {/* LEFT: Headline + classes */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center gap-2 px-4 py-2 bg-crimson text-snow rounded-full text-[11px] font-bold uppercase tracking-[0.25em]">
                <Truck className="w-4 h-4" />
                Now Hiring
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-snow uppercase tracking-tighter leading-[0.95] drop-shadow-2xl">
              Drive With Us <span className="text-gold-gradient">Today</span>
            </h2>

            <p className="mt-5 text-lg sm:text-xl text-snow/85 font-semibold uppercase tracking-wide">
              Class A, Class B &amp; Box Truck Drivers Wanted
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {classes.map((c) => (
                <span
                  key={c}
                  className="px-5 py-2.5 border border-gold/40 rounded-lg text-sm font-bold uppercase tracking-widest text-gold-light bg-gold/5"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Requirements */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-snow/80 font-medium leading-snug">
                  <span className="font-bold text-snow">Clean driving record a must.</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-snow/80 font-medium leading-snug">
                  Background checks are performed for all of our drivers.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: CTA */}
          <div className="flex-shrink-0">
            <a
              href="#apply"
              className="group inline-flex items-center justify-center gap-3 bg-crimson hover:bg-crimson-deep text-snow rounded-xl px-10 py-5 text-lg font-extrabold uppercase tracking-widest shadow-[0_0_40px_-10px_#8E1F2C] transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              Apply to Drive
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
