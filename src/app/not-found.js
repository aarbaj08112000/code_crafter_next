// Import global styles and fonts
"use client";
import "./globals.css";
import Image from "next/image";

export default function NotFound() {
  return (
        <div className="flex items-center justify-center h-screen bg-gray-100 ">
          <Image
            className="animate-wiggle animate-infinite"
            src="/404_page_not_found.png"
            alt="Page not found"
            width={600}
            height={600}
            priority
          />
        </div>  
  );
}
