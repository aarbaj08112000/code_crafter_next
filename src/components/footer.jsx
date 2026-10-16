import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  const brandName = process.env.NEXT_PUBLIC_APP_NAME || "Code Crafter Infotech";

  const softwareSolutions = [
    { name: "HRMS Software", path: "/hrms-software" },
    { name: "Hospital Management", path: "/hospital-management-software" },
    { name: "Business Websites", path: "/business-websites" },
    { name: "ID Card Data Collection", path: "/id-card-data-collection" },
    { name: "Ecommerce Admin & Web", path: "/ecommerce-admin-website" },
    { name: "Dine Master (POS)", path: "/dine-master-restaurant-software" },
    { name: "Food Token System", path: "/food-token-management-system" },
    { name: "ERP for Manufacturing", path: "/erp-software-for-manufacturing" },
    { name: "CRM Software India", path: "/crm-software-india" },
    { name: "Barcode Inventory", path: "/barcode-inventory-software" },
    { name: "Inventory Management", path: "/inventory-management-software" },
    { name: "Production Management", path: "/production-management-software" },
    { name: "Purchase Management", path: "/purchase-management-software" },
    { name: "School ERP Software", path: "/school-erp-software" },
  ];

  return (
    <footer className="bg-gray-900 pt-20 pb-10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo2.png"
                  alt={`${brandName} Logo`}
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold text-white">{brandName}</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              Leading the way in digital innovation. We transform complex problems into elegant, user-centric software, enterprise ERPs, and high-performance web applications.
            </p>
            <div className="flex gap-4">
              {[
                {
                  Icon: () => (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.144-2.148 3.92-1.048.664-2.584 1.256-5.712 1.256-4.632 0-8.256-3.416-8.256-8.312s3.624-8.312 8.256-8.312c2.496 0 4.296.968 5.64 2.232l2.368-2.368C18.42 .832 15.69 0 12.48 0 5.4 0 .12 5.28.12 12s5.28 12 12.36 12c3.84 0 6.744-1.24 8.94-3.512 2.216-2.264 2.896-5.464 2.896-8.112 0-.6-.048-1.168-.144-1.68H12.48z" />
                    </svg>
                  ),
                  url: "https://g.co/kgs/LEVMFmR",
                  label: "Google Profile"
                },
                { Icon: Facebook, url: "https://www.facebook.com/codecrafterinfotech", label: "Facebook" },
                { Icon: Instagram, url: "https://www.instagram.com/code.crafter.infotect?igsh=c2xod21iZ2xvN2Fz", label: "Instagram" },
                { Icon: Linkedin, url: "https://www.linkedin.com/company/code-crafter3", label: "LinkedIn" },
                {
                  Icon: () => (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                  url: "https://wa.me/919405843312",
                  label: "WhatsApp"
                }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#8a4785] hover:text-white transition-all"
                >
                  <social.Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about-us' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio Projects', path: '/projects' },
                { name: 'Internship Program', path: '/internship' },
                { name: 'Contact Us', path: '/contact-us' }
              ].map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Software Solutions (Key SEO Links) */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-white font-bold text-base">Software Solutions</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {softwareSolutions.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="hover:text-white transition-colors block truncate">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 shrink-0 text-[#8a4785]" />
                <a href="https://wa.me/919405843312" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#8a4785] transition-colors">
                  +91 94058 43312
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 shrink-0 text-[#8a4785]" />
                <a href="mailto:codecrafter.help@gmail.com" className="text-sm hover:text-[#8a4785] transition-colors">
                  codecrafter.help@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {brandName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}