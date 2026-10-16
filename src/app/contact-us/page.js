import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | Code Crafter Infotech",
  description:
    "Get in touch with Code Crafter Infotech for custom web development, ERP software, CRM solutions, or general inquiries. Call +91 94058 43312 or email codecrafter.help@gmail.com.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUs() {
  return <ContactClient />;
}