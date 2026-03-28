import Image from "next/image";
import {
  Globe,
  Code,
  Database,
  Cpu,
  Smartphone,
  Palette,
  ShieldCheck,
  Zap,
  ArrowRight
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Custom Website Development",
      desc: "Tailored websites built from scratch to reflect your brand's unique identity and engage your target audience effectively."
    },
    {
      icon: Palette,
      title: "Frontend Development",
      desc: "Creating dynamic, interactive, and visually stunning user interfaces that provide an optimal experience across all devices."
    },
    {
      icon: Database,
      title: "Backend Development",
      desc: "Robust, secure, and scalable server-side solutions designed to power your applications with seamless data management."
    },
    {
      icon: Smartphone,
      title: "Responsive UI/UX Design",
      desc: "Ensuring your digital presence looks and functions perfectly on desktops, tablets, and mobiles with user-centric design."
    },
    {
      icon: Zap,
      title: "Web Performance Tuning",
      desc: "Optimizing your website for lightning-fast load speeds, better SEO rankings, and improved user retention."
    },
    {
      icon: ShieldCheck,
      title: "Digital Maintenance",
      desc: "Ongoing support and updates to keep your website secure, modern, and bug-free as your business grows."
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Header */}
      <section className="pt-32 pb-4 px-6 lg:px-20 bg-gradient-to-b from-[#8a4785]/10 to-transparent">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#8a4785] to-[#c6809c] bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Offering top-notch development and design solutions to elevate your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#8a4785]/5 flex items-center justify-center mb-8 group-hover:bg-[#8a4785] transition-colors duration-500">
                  <service.icon className="w-8 h-8 text-[#8a4785] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm uppercase tracking-widest text-[#8a4785] font-bold">Our Workflow</h2>
            <h3 className="text-4xl font-bold text-gray-900 leading-tight">How We Bring Your <br />Ideas To Life</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Step connectors for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 -z-10" />

            {[
              { step: "01", name: "Discover", desc: "Understanding your needs and goals." },
              { step: "02", name: "Design", desc: "Crafting a visual masterpiece." },
              { step: "03", name: "Develop", desc: "Building with clean, robust code." },
              { step: "04", name: "Deploy", desc: "Launching to the world together." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4 bg-gray-50 px-4">
                <div className="w-14 h-14 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center text-xl font-bold text-[#8a4785] shadow-sm">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-gray-800">{item.name}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto rounded-[3rem] overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8a4785] to-[#c6809c]" />
          <div className="relative z-10 p-12 lg:p-20 text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready for a digital transformation?</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Our team is ready to help you scale your business with top-notch technology.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/contact-us" className="px-10 py-5 bg-white text-[#8a4785] rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl">
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
