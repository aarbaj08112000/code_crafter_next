import Image from "next/image";
import {
  Users,
  Target,
  Award,
  Lightbulb,
  Heart,
  Zap,
  CheckCircle2
} from "lucide-react";

export default function AboutUs() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Page Header */}
      <section className="pt-32 pb-4 px-6 lg:px-20 bg-gradient-to-b from-[#8a4785]/10 to-transparent">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#8a4785] to-[#c6809c] bg-clip-text text-transparent">
            About {process.env.NEXT_PUBLIC_APP_NAME}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Transforming ideas into innovative digital solutions.
          </p>
        </div>
      </section>

      {/* Hero Content */}
      <section className="py-10 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group ">
            <div className="relative aspect-square w-full rounded-[3rem] bg-white/30 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center p-4">
              <div className="relative w-full h-full max-w-[550px] max-h-[550px] animate-zoom">
                {/* Custom Hexagon Diagram */}
                <svg viewBox="0 0 600 600" className="w-full h-full drop-shadow-2xl">
                  {/* Lines/Paths and Step Circles */}
                  {[
                    { angle: -90, label: "Website Development", num: "01", color: "#db8f9c" },
                    { angle: -30, label: "Frontend Development", num: "02", color: "#8a4785" },
                    { angle: 30, label: "Backend Development", num: "03", color: "#6a2c5f" },
                    { angle: 90, label: "Responsive Design", num: "04", color: "#db8f9c" },
                    { angle: 150, label: "Website Optimization", num: "05", color: "#8a4785" },
                    { angle: 210, label: "Graphics Designing", num: "06", color: "#6a2c5f" }
                  ].map((step, i) => {
                    const r = 215;
                    const x = 300 + r * Math.cos((step.angle * Math.PI) / 180);
                    const y = 300 + r * Math.sin((step.angle * Math.PI) / 180);
                    return (
                      <g key={i} className="hover:scale-110 transition-transform duration-300 origin-center cursor-default group/step">
                        <line x1="300" y1="300" x2={x} y2={y} stroke={step.color} strokeWidth="3" strokeDasharray="6 6" opacity="0.6" />
                        <circle cx={x} cy={y} r="75" fill="white" className="shadow-md" />
                        <circle cx={x} cy={y} r="70" fill={step.color} opacity="0.1" className="group-hover/step:opacity-20" />
                        <text x={x} y={y - 12} textAnchor="middle" className="text-base font-bold" fill={step.color}>{step.num}</text>
                        <text x={x} y={y + 15} textAnchor="middle" className="text-xs font-semibold fill-gray-600">
                          {step.label.split(' ').map((word, j) => (
                            <tspan key={j} x={x} dy={j === 0 ? 0 : 14}>{word}</tspan>
                          ))}
                        </text>
                      </g>
                    );
                  })}

                  {/* Center Circle (Rendered last for clean overlap) */}
                  <circle
                    cx="300" cy="300" r="95"
                    fill="white"
                    stroke="#8a4785"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    className="shadow-2xl"
                  />
                  <text x="300" y="300" textAnchor="middle" dy="0.3em" className="text-lg font-bold fill-[#8a4785]">CODE CRAFTER</text>
                </svg>
              </div>
            </div>
            {/* Experience badge overlay */}
            <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl flex flex-col items-center border border-[#8a4785]/10 z-20 hover:scale-105 transition-transform duration-300">
              {/* <span className="text-4xl font-extrabold bg-gradient-to-r from-[#8a4785] to-[#c6809c] bg-clip-text text-transparent">1+</span> */}
              <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Years of Experience</span>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are passionate about transforming ideas into digital realities. We specialize in crafting bespoke web solutions that drive business success. Our goal is to provide top-notch services that combine innovation, functionality, and aesthetic appeal.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to empower businesses by delivering high-quality, custom web solutions that meet their unique needs. We strive to exceed client expectations through our commitment to excellence, attention to detail, and a deep understanding of the latest web technologies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Innovation First",
                "Client Centric",
                "Quality Driven",
                "Agile Execution"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#8a4785]" />
                  <span className="font-semibold text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Knowledge and skill in a particular field, honed through experience and study.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {[
              "HTML", "CSS", "JQuery", "Kotlin", "MySQL", "MongoDB",
              "Next.js", "Nest.js", "React", "CodeIgniter", "Laravel",
              "PHP", "Node.js", "JavaScript", "Tailwind CSS"
            ].map((tech, idx) => (
              <div
                key={idx}
                className="px-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-gray-700 font-bold hover:bg-[#8a4785] hover:text-white hover:scale-110 transition-all duration-300 shadow-sm cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm uppercase tracking-widest text-[#8a4785] font-bold font-sans">Our Values</h2>
            <h3 className="text-4xl font-bold text-gray-900">What Drives Us Every Day</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: "Innovation", desc: "Exploring new technologies to solve complex problems." },
              { icon: Users, title: "Collaboration", desc: "We work as an extension of your team to ensure success." },
              { icon: Heart, title: "Passion", desc: "Crafting every pixel and line of code with dedication." },
              { icon: Award, title: "Excellence", desc: "Striving for perfection in every project we deliver." }
            ].map((value, idx) => (
              <div key={idx} className="p-8 bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-12 h-12 rounded-xl bg-[#8a4785]/10 flex items-center justify-center mb-6 group-hover:bg-[#8a4785] group-hover:text-white transition-all">
                  <value.icon className="w-6 h-6 text-[#8a4785] group-hover:text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 lg:px-20 text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Ready to work with us?</h2>
          <p className="text-lg text-gray-600">
            Join the many businesses that have already transformed their digital presence with Code Crafter.
          </p>
          <div>
            <a href="/contact-us" className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#8a4785] to-[#c6809c] text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
