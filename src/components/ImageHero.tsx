type ImageHeroProps = {
  /** Background image path, e.g. "/images/clients-hero.jpg". */
  image: string;
  /** Small uppercase tagline (rendered cyan via the .eyebrow style). */
  eyebrow: string;
  /** Large white heading. */
  title: string;
  /** Readable white subheading. */
  subtitle: string;
};

/**
 * Full-bleed hero with an image background, a dark left-weighted gradient
 * overlay for text contrast, and left-aligned foreground text.
 */
export default function ImageHero({ image, eyebrow, title, subtitle }: ImageHeroProps) {
  return (
    <section className="relative min-h-[58vh] lg:min-h-[66vh] flex items-center overflow-hidden bg-navy-950">
      {/* Background image — covers the whole section */}
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark gradient overlays — strongest on the LEFT for text contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/20"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"
        aria-hidden
      />

      {/* Foreground text — left aligned */}
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl text-left">
          <p className="eyebrow text-glow-400 mb-4">{eyebrow}</p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-5">
            {title}
          </h1>
          <p className="text-blue-100/90 text-lg md:text-xl leading-relaxed max-w-xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
