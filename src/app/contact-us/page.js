"use client";

import { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { submitContactForm } from "./actions";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contact_reason: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.length < 2) {
      newErrors.name = "Your name must consist of at least 2 characters.";
    }

    if (!formData.email) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone) {
      newErrors.phone = "Please enter your phone number.";
    } else if (formData.phone.length > 10) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.contact_reason) {
      newErrors.contact_reason = "Please enter a reason for contact.";
    }

    if (!formData.message) {
      newErrors.message = "Please enter your message.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrorMessage("");

    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));

    try {
      const result = await submitContactForm(data);
      if (result.success === 1) {
        setIsSuccess(true);
        // Reset after success
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: "", email: "", phone: "", contact_reason: "", message: "" });
          setErrors({});
        }, 5000);
      } else {
        setErrorMessage(result.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for the field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Header */}
      <section className="pt-32 pb-4 px-6 lg:px-20 bg-gradient-to-b from-[#8a4785]/10 to-transparent">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#8a4785] to-[#c6809c] bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Have a project in mind? Let's discuss how we can help you grow.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours. We're excited to hear from you!
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Phone, title: "Phone Number", content: "+91 94058 43312", href: "https://wa.me/919405843312" },
                { icon: Mail, title: "Email Address", content: "codecrafter.help@gmail.com", href: "mailto:codecrafter.help@gmail.com" },
                { icon: WhatsAppIcon, title: "WhatsApp", content: "+91 94058 43312", href: "https://wa.me/919405843312" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#8a4785]/10 flex items-center justify-center group-hover:bg-[#8a4785] transition-all duration-300">
                    <item.icon className="w-6 h-6 text-[#8a4785] group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-gray-600 hover:text-[#8a4785] transition-colors"
                    >
                      {item.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass p-10 rounded-[3rem] border border-white/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8a4785]/5 rounded-full -translate-y-1/2 translate-x-1/2" />

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-20 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-gray-900">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out. We'll be in touch shortly.</p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-[#8a4785] font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>
                  {errorMessage && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 text-red-600 rounded-2xl border border-red-100 animate-in fade-in duration-300">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm font-medium">{errorMessage}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="John Doe"
                        className={`w-full px-6 py-4 bg-white/50 border ${errors.name ? 'border-red-500 bg-red-50/10' : 'border-gray-200'} rounded-2xl focus:ring-2 focus:ring-[#8a4785]/20 focus:border-[#8a4785] outline-none transition-all`}
                      />
                      {errors.name && <p className="text-red-500 text-xs ml-2 mt-1 font-medium italic">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="john@example.com"
                        className={`w-full px-6 py-4 bg-white/50 border ${errors.email ? 'border-red-500 bg-red-50/10' : 'border-gray-200'} rounded-2xl focus:ring-2 focus:ring-[#8a4785]/20 focus:border-[#8a4785] outline-none transition-all`}
                      />
                      {errors.email && <p className="text-red-500 text-xs ml-2 mt-1 font-medium italic">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        maxLength={10}
                        placeholder="Enter 10 digit number"
                        className={`w-full px-6 py-4 bg-white/50 border ${errors.phone ? 'border-red-500 bg-red-50/10' : 'border-gray-200'} rounded-2xl focus:ring-2 focus:ring-[#8a4785]/20 focus:border-[#8a4785] outline-none transition-all`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs ml-2 mt-1 font-medium italic">{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Reason for Contact</label>
                      <select
                        name="contact_reason"
                        value={formData.contact_reason}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 bg-white/50 border ${errors.contact_reason ? 'border-red-500 bg-red-50/10' : 'border-gray-200'} rounded-2xl focus:ring-2 focus:ring-[#8a4785]/20 focus:border-[#8a4785] outline-none transition-all appearance-none`}
                      >
                        <option value="">Select a reason</option>
                        <option>Web Development</option>
                        <option>UI/UX Design</option>
                        <option>App Development</option>
                        <option>Digital Marketing</option>
                        <option>Other</option>
                      </select>
                      {errors.contact_reason && <p className="text-red-500 text-xs ml-2 mt-1 font-medium italic">{errors.contact_reason}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your project..."
                      className={`w-full px-6 py-4 bg-white/50 border ${errors.message ? 'border-red-500 bg-red-50/10' : 'border-gray-200'} rounded-2xl focus:ring-2 focus:ring-[#8a4785]/20 focus:border-[#8a4785] outline-none transition-all resize-none`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs ml-2 mt-1 font-medium italic">{errors.message}</p>}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-gradient-to-r from-[#8a4785] to-[#c6809c] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-lg group disabled:opacity-70 disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}