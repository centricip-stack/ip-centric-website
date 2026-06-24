import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import Marquee from "../components/Marquee";
import NetworkCanvas from "../components/NetworkCanvas";
import { SERVICES } from "../data/services";
import { STATS } from "../data/site";

const HOME_VALUES = [
  "Strategic alignment with business objectives",
  "Uncompromising security standards",
  "Transparent, predictable service delivery",
  "Future-proof architectural thinking",
];

export default function Home() {
  return (
    <>
      <Seo title="IP Centric Systems | Enterprise IT Solutions" />

      {/* ─── Hero ───────────────────────────────────────────── */}
      <section className="relative flex items-center min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/logo.png"
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/images/hero-video.mp4" type="video/mp4" />
          </video>
          <NetworkCanvas className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-6 py-10">
          <div className="max-w-2xl">
            <p className="eyebrow inline-flex items-center gap-2 text-glow-300 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-glow-400 animate-pulse" />
              Trusted IT Consulting Partner
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-bold leading-[1.08] text-white mb-6 tracking-tight">
              Transformative IT partnership for the modern enterprise.
            </h1>
            <p className="text-xl text-blue-100/90 mb-10 leading-relaxed">
              We modernize infrastructure, secure your data, and accelerate
              digital transformation with precision and strategic foresight.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-brand-500 hover:bg-brand-400 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Book a free consultation
              </Link>
              <Link
                to="/services"
                className="bg-white/5 hover:bg-white/15 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all backdrop-blur-sm"
              >
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services ───────────────────────────────────────── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="font-bold uppercase tracking-wider text-brand-500 mb-3">What we do</p>
            <h2 className="font-display text-navy-900 text-3xl md:text-4xl font-bold mb-4">
              Enterprise Grade Solutions
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Comprehensive technology services built to scale, secure, and
              optimize your business operations.
            </p>
          </Reveal>

          {/* flex-wrap + center keeps the 7th card from stranding as an orphan */}
          <div className="flex flex-wrap justify-center gap-7">
            {SERVICES.map((service, i) => (
              <Reveal
                key={service.title}
                delay={(i % 3) * 80}
                className="w-full md:w-[calc(50%-0.875rem)] lg:w-[calc(33.333%-1.167rem)]"
              >
                <ServiceCard service={service} index={i} />
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
            >
              View all services <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Partners marquee ───────────────────────────────── */}
      <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
        <p className="!font-bold uppercase tracking-wider text-center text-gray-500 mb-10">
          Trusted by industry leaders
        </p>
        <Marquee />
      </section>

      {/* ─── About snippet ──────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <p className="!font-bold uppercase tracking-wider text-brand-500 mb-3">Who we are</p>
              <h2 className="font-display text-navy-900 text-3xl md:text-4xl font-bold mb-5 leading-tight">
                Trusted technology partners.
              </h2>
              <p className="text-muted text-base leading-relaxed mb-5">
                At IP Centric Systems, we don't just fix IT problems — we
                architect business solutions. For over a decade, we've partnered
                with mid-to-large enterprises globally to navigate complex
                digital landscapes.
              </p>
              <p className="text-muted text-base leading-relaxed mb-8">
                Our approach combines deep engineering expertise with strategic
                business acumen, translating technical capability into measurable
                operational impact.
              </p>
              <ul className="space-y-3 mb-9">
                {HOME_VALUES.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-blue-50 text-brand-500 rounded-full grid place-items-center flex-shrink-0">
                      <ChevronRight size={12} aria-hidden />
                    </span>
                    <span className="text-ink font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl font-extrabold text-navy-900 mb-1">
                      {s.value}
                    </div>
                    <div className="eyebrow text-faint">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-brand-500/20 to-glow-400/10 rounded-3xl blur-sm" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                alt="The IP Centric Systems team collaborating in an office"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "/images/team-placeholder.svg";
                }}
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[460px]"
              />
              <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-xl px-5 py-4">
                <div className="font-display text-2xl font-extrabold text-navy-900">
                  150+
                </div>
                <div className="text-xs text-muted font-medium">
                  Enterprise Clients
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────── */}
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
