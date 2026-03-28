import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-6">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo2.png"
                  alt="Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold text-white">{process.env.NEXT_PUBLIC_APP_NAME}</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Leading the way in digital innovation. We transform complex problems into elegant, user-centric solutions.
            </p>
            <div className="flex gap-4">
              {[
                {
                  Icon: () => (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.144-2.148 3.92-1.048.664-2.584 1.256-5.712 1.256-4.632 0-8.256-3.416-8.256-8.312s3.624-8.312 8.256-8.312c2.496 0 4.296.968 5.64 2.232l2.368-2.368C18.42 .832 15.69 0 12.48 0 5.4 0 .12 5.28.12 12s5.28 12 12.36 12c3.84 0 6.744-1.24 8.94-3.512 2.216-2.264 2.896-5.464 2.896-8.112 0-.6-.048-1.168-.144-1.68H12.48z" />
                    </svg>
                  ),
                  url: "https://g.co/kgs/LEVMFmR"
                },
                { Icon: Instagram, url: "https://www.instagram.com/code.crafter.infotect?igsh=c2xod21iZ2xvN2Fz" },
                { Icon: Linkedin, url: "https://www.linkedin.com/company/code-crafter3" },
                {
                  Icon: () => (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                  url: "https://wa.me/919405843312"
                }
              ].map((social, i) => (
                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#8a4785] hover:text-white transition-all">
                  <social.Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Projects'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Services</h4>
            <ul className="space-y-4">
              {['Web Development', 'UI/UX Design', 'Cloud Solutions', 'App Development'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 shrink-0 text-[#8a4785]" />
                <a href="https://wa.me/919405843312" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#8a4785] transition-colors">
                  +91 94058 43312
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 shrink-0 text-[#8a4785]" />
                <a href="mailto:codecrafter.help@gmail.com" className="text-sm hover:text-[#8a4785] transition-colors">
                  codecrafter.help@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white text-center text-sm">
          <p>© {new Date().getFullYear()} Code Crafter Infotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}