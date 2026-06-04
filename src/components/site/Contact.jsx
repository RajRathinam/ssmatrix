"use client";
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram, Send } from "lucide-react";
import { useState } from "react";

export default function Contact({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "+1 763 1683",
  email = "Moneta@gmail.com",
  address = "123 Innovation Avenue, Suite 456, Tech District, San Francisco, CA 94107",
  web = { label: "ssmatrix.com", url: "#" },
}) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ firstname: "", lastname: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 md:py-32" style={{ backgroundColor: "var(--background)" }}>
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-20">

          {/* Left — Contact Details */}
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1
                className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
              >
                {title}
              </h1>
              <p className="text-body" style={{ color: "var(--muted-foreground)" }}>{description}</p>
            </div>

            <div className="mx-auto w-fit lg:mx-0 space-y-4">
              <h3
                className="mb-4 text-center text-2xl font-semibold lg:text-left"
                style={{ color: "var(--foreground)" }}
              >
                Contact Details
              </h3>

              {/* Address */}
              <div
                className="flex items-start gap-4 rounded p-5 border transition-all duration-300 hover:shadow-sm"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--accent)", color: "var(--primary)" }}
                >
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--foreground)" }}>Visit Us</p>
                  <p className="text-body leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{address}</p>
                </div>
              </div>

              {/* Phone */}
              <div
                className="flex items-start gap-4 rounded p-5 border transition-all duration-300 hover:shadow-sm"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--accent)", color: "var(--primary)" }}
                >
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--foreground)" }}>Call Us</p>
                  <a
                    href={`tel:${phone}`}
                    className="text-body hover:opacity-80 transition-opacity"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {phone}
                  </a>
                  <p className="text-body mt-0.5" style={{ color: "var(--muted-foreground)", opacity: 0.6 }}>
                    Mon–Fri, 9 AM – 6 PM
                  </p>
                </div>
              </div>

              {/* Email */}
              <div
                className="flex items-start gap-4 rounded p-5 border transition-all duration-300 hover:shadow-sm"
                style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--accent)", color: "var(--primary)" }}
                >
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--foreground)" }}>Email Us</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-body underline hover:opacity-80 transition-opacity"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {email}
                  </a>
                  <p className="text-body mt-0.5" style={{ color: "var(--muted-foreground)", opacity: 0.6 }}>
                    We reply within 24 hours
                  </p>
                </div>
              </div>

              {/* Social */}
              <div
                className="rounded p-5 border"
                style={{ backgroundColor: "var(--accent)", borderColor: "var(--border)" }}
              >
                <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                  Follow Our Journey
                </p>
                <div className="flex gap-3">
                  {[
                    { Icon: Linkedin, href: "#", label: "LinkedIn" },
                    { Icon: Facebook, href: "#", label: "Facebook" },
                    { Icon: Instagram, href: "#", label: "Instagram" },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-9 h-9 rounded flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:opacity-80"
                      style={{
                        backgroundColor: "var(--card)",
                        color: "var(--primary)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className="mx-auto flex max-w-screen-md flex-col flex-1 rounded border overflow-hidden"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
          >
            {/* Form header */}
            <div className="px-8 py-6" style={{ backgroundColor: "var(--primary)" }}>
              <h3 className="text-xl font-bold text-white">Send a Message</h3>
              <p className="text-body mt-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                We'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5 flex-1">
              {isSubmitted && (
                <div
                  className="p-4 rounded text-sm"
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "var(--primary)",
                    border: "1px solid var(--border)",
                  }}
                >
                  ✨ Thanks for reaching out! We'll be in touch soon.
                </div>
              )}

              {/* First + Last Name */}
              <div className="flex gap-4">
                <div className="grid w-full gap-1.5">
                  <label
                    htmlFor="firstname"
                    className="text-sm font-medium"
                    style={{ color: "var(--foreground)" }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    required
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full px-4 py-2.5 rounded text-sm transition-all duration-200 focus:outline-none focus:ring-2"
                    style={{
                      border: "1px solid var(--border)",
                      backgroundColor: "var(--background)",
                      color: "var(--foreground)",
                    }}
                  />
                </div>
                <div className="grid w-full gap-1.5">
                  <label
                    htmlFor="lastname"
                    className="text-sm font-medium"
                    style={{ color: "var(--foreground)" }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    required
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full px-4 py-2.5 rounded text-sm transition-all duration-200 focus:outline-none focus:ring-2"
                    style={{
                      border: "1px solid var(--border)",
                      backgroundColor: "var(--background)",
                      color: "var(--foreground)",
                    }}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="grid gap-1.5">
                <label htmlFor="email" className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-2.5 rounded text-sm transition-all duration-200 focus:outline-none focus:ring-2"
                  style={{
                    border: "1px solid var(--border)",
                    backgroundColor: "var(--background)",
                    color: "var(--foreground)",
                  }}
                />
              </div>

              {/* Subject */}
              <div className="grid gap-1.5">
                <label htmlFor="subject" className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-2.5 rounded text-sm transition-all duration-200 focus:outline-none focus:ring-2"
                  style={{
                    border: "1px solid var(--border)",
                    backgroundColor: "var(--background)",
                    color: "var(--foreground)",
                  }}
                />
              </div>

              {/* Message */}
              <div className="grid gap-1.5">
                <label htmlFor="message" className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here."
                  className="w-full px-4 py-2.5 rounded text-sm transition-all duration-200 focus:outline-none focus:ring-2 resize-none"
                  style={{
                    border: "1px solid var(--border)",
                    backgroundColor: "var(--background)",
                    color: "var(--foreground)",
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded text-sm font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-center text-xs" style={{ color: "var(--muted-foreground)" }}>
                We respect your privacy. No spam, ever.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}