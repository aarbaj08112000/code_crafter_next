import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import {
  Globe,
  Code,
  Database,
  Cpu,
  Smartphone,
  Palette,
  ShieldCheck,
  Zap,
  ArrowRight,
  Boxes,
  Factory,
  Users2,
  Barcode,
  School,
  ShoppingCart,
  Layers,
  UserCheck,
  HeartPulse,
  CreditCard,
  PackageCheck,
  UtensilsCrossed,
  Ticket
} from "lucide-react";

export const metadata = {
  title: "Custom Web & Software Development Services | Code Crafter Infotech",
  description:
    "Explore our complete range of services: custom web application development, responsive UI/UX design, enterprise ERP, CRM solutions, HRMS, hospital management, ecommerce, and restaurant systems.",
  alternates: {
    canonical: "/services",
  },
};

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

  const softwareProducts = [
    {
      title: "HRMS Software",
      desc: "Streamline biometric attendance, automated payroll calculation, statutory compliance, and employee lifecycle management.",
      href: "/hrms-software",
      icon: UserCheck,
      badge: "HR & Payroll"
    },
    {
      title: "Hospital Management (HMIS)",
      desc: "Complete OPD/IPD workflows, doctor appointments, pharmacy inventory, lab reporting, and bed management.",
      href: "/hospital-management-software",
      icon: HeartPulse,
      badge: "Healthcare"
    },
    {
      title: "Business Websites",
      desc: "Fast, responsive, and SEO-optimized corporate websites engineered to build authority and convert visitors into clients.",
      href: "/business-websites",
      icon: Globe,
      badge: "Web Presence"
    },
    {
      title: "Data Collection for ID Cards",
      desc: "Self-service photo upload, batch data import, barcode & QR generation, and high-res print-ready card export.",
      href: "/id-card-data-collection",
      icon: CreditCard,
      badge: "Smart ID Cards"
    },
    {
      title: "Ecommerce Admin & Website",
      desc: "High-speed digital storefront and multi-vendor admin portal with payment gateways, automated dispatch, and inventory sync.",
      href: "/ecommerce-admin-website",
      icon: PackageCheck,
      badge: "E-Commerce"
    },
    {
      title: "Dine Master (Restaurant POS)",
      desc: "Restaurant POS, interactive table layouts, wireless kitchen order tickets (KOT), QR menus, and split billing.",
      href: "/dine-master-restaurant-software",
      icon: UtensilsCrossed,
      badge: "Restaurant POS"
    },
    {
      title: "Food Token System",
      desc: "Automated token dispensing, smart LED queue calling display, subsidized meal quotas, and cafeteria headcount audits.",
      href: "/food-token-management-system",
      icon: Ticket,
      badge: "Canteen & Queue"
    },
    {
      title: "ERP for Manufacturing",
      desc: "Comprehensive production, bill of materials, and workflow management built specifically for modern manufacturers.",
      href: "/erp-software-for-manufacturing",
      icon: Factory,
      badge: "Enterprise"
    },
    {
      title: "CRM Software India",
      desc: "Streamline customer relationships, lead tracking, conversion pipelines, and sales team productivity.",
      href: "/crm-software-india",
      icon: Users2,
      badge: "High ROI"
    },
    {
      title: "Barcode Inventory Software",
      desc: "Accelerate tracking with instant barcode scanning, stock alerts, batch tracing, and zero loss.",
      href: "/barcode-inventory-software",
      icon: Barcode,
      badge: "Smart Tracking"
    },
    {
      title: "Inventory Management Software",
      desc: "End-to-end stock oversight, warehouse logistics, multi-location tracking, and automated reordering.",
      href: "/inventory-management-software",
      icon: Boxes,
      badge: "Automated"
    },
    {
      title: "Production Management Software",
      desc: "Optimize factory lines, monitor job floor stages, minimize downtime, and maximize output efficiency.",
      href: "/production-management-software",
      icon: Layers,
      badge: "Industry 4.0"
    },
    {
      title: "Purchase Management Software",
      desc: "Automate purchase orders, vendor evaluation, approval workflows, and expenditure tracking.",
      href: "/purchase-management-software",
      icon: ShoppingCart,
      badge: "Cost Control"
    },
    {
      title: "School ERP Software",
      desc: "Integrated campus administration, student enrollment, fee collection, attendance, and exam grading.",
      href: "/school-erp-software",
      icon: School,
      badge: "Education"
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Header */}
      <section className="pt-36 lg:pt-44 pb-8 px-6 lg:px-20 bg-gradient-to-b from-[#8a4785]/10 to-transparent">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#8a4785] to-[#c6809c] bg-clip-text text-transparent">
            Our Services & Turnkey Software
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Offering world-class web engineering, tailored software products, and scalable digital solutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-sm uppercase tracking-widest text-[#8a4785] font-bold">Custom Development</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Tailored Technology For Your Brand</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#8a4785]/5 flex items-center justify-center mb-8 group-hover:bg-[#8a4785] transition-colors duration-500">
                  <service.icon className="w-8 h-8 text-[#8a4785] group-hover:text-white transition-colors duration-500" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800 tracking-tight">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Products Section (Internal Links for SEO) */}
      <section className="py-20 px-6 lg:px-20 bg-gradient-to-b from-gray-50/60 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm uppercase tracking-widest text-[#8a4785] font-bold">Turnkey Solutions</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Enterprise Software Products</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready-to-deploy, customizable ERP and business management platforms tailored for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareProducts.map((prod, idx) => (
              <Link
                key={idx}
                href={prod.href}
                className="group p-8 bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#8a4785]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#8a4785]/10 flex items-center justify-center group-hover:bg-[#8a4785] transition-colors">
                      <prod.icon className="w-7 h-7 text-[#8a4785] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-50 text-[#8a4785] border border-purple-100">
                      {prod.badge}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8a4785] transition-colors">
                    {prod.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {prod.desc}
                  </p>
                </div>

                <div className="flex items-center text-sm font-bold text-[#8a4785] gap-2 pt-2 border-t border-gray-100">
                  <span>Explore Solution</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
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

      {/* Call to Action */}
      <CallToAction
        badge="Tailored Engineering & Custom Software"
        headline="Ready for a Measurable Digital Transformation?"
        subheadline="Our team is ready to help you scale your business with top-notch technology, enterprise software products, and scalable cloud architectures."
        buttonText="Get a Free Quote & Proposal"
        trustPoints={[
          "End-to-End Agile Development",
          "Clean Code & Modern Tech Stack",
          "Dedicated Post-Launch Support"
        ]}
      />
    </div>
  );
}
