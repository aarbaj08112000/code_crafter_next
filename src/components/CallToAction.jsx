import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CallToAction({
  badge = "Enterprise Software & Cloud Engineering",
  headline,
  subheadline,
  buttonText = "Schedule Free Consultation",
  buttonHref = "/contact-us",
  secondaryText = "Talk to Technical Team",
  secondaryHref = "/contact-us",
  trustPoints = [
    "Free 30-Min Architecture Demo",
    "100% Confidential (NDA)",
    "Dedicated 24/7 SLA Support"
  ]
}) {
  return (
    <section className="py-20 lg:py-24 px-6 lg:px-20 bg-gradient-to-b from-transparent via-purple-50/15 to-transparent relative overflow-hidden">
      {/* Ambient soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#8a4785]/10 to-[#c6809c]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] bg-gradient-to-r from-[#8a4785] via-[#853f80] to-[#c6809c] p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl border border-white/20 group">
          
          {/* Subtle radial sheen & corner glow */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_60%)] pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="space-y-5 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 border border-white/25 text-white text-xs font-semibold backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                <span>{badge}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                {headline}
              </h2>

              <p className="text-white/95 text-base lg:text-lg leading-relaxed">
                {subheadline}
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 pt-2 text-xs font-medium text-white/90">
                {trustPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Buttons: Stacked vertically one below the other */}
            <div className="flex flex-col gap-3.5 shrink-0 w-full sm:w-72 md:w-80">
              <Link
                href={buttonHref}
                className="w-full px-6 py-4 bg-white text-[#8a4785] hover:bg-gray-50 rounded-2xl font-bold text-sm sm:text-base shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-center flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <Link
                href={secondaryHref}
                className="w-full px-6 py-4 bg-white/15 hover:bg-white/25 text-white rounded-2xl font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-300 text-center border border-white/25 hover:border-white/40 whitespace-nowrap"
              >
                {secondaryText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
