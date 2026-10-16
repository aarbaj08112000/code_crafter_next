import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Globe,
  Sparkles,
  Zap,
  Search,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

import ProductHeroMockup from '@/components/ProductHeroMockup';
import CallToAction from '@/components/CallToAction';

export const metadata = {
  title: 'Custom Business Website Development Services | Code Crafter Infotech',
  description:
    'High-converting, responsive, and SEO-optimized business website development services crafted with modern Next.js and React technology to elevate your brand presence.',
  keywords: [
    'business website development',
    'corporate web design India',
    'company website maker Pune',
    'custom web development services',
    'responsive business websites',
    'SEO friendly website development'
  ],
  alternates: {
    canonical: '/business-websites',
  },
  openGraph: {
    title: 'Custom Business Website Development Services | Code Crafter Infotech',
    description:
      'High-converting, responsive, and SEO-optimized business websites crafted with modern Next.js and React technology.',
    url: '/business-websites',
  },
};

export default function Page() {
  const features = [
    {
      icon: Globe,
      title: 'Custom Brand Architecture',
      desc: 'Bespoke UI/UX design tailored specifically for your brand voice, industry positioning, and target clientele.'
    },
    {
      icon: Zap,
      title: 'Ultra-Fast Performance',
      desc: 'Optimized with modern Next.js static generation, instant image loading, and 95+ Google PageSpeed Core Web Vitals.'
    },
    {
      icon: Search,
      title: 'Built-In Enterprise SEO',
      desc: 'Engineered from day one with structured JSON-LD schema, semantic HTML5, XML sitemaps, and optimized meta tags.'
    },
    {
      icon: Smartphone,
      title: 'Flawless Multi-Device Responsiveness',
      desc: 'Pixel-perfect rendering across smartphones, tablets, laptops, and ultra-wide desktop monitors.'
    },
    {
      icon: Sparkles,
      title: 'Conversion-Focused Funnels',
      desc: 'Strategic call-to-actions, interactive lead capture forms, WhatsApp chat widgets, and direct CRM sync.'
    },
    {
      icon: ShieldCheck,
      title: 'Modern Security & Scalability',
      desc: 'Automated SSL encryption, DDoS mitigation, clean code standards, and seamless cloud hosting deployment.'
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-36 lg:pt-44 pb-16 lg:pb-20 overflow-hidden px-6 lg:px-20 bg-gray-50">
        <div className="absolute top-0 right-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#8a4785]/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 mt-7 md:mt-0">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#8a4785]/10 text-[#8a4785] text-sm font-semibold border border-[#8a4785]/20">
              <Globe className="w-4 h-4 mr-2" />
              <span>High-Performance Web Design</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              High-Impact <span className="bg-gradient-to-r from-[#8a4785] to-[#c6809c] bg-clip-text text-transparent">Business Websites</span> That Convert
            </h1>
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed font-medium">
              Establish an authoritative digital presence with custom, lightning-fast, and search-optimized business websites designed to turn visitors into paying clients.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact-us"
                className="px-8 py-4 bg-gradient-to-r from-[#8a4785] to-[#c6809c] text-white rounded-xl shadow-lg hover:shadow-[#8a4785]/30 hover:-translate-y-1 transition-all duration-300 font-bold flex items-center gap-2"
              >
                Get Website Proposal <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="relative w-full mt-10 lg:mt-0">
            <ProductHeroMockup
              src="/products/business-websites.jpg"
              alt="Custom Business Website Development"
              moduleName="Corporate Web Platform"
              badgeText="High Core Web Vitals"
              statText="98+ Google Speed"
              statLabel="Next.js 16 / React / SEO"
            />
          </div>
        </div>
      </section>

      {/* SaaS Metric Strip */}
      <section className="py-8 px-6 lg:px-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "98+", label: "Google PageSpeed Score" },
            { value: "< 1.2s", label: "Global CDN Load Speed" },
            { value: "100%", label: "Mobile Responsive Layout" },
            { value: "SEO Ready", label: "Schema.org Rich Snippets" }
          ].map((metric, idx) => (
            <div key={idx} className="space-y-1 md:border-r md:last:border-r-0 border-gray-100 px-3">
              <div className="text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-[#8a4785] to-[#c6809c] bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="text-xs text-gray-500 font-semibold">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 px-6 lg:px-20 bg-white relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Why Partner With Code Crafter For Your <span className="text-[#8a4785]">Business Website</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            We don&apos;t just build websites—we engineer commercial digital storefronts that communicate authority, build client trust, and drive measurable revenue.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-3xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8a4785]/20 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#8a4785] group-hover:text-white transition-all duration-500">
                  <f.icon className="w-7 h-7 text-[#8a4785] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights / Modules Section */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm uppercase tracking-widest text-[#8a4785] font-bold">Standard Inclusions</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">What Every Business Website Includes</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Interactive Inquiry Forms', desc: 'Instant email and WhatsApp inquiry notifications whenever potential leads submit requests.' },
              { title: 'Content Management (CMS)', desc: 'Easily update case studies, portfolio projects, client testimonials, and blog articles yourself.' },
              { title: 'Analytics & Google Search Sync', desc: 'Google Analytics 4 and Google Search Console integration for real-time traffic monitoring.' },
              { title: 'Domain & Cloud Setup', desc: 'Assistance with domain linking, professional business email setup, and automated daily backups.' },
            ].map((module, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#8a4785] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#8a4785]" />
                  <span>Deliverable {idx + 1}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900">{module.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        badge="High-Performance Web Engineering"
        headline="Ready to Elevate Your Online Brand Identity?"
        subheadline="Let's build a stunning, fast, and high-converting business website together. Tailored for enterprise credibility, mobile responsiveness, and top Google rankings."
        buttonText="Request Website Proposal"
        trustPoints={[
          "Sub-Second Next.js Load Speed",
          "100% Mobile & SEO Optimized",
          "Custom UI/UX & CMS Support"
        ]}
      />
    </div>
  );
}
