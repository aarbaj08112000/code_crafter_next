import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShoppingBag,
  CreditCard,
  Truck,
  Tags,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  PackageCheck
} from 'lucide-react';

import ProductHeroMockup from '@/components/ProductHeroMockup';
import CallToAction from '@/components/CallToAction';

export const metadata = {
  title: 'Ecommerce Website & Admin Portal Development | Code Crafter Infotech',
  description:
    'Custom ecommerce website development and multi-vendor admin portal with high-speed catalog, automated dispatch tracking, Razorpay/Stripe payments, and inventory sync.',
  keywords: [
    'ecommerce website development India',
    'ecommerce admin portal',
    'custom online store development Pune',
    'multi vendor ecommerce website',
    'B2B B2C ecommerce platform',
    'shopping cart web development'
  ],
  alternates: {
    canonical: '/ecommerce-admin-website',
  },
  openGraph: {
    title: 'Ecommerce Website & Admin Portal Development | Code Crafter Infotech',
    description:
      'Scalable ecommerce web application with custom product catalogs, shopping cart, multi-vendor admin dashboard, and secure payments.',
    url: '/ecommerce-admin-website',
  },
};

export default function Page() {
  const features = [
    {
      icon: ShoppingBag,
      title: 'Blazing-Fast Storefront Experience',
      desc: 'High-conversion customer UI with instant search, category filtering, product variants, and frictionless 1-click checkout.'
    },
    {
      icon: BarChart3,
      title: 'Comprehensive Admin Dashboard',
      desc: 'Real-time sales tracking, gross revenue metrics, low stock warnings, top customer insights, and order fulfillment status.'
    },
    {
      icon: CreditCard,
      title: 'Secure Payment Gateways',
      desc: 'Pre-integrated with Razorpay, Cashfree, Stripe, PayU, and UPI QR payments along with Cash on Delivery (COD) controls.'
    },
    {
      icon: Truck,
      title: 'Automated Shipping & Tracking',
      desc: 'Integration with Shiprocket, Delhivery, and Bluedart for automatic AWB generation, label printing, and customer tracking SMS.'
    },
    {
      icon: Tags,
      title: 'Discounts, Coupons & Bundles',
      desc: 'Dynamic discount engines, flash sales, seasonal coupon codes, and automated cart abandonment recovery reminders.'
    },
    {
      icon: ShieldCheck,
      title: 'PCI-DSS Compliance & Multi-Vendor Ready',
      desc: 'Enterprise security standards with encrypted user checkout, multi-vendor commission splits, and granular vendor dashboards.'
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
              <PackageCheck className="w-4 h-4 mr-2" />
              <span>Digital Commerce Engine</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              High-Converting <span className="bg-gradient-to-r from-[#8a4785] to-[#c6809c] bg-clip-text text-transparent">Ecommerce Website</span> & Admin Portal
            </h1>
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed font-medium">
              Launch, scale, and dominate your niche with an ultra-responsive customer storefront backed by a robust admin portal for order fulfillment, inventory, and payment analytics.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact-us"
                className="px-8 py-4 bg-gradient-to-r from-[#8a4785] to-[#c6809c] text-white rounded-xl shadow-lg hover:shadow-[#8a4785]/30 hover:-translate-y-1 transition-all duration-300 font-bold flex items-center gap-2"
              >
                Launch Your Store <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="relative w-full mt-10 lg:mt-0">
            <ProductHeroMockup
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop"
              alt="Ecommerce Website and Multi-Vendor Admin Dashboard"
              moduleName="E-Commerce Admin & Storefront"
              badgeText="Live Order Stream"
              statText="Multi-Vendor Ready"
              statLabel="Razorpay / Stripe / Shiprocket"
            />
          </div>
        </div>
      </section>

      {/* SaaS Metric Strip */}
      <section className="py-8 px-6 lg:px-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "< 1.5s", label: "Lightning Checkout Flow" },
            { value: "Multi-Gateway", label: "Razorpay, Stripe & UPI Sync" },
            { value: "Auto-AWB", label: "Automated Shiprocket Courier" },
            { value: "Zero Glitch", label: "Flash Sale Scalability" }
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
            Why Choose Our <span className="text-[#8a4785]">Ecommerce Platforms</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Engineered to handle high-traffic sales events, instant payments, and seamless fulfillment without slowdowns or vendor lock-in.
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
            <h2 className="text-sm uppercase tracking-widest text-[#8a4785] font-bold">Commerce Highlights</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Enterprise Commerce Architecture</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Inventory Sync & Variants', desc: 'Manage sizes, colors, bundles, and stock quantities across warehouses with zero overselling.' },
              { title: 'Real-Time WhatsApp Alerts', desc: 'Automatic order confirmation, dispatch updates, and out-for-delivery notifications to buyers.' },
              { title: 'Customer Review Engine', desc: 'Verified buyer reviews, star ratings, user photo uploads, and SEO schema review snippets.' },
              { title: 'Tax & Invoice Automation', desc: 'Instant GST-compliant B2B and B2C tax invoices generated in PDF format upon payment.' },
            ].map((module, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#8a4785] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#8a4785]" />
                  <span>Feature {idx + 1}</span>
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
        badge="Scalable E-Commerce & Multi-Vendor Tech"
        headline="Ready to Accelerate Your Online Retail Sales?"
        subheadline="Talk to our ecommerce engineers and get a tailored architecture demo today. From custom multi-vendor portals to frictionless checkout and logistics integration."
        buttonText="Request E-Commerce Demo"
        trustPoints={[
          "Custom Storefront + Admin Engine",
          "Automated Shiprocket & Bluedart Sync",
          "Multi-Payment Gateway Integration"
        ]}
      />
    </div>
  );
}
