import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Activity,
  HeartPulse,
  CalendarCheck,
  Pill,
  FileText,
  Shield,
  ArrowRight,
  BedDouble,
  CheckCircle2
} from 'lucide-react';

import ProductHeroMockup from '@/components/ProductHeroMockup';
import CallToAction from '@/components/CallToAction';

export const metadata = {
  title: 'Hospital Management Software (HMIS) | Clinic ERP | Code Crafter Infotech',
  description:
    'Comprehensive Hospital Management Information System (HMIS) for OPD/IPD tracking, doctor scheduling, electronic medical records (EMR), pharmacy billing, and pathology labs.',
  keywords: [
    'hospital management software India',
    'HMIS software Pune',
    'clinic management system',
    'hospital ERP software',
    'OPD IPD management system',
    'healthcare software solutions'
  ],
  alternates: {
    canonical: '/hospital-management-software',
  },
  openGraph: {
    title: 'Hospital Management Software (HMIS) | Clinic ERP | Code Crafter Infotech',
    description:
      'Empower hospitals and clinics with integrated OPD/IPD tracking, doctor scheduling, pharmacy inventory, and automated billing.',
    url: '/hospital-management-software',
  },
};

export default function Page() {
  const features = [
    {
      icon: Activity,
      title: 'OPD & IPD Patient Workflow',
      desc: 'Seamless registration, patient queue display, admission forms, discharge summaries, and bed allocation tracking.'
    },
    {
      icon: CalendarCheck,
      title: 'Doctor Appointment Scheduling',
      desc: 'Smart slot booking for doctors, automated SMS/WhatsApp reminders, consultation history, and digital prescriptions.'
    },
    {
      icon: Pill,
      title: 'Pharmacy & Stock Oversight',
      desc: 'Real-time medicine inventory, batch and expiry alerts, automated reordering, and direct POS counter billing.'
    },
    {
      icon: FileText,
      title: 'Pathology & Diagnostic Reports',
      desc: 'Integrated laboratory information system (LIS) with automated test results, barcode sample tagging, and PDF delivery.'
    },
    {
      icon: BedDouble,
      title: 'Bed & Ward Management',
      desc: 'Visual bed occupancy matrix for ICU, general wards, and private rooms with live availability status.'
    },
    {
      icon: Shield,
      title: 'TPA Insurance & Billing',
      desc: 'Detailed itemized invoices, package billing, insurance claim documentation, and secure audit trails.'
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
              <HeartPulse className="w-4 h-4 mr-2" />
              <span>Healthcare & Clinical Tech</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              Complete <span className="bg-gradient-to-r from-[#8a4785] to-[#c6809c] bg-clip-text text-transparent">Hospital Management</span> System (HMIS)
            </h1>
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed font-medium">
              Deliver faster, error-free patient care. Connect admissions, doctor consultations, electronic health records (EHR), pharmacy sales, and billing onto a secure, paperless cloud platform.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact-us"
                className="px-8 py-4 bg-gradient-to-r from-[#8a4785] to-[#c6809c] text-white rounded-xl shadow-lg hover:shadow-[#8a4785]/30 hover:-translate-y-1 transition-all duration-300 font-bold flex items-center gap-2"
              >
                Request HMIS Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="relative w-full mt-10 lg:mt-0">
            <ProductHeroMockup
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
              alt="Hospital Management Software & Clinic ERP Dashboard"
              moduleName="Hospital HMIS Clinical Suite"
              badgeText="Live Clinical Sync"
              statText="100% NABH Ready"
              statLabel="OPD / IPD / EHR / Pharmacy"
            />
          </div>
        </div>
      </section>

      {/* SaaS Metric Strip */}
      <section className="py-8 px-6 lg:px-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "Zero Delay", label: "OPD / IPD Patient Queue" },
            { value: "100%", label: "NABH Audit Compliance" },
            { value: "EHR Sync", label: "Centralized Clinical Records" },
            { value: "Real-Time", label: "Live Bed & Ward Occupancy" }
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
            Why Choose Our <span className="text-[#8a4785]">Hospital ERP (HMIS)</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Designed to enhance clinical precision, accelerate doctor workflows, and protect patient medical history with enterprise-grade data security.
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
            <h2 className="text-sm uppercase tracking-widest text-[#8a4785] font-bold">Hospital Capabilities</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">End-to-End Hospital Administration</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Electronic Health Records (EHR)', desc: 'Centralized patient medical histories, previous treatments, allergies, and lab reports.' },
              { title: 'Doctor E-Prescriptions', desc: 'Pre-loaded medicine databases and one-click diagnostic test ordering directly from consultation screen.' },
              { title: 'Multi-Location Clinics', desc: 'Operate hospital branches, diagnostic labs, and remote health clinics under a single consolidated login.' },
              { title: 'Audit & Compliance', desc: 'Complete NABH compliance readiness with detailed user activity logs and encrypted health data storage.' },
            ].map((module, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#8a4785] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#8a4785]" />
                  <span>Module {idx + 1}</span>
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
        badge="Healthcare IT & Hospital HMIS"
        headline="Modernize Your Hospital With Smart HMIS"
        subheadline="Book a personalized walk-through with our clinical software architects today. Experience automated patient flows, EHR, and NABH-compliant administration."
        buttonText="Schedule HMIS Demo"
        trustPoints={[
          "Free 30-Min Clinical Demo",
          "NABH Audit Ready Architecture",
          "Multi-Branch & Clinic Support"
        ]}
      />
    </div>
  );
}
