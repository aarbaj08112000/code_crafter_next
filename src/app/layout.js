import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
title: process.env.NEXT_PUBLIC_APP_NAME,
  description: "IT Solutions & Development Company",
  icons: {
    icon: "/logo2.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
