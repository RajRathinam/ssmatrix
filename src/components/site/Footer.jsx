import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/ssmatrix-logo.png";

export default function Footer() {
  return (
    <footer className="relative bg-[oklch(0.14_0.03_280)] text-white/80 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-20" />
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <img src={logo} alt="SS Matrix" className="h-10 bg-white/95 rounded-lg p-1 inline-block" />
            <p className="mt-5 text-sm leading-relaxed max-w-sm">
              SS MATRIX Consultancy & Development Services — your trusted recruitment, HR and IT partner empowering businesses and careers across India.
            </p>
            <div className="mt-5 flex gap-3">
              {[Linkedin, Facebook, Instagram].map((Ic, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:text-secondary transition" aria-label="Social">
                  <Ic className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home","About","Services","Process","Gallery","Contact"].map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-secondary transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Recruitment","Staffing","HR Consultancy","Executive Search","Web Development","IT Services"].map(l => (
                <li key={l}><a href="#services" className="hover:text-secondary transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" /> Anna Nagar West Ext., Chennai – 600101</li>
              <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-secondary shrink-0" /> +91 98653 48416</li>
              <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-secondary shrink-0" /> hr@ssmatrix.in</li>
            </ul>
            <form className="mt-5 flex gap-2" onSubmit={(e)=>{e.preventDefault(); alert("Subscribed!");}}>
              <input type="email" required placeholder="Your email" className="flex-1 px-3 py-2 rounded-full bg-white/10 border border-white/15 text-sm outline-none focus:border-secondary" />
              <button className="px-4 py-2 rounded-full bg-gradient-brand text-white text-sm font-display font-semibold">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 text-center text-xs text-white/60">
          © 2026 SS MATRIX Consultancy & Development Services. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
