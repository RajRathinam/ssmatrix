const items = [
  { cat: "Recruitment Drives", h: "h-64", grad: "from-primary to-secondary" },
  { cat: "Corporate Events", h: "h-80", grad: "from-secondary to-primary" },
  { cat: "Training Programs", h: "h-72", grad: "from-primary via-fuchsia-500 to-secondary" },
  { cat: "Student Placements", h: "h-60", grad: "from-secondary to-amber-400" },
  { cat: "Office Activities", h: "h-72", grad: "from-violet-500 to-secondary" },
  { cat: "Recruitment Drives", h: "h-80", grad: "from-primary to-pink-500" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <span className="text-xs font-display font-semibold tracking-[0.2em] text-primary">GALLERY</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl leading-tight">
            Moments Of <span className="text-gradient-brand">Success</span>
          </h2>
        </div>

        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {items.map((it, i) => (
            <div
              key={i}
              className={`mb-5 break-inside-avoid rounded-2xl overflow-hidden relative group cursor-pointer ${it.h}`}
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${it.grad} group-hover:scale-110 transition-transform duration-700`} />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="font-display font-semibold text-lg">{it.cat}</div>
                <div className="text-xs opacity-80">SS Matrix · 2025</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
