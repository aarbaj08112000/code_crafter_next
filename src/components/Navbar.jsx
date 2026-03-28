"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full fixed top-0 left-0 z-50 transition-all duration-300">
      <nav className="mx-auto max-w-7xl mt-4 px-6">
        <div className="glass-nav shadow-lg rounded-2xl bg-white flex items-center justify-between px-6 py-3 border border-white/20">

          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 group-hover:rotate-12 transition-transform duration-300">
              <Image
                src="/logo2.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="self-center text-xl font-bold whitespace-nowrap bg-gradient-to-r 
               from-[#8a4785] to-[#c6809c] bg-clip-text 
               text-transparent">
              {process.env.NEXT_PUBLIC_APP_NAME}
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:block ml-auto mr-8">
            <ul className="flex items-center space-x-8">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about-us" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact-us" }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`text-sm font-semibold transition-colors duration-300 ${pathname === link.path
                      ? "text-[#8a4785]"
                      : "text-gray-600 hover:text-[#8a4785]"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA / Action */}
          <div className="flex items-center gap-4">
            <Link href="https://wa.me/919405843312?text=Hello%20Code%20Crafter%2C%20I'm%20interested%20in%20hiring%20you%20for%20a%20project!" target="_blank" className="hidden px-5 py-2 bg-gradient-to-r from-[#8a4785] to-[#c6809c] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-[#8a4785]/20 transition-all">
              Hire Us
            </Link>

            {/* Mobile Toggle */}
            <button
              type="button"
              className="p-2 text-gray-600 md:hidden hover:bg-gray-100 rounded-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

    </header>
  );
}
