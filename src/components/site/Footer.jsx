import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/ssmatrix-logo.png";

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;900&display=swap');

        .footer-root {
          font-family: 'Outfit', sans-serif;
          background: #0d0d12;
          color: rgba(255,255,255,0.7);
          overflow: hidden;
          position: relative;
        }

        .footer-hero-text {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: clamp(60px, 13vw, 130px);
          letter-spacing: 0.03em;
          line-height: 1;
          background: linear-gradient(90deg, #f3aa50, #e8922e, #fff3d6, #f3aa50, #e8922e, #f3aa50);
          background-size: 400% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: ssm-shimmer 5s linear infinite;
          display: block;
          padding: 56px 32px 0;
          margin-bottom: 0;
          user-select: none;
        }

        @keyframes ssm-shimmer {
          0%   { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }

        .footer-divider {
          height: 0.5px;
          background: rgba(255,255,255,0.08);
          margin: 40px 32px 0;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.3fr;
          gap: 40px;
          padding: 40px 32px 56px;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .footer-col-brand  { grid-column: 1 / -1; }
          .footer-col-contact { grid-column: 1 / -1; }
        }

        @media (max-width: 480px) {
          .footer-hero-text { padding: 40px 20px 0; }
          .footer-divider   { margin: 32px 20px 0; }
          .footer-grid      { padding: 32px 20px 48px; gap: 28px; }
        }

        .footer-col-head {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #f3aa50;
          margin: 0 0 16px;
        }

        .footer-brand-desc {
          font-size: 14px;
          line-height: 1.75;
          color: rgba(255,255,255,0.45);
          margin: 14px 0 20px;
          max-width: 300px;
        }

        .footer-socials {
          display: flex;
          gap: 8px;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 0.5px solid rgba(255,255,255,0.14);
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.45);
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .footer-social-btn:hover {
          border-color: #f3aa50;
          color: #f3aa50;
        }

        .footer-links {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .footer-links li { margin-bottom: 10px; }
        .footer-links a {
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover { color: #f3aa50; }

        .footer-contact-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 14px;
          font-size: 13.5px;
          color: rgba(255,255,255,0.55);
          line-height: 1.5;
        }
        .footer-contact-icon {
          color: #f3aa50;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .footer-subscribe {
          display: flex;
          gap: 6px;
          margin-top: 18px;
        }
        .footer-email-input {
          flex: 1;
          background: rgba(255,255,255,0.06);
          border: 0.5px solid rgba(255,255,255,0.12);
          border-radius: 6px;
          padding: 9px 16px;
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          color: white;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          min-width: 0;
        }
        .footer-email-input::placeholder { color: rgba(255,255,255,0.3); }
        .footer-email-input:focus {
          border-color: #f3aa50;
          background: rgba(255,255,255,0.09);
        }
        .footer-join-btn {
          background: linear-gradient(135deg, #f3aa50 0%, #e8922e 100%);
          border: none;
          border-radius: 6px;
          padding: 9px 20px;
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: white;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.2s, transform 0.15s;
        }
        .footer-join-btn:hover  { opacity: 0.88; transform: translateY(-1px); }
        .footer-join-btn:active { transform: translateY(0); }

        .footer-copyright {
          border-top: 0.5px solid rgba(255,255,255,0.07);
          text-align: center;
          font-family: 'Outfit', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: rgba(255,255,255,0.3);
          padding: 18px 32px;
        }
      `}</style>

      <footer className="footer-root">
        {/* Big animated brand name */}
        <span className="footer-hero-text text-center">SSMATRIX</span>

        <div className="footer-divider" />

        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-col-brand">
            <p className="footer-brand-desc hidden md:block">
              SS MATRIX Consultancy & Development Services — your trusted recruitment,
              HR and IT partner empowering businesses and careers across India.
            </p>
            <p className="footer-col-head">Social Media Links</p>
            <div className="footer-socials">
              {[
                { Icon: Linkedin,  label: "LinkedIn"  },
                { Icon: Facebook,  label: "Facebook"  },
                { Icon: Instagram, label: "Instagram" },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" className="footer-social-btn" aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="footer-col-head">Quick Links</p>
            <ul className="footer-links">
              {["Home","About","Services","Process","Gallery","Contact"].map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`}>{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="footer-col-head">Services</p>
            <ul className="footer-links">
              {["Recruitment","Staffing","HR Consultancy","Executive Search","Web Development","IT Services"].map(l => (
                <li key={l}>
                  <a href="#services">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col-contact">
            <p className="footer-col-head">Get In Touch</p>

            <div className="footer-contact-row">
              <MapPin size={15} className="footer-contact-icon" />
              <span>Anna Nagar West Ext., Chennai – 600101</span>
            </div>
            <div className="footer-contact-row">
              <Phone size={15} className="footer-contact-icon" />
              <span>+91 98653 48416</span>
            </div>
            <div className="footer-contact-row">
              <Mail size={15} className="footer-contact-icon" />
              <span>hr@ssmatrix.in</span>
            </div>

            <form
              className="footer-subscribe"
              onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }}
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="footer-email-input"
              />
              <button type="submit" className="footer-join-btn">Join</button>
            </form>
          </div>
        </div>

        <div className="footer-copyright">
          © 2026 SS MATRIX Consultancy & Development Services. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}