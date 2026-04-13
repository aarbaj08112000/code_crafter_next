"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Layout,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Users,
  Zap,
  CheckCircle2,
  Clock,
  MapPin,
  BookOpen,
  Award,
  ArrowRight,
  Mail,
  Phone,
  Monitor,
  Terminal,
  Search,
  Box,
  Component,
  IndianRupee,
  GraduationCap,
  Briefcase,
  TrendingUp,
  ExternalLink
} from "lucide-react";

export default function InternshipPage() {
  const technologies = [
    { name: "NestJS", desc: "Backend Development", icon: Server, color: "text-[#8a4785]", bg: "bg-purple-50" },
    { name: "Next.js", desc: "Frontend Development", icon: Layout, color: "text-gray-900", bg: "bg-gray-50" },
    { name: "CodeIgniter", desc: "PHP Backend", icon: Zap, color: "text-orange-600", bg: "bg-orange-50" },
    { name: "JavaScript", desc: "Core & Advanced", icon: Code2, color: "text-yellow-600", bg: "bg-yellow-50" },
    { name: "Elasticsearch", desc: "Search & Analytics", icon: Search, color: "text-blue-600", bg: "bg-blue-50" },
    { name: "MySQL", desc: "Database Management", icon: Database, color: "text-blue-700", bg: "bg-blue-50" },
    { name: "Turborepo", desc: "Monorepo Management", icon: Box, color: "text-[#8a4785]", bg: "bg-purple-50" },
  ];

  const systemDesign = [
    { title: "Microservices Architecture", icon: Component },
    { title: "SQL Design", icon: Database },
    { title: "Project Architecture", icon: Layers },
  ];

  const gains = [
    "Live Project Experience",
    "Industry-Level Coding Standards",
    "API Development & Integration",
    "Database Design Skills",
    "Scalable System Understanding",
    "Team Collaboration",
    "Internship Certificate"
  ];

  const structure = [
    { label: "Duration", value: "2 / 3 / 6 Months", icon: Clock },
    { label: "Mode", value: "Online / Offline", icon: Globe },
    { label: "Learning", value: "Project-Based", icon: BookOpen },
    { label: "Mentorship", value: "Experienced Developers", icon: Users },
  ];

  const eligibility = [
    { title: "Students", type: "BCA, MCA, B.Tech, BE, Diploma", icon: GraduationCap },
    { title: "Freshers", type: "Seeking practical experience", icon: Briefcase },
    { title: "Developers", type: "Upskilling / Career Growth", icon: TrendingUp },
  ];

  const whyChooseUs = [
    { title: "Real-time Projects", icon: Rocket, desc: "Work on live industry projects" },
    { title: "Small Batch Size", icon: Users, desc: "Personalized attention to every intern" },
    { title: "Affordable Fees", icon: IndianRupee, desc: "Quality learning at the best price" },
    { title: "Placement Guidance", icon: Award, desc: "Resume building & mock interviews" },
    { title: "Client Requirements", icon: Monitor, desc: "Work on actual real-world client needs" },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-white text-gray-900">

      {/* Hero Section with matching Projects styling */}
      <section className="pt-32 pb-10 px-6 lg:px-20 bg-gradient-to-b from-[#8a4785]/10 to-transparent">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
          <div className="animate-in fade-in slide-in-from-bottom duration-700">
            <span className="px-4 py-1.5 rounded-full bg-[#8a4785]/10 border border-[#8a4785]/20 text-[#8a4785] text-sm font-bold tracking-widest uppercase">
              Join Our Program
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[#8a4785] to-[#c6809c] bg-clip-text text-transparent">
              Internship Program
            </span>
          </h1>

          <div className="flex items-center space-x-4 text-2xl lg:text-3xl font-medium text-gray-500">
            <span>Learn</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#8a4785]" />
            <span>Build</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c6809c]" />
            <span>Grow</span>
          </div>

          <p className="max-w-2xl text-xl text-gray-600 leading-relaxed">
            Transforming students into industry-ready developers through real-world projects,
            hands-on experience, and expert mentorship.
          </p>

          <div className="flex gap-6 mt-4">
            <Link href="https://wa.me/919405843312" target="_blank" className="px-10 py-4 bg-gradient-to-r from-[#8a4785] to-[#c6809c] text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-[#8a4785]/30">
              Apply Now
            </Link>
          </div>

          {/* Floating Illustrations Mimic */}
          <div className="relative w-full h-40 mt-12 flex justify-center items-center gap-6 lg:gap-12 flex-wrap text-[#8a4785]">
            {[Terminal, Cpu, Code2, Smartphone, Globe].map((Icon, i) => (
              <div key={i} className={`p-4 rounded-2xl bg-white shadow-xl shadow-gray-100 border border-gray-100 floating`} style={{ animationDelay: `${i * 0.5}s` }}>
                <Icon className="w-8 h-8" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pb-10">

        {/* Technologies Section */}
        <section className="py-12 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">Technologies You Will <span className="text-[#8a4785]">Learn</span></h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-[#8a4785] to-[#c6809c] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-[#8a4785]/30 hover:shadow-2xl transition-all duration-500 cursor-default">
                <div className={`w-14 h-14 rounded-2xl ${tech.bg} flex items-center justify-center mb-6 border border-transparent shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  <tech.icon className={`w-8 h-8 ${tech.color}`} />
                </div>
                <h3 className="font-bold text-xl mb-1 text-gray-900">{tech.name}</h3>
                <p className="text-gray-500 text-sm font-medium">{tech.desc}</p>
              </div>
            ))}

            {/* System Design Sub-grid */}
            <div className="col-span-2 lg:col-span-1 p-8 rounded-3xl bg-gradient-to-br from-[#8a4785] to-[#c6809c] text-white flex flex-col justify-center shadow-lg">
              <h3 className="font-bold text-xl mb-4 leading-tight">System Design & <br />Architecture</h3>
              <ul className="space-y-3">
                {systemDesign.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-white/90">
                    <item.icon className="w-4 h-4" />
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Gains & Structure Section - Full Width Gray Background matching Projects page */}
      <section className="py-16 px-6 lg:px-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 text-gray-900">
          {/* What You Will Gain */}
          <div className="space-y-8 p-10 rounded-[3rem] bg-white border border-gray-100 shadow-xl shadow-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8a4785]/5 blur-3xl rounded-full" />
            <h2 className="text-3xl font-bold">What You Will <span className="text-[#8a4785]">Gain</span></h2>
            <ul className="grid grid-cols-1 gap-4">
              {gains.map((gain, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700 bg-gray-50 p-4 rounded-2xl border border-transparent group-hover:border-[#8a4785]/10 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="font-semibold">{gain}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Internship Structure */}
          <div className="flex flex-col gap-8">
            <div className="p-10 rounded-[3rem] bg-white border border-gray-200/50 shadow-sm flex-1">
              <h2 className="text-3xl font-bold mb-8">Internship <span className="text-[#c6809c]">Structure</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {structure.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-[#8a4785]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">{item.label}</p>
                      <p className="font-bold text-lg">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility */}
            <div className="p-10 rounded-[3rem] bg-white border border-gray-100 shadow-lg">
              <h2 className="text-3xl font-bold mb-8">Who Can <span className="text-[#8a4785]">Apply?</span></h2>
              <div className="space-y-6">
                {eligibility.map((item, i) => (
                  <div key={i} className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#8a4785]/5 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-[#8a4785]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-500 text-sm font-medium">{item.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Content Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pb-10">

        {/* Why Choose Us Section */}
        <section className="py-12 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">Why Choose <span className="text-[#8a4785]">Code Crafter?</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">We don't just teach code; we craft the next generation of software engineers through excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {whyChooseUs.map((feature, i) => (
              <div key={i} className="group p-6 rounded-3xl bg-white border border-gray-100 text-center hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8a4785]/5 to-[#c6809c]/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-[#8a4785] transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-[#8a4785] group-hover:text-white transition-colors duration-500" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h4>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10">
          <div className="relative p-12 lg:p-24 rounded-[4rem] bg-gradient-to-r from-[#8a4785] to-[#c6809c] overflow-hidden shadow-2xl group text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,white,transparent)] opacity-20" />
            <div className="relative z-10 flex flex-col items-center text-center space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">Let's Build Your Future Together!</h2>
              <p className="text-xl text-white/90 max-w-2xl font-medium">
                Be a part of a dynamic team and work on projects that matter.
                Your journey towards becoming a pro developer starts here.
              </p>
              <Link href="https://wa.me/919405843312" target="_blank" className="px-12 py-5 bg-white text-[#8a4785] rounded-2xl font-bold text-xl hover:scale-110 transition-transform shadow-2xl">
                Enroll Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
