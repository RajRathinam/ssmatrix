import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header with organic feel */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-indigo-500 uppercase">Reach Out</span>
          <div className="relative inline-block mt-4">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500">Connect</span>
            </h2>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full"></div>
          </div>
          <p className="mt-8 text-slate-500 text-base max-w-md mx-auto">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left column - Contact Info with personality */}
          <div className="space-y-6" data-aos="fade-right" data-aos-delay="100">
            <div className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-indigo-100">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 text-lg">Visit Us</h3>
                  <p className="mt-2 text-slate-500 text-sm leading-relaxed">
                    123 Innovation Avenue, Suite 456<br />
                    Tech District, San Francisco,<br />
                    CA 94107, United States
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-indigo-100">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 text-lg">Call Us</h3>
                  <div className="mt-2 space-y-1">
                    <a href="tel:+17631683" className="block text-sm text-slate-500 hover:text-indigo-600 transition-colors">
                      +1 763 1683
                    </a>
                    <p className="text-xs text-slate-400">Mon-Fri, 9 AM - 6 PM PST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-indigo-100">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 text-lg">Email Us</h3>
                  <div className="mt-2 space-y-1">
                    <a href="mailto:Moneta@gmail.com" className="block text-sm text-slate-500 hover:text-indigo-600 transition-colors">
                      Moneta@gmail.com
                    </a>
                    <p className="text-xs text-slate-400">We reply within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social section with organic feel */}
            <div className="bg-gradient-to-r from-indigo-50 to-indigo-50/30 rounded-2xl p-7 border border-indigo-100">
              <h3 className="font-semibold text-slate-900 text-lg mb-4">Follow Our Journey</h3>
              <div className="flex gap-3">
                {[
                  { Icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-[#0077b5]" },
                  { Icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-[#1877f2]" },
                  { Icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-[#e4405f]" }
                ].map(({ Icon, href, label, color }, i) => (
                  <a 
                    key={i} 
                    href={href} 
                    className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-indigo-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
                    style={{ hover: { backgroundColor: color.split(' ')[1] } }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = color.split(' ')[1];
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                    aria-label={label}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </a>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-4">Connect with us on social media</p>
            </div>
          </div>

          {/* Right column - Form with character */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden" data-aos="fade-left" data-aos-delay="200">
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-6">
              <h3 className="text-xl font-bold text-white">Send a Message</h3>
              <p className="text-indigo-100 text-sm mt-1">We'll get back to you within 24 hours</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8">
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm animate-in fade-in duration-300">
                  ✨ Thanks for reaching out! We'll be in touch soon.
                </div>
              )}
              
              <div className="space-y-5">
                <div className="group">
                  <label className="text-sm font-medium text-slate-700 block mb-2">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 bg-slate-50/30 text-slate-900 placeholder:text-slate-400 transition-all duration-200"
                    placeholder="e.g., Sarah Johnson"
                  />
                </div>
                
                <div className="group">
                  <label className="text-sm font-medium text-slate-700 block mb-2">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 bg-slate-50/30 text-slate-900 placeholder:text-slate-400 transition-all duration-200"
                    placeholder="sarah@company.com"
                  />
                </div>
                
                <div className="group">
                  <label className="text-sm font-medium text-slate-700 block mb-2">
                    Your message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 bg-slate-50/30 text-slate-900 placeholder:text-slate-400 transition-all duration-200 resize-none"
                    placeholder="Tell us about your project or question..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
                
                <p className="text-center text-xs text-slate-400 mt-4">
                  We respect your privacy. No spam, ever.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}