import { useParams, Link } from "react-router-dom";
import {
  ChevronRight,
  Check,
  Phone,
  FileText,
  Building2,
  Cpu,
} from "lucide-react";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import NotFound from "./NotFound";
import { SERVICES } from "../data/services";
import { SERVICE_DETAILS } from "../data/serviceDetails";

export default function ServiceDetail() {
  const { slug = "" } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  const detail = SERVICE_DETAILS[slug];

  // Unknown slug → standard 404.
  if (!service || !detail) return <NotFound />;

  const { icon: Icon, title, desc } = service;

  // Fallback for any gallery photo that fails to load.
  const onImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = detail.heroImage;
  };

  return (
    <>
      <Seo title={title} description={detail.metaDescription} />

      {/* ── Section 1: Hero banner + breadcrumb ───────────────────── */}
      <section className="relative min-h-[52vh] lg:min-h-[58vh] flex items-center overflow-hidden bg-navy-950">
        <img
          src={detail.heroImage}
          alt={`${title} background`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/20" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" aria-hidden />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-blue-100/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden><ChevronRight size={14} className="text-blue-100/50" /></li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li aria-hidden><ChevronRight size={14} className="text-blue-100/50" /></li>
              <li className="text-glow-300 font-medium" aria-current="page">{title}</li>
            </ol>
          </nav>

          <div className="max-w-2xl">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/15 text-glow-300 rounded-xl grid place-items-center mb-5">
              <Icon size={28} aria-hidden />
            </div>
            <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-4">
              {title}
            </h1>
            <p className="text-blue-100/90 text-lg md:text-xl leading-relaxed max-w-xl">
              {detail.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 2: Overview ───────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <Reveal className="lg:col-span-2">
              <p className="eyebrow text-brand-500 mb-3"> Overview</p>
              <h2 className="font-display text-navy-900 text-3xl font-bold mb-5 leading-tight">
                What is {title}?
              </h2>
              <p className="text-muted text-base leading-relaxed mb-5">{desc}</p>
              {detail.overview.map((para, i) => (
                <p key={i} className="text-muted text-base leading-relaxed mb-5">
                  {para}
                </p>
              ))}
            </Reveal>

            {/* At a glance card */}
            <Reveal delay={120}>
              <div className="bg-surface border border-gray-100 rounded-2xl p-7 shadow-sm">
                <h3 className="font-display text-navy-900 font-bold text-lg mb-5">
                  At a glance
                </h3>
                <div className="flex items-start gap-3 mb-5">
                  <Cpu size={18} className="text-brand-500 mt-0.5 flex-shrink-0" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold text-ink uppercase tracking-wide mb-2">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {detail.technologies.map((t) => (
                        <span key={t} className="text-xs bg-blue-50 text-brand-600 font-medium px-2.5 py-1 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 size={18} className="text-brand-500 mt-0.5 flex-shrink-0" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold text-ink uppercase tracking-wide mb-2">
                      Industries
                    </p>
                    <ul className="space-y-1.5">
                      {detail.industries.map((ind) => (
                        <li key={ind} className="text-sm text-muted">{ind}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Section 3a: Benefits ──────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <p className="font-bold uppercase tracking-wider text-brand-500 mb-3">Key benefits</p>
            <h2 className="font-display text-navy-900 text-3xl font-bold">
              Why it matters
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {detail.benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 4) * 70}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 bg-brand-500 text-white rounded-lg grid place-items-center mb-4 font-display font-bold">
                    {i + 1}
                  </div>
                  <h3 className="font-display text-ink font-bold text-base mb-2">{b.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3b: Features / solutions offered ──────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <p className="font-bold uppercase tracking-wider text-brand-500 mb-3">What we deliver</p>
              <h2 className="font-display text-navy-900 text-3xl font-bold mb-7 leading-tight">
                Features &amp; solutions offered
              </h2>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {detail.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-50 text-brand-500 rounded-full grid place-items-center flex-shrink-0 mt-0.5">
                      <Check size={13} aria-hidden />
                    </span>
                    <span className="text-ink text-sm font-medium leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-brand-500/20 to-glow-400/10 rounded-3xl blur-sm" aria-hidden />
              <img
                src={detail.gallery[0].src}
                alt={detail.gallery[0].alt}
                loading="lazy"
                decoding="async"
                onError={onImgError}
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[420px]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Section 4: Related images ─────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <p className="font-bold uppercase tracking-wider text-brand-500 mb-3">In action</p>
            <h2 className="font-display text-navy-900 text-3xl font-bold">
              {title} in practice
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {detail.gallery.map((img, i) => (
              <Reveal key={i} delay={i * 90}>
                <div className="relative rounded-2xl overflow-hidden shadow-sm group h-72">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    onError={onImgError}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" aria-hidden />
                  <p className="absolute bottom-4 left-5 right-5 text-white text-sm font-medium">
                    {img.alt}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Call to action ─────────────────────────────── */}
      <section className="relative py-24 bg-white border-t border-gray-100 overflow-hidden">
        <div className="absolute inset-0 dot-grid-faint" aria-hidden />
        <div className="absolute -top-28 -left-24 w-80 h-80 bg-brand-500/20 rounded-full blur-3xl animate-float" aria-hidden />
        <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-glow-400/20 rounded-full blur-3xl animate-float-delayed" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="!font-bold uppercase tracking-wider text-brand-500 mb-3">Get started</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight text-navy-950">
            Ready to explore {title}?
          </h2>
          <p className="text-muted text-lg mb-9 max-w-2xl mx-auto">
            Talk to our consultants about how {title.toLowerCase()} can move your
            business forward — no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg hover:-translate-y-0.5"
            >
              <Phone size={17} aria-hidden /> Contact Us
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-surface border border-gray-200 text-ink px-8 py-3.5 rounded-xl font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <FileText size={17} aria-hidden /> Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
