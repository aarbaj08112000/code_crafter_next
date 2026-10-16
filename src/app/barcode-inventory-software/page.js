import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Zap, Shield, BarChart, Layers, Monitor, ArrowRight, Settings } from 'lucide-react';
import ProductHeroMockup from '@/components/ProductHeroMockup';
import CallToAction from '@/components/CallToAction';

export const metadata = {
  title: 'Barcode Inventory Software | Code Crafter Infotech',
  description: 'Top-rated Barcode Inventory Software designed to streamline real-time tracking, eliminate stock-outs, and maximize warehouse efficiency.',
  keywords: ['barcode inventory software', 'barcode tracking system', 'inventory barcode scanner', 'warehouse inventory software India'],
  alternates: {
    canonical: '/barcode-inventory-software',
  },
  openGraph: {
    title: 'Barcode Inventory Software | Code Crafter Infotech',
    description: 'Top-rated Barcode Inventory Software designed to streamline tracking, prevent losses, and maximize operational efficiency.',
    url: '/barcode-inventory-software',
  },
};

export default function Page() {
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
                   <Settings className="w-4 h-4 mr-2" />
                   <span>Industry Leading Solution</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
                  Best <span className="bg-gradient-to-r from-[#8a4785] to-[#c6809c] bg-clip-text text-transparent">Barcode Inventory Software</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-xl leading-relaxed font-medium">
                  Scan, track, and manage your inventory faster than ever. Perfect for warehouses, retail stores, and growing fulfillment centers.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/contact-us" className="px-8 py-4 bg-gradient-to-r from-[#8a4785] to-[#c6809c] text-white rounded-xl shadow-lg hover:shadow-[#8a4785]/30 hover:-translate-y-1 transition-all duration-300 font-bold flex items-center gap-2">
                    Request a Demo <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
             </div>
             
             <div className="relative w-full mt-10 lg:mt-0">
               <ProductHeroMockup
                 src="https://images.unsplash.com/photo-1601598851547-4302969d0614?q=80&w=2070&auto=format&fit=crop"
                 alt="Barcode Inventory Dashboard"
                 moduleName="Barcode Scanner & Lot Engine"
                 badgeText="Sub-Second Scan"
                 statText="Zero Loss Rate"
                 statLabel="Batch & Lot Tracking"
               />
             </div>
          </div>
       </section>

       {/* SaaS Metric Strip */}
       <section className="py-8 px-6 lg:px-20 bg-white border-y border-gray-100">
         <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
           {[
             { value: "100%", label: "Zero Scan Errors" },
             { value: "< 0.3s", label: "Barcode Scan Response" },
             { value: "Auto-Alert", label: "Low Stock Reorder Notification" },
             { value: "Multi-Hub", label: "Multi-Location Warehouse Sync" }
           ].map((metric, idx) => (
             <div key={idx} className="space-y-1 md:border-r md:last:border-r-0 border-gray-100 px-3">
               <div className="text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-[#8a4785] to-[#c6809c] bg-clip-text text-transparent">
                 {metric.value}
               </div>
               <div className="text-xs lg:text-sm text-gray-500 font-medium">
                 {metric.label}
               </div>
             </div>
           ))}
         </div>
       </section>
       
       {/* Feature Section */}
       <section className="py-24 px-6 lg:px-20 bg-white relative">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose Our <span className="text-[#8a4785]">Barcode Scanning Tool</span>?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
              Cut physical inventory time in half, improve accuracy to 99.9%, and eliminate unnecessary stock-outs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {[
                { icon: Monitor, title: 'Real-Time Tracking', desc: 'Monitor your operations instantly across multiple locations.' },
                { icon: BarChart, title: 'Advanced Analytics', desc: 'Data-driven insights to help you make informed decisions.' },
                { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade security protocols to keep your data safe.' },
                { icon: Layers, title: 'Seamless Integration', desc: 'Connects easily with your existing software ecosystem.' },
                { icon: CheckCircle2, title: 'Automated Workflows', desc: 'Eliminate manual entry with robust automation rules.' },
                { icon: Zap, title: 'Lightning Fast', desc: 'Incredibly responsive interface for maximum productivity.' }
              ].map((f, i) => (
                 <div key={i} className="p-8 bg-white rounded-3xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8a4785]/20 group">
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

       {/* Call to Action */}
       <CallToAction
         badge="Smart Barcode & Warehouse Mobility"
         headline="Ready to Eliminate Stock-Outs with Barcode Scanning?"
         subheadline="Speak with our warehouse automation consultants today. Accelerate picking and dispatch, eliminate manual counting errors, and achieve 99.9% inventory accuracy."
         buttonText="Request Barcode Demo"
         trustPoints={[
           "Handheld Laser & Mobile Camera Scanning",
           "Batch, Serial Number & Expiry Traceability",
           "Live Integration with Accounting & ERP"
         ]}
       />
    </div>
  );
}
