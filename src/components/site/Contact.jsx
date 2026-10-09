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
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "Employer (Looking to Hire)",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryOptions = [
    "Employer (Looking to Hire)",
    "Job Seeker (Submit Resume)",
    "IT & Web Development",
    "Campus Placement Partnership",
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
        inquiryType: "Employer (Looking to Hire)",
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
            Let's Start a Conversation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
            Get in Touch with{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
              Our Experts
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Whether you need to staff a team of senior engineers, find your next leadership career step, or build high-performance web applications, we are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Left Column: Contact Details (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col gap-6" data-aos="fade-right">
            {/* Quick Cards */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-6">
              <h3 className="text-xl font-bold font-display text-slate-900">
                Corporate Office
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-0.5">
                    Visit Our Chennai Office
                  </h4>
                  <p className="text-sm font-semibold text-slate-900 leading-snug">
                    Anna Nagar West Extension
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Chennai, Tamil Nadu – 600101, India
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
                    Direct Phone Line
                  </h4>
                  <a
                    href="tel:+919865348416"
                    className="text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors block"
                  >
                    +91 98653 48416
                  </a>
                  <span className="text-[11px] text-slate-500">
                    Mon – Sat, 9:00 AM – 6:30 PM IST
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
                    href="mailto:hr@ssmatrix.in"
                    className="text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors block"
                  >
                    hr@ssmatrix.in
                  </a>
                  <span className="text-[11px] text-slate-500">
                    Guaranteed response within 24 hours
                  </span>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-4 border-t border-slate-200/80">
                <a
                  href="https://wa.me/919865348416"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold font-display">Connect Online</h4>
                <p className="text-xs text-slate-400 mt-0.5">Follow our hiring updates</p>
              </div>

              <div className="flex gap-2.5">
                {[
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Column: Interactive Consultation Form (7 cols) ── */}
          <div
            className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden"
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
                Fill out the details below and an SS MATRIX executive will reach out within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              {isSubmitted && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold block">Inquiry Submitted Successfully!</span>
                    <span>Our team will contact you at {formData.phone || "your contact details"} shortly.</span>
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
                    placeholder="e.g. Cognizant / Self"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="text-xs font-semibold text-slate-700 block mb-1.5">
                  How can we assist you? (Role specifications, headcount, timeline) *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Provide any details about your hiring volume, skill requirements, or project details..."
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
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-2">
                <span>🔒 100% Confidential</span>
                <span>•</span>
                <span>⚡ 24-Hour Callback</span>
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