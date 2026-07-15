'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SITE } from '@/lib/site';

const faqs = [
  {
    q: 'Do I need any experience to enroll?',
    a: 'None at all. Our programs are built for complete beginners — we take you from your learner permit all the way through your DMV road test, with one-on-one coaching at every step.',
  },
  {
    q: 'How long does it take to get my CDL?',
    a: 'Full-time Class A students typically finish in 3-4 weeks; Class B in 2-3 weeks. Evening and weekend students progress at their own pace, usually within 6-10 weeks.',
  },
  {
    q: 'Is financial aid available?',
    a: 'Yes. Financial aid is available for those who qualify, and we offer flexible in-house payment schedules so you can start training now and pay over time.',
  },
  {
    q: 'Do you offer training in Spanish?',
    a: 'Yes — our instructors provide fully bilingual instruction in English and Spanish, from classroom theory to behind-the-wheel coaching.',
  },
  {
    q: 'Can I train while keeping my current job?',
    a: 'Absolutely. We run weekday, evening (5:00-9:00 PM), and weekend classes specifically so working adults can make the transition without losing a paycheck.',
  },
  {
    q: 'Will you help me find a job after graduation?',
    a: 'We connect graduates with carriers who are actively hiring and help you prepare for the recruiting process, so you can start earning as soon as you pass your road test.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-snow border-t border-charcoal/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: heading + call card */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-crimson mb-4">
                Admissions FAQ
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-void tracking-tight leading-[1.1]">
                Questions? <br />
                <span className="text-gold-gradient">Answered.</span>
              </h2>
              <p className="mt-6 text-lg text-charcoal/80 leading-relaxed">
                Everything you need to know before you enroll. Still unsure? Our admissions
                team picks up the phone.
              </p>

              <a
                href={SITE.phoneHref}
                className="mt-8 inline-block bg-void text-snow rounded-2xl px-8 py-6 border border-gold/30 hover:border-gold/60 transition-colors group relative overflow-hidden"
              >
                <span className="absolute top-0 left-0 right-0 gold-hairline" />
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-1.5">
                  Call Admissions
                </p>
                <p className="text-2xl font-extrabold tracking-tight group-hover:text-gold-light transition-colors">
                  {SITE.phone}
                </p>
              </a>
            </motion.div>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`rounded-2xl border transition-colors ${
                    isOpen
                      ? 'bg-white border-gold/40 shadow-premium'
                      : 'bg-white border-charcoal/10'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-bold text-void">{faq.q}</span>
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                        isOpen ? 'bg-gold text-void rotate-45' : 'bg-charcoal/5 text-void'
                      }`}
                    >
                      <Plus className="w-5 h-5" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-charcoal/80 font-medium leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
