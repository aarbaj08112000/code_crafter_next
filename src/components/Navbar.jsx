"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const brandName = process.env.NEXT_PUBLIC_APP_NAME || "Code Crafter Infotech";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Internship", path: "/internship" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact-us" }
  ];

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
    <header className="w-full fixed top-0 left-0 z-50 transition-all duration-300">
      <nav className="mx-auto max-w-7xl mt-3 sm:mt-4 px-3 sm:px-6 relative">
        <div className={`glass-nav shadow-lg rounded-2xl bg-white flex flex-col border border-white/20 transition-all duration-300 ${isMobileMenuOpen ? "py-4 px-4 sm:px-6" : "px-3.5 sm:px-6 py-2.5 sm:py-3"}`}>
          
          <div className="flex items-center justify-between w-full gap-2">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group shrink-0">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 shrink-0 group-hover:rotate-12 transition-transform duration-300">
                <Image
                  src="/logo2.png"
                  alt={`${brandName} Logo`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="self-center text-base sm:text-lg lg:text-xl font-bold whitespace-nowrap bg-gradient-to-r 
                 from-[#8a4785] to-[#c6809c] bg-clip-text 
                 text-transparent">
                {brandName}
              </span>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:block ml-auto mr-4 xl:mr-6">
              <ul className="flex items-center space-x-6 lg:space-x-8">
                {navLinks.slice(0, 3).map((link) => (
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

                {/* Solutions Dropdown */}
                <li
                  className="relative group"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-[#8a4785] transition-colors py-2"
                  >
                    <span>Solutions</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Menu - 2 Columns */}
                  <div
                    className={`absolute top-full -left-20 w-[490px] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 p-3 grid grid-cols-2 gap-1 transition-all duration-200 ${
                      isSolutionsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {softwareSolutions.map((sol) => (
                      <Link
                        key={sol.path}
                        href={sol.path}
                        className="block px-3 py-2 text-xs font-semibold text-gray-700 hover:text-[#8a4785] hover:bg-purple-50/60 rounded-xl transition-colors truncate"
                      >
                        {sol.name}
                      </Link>
                    ))}
                  </div>
                </li>

                {navLinks.slice(3).map((link) => (
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
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <Link
                href="/contact-us"
                className="hidden lg:inline-flex px-5 py-2 bg-gradient-to-r from-[#8a4785] to-[#c6809c] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-[#8a4785]/20 hover:-translate-y-0.5 transition-all"
              >
                Get Started
              </Link>

              {/* Mobile Toggle */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 sm:p-2 text-gray-600 lg:hidden hover:bg-gray-100 rounded-lg shrink-0 transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="mt-6 flex flex-col lg:hidden animate-in fade-in slide-in-from-top-2 duration-300 w-full max-h-[75vh] overflow-y-auto">
              <ul className="flex flex-col space-y-3 mb-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block text-sm font-semibold transition-colors duration-300 ${pathname === link.path
                        ? "text-[#8a4785]"
                        : "text-gray-600 hover:text-[#8a4785]"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="pt-2 pb-4 border-t border-gray-100">
                <span className="text-xs uppercase font-bold text-gray-400 tracking-wider">Software Solutions</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {softwareSolutions.map((sol) => (
                    <Link
                      key={sol.path}
                      href={sol.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xs font-semibold text-gray-600 hover:text-[#8a4785] py-1"
                    >
                      • {sol.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/contact-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center px-5 py-3 bg-gradient-to-r from-[#8a4785] to-[#c6809c] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-[#8a4785]/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          )}

        </div>
      </nav>
    </header>
  );
}
