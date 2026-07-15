'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FlexibleCallout from '@/components/flexible-callout';

const pricingPlans = [
  {
    name: 'Class B CDL',
    enrollLabel: 'Class B',
    price: '2,500',
    duration: '2-3 Weeks',
    desc: 'Perfect for straight trucks, delivery, and passenger vehicles.',
    features: [
      'Comprehensive Classroom Instruction',
      'Pre-trip Inspection Training',
      'Yard Skills & Maneuvers',
      'City & Highway Driving',
      '1 DMV Road Test Included',
    ],
    recommended: false,
  },
  {
    name: 'Class A CDL',
    enrollLabel: 'Class A',
    price: '4,500',
    duration: '3-4 Weeks',
    desc: 'The gold standard. Drive combination vehicles and 18-wheelers.',
    features: [
      'Everything in Class B, plus:',
      'Combination Vehicle Mastery',
      'Coupling & Uncoupling',
      'Manual Transmission Option',
      'Job Placement Assistance',
    ],
    recommended: true,
  },
  {
    name: 'Refresher',
    enrollLabel: 'Refresher',
    price: '1,200',
    duration: '1 Week',
    desc: 'Get your skills verified and updated to return to the road.',
    features: [
      'Customized Skills Assessment',
      'Logbook & Regulations Update',
      'Targeted Maneuver Practice',
      'Road Evaluation',
    ],
    recommended: false,
  },
];

export default function SchedulePricingSection() {
  const [scheduleType, setScheduleType] = useState<'weekday' | 'weekend'>('weekday');

  return (
    <section
      id="pricing"
      className="py-24 bg-[#F5F3EF] relative z-10 border-t border-charcoal/5 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-crimson mb-4">
            Pricing & Schedule
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-void tracking-tight">
            Transparent Pricing. <br />
            No Hidden Fees.
          </h2>
          <p className="mt-6 text-lg text-charcoal/80 leading-relaxed font-medium">
            Invest in a career that pays you back. We offer competitive pricing, financial
            aid for those who qualify, and flexible payment schedules to get you started
            immediately.
          </p>
        </div>

        {/* Schedule Toggle Area */}
        <div id="schedule" className="mb-14 flex flex-col items-center scroll-mt-32">
          <div className="bg-white p-1.5 rounded-full inline-flex relative shadow-sm border border-charcoal/10">
            <button
              onClick={() => setScheduleType('weekday')}
              className={`relative z-10 px-8 py-3 text-sm font-bold rounded-full transition-colors ${
                scheduleType === 'weekday' ? 'text-snow' : 'text-charcoal hover:text-void'
              }`}
            >
              Weekday Classes
            </button>
            <button
              onClick={() => setScheduleType('weekend')}
              className={`relative z-10 px-8 py-3 text-sm font-bold rounded-full transition-colors ${
                scheduleType === 'weekend' ? 'text-snow' : 'text-charcoal hover:text-void'
              }`}
            >
              Weekend & Evening
            </button>

            {/* Active Pill background */}
            <div
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-0.375rem)] bg-void rounded-full transition-transform duration-300 ease-in-out ${
                scheduleType === 'weekday'
                  ? 'translate-x-0 left-1.5'
                  : 'translate-x-full left-[calc(50%-0.375rem)]'
              }`}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={scheduleType}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-7 flex flex-wrap items-center justify-center gap-4"
            >
              {(scheduleType === 'weekday'
                ? [{ label: 'Mon – Fri', time: '7:00 AM – 3:30 PM' }]
                : [
                    { label: 'Sat & Sun', time: '7:00 AM – 5:30 PM' },
                    { label: 'Mon – Fri Evenings', time: '5:00 PM – 9:00 PM' },
                  ]
              ).map((slot) => (
                <div
                  key={slot.label}
                  className="flex items-center gap-3 bg-white px-6 py-3.5 rounded-2xl border border-charcoal/10 shadow-sm"
                >
                  <span className="font-bold text-void uppercase tracking-wide text-sm">
                    {slot.label}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  <span className="text-charcoal font-semibold text-sm">{slot.time}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-white rounded-[2rem] p-8 ${
                plan.recommended
                  ? 'border-2 border-gold shadow-premium scale-105 z-10'
                  : 'border border-charcoal/10 shadow-sm'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="bg-gold text-void text-xs font-bold uppercase tracking-[0.2em] px-5 py-1.5 rounded-full shadow-sm">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-7">
                <h3 className="text-2xl font-bold text-void mb-2">{plan.name}</h3>
                <p className="text-charcoal/80 font-medium text-sm min-h-[40px]">{plan.desc}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-void">$</span>
                  <span className="text-5xl font-extrabold text-void tracking-tight">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-sm font-bold uppercase tracking-widest text-charcoal/60">
                    · {plan.duration}
                  </span>
                </div>
              </div>

              <div className="space-y-3.5 mb-8 border-t border-charcoal/10 pt-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-baseline gap-3">
                    <span className="w-3.5 h-px bg-gold flex-shrink-0 translate-y-[-3px]" />
                    <span className="text-sm text-charcoal font-medium leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#apply"
                className={`flex items-center justify-center w-full rounded-xl py-4 text-lg font-bold transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  plan.recommended
                    ? 'bg-void hover:bg-void/90 text-snow shadow-brutal'
                    : 'bg-[#F5F3EF] hover:bg-charcoal/5 text-void border border-charcoal/10'
                }`}
              >
                Enroll in {plan.enrollLabel}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Site-standard flexible payment callout — single placement */}
        <div className="mt-16 max-w-6xl mx-auto">
          <FlexibleCallout />
        </div>
      </div>
    </section>
  );
}
