import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  Send,
  MessageSquare,
  Clock,
  Sparkles,
  CheckCircle2,
  Building,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "Manpower Solutions (Hire Talent)",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryOptions = [
    "Manpower Solutions (Hire Talent)",
    "Technology Consulting (Software / Cloud / AI)",
    "Both (360° People & Tech Solution)",
    "General Inquiry",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "Manpower Solutions (Hire Talent)",
        company: "",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1200);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
            Ready to Build Your{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-indigo-600 bg-clip-text text-transparent">
              Team or Platform?
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Tell us what you need and we'll respond within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Left Column: Contact Details (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col gap-6" data-aos="fade-right">
            {/* Quick Cards */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-6">
              <h3 className="text-xl font-bold font-display text-slate-900">
                Contact Information
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-0.5">
                    Location
                  </h4>
                  <p className="text-sm font-bold text-slate-900 leading-snug">
                    Madurai, Tamil Nadu, India
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Serving startups, SMEs and enterprises globally
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-0.5">
                    Direct Line
                  </h4>
                  <a
                    href="tel:+910000000000"
                    className="text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors block"
                  >
                    +91 00000 00000
                  </a>
                  <span className="text-[11px] text-slate-500">
                    Mon – Sat: 9:00 AM – 6:30 PM IST
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-0.5">
                    Official Email
                  </h4>
                  <a
                    href="mailto:info@ait3ch360.com"
                    className="text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors block"
                  >
                    info@ait3ch360.com
                  </a>
                  <span className="text-[11px] text-slate-500">
                    Guaranteed response within 1 business day
                  </span>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-4 border-t border-slate-200/80">
                <a
                  href="mailto:info@ait3ch360.com"
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Send Direct Email to info@ait3ch360.com</span>
                </a>
              </div>
            </div>

            {/* SLA Trust Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-amber-200/70">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                  ⚡
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    Fast 1 Business Day Response
                  </div>
                  <div className="text-xs text-slate-600">
                    Our team reviews your requirement and prepares a dedicated roadmap.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Interactive Proposal Form (7 cols) ── */}
          <div
            className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden"
            data-aos="fade-left"
          >
            {/* Form Top Header */}
            <div className="p-7 sm:p-8 bg-gradient-to-r from-slate-950 to-indigo-950 text-white border-b border-slate-800">
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-1 block">
                Quick Response Mandate
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                Request a Talent or Project Proposal
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Tell us what you need and we'll respond within one business day.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              {isSubmitted && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold block">Inquiry Submitted Successfully!</span>
                    <span>An AIT3CH360 consultant will contact you shortly.</span>
                  </div>
                </div>
              )}

              {/* Inquiry Type Pills */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2">
                  What can we help you with?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {inquiryOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setFormData({ ...formData, inquiryType: opt })}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all border cursor-pointer ${
                        formData.inquiryType === opt
                          ? "bg-amber-50 text-amber-900 border-amber-400 font-bold"
                          : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Krishnan"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Email & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Work Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="text-xs font-semibold text-slate-700 block mb-1.5">
                    Company Name / Institution
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Acme Tech Solutions"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="text-xs font-semibold text-slate-700 block mb-1.5">
                  How can we assist you? (Skills, headcount, project scope, timeline) *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Provide any details about your hiring needs, technology requirements, or questions..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-2xl font-display font-bold text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-60 transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Submitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Get in Touch</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-2">
                <span>🔒 100% Confidential</span>
                <span>•</span>
                <span>⚡ 1 Business Day Response</span>
                <span>•</span>
                <span>No Spam Guarantee</span>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}