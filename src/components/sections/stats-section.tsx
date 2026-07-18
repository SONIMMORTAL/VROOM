'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

function AnimatedCounter({
  target,
  suffix = '',
}: {
  target: number;
  suffix?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const animation = animate(count, target, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
    });
    return animation.stop;
  }, [count, target]);

  return (
    <span className="inline-flex items-baseline font-mono font-bold tracking-tighter text-void">
      <motion.span>{rounded}</motion.span>
      {suffix && <span className="text-gold">{suffix}</span>}
    </span>
  );
}

const stats = [
  {
    label: 'Years of Experience',
    value: 13,
    suffix: '+',
    desc: 'Guiding students to success since 2011.',
  },
  {
    label: 'Graduates',
    value: 200,
    suffix: '+',
    desc: 'Drivers placed in high-paying careers.',
  },
  {
    label: 'Placement Rate',
    value: 92,
    suffix: '%',
    desc: 'Of students find work within 30 days.',
  },
];

export default function StatsSection() {
  return (
    <section className="py-10 md:py-16 bg-snow border-t border-charcoal/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-charcoal/10 shadow-premium-hover card-hover-premium"
            >
              <div className="text-5xl sm:text-6xl mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <h4 className="text-lg font-bold text-void mb-1">{stat.label}</h4>
              <p className="text-sm text-charcoal font-medium leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
