import { MapPin, MessageCircle } from "lucide-react";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import ImageHero from "../components/ImageHero";
import ContactForm from "../components/ContactForm";
import { CONTACT } from "../data/site";

// Global office locations shown as cards.
const LOCATIONS = [
  { city: "Islamabad", country: "Pakistan" },
  { city: "London", country: "United Kingdom" },
  { city: "Toronto", country: "Canada" },
  { city: "Dubai", country: "United Arab Emirates" },
  { city: "Seattle", country: "United States" },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Ready to modernize your infrastructure? Connect with our technical consultants today."
      />

      {/* 1 ─── Hero ────────────────────────────────────────────────── */}
      <ImageHero
        image="/images/contact-hero.jpg"
        eyebrow=" Get in touch"
        title="Contact us"
        subtitle="Ready to modernize your infrastructure? Connect with our technical consultants today."
      />

      {/* 2 ─── Image (left) + Form (right) ─────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* Left: compact image */}
            <Reveal className="order-1">
              <div className="relative h-64 lg:h-full min-h-[320px] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
                  alt="Our team collaborating to support clients"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/images/contact-banner.svg";
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/45 to-navy-900/10" />
                <div className="absolute inset-0 dot-grid opacity-20" aria-hidden />
                <div className="relative h-full flex flex-col justify-end p-7">
                  <span className="inline-flex items-center gap-2 text-glow-300 mb-3 w-fit">
                    <MessageCircle size={17} aria-hidden />
                    <span className="eyebrow">We'd love to hear from you</span>
                  </span>
                  <h2 className="font-display text-white text-xl sm:text-2xl font-bold leading-snug">
                    Let's build something secure and scalable together.
                  </h2>
                </div>
              </div>
            </Reveal>

            {/* Right: contact form */}
            <Reveal delay={120} className="order-2">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3 ─── Locations ──────────────────────────────────────────── */}
      <section className="pb-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-6 h-[2px] bg-navy-900 inline-block" />
              <span className="eyebrow text-navy-900">Our global offices</span>
              <span className="w-6 h-[2px] bg-navy-900 inline-block" />
            </div>
            <p className="text-center text-muted text-sm mb-10 max-w-xl mx-auto">
              With teams across five countries, we're never far from where you do
              business.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
              {LOCATIONS.map(({ city, country }) => (
                <div
                  key={city}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-500/30"
                >
                  <div className="w-12 h-12 bg-blue-50 text-brand-500 rounded-xl grid place-items-center mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <MapPin size={20} aria-hidden />
                  </div>
                  <p className="font-display text-ink font-bold text-base">{city}</p>
                  <p className="text-muted text-xs mt-0.5">{country}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4 ─── Google Map (full-width, bottom) ────────────────────── */}
      <section aria-label="Office location map" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title="IP Centric Systems office location"
              src={CONTACT.mapEmbed}
              className="w-full h-[360px] sm:h-[420px] border-0 block"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
