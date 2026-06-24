import { Quote } from "lucide-react";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import ImageHero from "../components/ImageHero";
import PartnerGrid from "../components/PartnerGrid";
import { TESTIMONIALS } from "../data/testimonials";

export default function Clients() {
  return (
    <>
      <Seo
        title="Clients"
        description="Trusted by 150+ enterprises across finance, healthcare, logistics, and government sectors worldwide."
      />      
      <ImageHero
        image="/images/clients-hero.jpg"
        eyebrow="Trusted partnerships"
        title="Our clients"
        subtitle="Trusted by 150+ enterprises across defense, healthcare, logistics, and government sectors worldwide."
      />
      

      <section className="py-20 bg-surface border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* <p className="!font-bold uppercase tracking-wider eyebrow text-brand-500 mb-3">Industry-leading partners</p> */}
            <p className="!font-bold uppercase tracking-wider text-brand-500 mb-3">Industry-leading partners</p>
            <h2 className="font-display text-navy-900 text-3xl font-bold">
              Our partner network
            </h2>
            <p className="text-muted mt-3 max-w-xl mx-auto">
              We collaborate with global technology leaders and trusted
              institutions to deliver best-in-class solutions.
            </p>
          </div>
          <PartnerGrid />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="!font-bold uppercase tracking-wider text-brand-500 mb-3">Testimonials</p>
            <h2 className="font-display text-navy-900 text-3xl font-bold">
              What our clients say
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 90}
                className="relative bg-surface p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Quote
                  size={30}
                  className="text-brand-500/25 mb-4"
                  aria-hidden
                />
                <p className="text-muted text-base leading-relaxed mb-6">
                  {t.quote}
                </p>
                <div className="text-ink font-bold text-sm">{t.name}</div>
                <div className="text-xs text-muted">{t.role}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
