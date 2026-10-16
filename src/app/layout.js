import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://codecrafterinfotech.com";
const appName = process.env.NEXT_PUBLIC_APP_NAME || "Code Crafter Infotech";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${appName} | Web & Custom ERP Software Development Company`,
    template: `%s | ${appName}`,
  },
  description:
    "Leading IT solutions, custom ERP software, CRM solutions, barcode inventory systems, and responsive web application development company.",
  keywords: [
    "Code Crafter Infotech",
    "Code Crafter",
    "ERP software for manufacturing",
    "CRM software India",
    "barcode inventory software",
    "inventory management software",
    "school ERP software",
    "production management software",
    "purchase management software",
    "custom web development company",
    "IT solutions India",
    "software development company Pune",
  ],
  authors: [{ name: appName }],
  creator: appName,
  publisher: appName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: `${appName} | Web & Custom ERP Software Development Company`,
    description:
      "Transforming businesses with scalable ERP, CRM, inventory systems, and modern web applications.",
    siteName: appName,
    images: [
      {
        url: "/home.png",
        width: 1200,
        height: 630,
        alt: `${appName} - Software Solutions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${appName} | Web & Custom ERP Software Development Company`,
    description:
      "Transforming businesses with scalable ERP, CRM, inventory systems, and modern web applications.",
    images: ["/home.png"],
  },
  icons: {
    icon: "/logo2.png",
    apple: "/logo2.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "Code Crafter Infotech",
  alternateName: "Code Crafter",
  url: siteUrl,
  logo: `${siteUrl}/logo2.png`,
  image: `${siteUrl}/home.png`,
  description:
    "Leading IT solutions and software development company specializing in ERP, CRM, barcode inventory, and custom web applications.",
  email: "codecrafter.help@gmail.com",
  telephone: "+919405843312",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/codecrafterinfotech",
    "https://www.linkedin.com/company/code-crafter3",
    "https://www.instagram.com/code.crafter.infotect",
    "https://g.co/kgs/LEVMFmR",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919405843312",
    contactType: "customer service",
    email: "codecrafter.help@gmail.com",
    availableLanguage: ["English", "Hindi", "Marathi"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
