import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Users,
  Clock,
  CalendarCheck2,
  FileSpreadsheet,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  UserCheck
} from 'lucide-react';

import ProductHeroMockup from '@/components/ProductHeroMockup';
import CallToAction from '@/components/CallToAction';

export const metadata = {
  title: 'Best HRMS Software | Human Resource Management System | Code Crafter Infotech',
  description:
    'Comprehensive HRMS software in India for biometric attendance, payroll automation, leave tracking, employee lifecycle, and performance appraisals.',
  keywords: [
    'HRMS software India',
    'human resource management system',
    'payroll software Pune',
    'employee attendance management',
    'cloud HR software India',
    'HRMS ERP software'
  ],
  alternates: {
    canonical: '/hrms-software',
  },
  openGraph: {
    title: 'Best HRMS Software | Human Resource Management System | Code Crafter Infotech',
    description:
      'Comprehensive HRMS software for biometric attendance, automated payroll, leave tracking, and employee performance.',
    url: '/hrms-software',
  },
};

export default function Page() {
  const features = [
    {
      icon: Clock,
      title: 'Biometric & GPS Attendance',
      desc: 'Seamlessly sync biometric punch machines, mobile GPS geo-fencing, and shift schedules in real-time.'
    },
    {
      icon: FileSpreadsheet,
      title: '1-Click Payroll & Tax Compliance',
      desc: 'Automated salary calculation with PF, ESIC, PT, TDS deductions, payslip generation, and bank payout files.'
    },
    {
      icon: CalendarCheck2,
      title: 'Leave & Shift Management',
      desc: 'Customizable leave policies, multi-tier manager approvals, holiday calendars, and rotational shift rosters.'
    },
    {
      icon: Users,
      title: 'Complete Employee Lifecycle',
      desc: 'Digitize hiring, paperless onboarding, document verification, asset handover, and smooth exit management.'
    },
    {
      icon: Award,
      title: 'Performance & Appraisals (KPIs)',
      desc: 'Track employee milestones, conduct 360-degree reviews, set OKRs, and evaluate performance cycles transparently.'
    },
    {
      icon: ShieldCheck,
      title: 'Role-Based Access & Security',
      desc: 'Bank-grade encrypted database, self-service employee portal (ESS), and granular admin permission controls.'
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
              <UserCheck className="w-4 h-4 mr-2" />
              <span>HR & Payroll Automation</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              Next-Gen <span className="bg-gradient-to-r from-[#8a4785] to-[#c6809c] bg-clip-text text-transparent">HRMS Software</span> & Payroll
            </h1>
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed font-medium">
              Transform your workforce operations from hiring to retirement. Automate attendance, tax compliance, payroll disbursals, and employee engagement in one unified portal.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact-us"
                className="px-8 py-4 bg-gradient-to-r from-[#8a4785] to-[#c6809c] text-white rounded-xl shadow-lg hover:shadow-[#8a4785]/30 hover:-translate-y-1 transition-all duration-300 font-bold flex items-center gap-2"
              >
                Request HRMS Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="relative w-full mt-10 lg:mt-0">
            <ProductHeroMockup
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="HRMS Software Dashboard & Workforce Management"
              moduleName="HRMS & Payroll Automation Portal"
              badgeText="Live Biometric Sync"
              statText="99.8% Payroll Accuracy"
              statLabel="Automated PF / ESIC / TDS"
            />
          </div>
        </div>
      </section>

      {/* SaaS Metric Strip */}
      <section className="py-8 px-6 lg:px-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "99.8%", label: "Salary Calculation Accuracy" },
            { value: "< 2 mins", label: "Instant Payslip Generation" },
            { value: "100%", label: "Statutory Tax Compliance" },
            { value: "0 Error", label: "Biometric Attendance Sync" }
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
            Why Choose Our <span className="text-[#8a4785]">HRMS Software</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Engineered to remove administrative friction, eliminate salary errors, and deliver an intuitive self-service experience to modern teams.
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
            <h2 className="text-sm uppercase tracking-widest text-[#8a4785] font-bold">Key Modules</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Comprehensive HR Toolkit</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Employee Self-Service (ESS)', desc: 'Mobile-friendly portal to download payslips, apply for leave, and review attendance logs.' },
              { title: 'Statutory Compliance', desc: 'Pre-configured compliance reports for Provident Fund (PF), ESIC, Professional Tax, and Form 16.' },
              { title: 'Shift & Overtime Rules', desc: 'Configurable multi-shift patterns, late-coming penalties, and overtime auto-calculations.' },
              { title: 'Expense & Reimbursements', desc: 'Scan and submit expense receipts with multi-level approval workflows and direct payroll payout.' },
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
        badge="HR & Payroll Automation"
        headline="Ready to Empower Your HR & Payroll Operations?"
        subheadline="Schedule a personalized demonstration of our HRMS Software today. Simplify attendance, eliminate calculation errors, and ensure 100% statutory compliance."
        buttonText="Schedule HRMS Demo"
        trustPoints={[
          "Biometric & Mobile GPS Ready",
          "1-Click PF, ESIC & TDS Filing",
          "Employee Self-Service Portal"
        ]}
      />
    </div>
  );
}
