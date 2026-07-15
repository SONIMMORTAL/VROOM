'use client';

import { motion } from 'framer-motion';
import LeadForm from '@/components/lead-form';

const benefits = [
  {
    title: 'Day, Night & Weekend Classes',
    desc: 'Keep your day job. Choose class times that work around your schedule and transition on your own terms.',
  },
  {
    title: 'Flexible Payment Schedules',
    desc: 'Financial aid available for those who qualify, plus payment schedules that work around your budget.',
  },
  {
    title: 'Accelerated Track',
    desc: 'Dedicated full-time students can complete training and take their road test in as little as 3-4 weeks.',
  },
];

export default function FlexibilitySection() {
  return (
    <section
      id="financial-aid"
      className="py-24 bg-snow border-t border-charcoal/5 relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-crimson mb-4">
              Financial Aid & Scheduling
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-void tracking-tight leading-[1.1]">
              Built for <br />
              Working Adults.
            </h2>
            <p className="mt-6 text-lg text-charcoal/80 max-w-lg leading-relaxed">
              We understand you have responsibilities. Our academy is structured to remove
              barriers to entry, offering the flexibility and financial support you need to
              make the leap.
            </p>

            <div className="mt-10 space-y-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative pl-6 border-l-2 border-gold/50"
                >
                  <span className="absolute -left-px top-0 h-7 w-0.5 bg-gold" />
                  <p className="font-mono text-xs font-bold text-gold tracking-widest mb-2">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h4 className="text-xl font-bold text-void">{benefit.title}</h4>
                  <p className="mt-2 text-charcoal/80 font-medium leading-relaxed max-w-md">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Lead Form Card & Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background offset image for depth */}
            <div
              className="absolute -top-12 -right-12 w-3/4 h-3/4 rounded-[2rem] bg-cover bg-center shadow-lg opacity-40"
              style={{ backgroundImage: 'url("/CDLMEDIA.png")' }}
            />

            <div className="relative bg-white rounded-[2rem] p-8 md:p-12 shadow-premium border border-charcoal/10">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-void">Priority Enrollment</h3>
                <p className="text-charcoal/70 mt-2 font-medium">
                  Classes fill up fast. Secure your spot or request a campus tour.
                </p>
              </div>

              <LeadForm
                variant="light"
                sourceLabel="Priority Enrollment"
                submitLabel="Request Info"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
