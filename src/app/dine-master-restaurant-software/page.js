import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  UtensilsCrossed,
  Printer,
  QrCode,
  Receipt,
  Layers,
  BarChart2,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

import ProductHeroMockup from '@/components/ProductHeroMockup';
import CallToAction from '@/components/CallToAction';

export const metadata = {
  title: 'Dine Master Restaurant POS & Table Management Software | Code Crafter Infotech',
  description:
    'Dine Master is an advanced restaurant POS and table management software with wireless kitchen order tickets (KOT), QR contactless menus, split billing, and inventory control.',
  keywords: [
    'restaurant POS software India',
    'Dine Master restaurant software',
    'kitchen order ticket KOT software',
    'restaurant table billing software Pune',
    'cafe management system',
    'QR digital menu ordering system'
  ],
  alternates: {
    canonical: '/dine-master-restaurant-software',
  },
  openGraph: {
    title: 'Dine Master Restaurant POS & Table Management Software | Code Crafter Infotech',
    description:
      'Intelligent restaurant POS and dining management system featuring interactive table layouts, wireless KOT, QR digital menus, and split billing.',
    url: '/dine-master-restaurant-software',
  },
};

export default function Page() {
  const features = [
    {
      icon: UtensilsCrossed,
      title: 'Interactive Floor & Table Layout',
      desc: 'Visual floor plan with real-time table statuses: vacant, occupied, running KOT, or awaiting payment.'
    },
    {
      icon: Printer,
      title: 'Wireless Kitchen Order Tickets (KOT)',
      desc: 'Instant ticket dispatch to kitchen or bar printers with item modifications, special cooking notes, and priority queues.'
    },
    {
      icon: QrCode,
      title: 'Contactless QR Digital Menu & Ordering',
      desc: 'Guests can scan tabletop QR codes to browse the dynamic photo menu, place orders, and request the waiter.'
    },
    {
      icon: Receipt,
      title: 'Rapid Counter & Split Billing',
      desc: 'Fast checkout supporting split bills by item or seat, service charges, GST tax configurations, and multiple payment methods.'
    },
    {
      icon: Layers,
      title: 'Recipe Management & Stock Depletion',
      desc: 'Automated raw ingredient tracking that deducts ingredients from stock every time a dish is ordered in the kitchen.'
    },
    {
      icon: BarChart2,
      title: 'Real-Time Sales & Revenue Analytics',
      desc: 'Track daily sales, best-selling dishes, peak dining hours, food cost margins, and staff productivity from anywhere.'
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
              <UtensilsCrossed className="w-4 h-4 mr-2" />
              <span>F&B & Restaurant Tech</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              <span className="bg-gradient-to-r from-[#8a4785] to-[#c6809c] bg-clip-text text-transparent">Dine Master</span> - Smart Restaurant POS & Table Management
            </h1>
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed font-medium">
              Accelerate table turnaround, stop food waste, and deliver memorable dining experiences with Dine Master—the all-in-one restaurant POS, KOT, and billing software.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact-us"
                className="px-8 py-4 bg-gradient-to-r from-[#8a4785] to-[#c6809c] text-white rounded-xl shadow-lg hover:shadow-[#8a4785]/30 hover:-translate-y-1 transition-all duration-300 font-bold flex items-center gap-2"
              >
                Request Dine Master Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="relative w-full mt-10 lg:mt-0">
            <ProductHeroMockup
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
              alt="Dine Master Restaurant POS and Dining Table Management"
              moduleName="Dine Master POS Terminal"
              badgeText="Wireless KOT Active"
              statText="30% Faster Turnaround"
              statLabel="Table Management / QR / POS"
            />
          </div>
        </div>
      </section>

      {/* SaaS Metric Strip */}
      <section className="py-8 px-6 lg:px-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "< 15 sec", label: "Wireless KOT Kitchen Ticket" },
            { value: "30% Faster", label: "Table Turnaround Acceleration" },
            { value: "QR Ordering", label: "Contactless Digital Menu" },
            { value: "Split Bill", label: "Instant GST Tax POS Receipt" }
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
            Why Restaurants Love <span className="text-[#8a4785]">Dine Master</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Trusted by fine dining restaurants, fast-casual cafes, cloud kitchens, and bars for zero-lag order taking and kitchen synchronisation.
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
            <h2 className="text-sm uppercase tracking-widest text-[#8a4785] font-bold">Restaurant Operations</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Built for Busy Dining Rooms</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Captain App (Mobile POS)', desc: 'Waiters can take orders directly on Android tablets or phones for instant kitchen printing.' },
              { title: 'Cloud Kitchen & Aggregator Sync', desc: 'Consolidated menu management and automatic order fetching from Zomato and Swiggy.' },
              { title: 'Customer Loyalty & CRM', desc: 'Track guest visit frequency, favorite orders, and trigger automatic birthday discounts via WhatsApp.' },
              { title: 'Offline Mode Resilience', desc: 'Keep billing and printing uninterrupted even if your local internet connection drops.' },
            ].map((module, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#8a4785] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#8a4785]" />
                  <span>Advantage {idx + 1}</span>
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
        badge="Restaurant POS & Dining Automation"
        headline="Upgrade Your Restaurant With Dine Master"
        subheadline="See Dine Master in action with a free live software demo. Accelerate table turns, automate wireless KOT dispatch, and get real-time recipe-level food cost analytics."
        buttonText="Schedule Dine Master Demo"
        trustPoints={[
          "Works Seamlessly Online & Offline",
          "Thermal Printer & KOT Kitchen Screen",
          "Interactive Visual Table Layout"
        ]}
      />
    </div>
  );
}
