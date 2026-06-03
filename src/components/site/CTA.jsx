export default function CTA() {
  return (
    <section className="py-20 md:py-24">
      <div>
        <div className="relative overflow-hidden p-10 md:p-16 bg-gradient-brand text-primary-foreground shadow-elegant" data-aos="zoom-in">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight">
              Looking For The Right Talent Or Career Opportunity?
            </h2>
            <p className="mt-5 text-white/90 text-base md:text-lg max-w-2xl">
              Partner with SS MATRIX and experience professional recruitment and technology solutions designed to accelerate growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-primary font-display font-semibold hover:bg-white/90 transition">
                Contact Us
              </a>
              <a href="mailto:hr@ssmatrix.in" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/40 text-white font-display font-semibold hover:bg-white/10 transition">
                Submit Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
