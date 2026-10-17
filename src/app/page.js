import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Cpu,
  Globe,
  Rocket,
  ShieldCheck,
  Smile,
  Zap,
  ArrowRight,
  Sparkles,
  ClipboardCheck,
  Clock,
  IndianRupee,
  Handshake
} from "lucide-react";

export const metadata = {
  title: "Code Crafter Infotech | Web & Custom ERP Software Development Company",
  description:
    "Leading IT solutions, custom ERP software, CRM solutions, barcode inventory systems, and responsive web application development company.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 lg:pt-36 pb-16 overflow-hidden px-6 lg:px-20">
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#8a4785]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#c6809c]/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000 mt-6 lg:mt-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#8a4785]/10 border border-[#8a4785]/20 text-[#8a4785] text-sm font-medium">
              <Zap className="w-4 h-4 mr-2" />
              <span>Innovative IT Solutions</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Crafting <span className="bg-gradient-to-r from-[#8a4785] to-[#c6809c] bg-clip-text text-transparent">Code</span>,
              <br />Creating <span className="bg-gradient-to-r from-[#c6809c] to-[#8a4785] bg-clip-text text-transparent">Futures</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
              We bring a comprehensive range of skills to every project. Our expertise ensures that your website is not only visually appealing but also robust, scalable, and secure.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact-us" className="px-8 py-4 bg-gradient-to-r from-[#8a4785] to-[#c6809c] text-white rounded-xl shadow-lg hover:shadow-[#8a4785]/30 hover:-translate-y-1 transition-all duration-300 font-semibold flex items-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="px-8 py-4 bg-white text-gray-800 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold shadow-sm">
                Our Services
              </Link>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto group">
              {/* Corner Accents */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t-8 border-l-8 border-[#8a4785] rounded-tl-[3rem] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-8 border-r-8 border-[#8a4785] rounded-br-[3rem] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

              <div className="absolute inset-0 bg-gradient-to-tr from-[#8a4785]/20 to-[#c6809c]/20 rounded-full blur-3xl " />

              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 floating">
                <Image
                  src="/products/hero-coding.jpg"
                  alt="Code Crafter Hero"
                  fill
                  className="object-cover relative z-10 transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8a4785]/20 to-transparent z-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="pt-24 pb-12 px-6 lg:px-20 bg-white/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#8a4785]">Why Us!</h2>
            <p className="text-sm capitalize tracking-[0.1em] text-[#c6809c] font-bold max-w-2xl mx-auto text-gray-600">
              experience quality, innovation, and exceptional service tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12 lg:gap-x-16">
            {[
              {
                icon: Sparkles,
                title: "Experience",
                desc: "With years of experience in the industry, we bring a wealth of knowledge and expertise to every project."
              },
              {
                icon: ClipboardCheck,
                title: "Detail-Oriented",
                desc: "We pay meticulous attention to every detail, ensuring flawless execution of your project."
              },
              {
                icon: Clock,
                title: "Timely Delivery",
                desc: "We understand the importance of deadlines and are committed to delivering your project on time."
              },
              {
                icon: IndianRupee,
                title: "Flexible Pricing",
                desc: "We offer flexible pricing options to fit various budgets, ensuring you get the best value for your investment."
              },
              {
                icon: Cpu,
                title: "Innovation",
                desc: "We stay updated with the latest trends and technologies to provide cutting-edge solutions."
              },
              {
                icon: Handshake,
                title: "Integrity",
                desc: "We believe in honest and transparent communication with our clients."
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-5 group items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-[#80417b] group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <feature.icon className="w-8 h-8 text-[#8a4785] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#8a4785] transition-colors">{feature.title}</h4>
                  <p className="text-gray-500 leading-relaxed text-sm font-medium">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 px-6 lg:px-20 relative overflow-hidden bg-gradient-to-b from-white to-transparent">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/3] w-full rounded-4xl overflow-hidden glass rounded-[2.5rem] p-4 shadow-2xl">
              <Image
                src="/products/dashboard-analytics.jpg"
                alt="Modern Tech Services"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-3xl"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-[#8a4785] to-[#c6809c] rounded-3xl -z-10 shadow-lg" />
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-sm uppercase tracking-widest text-[#8a4785] font-bold">Our Services</h2>
            <h3 className="text-4xl font-bold text-gray-900 leading-tight">Empowering Your Business With <span className="text-[#8a4785]">Modern Tech</span></h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              From ideation to deployment, we offer end-to-end services tailored to your needs.
              Our focus is on delivering high-performance applications that scale.
            </p>

            <ul className="space-y-4 pt-4">
              {["Custom Web Applications", "Responsive UI/UX Design", "Backend Infrastructure", "Cloud Integration"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-[#8a4785]" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Link href="/services" className="inline-flex items-center text-[#8a4785] font-bold gap-2 hover:gap-4 transition-all duration-300">
                Explore All Services <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (Restored & Moved) */}
      <section className="pb-24 pt-12 px-6 lg:px-20 bg-white/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm uppercase tracking-widest text-[#8a4785] font-bold">More Reasons to Choose Us</h2>
            <h3 className="text-4xl font-bold text-gray-900">Excellence in Every Line</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Global Vision", desc: "We provide worldwide solutions with a focus on local impact." },
              { icon: ShieldCheck, title: "Reliability", desc: "Your data and uptime are our top priorities with secure coding standards." },
              { icon: Rocket, title: "Fast Delivery", desc: "Agile processes ensure your vision reaches the market rapidly." },
              { icon: Code2, title: "Clean Code", desc: "Performant, maintainable, and scalable architecture for all platforms." },
              { icon: Smile, title: "User Centric", desc: "Designs that resonate with your users and drive conversions." },
              { icon: Cpu, title: "Tech Driven", desc: "Utilizing the latest stacks including Next.js, React, and more." }
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-[#8a4785]/5 flex items-center justify-center mb-6 group-hover:bg-[#8a4785] transition-colors duration-500">
                  <feature.icon className="w-7 h-7 text-[#8a4785] group-hover:text-white transition-colors duration-500" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-24 px-6 lg:px-20 bg-gradient-to-b from-transparent via-purple-50/15 to-transparent relative overflow-hidden">
        {/* Soft ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#8a4785]/10 to-[#c6809c]/10 rounded-full blur-[130px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[2.5rem] bg-gradient-to-r from-[#8a4785] via-[#853f80] to-[#c6809c] p-10 md:p-14 lg:p-16 overflow-hidden shadow-2xl border border-white/20 group">
            {/* Subtle radial sheen & corner glow */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_60%)] pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="space-y-4 text-center lg:text-left max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 border border-white/25 text-white text-xs font-semibold backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                  <span>Start Building Today</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                  Ready to start your <br className="hidden sm:inline" />next project?
                </h2>
                <p className="text-white/95 text-base lg:text-lg leading-relaxed">
                  Let&apos;s build something extraordinary together. From custom ERP systems to modern high-converting web applications.
                </p>
              </div>

              {/* Vertically Stacked Buttons: One Below Another */}
              <div className="flex flex-col gap-3.5 shrink-0 w-full sm:w-72 md:w-80">
                <Link
                  href="/contact-us"
                  className="w-full px-8 py-4 bg-white text-[#8a4785] hover:bg-gray-50 rounded-2xl font-bold text-sm sm:text-base shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-center flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Contact Us Now</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
                <Link
                  href="/about-us"
                  className="w-full px-8 py-4 bg-white/15 hover:bg-white/25 text-white rounded-2xl font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-300 text-center border border-white/25 hover:border-white/40 whitespace-nowrap"
                >
                  About Our Process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
