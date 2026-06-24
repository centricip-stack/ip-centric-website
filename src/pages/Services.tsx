import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import ImageHero from "../components/ImageHero";
import ServiceCard from "../components/ServiceCard";
import { SERVICES } from "../data/services";

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Cybersecurity, managed IT, cloud, data science, app development, infrastructure, and defense solutions for the enterprise."
      />
      <ImageHero
        image="/images/services-hero.jpg"
        eyebrow="Capabilities"
        title="Our services"
        subtitle="Comprehensive, enterprise-grade technology services designed to scale, secure, and optimize your operations."
      />

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {SERVICES.map((service, i) => (
              <Reveal
                key={service.title}
                delay={(i % 3) * 80}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
              >
                <ServiceCard service={service} index={i} link={false} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────── */}
      <section className="relative py-24 text-center px-6 overflow-hidden bg-white border-t border-gray-100">
        <div className="absolute inset-0 dot-grid-faint" aria-hidden />

        {/* Decorative bubbles */}
        <div className="absolute -top-28 -left-24 w-80 h-80 bg-brand-500/20 rounded-full blur-3xl animate-float" aria-hidden />
        <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-glow-400/20 rounded-full blur-3xl animate-float-delayed" aria-hidden />

        <div className="relative max-w-2xl mx-auto">
          <p className="!font-bold uppercase tracking-wider text-brand-500 mb-3">Get started today</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight text-navy-950">
            Ready to modernize your infrastructure?
          </h2>
          <p className="text-muted text-lg mb-9">
            Connect with our consultants for a no-obligation technology
            assessment.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-500 hover:bg-brand-400 text-white px-10 py-4 rounded-xl font-semibold text-base transition-all shadow-lg hover:-translate-y-0.5"
          >
            Start the conversation
          </Link>
        </div>
      </section>
    </>
  );
}
