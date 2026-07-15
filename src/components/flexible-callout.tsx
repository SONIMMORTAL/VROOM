'use client';

import { motion } from 'framer-motion';

/**
 * Standard site-wide callout. The wording is fixed brand copy — reuse this
 * component anywhere the message appears so it never drifts between sections.
 */
export default function FlexibleCallout() {
  const points = [
    'Financial aid available for those who qualify.',
    'Day, night, and weekend class options available.',
    'Bilingual training available.',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="relative rounded-[2rem] bg-void overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full blur-[90px] -mr-24 -mt-24 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 gold-hairline" />
      <div className="absolute bottom-0 left-0 right-0 gold-hairline" />

      <div className="relative z-10 px-8 py-10 md:px-14 md:py-12 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
        <h3 className="text-2xl md:text-3xl font-black text-gold-gradient uppercase tracking-tight leading-tight flex-shrink-0">
          Flexible Payment <br className="hidden lg:block" /> Schedules
        </h3>

        <div className="grid sm:grid-cols-3 gap-8 flex-1">
          {points.map((text, i) => (
            <div key={text} className="border-t-2 border-gold/40 pt-4">
              <p className="font-mono text-[11px] font-bold text-gold/70 tracking-widest mb-2">
                {String(i + 1).padStart(2, '0')}
              </p>
              <p className="text-snow/90 font-semibold leading-snug">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
