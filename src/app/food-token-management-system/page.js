import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Ticket,
  Tv,
  CreditCard,
  Utensils,
  BarChart,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

import ProductHeroMockup from '@/components/ProductHeroMockup';
import CallToAction from '@/components/CallToAction';

export const metadata = {
  title: 'Food Token System | Canteen & Cafeteria Token Software | Code Crafter Infotech',
  description:
    'Automated food token management and cafeteria queue software for corporate cafeterias, college messes, industrial canteens, and food courts. Rapid token printing, smart card balance, and LED queue display.',
  keywords: [
    'food token system',
    'canteen token software India',
    'cafeteria management system Pune',
    'mess token machine software',
    'smart card food token system',
    'canteen queue management software'
  ],
  alternates: {
    canonical: '/food-token-management-system',
  },
  openGraph: {
    title: 'Food Token System | Canteen & Cafeteria Token Software | Code Crafter Infotech',
    description:
      'Rapid token dispensing and cafeteria queue management system for corporate canteens, college mess halls, food courts, and industrial pantries.',
    url: '/food-token-management-system',
  },
};

export default function Page() {
  const features = [
    {
      icon: Ticket,
      title: 'Instant Thermal Token Dispensing',
      desc: 'Sub-second token slip printing with unique serial numbers, order timestamp, item list, and collection counter tag.'
    },
    {
      icon: Tv,
      title: 'Smart LED & TV Queue Calling Screen',
      desc: 'Digital queue display screen for kitchen counters with audio chime announcements when food orders are prepared.'
    },
    {
      icon: CreditCard,
      title: 'RFID / Smart Card Cashless Wallet',
      desc: 'Top up prepaid balance on student or employee RFID cards for fast, contactless tap-and-pay meal dispensing.'
    },
    {
      icon: Utensils,
      title: 'Meal Quota & Subsidized Pricing',
      desc: 'Configure corporate meal allowances, daily breakfast/lunch limits, and employee subsidized pricing vs guest rates.'
    },
    {
      icon: BarChart,
      title: 'Daily Food Consumption Analytics',
      desc: 'Exact meal headcount reports to eliminate food wastage, calculate vendor payments, and forecast kitchen raw material orders.'
    },
    {
      icon: ShieldCheck,
      title: 'Anti-Fraud & Duplicate Protection',
      desc: 'Barcode/QR verification at the food dispatch counter ensures each token is redeemed exactly once.'
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
              <Ticket className="w-4 h-4 mr-2" />
              <span>Fast Token & Queue Automation</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              Smart <span className="bg-gradient-to-r from-[#8a4785] to-[#c6809c] bg-clip-text text-transparent">Food Token</span> & Canteen Management
            </h1>
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed font-medium">
              Say goodbye to chaotic lunch queues and food wastage. Fast-track order dispensing, automate subsidized corporate meals, and track daily kitchen consumption with our proven food token system.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact-us"
                className="px-8 py-4 bg-gradient-to-r from-[#8a4785] to-[#c6809c] text-white rounded-xl shadow-lg hover:shadow-[#8a4785]/30 hover:-translate-y-1 transition-all duration-300 font-bold flex items-center gap-2"
              >
                Request Token Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="relative w-full mt-10 lg:mt-0">
            <ProductHeroMockup
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop"
              alt="Food Token and Cafeteria Management System in Canteen"
              moduleName="Food Token & KOT Manager"
              badgeText="Queue Calling Active"
              statText="Sub-Second Print"
              statLabel="Smart Card / Token / LED Display"
            />
          </div>
        </div>
      </section>

      {/* SaaS Metric Strip */}
      <section className="py-8 px-6 lg:px-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "< 1 sec", label: "High-Speed Thermal Token Dispense" },
            { value: "Smart LED", label: "Live Counter Audio Queue Calling" },
            { value: "RFID Wallet", label: "Contactless Tap & Pay Meal Card" },
            { value: "Zero Waste", label: "Headcount & Meal Consumption Audit" }
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
            Why Choose Our <span className="text-[#8a4785]">Food Token System</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Engineered for corporate cafeterias, college dining halls, hospital canteens, and busy food courts where hundreds of meals are served within minutes.
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
            <h2 className="text-sm uppercase tracking-widest text-[#8a4785] font-bold">System Capabilities</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Total Cafeteria Oversight</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Self-Service Kiosk Support', desc: 'Touchscreen kiosk integration where diners tap their meal selection and scan UPI QR to get tokens.' },
              { title: 'Department-Wise Billing', desc: 'Consolidated month-end invoices categorized by company departments or institutional batches.' },
              { title: 'Offline Token Buffer', desc: 'Continues to dispense tokens and sync locally even if cafeteria network experience interruptions.' },
              { title: 'Vendor Billing Settlement', desc: 'Clear tracking of tokens handed over to third-party catering contractors for transparent payments.' },
            ].map((module, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#8a4785] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#8a4785]" />
                  <span>Highlight {idx + 1}</span>
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
        badge="Canteen & Cafeteria Queue Automation"
        headline="Modernize Your Canteen Queue Management"
        subheadline="Speak with our software engineers to configure the Food Token system for your organization. Zero wait bottlenecks, live token display calling, and smart prepaid card support."
        buttonText="Schedule Food Token Demo"
        trustPoints={[
          "Thermal Slip & Wireless LED Token Screen",
          "Automated Meal Counting & Audit Report",
          "Corporate & College Canteen Ready"
        ]}
      />
    </div>
  );
}
