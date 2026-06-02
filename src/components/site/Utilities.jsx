import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent pointer-events-none">
      <div className="h-full bg-gradient-brand transition-[width]" style={{ width: `${p}%` }} />
    </div>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-brand text-primary-foreground shadow-elegant flex items-center justify-center transition-all ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 700);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity">
      <div className="text-center">
        <div className="w-14 h-14 mx-auto rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
        <div className="mt-4 font-display font-semibold text-gradient-brand">SS MATRIX</div>
      </div>
    </div>
  );
}
