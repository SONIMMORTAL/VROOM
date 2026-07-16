'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, CheckCircle2, LoaderCircle } from 'lucide-react';
import { SITE } from '@/lib/site';

type Status = 'idle' | 'sending' | 'sent' | 'error';

/**
 * Shared inquiry form. Submits via FormSubmit so every inquiry lands in
 * the Info@interstateconnections.org inbox — no backend required.
 */
export default function LeadForm({
  variant,
  sourceLabel,
  submitLabel = 'Get Started',
}: {
  variant: 'dark' | 'light';
  sourceLabel: string;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const dark = variant === 'dark';

  const labelCls = dark
    ? 'text-[10px] font-bold uppercase tracking-widest text-snow/50 ml-1'
    : 'text-xs font-bold uppercase tracking-wider text-charcoal/70 ml-1';
  const inputCls = dark
    ? 'bg-snow/5 border-white/10 h-14 rounded-xl focus:border-gold focus:ring-1 focus:ring-gold text-snow placeholder:text-snow/20 font-medium'
    : 'bg-[#F5F3EF] border-charcoal/10 h-12 rounded-xl focus:border-gold focus:ring-1 focus:ring-gold text-void font-medium';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `New CDL inquiry — ${sourceLabel}`,
          _template: 'table',
        }),
      });
      if (!res.ok) throw new Error(`FormSubmit responded ${res.status}`);
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className={`flex flex-col items-center text-center py-10 ${dark ? 'text-snow' : 'text-void'}`}>
        <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mb-5">
          <CheckCircle2 className="w-8 h-8 text-gold" />
        </div>
        <h4 className="text-2xl font-extrabold tracking-tight">Request Received</h4>
        <p className={`mt-3 text-sm font-medium leading-relaxed max-w-xs ${dark ? 'text-snow/60' : 'text-charcoal/70'}`}>
          Our admissions team will reach out within 24 hours. Need answers now? Call{' '}
          <a href={SITE.phoneHref} className="text-gold font-bold whitespace-nowrap">{SITE.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor={`${sourceLabel}-first`} className={labelCls}>First Name</label>
          <Input id={`${sourceLabel}-first`} name="First Name" placeholder="John" required className={inputCls} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor={`${sourceLabel}-last`} className={labelCls}>Last Name</label>
          <Input id={`${sourceLabel}-last`} name="Last Name" placeholder="Doe" required className={inputCls} />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor={`${sourceLabel}-phone`} className={labelCls}>Phone Number</label>
        <Input
          id={`${sourceLabel}-phone`}
          name="Phone"
          type="tel"
          placeholder="(845) 000-0000"
          required
          className={inputCls}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor={`${sourceLabel}-program`} className={labelCls}>Program of Interest</label>
        <select
          id={`${sourceLabel}-program`}
          name="Program"
          className={`flex h-12 w-full rounded-xl border px-3 py-2 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-gold ${
            dark
              ? 'bg-snow/5 border-white/10 text-snow [&>option]:text-void'
              : 'bg-[#F5F3EF] border-charcoal/10 text-void'
          }`}
        >
          <option>Class A CDL Training</option>
          <option>Class B CDL Training</option>
          <option>Manual &amp; Shifting Courses</option>
          <option>Refresher &amp; On-the-Job Training</option>
          <option>School &amp; Charter Bus Training</option>
        </select>
      </div>

      {status === 'error' && (
        <p className="text-sm font-semibold text-crimson bg-crimson/10 border border-crimson/20 rounded-xl px-4 py-3">
          Something went wrong sending your request. Please call{' '}
          <a href={SITE.phoneHref} className="underline whitespace-nowrap">{SITE.phone}</a> or email{' '}
          <a href={SITE.emailHref} className="underline">{SITE.email}</a>.
        </p>
      )}

      <Button
        type="submit"
        disabled={status === 'sending'}
        className={`w-full h-14 rounded-xl text-lg font-extrabold uppercase tracking-widest mt-2 transition-all hover:scale-[1.02] active:scale-[0.98] ${
          dark
            ? 'bg-crimson hover:bg-crimson-deep text-snow shadow-[0_0_40px_-10px_#8E1F2C]'
            : 'bg-void hover:bg-void/90 text-snow shadow-premium'
        }`}
      >
        {status === 'sending' ? (
          <>
            <LoaderCircle className="w-5 h-5 animate-spin" /> Sending…
          </>
        ) : (
          <>
            {submitLabel} <ArrowRight className="ml-1 w-5 h-5" />
          </>
        )}
      </Button>

      <p className={`text-center text-[10px] mt-4 font-medium leading-relaxed px-2 ${dark ? 'text-snow/40' : 'text-charcoal/50'}`}>
        By submitting, you consent to receive calls and texts from {SITE.legalName}. Secure and confidential.
      </p>
    </form>
  );
}
