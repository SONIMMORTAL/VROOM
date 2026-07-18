'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Class A CDL Training',
    desc: 'Train for the skills needed to operate tractor-trailers and other combination vehicles.',
    tag: 'Flagship Program',
    featured: true,
    dark: true,
    bgImage: '/class-a.webp',
    href: '#pricing',
  },
  {
    title: 'Class B CDL Training',
    desc: 'Build confidence operating straight trucks, local-delivery vehicles, and other Class B commercial vehicles.',
    featured: false,
    dark: false,
    bgImage: '/class-b.webp',
    href: '#pricing',
  },
  {
    title: 'School & Charter Bus Training',
    desc: 'Prepare for passenger, school-bus, and related endorsement requirements.',
    featured: false,
    dark: false,
    bgImage: '/bus.webp',
    href: '#pricing',
  },
  {
    title: 'Manual & Shifting Courses',
    desc: 'Get hands-on practice with 10-speed manual transmission shifting or automatic-transmission operation.',
    featured: false,
    dark: false,
    bgImage: '/shifting.webp',
    href: '#pricing',
  },
  {
    title: 'Refresher & On-the-Job Training',
    desc: 'Sharpen your skills, regain confidence, and prepare for real-world commercial driving.',
    featured: false,
    dark: false,
    bgImage: '/refresher.webp',
    href: '#pricing',
  },
  {
    title: 'Flexible Scheduling',
    desc: 'Choose daytime, night, or weekend classes that work around your schedule.',
    featured: false,
    dark: true,
    bgImage: '/night.webp',
    href: '#schedule',
  },
];

export default function ServicesSection() {
  return (
    <section id="programs" className="py-16 md:py-24 bg-[#F5F3EF] relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-5 md:gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-crimson mb-4">
              Programs
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-void tracking-tight">
              Elite Training. <br />
              <span className="text-gold-gradient">Zero Shortcuts.</span>
            </h2>
          </div>
          <p className="text-lg text-charcoal/80 leading-relaxed max-w-md">
            We do not just teach you how to pass a test. We teach you how to be a
            professional operator — trained to exactly what top carriers demand.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[minmax(240px,auto)]">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-[2rem] overflow-hidden border border-charcoal/10 bg-white shadow-premium card-hover-premium ${
                service.featured ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105 z-0"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              />

              {/* Readability overlay */}
              {service.dark ? (
                <div className="absolute inset-0 bg-gradient-to-t from-void/95 via-void/65 to-void/30 z-0" />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/30 z-0 transition-all duration-700 group-hover:via-white/70" />
              )}

              <a
                href={service.href}
                className="relative z-10 h-full p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <p
                      className={`font-mono text-xs font-bold tracking-widest ${
                        service.dark ? 'text-gold' : 'text-crimson'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    {service.tag && (
                      <span className="px-4 py-1.5 rounded-full bg-gold text-void text-xs font-bold uppercase tracking-wider">
                        {service.tag}
                      </span>
                    )}
                  </div>
                  <h3
                    className={`font-bold tracking-tight mb-4 ${
                      service.featured
                        ? 'text-3xl md:text-4xl text-snow'
                        : service.dark
                          ? 'text-2xl text-snow'
                          : 'text-2xl text-void'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`font-medium ${
                      service.featured
                        ? 'text-snow/80 text-lg max-w-md leading-relaxed'
                        : service.dark
                          ? 'text-snow/75 max-w-xl'
                          : 'text-charcoal/80 max-w-xs'
                    }`}
                  >
                    {service.desc}
                  </p>
                </div>

                <div
                  className={`mt-8 flex items-center gap-2 font-bold transition-colors ${
                    service.dark
                      ? 'text-gold group-hover:text-gold-light'
                      : 'text-void group-hover:text-crimson'
                  }`}
                >
                  {service.href === '#schedule' ? 'View class schedule' : 'View pricing & schedule'}
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
