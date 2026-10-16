import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CreditCard,
  QrCode,
  Camera,
  FileSpreadsheet,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Printer,
  Sparkles
} from 'lucide-react';

import ProductHeroMockup from '@/components/ProductHeroMockup';
import CallToAction from '@/components/CallToAction';

export const metadata = {
  title: 'ID Card Data Collection System | Student & Employee ID Software | Code Crafter Infotech',
  description:
    'Cloud-based ID card data collection and verification platform for schools, colleges, and corporate organizations. Live photo capture, barcode/QR generator, and print-ready batch export.',
  keywords: [
    'ID card data collection software',
    'student ID card data system',
    'employee ID card software India',
    'bulk ID card photo collection',
    'smart card data collection Pune',
    'ID card generation portal'
  ],
  alternates: {
    canonical: '/id-card-data-collection',
  },
  openGraph: {
    title: 'ID Card Data Collection System | Student & Employee ID Software | Code Crafter Infotech',
    description:
      'Cloud-based ID card data collection and verification platform for educational institutions and corporate enterprises.',
    url: '/id-card-data-collection',
  },
};

export default function Page() {
  const features = [
    {
      icon: Camera,
      title: 'Self-Service Photo & Signature Capture',
      desc: 'Students or employees can securely upload or take live webcam photos with automated background cleaner and aspect ratio cropping.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Bulk Excel & CSV Data Import',
      desc: 'Import thousands of student or staff records instantly with automated field mapping and error validation.'
    },
    {
      icon: QrCode,
      title: 'Dynamic QR Code & Barcode Engine',
      desc: 'Automatically generate unique QR codes or barcodes containing roll numbers, blood groups, or emergency contacts.'
    },
    {
      icon: Sparkles,
      title: 'Custom ID Card Template Designer',
      desc: 'Design beautiful vertical or horizontal ID card layouts with institutional logos, watermarks, and custom color themes.'
    },
    {
      icon: ShieldCheck,
      title: 'Multi-Level Verification & Approval',
      desc: 'Administrative review dashboard to approve, reject, or request corrections before sending to print.'
    },
    {
      icon: Printer,
      title: 'Batch High-Resolution Print Export',
      desc: 'Generate CMYK print-ready high-resolution PDF or zip batches pre-aligned for standard thermal and PVC card printers.'
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
              <CreditCard className="w-4 h-4 mr-2" />
              <span>Smart Verification & Printing</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              Smart <span className="bg-gradient-to-r from-[#8a4785] to-[#c6809c] bg-clip-text text-transparent">ID Card Data Collection</span> & Generation
            </h1>
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed font-medium">
              Eliminate manual data entry errors and missing photographs. Collect, verify, and generate print-ready student and employee ID cards in record time.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact-us"
                className="px-8 py-4 bg-gradient-to-r from-[#8a4785] to-[#c6809c] text-white rounded-xl shadow-lg hover:shadow-[#8a4785]/30 hover:-translate-y-1 transition-all duration-300 font-bold flex items-center gap-2"
              >
                Request Free Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="relative w-full mt-10 lg:mt-0">
            <ProductHeroMockup
              src="/products/id-card-data-collection.jpg"
              alt="ID Card Data Collection Software and Verification Portal"
              moduleName="ID Card Data Collection Hub"
              badgeText="Live Web Capture"
              statText="CMYK 300 DPI Export"
              statLabel="Photo Clean / QR / Batch Export"
            />
          </div>
        </div>
      </section>

      {/* SaaS Metric Strip */}
      <section className="py-8 px-6 lg:px-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "10k+", label: "Cards Processed Per Batch" },
            { value: "Live Cam", label: "Webcam Photo Auto-Crop" },
            { value: "Instant QR", label: "Dynamic Barcode Generation" },
            { value: "300 DPI", label: "Print-Ready CMYK Alignment" }
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
            Why Choose Our <span className="text-[#8a4785]">ID Card Data System</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Built specifically for schools, universities, event organizers, and enterprises managing thousands of ID cards every semester or fiscal year.
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
            <h2 className="text-sm uppercase tracking-widest text-[#8a4785] font-bold">Workflow Breakdown</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">From Data Input to Final Plastic Card</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '1. Link Distribution', desc: 'Send direct web links or WhatsApp QR links for users to fill in personal details and upload photos.' },
              { title: '2. Smart Verification', desc: 'Admins verify submitted data with quick zoom, rotation, and auto-alignment filters.' },
              { title: '3. Barcode / RFID Tagging', desc: 'Assign student roll numbers or employee IDs encoded into standard Code128, QR, or RFID tags.' },
              { title: '4. 1-Click Print Batches', desc: 'Export sheets pre-formatted for direct thermal card printing or commercial offset presses.' },
            ].map((module, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#8a4785] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#8a4785]" />
                  <span>Step {idx + 1}</span>
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
        badge="Zero Friction ID Card Automation"
        headline="Streamline ID Card Data Collection Today"
        subheadline="Connect with our software team to deploy your branded ID data collection portal within 24 hours. Automated photo normalization, QR generation, and print-ready ZIP export."
        buttonText="Deploy ID Portal Demo"
        trustPoints={[
          "Live Mobile Selfie & Camera Capture",
          "Automated Face Crop & Background Prep",
          "Print-Ready CMYK Corel/Illustrator Export"
        ]}
      />
    </div>
  );
}
