"use client";

import Image from "next/image";
import {
    ExternalLink,
    Smartphone,
    Globe,
    Code2,
    Layout,
    Users,
    Video,
    Search,
    ShoppingCart,
    Gamepad2,
    Activity,
    Truck,
    Database,
    Calculator,
    Crop,
    CreditCard,
    Heart,
    Recycle,
    Phone,
    Mail,
    Download,
    Wallet,
    Building2,
    Barcode,
    Ticket
} from "lucide-react";

const WhatsAppIcon = ({ className, strokeWidth }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

export default function Projects() {
    const webProjects = [
        {
            title: "Inventory Management System",
            desc: "Advanced barcode-based inventory tracking and digital token system for efficient warehouse and supply chain management.",
            icon: Barcode
        },
        {
            title: "Custom Static & Dynamic Website",
            desc: "Tailored web solutions from high-performance static sites to complex dynamic applications.",
            icon: Globe
        },
        {
            title: "Student Management System",
            desc: "A platform for managing enrollment, attendance, and grade recording for students.",
            icon: Users
        },
        {
            title: "Video Conference System",
            desc: "Host virtual meetings with video/audio, screen sharing, and chat features.",
            icon: Video
        },
        {
            title: "HRMS",
            desc: "Comprehensive HR solution for employee data, payroll, and performance evaluation.",
            icon: Code2
        },
        {
            title: "Puppeteer",
            desc: "A Node.js library for browser automation, testing, and scraping.",
            icon: Search
        },
        {
            title: "Craftology- E-commerce",
            desc: "An online platform with product listings, shopping cart, and secure payments.",
            icon: ShoppingCart
        },
        {
            title: "Fastwin",
            desc: "An engaging and interactive online game platform.",
            icon: Gamepad2
        },
        {
            title: "Olistic Studios Website",
            desc: "A wellness platform blending holistic health, fitness, and mindful living.",
            icon: Activity
        },
        {
            title: "DuroShox - QR PackTrack",
            desc: "Smart logistics solution with QR-based product and container tracking.",
            icon: Truck
        },
        {
            title: "Data Collection",
            desc: "System for secure data collection, photo capture, and ID card generation.",
            icon: Database
        },
        {
            title: "Billing Software",
            desc: "Smart solution for managing invoices, payments, and financial records.",
            icon: Calculator
        },
        {
            title: "Cropper",
            desc: "Advanced image cropping tool with shape customization and bulk download.",
            icon: Crop
        },
        {
            title: "ID Card Website",
            desc: "Hybrid platform showcasing ID solutions with dynamic catalog & orders.",
            icon: CreditCard
        },
        {
            title: "Hostel Management System",
            desc: "Efficient management of room allocations, resident data, and facility maintenance for hostels.",
            icon: Building2
        },
        {
            title: "Matrimony Website",
            desc: "A secure and user-friendly platform for finding life partners with advanced search and matchmaking features.",
            icon: Heart
        },
        {
            title: "Eco Waste Connect",
            desc: "An all-in-one platform for eco-focused ID solutions and order management.",
            icon: Recycle
        }
    ];

    const androidProjects = [
        {
            title: "HRMS",
            desc: "A smart HR management app designed for employee attendance using punch-in and punch-out functionality. Helps organizations track working hours efficiently and accurately.",
            icon: Smartphone
        },
        {
            title: "Food Token",
            desc: "A digital token system for mini hotels to manage food orders quickly and efficiently. Reduces manual errors and improves service speed.",
            icon: Layout
        },
        {
            title: "Dine Master",
            desc: "A restaurant management app where waiters can assign menus to specific tables. Simplifies order handling and enhances the dining experience.",
            icon: Code2
        },
        {
            title: "Smart Expense Management",
            desc: "Track and manage corporate expenses in real-time with automated reporting and receipt scanning features.",
            icon: Wallet
        },
        {
            title: "Corporate Hostel Management",
            desc: "Comprehensive solution for corporate housing, managing room allocations, inventory, and resident services effortlessly.",
            icon: Building2
        }
    ];

    return (
        <div className="flex flex-col w-full overflow-hidden bg-white">
            <section className="pt-32 pb-4 px-6 lg:px-20 bg-gradient-to-b from-[#8a4785]/10 to-transparent">
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#8a4785] to-[#c6809c] bg-clip-text text-transparent">
                        Our Projects
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                        Explore our diverse portfolio of innovative digital solutions, from web applications
                        to complex enterprise systems and mobile apps.
                    </p>
                </div>
            </section>

            {/* Web Projects Grid */}
            <section className="py-10 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-[#8a4785] border-l-4 border-[#8a4785] pl-4">
                            Web Portfolio
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {webProjects.map((project, idx) => (
                            <div key={idx} className="group bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
                                <div className="w-14 h-14 rounded-2xl bg-[#8a4785]/5 flex items-center justify-center mb-6 group-hover:bg-[#8a4785] transition-colors duration-500">
                                    <project.icon className="w-7 h-7 text-[#8a4785] group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                                    {project.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Android Projects Section */}
            <section className="py-20 px-6 lg:px-20 bg-gray-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl font-bold text-gray-900">
                            Android <span className="text-[#8a4785]">Projects</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            We build reliable Android applications that solve real-world business problems. Our solutions focus on performance, usability, and scalability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {androidProjects.map((project, idx) => (
                            <div key={idx} className="group bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="w-16 h-16 rounded-2xl bg-[#8a4785]/5 flex items-center justify-center mb-8 group-hover:bg-[#8a4785] transition-colors duration-500">
                                    <project.icon className="w-8 h-8 text-[#8a4785] group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-8 min-h-[100px]">
                                    {project.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section at bottom of projects */}
            <section className="py-24 px-6 lg:px-20">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
                        <p className="text-lg text-gray-600">Have questions or want to collaborate? Reach out to us today!</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Phone, title: "Phone", content: "+91 94058 43312", href: "https://wa.me/919405843312", color: "text-purple-600", bg: "bg-purple-50" },
                            { icon: Mail, title: "Email", content: "codecrafter.help@gmail.com", href: "mailto:codecrafter.help@gmail.com", color: "text-pink-600", bg: "bg-pink-50" },
                            { icon: WhatsAppIcon, title: "WhatsApp", content: "+91 94058 43312", href: "https://wa.me/919405843312", color: "text-green-600", bg: "bg-green-50" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center space-y-5 text-center">
                                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-1`}>
                                    <item.icon className={`w-7 h-7 ${item.color}`} strokeWidth={2.5} />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                                <a
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="text-gray-600 font-semibold hover:text-[#8a4785] transition-colors"
                                >
                                    {item.content}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
