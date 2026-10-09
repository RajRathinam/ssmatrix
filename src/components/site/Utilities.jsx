import { useEffect, useState } from "react";
import { ArrowUp, MessageSquare, Phone } from "lucide-react";

export function ScrollProgress() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setPercent((window.scrollY / scrollHeight) * 100);
      } else {
        setPercent(0);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[70] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-indigo-600 transition-[width] duration-150 ease-out shadow-sm"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Quick WhatsApp Action Beacon */}
      <a
        href="https://wa.me/919865348416"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="absolute right-full mr-3 px-3 py-1 rounded-xl bg-slate-900 text-white text-[11px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Chat with HR Team
        </span>
      </a>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`w-11 h-11 rounded-full bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-950 shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer ${
          show
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-75 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
