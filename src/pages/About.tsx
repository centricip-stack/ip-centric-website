import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import ImageHero from "../components/ImageHero";
import { ChevronRight } from "lucide-react";
import { STATS } from "../data/site";

const CORE_VALUES: [string, string][] = [
  [
    "Strategic Alignment",
    "Every engagement starts with understanding your business goals, not your tech stack.",
  ],
  [
    "Security First",
    "We embed security thinking into every architecture decision.",
  ],
  [
    "Radical Transparency",
    "Predictable delivery, honest reporting, zero hidden costs.",
  ],
  [
    "Future-Proof Thinking",
    "We build for where you're going, not just where you are today.",
  ],
];

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="A decade of trusted technology partnership with the world's leading enterprises."
      />
      {/* ─── Hero: uploaded image background + left-aligned text ─── */}
      <ImageHero
        image="/images/about-hero.jpg"
        eyebrow="Who we are"
        title="About us"
        subtitle="A decade of trusted technology partnership with the world's leading enterprises."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <h2 className="font-display text-navy-900 text-3xl font-bold mb-5 leading-tight">
                We don't just fix IT — we architect solutions.
              </h2>
              <p className="text-muted text-base leading-relaxed mb-5">
                IP Centric Systems was founded on a simple belief: Technology
                should enable business, not obstruct it. For over twelve years,
                we've delivered measurable operational impact through deep
                engineering expertise and strategic business acumen.
              </p>
              <p className="text-muted text-base leading-relaxed mb-8">
                We speak the language of the boardroom, translating technical
                capability into bottom-line results for enterprises across
                finance, healthcare, logistics, and government sectors.
              </p>
              <h3 className="font-display text-ink text-lg font-bold mb-4">
                Our core values
              </h3>
              <ul className="space-y-4">
                {CORE_VALUES.map(([title, desc]) => (
                  <li key={title} className="flex gap-4">
                    <span className="w-5 h-5 bg-blue-50 text-brand-500 rounded-full grid place-items-center flex-shrink-0 mt-0.5">
                      <ChevronRight size={12} aria-hidden />
                    </span>
                    <div className="text-sm">
                      <span className="text-ink font-semibold">{title}</span>
                      <span className="text-muted"> — {desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-brand-500/20 to-glow-400/10 rounded-3xl blur-sm" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                alt="The IP Centric Systems team at work"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "/images/team-placeholder.svg";
                }}
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </Reveal>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 pt-14 border-t border-gray-100 text-center">
            {STATS.map((s) => (
              <Reveal key={s.label}>
                <div className="font-display text-5xl font-extrabold text-navy-900 mb-2">
                  {s.value}
                </div>
                <div className="eyebrow text-muted">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
