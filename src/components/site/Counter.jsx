import { useEffect, useRef, useState } from "react";

export default function Counter({ end, target, value, suffix = "", duration = 2000 }) {
  const targetVal = Number(end ?? target ?? value ?? 0);
  const safeTarget = Number.isNaN(targetVal) ? 0 : targetVal;
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setVal(safeTarget);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (t) => {
            const p = Math.min((t - start) / duration, 1);
            const easeOut = 1 - (1 - p) * (1 - p);
            setVal(Math.floor(easeOut * safeTarget));
            if (p < 1) {
              requestAnimationFrame(animate);
            } else {
              setVal(safeTarget);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [safeTarget, duration]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

