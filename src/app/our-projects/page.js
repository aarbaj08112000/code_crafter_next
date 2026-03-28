"use client";

import { useState, useEffect } from "react";
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
    Ticket,
    Lock,
    Eye,
    EyeOff,
    Loader2,
    Info,
    FileText,
    X,
    CheckCircle
} from "lucide-react";

// Static Credentials
const ADMIN_EMAIL = "codecrafter.help@gmail.com";
const ADMIN_PASSWORD = "CodeCrafter@Secure2025!";

const WhatsAppIcon = ({ className, strokeWidth }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 lg:p-10">
            <div
                className="absolute inset-0 bg-gray-900/60 backdrop-blur-md animate-in fade-in duration-300"
                onClick={onClose}
            />
            <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-2xl border border-white/20 animate-in zoom-in slide-in-from-bottom duration-500 flex flex-col custom-scrollbar">
                {/* Modal Header */}
                <div className="sticky top-0 bg-white z-10 px-8 py-6 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#8a4785] flex items-center justify-center">
                            <project.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
                            <span className="text-sm font-medium text-[#8a4785]">Internal Project Repository</span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-3 bg-gray-100 rounded-2xl hover:bg-gray-200 text-gray-500 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-8 md:p-12 space-y-12">
                    {/* Overview */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Info className="w-5 h-5 text-[#8a4785]" />
                            Project Overview
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {project.fullDesc || project.desc}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Features */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                Key Features
                            </h3>
                            <ul className="space-y-3">
                                {project.features?.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#8a4785] mt-2.5 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                )) || (
                                        <li className="text-gray-400 italic">No features documented.</li>
                                    )}
                            </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                <Code2 className="w-5 h-5 text-blue-600" />
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech?.map((tech, i) => (
                                    <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-bold">
                                        {tech}
                                    </span>
                                )) || (
                                        <span className="text-gray-400 italic">No tech stack documented.</span>
                                    )}
                            </div>
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="pt-8 border-t border-gray-100 space-y-6">
                        {project.liveUrl && project.liveUrl !== "#" && (
                            <div className="p-6 bg-blue-50/50 rounded-3xl border border-blue-100">
                                <p className="text-sm font-bold text-blue-600 mb-2 flex items-center gap-2">
                                    <Globe className="w-4 h-4" />
                                    Live Deployment URL
                                </p>
                                <code className="text-gray-800 break-all bg-white px-3 py-1 rounded-lg border border-blue-100/50 font-mono text-sm block">
                                    {project.liveUrl}
                                </code>
                            </div>
                        )}

                        <div className="flex flex-wrap gap-4">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg ${project.liveUrl === "#" ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-[#8a4785] text-white hover:scale-[1.02]"}`}
                            >
                                <ExternalLink className="w-5 h-5" />
                                {project.liveUrl === "#" ? "Live Link Not Available" : "Visit Live Site"}
                            </a>
                            <a
                                href={project.manualUrl}
                                className="flex items-center gap-2 px-8 py-4 bg-gray-100 text-gray-700 rounded-2xl font-bold hover:bg-gray-200 transition-colors"
                            >
                                <FileText className="w-5 h-5" />
                                Download Documentation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function OurProjects() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    // Modal state
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Use persistence for login status
    useEffect(() => {
        const loggedIn = localStorage.getItem("isLoggedIn") === "true";
        if (loggedIn) setIsLoggedIn(true);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        setTimeout(() => {
            if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
                setIsLoggedIn(true);
                localStorage.setItem("isLoggedIn", "true");
            } else {
                setError("Invalid email or password. Please try again.");
            }
            setIsLoading(false);
        }, 1000);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
    };

    const openDetails = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const webProjects = [
        {
            title: "Inventory Management System",
            desc: "Advanced barcode-based inventory tracking and digital token system for efficient warehouse and supply chain management.",
            fullDesc: "A comprehensive solution designed for multi-warehouse management, featuring real-time stock tracking, barcode integration, and automated digital token generation. It streamlines the lifecycle of products from procurement to delivery.",
            features: ["Barcode Scanning & Printing", "Multi-Warehouse Support", "Digital Token System", "Inventory Alerts", "Audit Logs"],
            tech: ["Next.js", "Node.js", "MySQL", "Prisma", "PWA"],
            icon: Barcode,
            liveUrl: "#",
            manualUrl: "#"
        },
        {
            title: "Code Crafter – Website",
            desc: "Tailored web solutions from high-performance static sites to complex dynamic applications.",
            fullDesc: "Expertly crafted websites that cater to specific business needs, whether it's a content-driven static landing page or a complex dynamic application with custom backend logic.",
            features: ["SEO Optimized", "Responsive Design", "Custom CMS Integration", "Fast Load Times", "Secure Hosting"],
            tech: ["React", "Astro", "Tailwind CSS", "WordPress", "Directus"],
            icon: Globe,
            liveUrl: "https://codecrafterinfotech.com",
            manualUrl: "#"
        },
        {
            title: "Student Management System",
            desc: "A platform for managing enrollment, attendance, and grade recording for students.",
            fullDesc: "A centralized platform built for educational institutions to automate administrative tasks, handle large volumes of student data, and provide real-time performance analytics for parents and staff.",
            features: ["Student Enrollment", "Attendance Tracking", "Gradebook Management", "Student Portal", "Fee Management"],
            tech: ["PHP", "Laravel", "PostgreSQL", "React", "ApexCharts"],
            icon: Users,
            liveUrl: "#",
            manualUrl: "#"
        },
        {
            title: "Video Conference System",
            desc: "Host virtual meetings with video/audio, screen sharing, and chat features.",
            fullDesc: "A robust real-time communication platform that enables high-quality video calling and screen sharing, optimized for low bandwidth and enterprise-grade security.",
            features: ["HD Video/Audio", "Screen Sharing", "Recording", "End-to-End Encryption", "Interactive Whiteboard"],
            tech: ["WebRTC", "Socket.io", "React", "Go", "Redis"],
            icon: Video,
            liveUrl: "#",
            manualUrl: "#"
        },
        {
            title: "HRMS (Web)",
            desc: "Comprehensive HR solution for employee data, payroll, and performance evaluation.",
            fullDesc: "A full-suite Human Resource Management System that handles everything from onboarding and payroll to performance reviews and compliance tracking.",
            features: ["Employee Lifecycle", "Automated Payroll", "Leave Management", "Performance Analytics", "LMS Integration"],
            tech: ["Ruby on Rails", "PostgreSQL", "Vue.js", "AWS S3", "Sidekiq"],
            icon: Code2,
            liveUrl: "https://hrms.codecrafterinfotech.online/login.html",
            manualUrl: "#"
        },
        {
            title: "Puppeteer Automation",
            desc: "A Node.js library for browser automation, testing, and scraping.",
            fullDesc: "Custom automation services that leverage Puppeteer to perform complex web interactions, automated testing, and scalable data extraction from dynamic websites.",
            features: ["Automated Data Scraping", "E2E Testing", "PDF Generation", "Performance Auditing", "Headless Browsing"],
            tech: ["Node.js", "Puppeteer", "Jest", "Docker", "S3"],
            icon: Search,
            liveUrl: "#",
            manualUrl: "#"
        },
        {
            title: "Craftology- E-commerce",
            desc: "An online platform with product listings, shopping cart, and secure payments.",
            fullDesc: "A premium e-commerce experience designed for artistic and craft businesses, focusing on high-quality visuals and a seamless checkout process.",
            features: ["Product Personalization", "Advanced Filtering", "Secure Payment Gateway", "Inventory Sync", "Customer Reviews"],
            tech: ["Next.js", "Stripe", "Sanity.io", "Framer Motion", "Tailwind"],
            icon: ShoppingCart,
            liveUrl: "https://ecommerce.codecrafterinfotech.online/shop",
            manualUrl: "#"
        },
        {
            title: "Fastwin Gaming Platform",
            desc: "An engaging and interactive online game platform.",
            fullDesc: "A high-traffic gaming portal that hosts multiple casual and competitive games, featuring live leaderboards and real-time multiplayer capabilities.",
            features: ["Real-time Leaderboards", "Multiplayer Support", "In-game Wallet", "Daily Challenges", "Anti-Cheat System"],
            tech: ["React Native", "Firebase", "Node.js", "Redux", "Unity"],
            icon: Gamepad2,
            liveUrl: "#",
            manualUrl: "#"
        },
        {
            title: "Olistic Studios Website",
            desc: "A wellness platform blending holistic health, fitness, and mindful living.",
            fullDesc: "A beautiful, content-rich wellness portal designed to connect practitioners with clients, offering booking services and a directory of holistic resources.",
            features: ["Booking System", "Practitioner Directory", "Health Blog", "Video Library", "Member Dashboard"],
            tech: ["Static Generation", "Contentful", "Svelte", "Cloudinary", "Vercel"],
            icon: Activity,
            liveUrl: "https://olisticstudio.codecrafterinfotech.online",
            manualUrl: "#"
        },
        {
            title: "DuroShox – QR PackTrack",
            desc: "Smart logistics solution with QR-based product and container tracking.",
            fullDesc: "Industrial-grade logistics tracking system that uses dynamic QR codes to track the movement of parts and containers across various manufacturing stages.",
            features: ["Dynamic QR Generation", "Mobile Scanning", "Real-time Location", "Dispatch Logs", "Inventory Integration"],
            tech: ["React", "Python", "FastAPI", "MongoDB", "QR API"],
            icon: Truck,
            liveUrl: "https://codecrafterinfotech.online/duroshox/login",
            manualUrl: "#"
        },
        {
            title: "Data Collection",
            desc: "System for secure data collection, photo capture, and ID card generation.",
            fullDesc: "A secure field application for large-scale data gathering, capable of capturing high-resolution photos and generating valid ID cards on the fly.",
            features: ["Offline Mode", "Biometric Integration", "ID Card Designer", "Encrypted Storage", "Bulk Export"],
            tech: ["C#", ".NET Core", "SQL Server", "WPF", "OpenCV"],
            icon: Database,
            liveUrl: "https://datacollection.codecrafterinfotech.online/login",
            manualUrl: "#"
        },
        {
            title: "Billing Software",
            desc: "Smart solution for managing invoices, payments, and financial records.",
            fullDesc: "Professional-grade invoicing and accounting software that simplifies financial tracking for small to medium-sized enterprises.",
            features: ["GST Ready Invoicing", "Expense Tracking", "Profit/Loss Reports", "Multi-Currency", "Cloud Sync"],
            tech: ["Node.js", "Express", "React", "SQLite", "Electron"],
            icon: Calculator,
            liveUrl: "https://billing.codecrafterinfotech.online/login",
            manualUrl: "#"
        },
        {
            title: "Cropper",
            desc: "Advanced image cropping tool with shape customization and bulk download.",
            fullDesc: "A specialized web tool for photographers and designers to crop images with precision, supporting various aspect ratios and custom shapes.",
            features: ["Bulk Processing", "Smart Resizing", "Shape Masks", "Cloud Export", "Metadata Strip"],
            tech: ["JavaScript", "Canvas API", "SASS", "Web Workers", "Netlify"],
            icon: Crop,
            liveUrl: "https://cropper.codecrafterinfotech.online/",
            manualUrl: "#"
        },
        {
            title: "Bharat ID Card Website",
            desc: "Hybrid platform showcasing ID solutions with dynamic catalog & orders.",
            fullDesc: "A dedicated platform for ID solutions, offering a customizable catalog of ID cards, equipment, and management cloud services.",
            features: ["Custom Card Creator", "Dynamic Catalog", "Secure Portal", "Order Tracking", "Partner Management"],
            tech: ["Vue.js", "Firebase", "Nuxt.js", "Stripe", "Algolia"],
            icon: CreditCard,
            liveUrl: "https://bharatweb.codecrafterinfotech.online/index.html",
            manualUrl: "#"
        },
        {
            title: "Hostel Management System",
            desc: "Efficient management of room allocations, resident data, and facility maintenance for hostels.",
            fullDesc: "An all-in-one residential management system for corporate hostels and student housing, automating room bookings and visitor logs.",
            features: ["Room Allocation", "Mess Attendance", "Visitor Logs", "Maintenance Tickets", "Digital Payments"],
            tech: ["Python", "Django", "PostgreSQL", "React", "Bootstrap"],
            icon: Building2,
            liveUrl: "#",
            manualUrl: "#"
        },
        {
            title: "Matrimony Website",
            desc: "A secure and user-friendly platform for finding life partners with advanced search and matchmaking features.",
            fullDesc: "A modern matrimony portal focused on user privacy and deep matching algorithms to help users find their ideal life partner safely.",
            features: ["Deep Matching", "Profile Verification", "Chat System", "Privacy Controls", "Success Stories"],
            tech: ["Node.js", "Express", "MySQL", "React", "Socket.io"],
            icon: Heart,
            liveUrl: "#",
            manualUrl: "#"
        },
        {
            title: "Eco Waste Connect",
            desc: "An all-in-one platform for eco-focused ID solutions and order management.",
            fullDesc: "An all-in-one platform for eco-focused ID solutions and order management.",
            features: ["Waste Tracking", "Eco Credits", "Community Connect", "Schedule Pickups", "Recycle Guide"],
            tech: ["React Native", "Firebase", "Node.js", "Google Maps API"],
            icon: Recycle,
            liveUrl: "https://echowasteconnect.codecrafterinfotech.online/citizen_login",
            manualUrl: "#"
        }
    ];

    const androidProjects = [
        {
            title: "HRMS Mobile",
            desc: "A smart HR management app designed for employee attendance using punch-in and punch-out functionality.",
            fullDesc: "The mobile companion to our HRMS platform, enabling employees to track their attendance with GPS-verified check-ins and check-outs.",
            features: ["GPS Check-in", "Face Recognition", "Payslip Access", "Leave Requests", "Team Org Chart"],
            tech: ["Kotlin", "Jetpack Compose", "Dagger Hilt", "Retrofit", "Google Maps SDK"],
            icon: Smartphone,
            liveUrl: "#",
            manualUrl: "#"
        },
        {
            title: "Food Token App",
            desc: "A digital token system for mini hotels to manage food orders quickly and efficiently.",
            fullDesc: "A tablet-based ordering system for restaurants and hostels that replaces manual paper tokens with a streamlined digital workflow.",
            features: ["KOT Printing", "Kitchen Display", "Daily Settlements", "Menu Management", "Customer Feedback"],
            tech: ["Kotlin", "Android Studio", "Room Database", "Firebase", "Thermal Print API"],
            icon: Layout,
            liveUrl: "#",
            manualUrl: "#"
        },
        {
            title: "Dine Master Waiter App",
            desc: "A restaurant management app where waiters can assign menus to specific tables.",
            fullDesc: "Optimized for speed, Dine Master allows waiters to take orders instantly at the table, sync with the central server, and reduce manual errors.",
            features: ["Table Management", "Split Billing", "Order Sync", "Ingredient Alerts", "Staff Shifts"],
            tech: ["Kotlin", "ViewModel", "Coroutines", "REST API", "PDF Generator"],
            icon: Code2,
            liveUrl: "#",
            manualUrl: "#"
        }
    ];

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#8a4785]/10 via-white to-[#c6809c]/10 p-6">
                <div className="w-full max-w-md">
                    <div className="glass p-10 rounded-[3rem] border border-white/40 shadow-2xl space-y-8 animate-in fade-in zoom-in duration-500">
                        <div className="text-center space-y-4">
                            <div className="w-20 h-20 bg-gradient-to-r from-[#8a4785] to-[#c6809c] rounded-3xl flex items-center justify-center mx-auto shadow-lg mb-6">
                                <Lock className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900">Project Console</h1>
                            <p className="text-gray-600 font-medium">Please login to access all projects</p>
                        </div>

                        {error && (
                            <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-medium animate-in slide-in-from-top duration-300">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full pl-12 pr-6 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#8a4785]/20 focus:border-[#8a4785] outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full pl-12 pr-12 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#8a4785]/20 focus:border-[#8a4785] outline-none transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#8a4785] transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-5 bg-gradient-to-r from-[#8a4785] to-[#c6809c] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-lg group disabled:opacity-70 disabled:hover:scale-100"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Authenticating...
                                    </>
                                ) : (
                                    <>
                                        Login to Access
                                        <ExternalLink className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full overflow-hidden bg-white">
            <ProjectDetailModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            <section className="pt-32 pb-4 px-6 lg:px-20 bg-gradient-to-b from-[#8a4785]/10 to-transparent relative">
                <button
                    onClick={handleLogout}
                    className="absolute top-32 right-6 lg:right-20 px-6 py-2 bg-white/80 border border-[#8a4785]/20 text-[#8a4785] rounded-xl font-bold hover:bg-[#8a4785] hover:text-white transition-all shadow-sm"
                >
                    Logout
                </button>
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#8a4785] to-[#c6809c] bg-clip-text text-transparent">
                        Our Core Projects
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                        Detailed internal repository of all our active and past projects with deployment links and manuals.
                    </p>
                </div>
            </section>

            {/* Web Projects Grid */}
            <section className="py-10 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 flex items-center justify-between">
                        <h2 className="text-3xl font-bold text-[#8a4785] border-l-4 border-[#8a4785] pl-4">
                            Web Portfolio
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {webProjects.map((project, idx) => (
                            <div key={idx} className="group bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#8a4785]/5 to-transparent rounded-bl-full pointer-events-none" />

                                <div className="w-14 h-14 rounded-2xl bg-[#8a4785]/5 flex items-center justify-center mb-6 group-hover:bg-[#8a4785] transition-colors duration-500">
                                    <project.icon className="w-7 h-7 text-[#8a4785] group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                                    {project.desc}
                                </p>

                                <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                                    <button
                                        onClick={() => openDetails(project)}
                                        title="View Details"
                                        className="flex flex-col items-center gap-1 p-3 rounded-2xl bg-gray-50 text-gray-600 hover:bg-[#8a4785] hover:text-white transition-all group/btn"
                                    >
                                        <Info className="w-5 h-5" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider">Detail</span>
                                    </button>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Live URL"
                                        className="flex flex-col items-center gap-1 p-3 rounded-2xl bg-gray-50 text-gray-600 hover:bg-blue-600 hover:text-white transition-all group/btn"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider">Live</span>
                                    </a>
                                    <a
                                        href={project.manualUrl}
                                        title="Download Manual"
                                        className="flex flex-col items-center gap-1 p-3 rounded-2xl bg-gray-50 text-gray-600 hover:bg-green-600 hover:text-white transition-all group/btn"
                                    >
                                        <Download className="w-5 h-5" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider">Manual</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Android Projects Grid */}
            <section className="py-20 px-6 lg:px-20 bg-gray-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold text-gray-900">
                            Android <span className="text-[#8a4785]">Applications</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {androidProjects.map((project, idx) => (
                            <div key={idx} className="group bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                                <div className="w-16 h-16 rounded-2xl bg-[#8a4785]/5 flex items-center justify-center mb-8 group-hover:bg-[#8a4785] transition-colors duration-500">
                                    <project.icon className="w-8 h-8 text-[#8a4785] group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                                    {project.desc}
                                </p>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => openDetails(project)}
                                        className="flex-1 py-4 bg-gray-50 rounded-2xl text-gray-700 font-bold hover:bg-[#8a4785] hover:text-white transition-all flex items-center justify-center gap-2"
                                    >
                                        <Info className="w-5 h-5" />
                                        Detail
                                    </button>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-4 bg-gray-50 rounded-2xl text-gray-700 font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        App
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Contact Info */}
            <section className="py-24 px-6 lg:px-20">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-gray-900">Internal Support</h2>
                        <p className="text-lg text-gray-600">For access issues or manual updates, contact admin.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Phone, title: "Admin Support", content: "+91 94058 43312", href: "https://wa.me/919405843312", color: "text-purple-600", bg: "bg-purple-50" },
                            { icon: Mail, title: "Official Help", content: "codecrafter.help@gmail.com", href: "mailto:codecrafter.help@gmail.com", color: "text-pink-600", bg: "bg-pink-50" },
                            { icon: WhatsAppIcon, title: "Business Desk", content: "+91 94058 43312", href: "https://wa.me/919405843312", color: "text-green-600", bg: "bg-green-50" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center space-y-5 text-center">
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
