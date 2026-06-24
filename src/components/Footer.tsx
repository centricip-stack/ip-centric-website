import { useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, SITE, SOCIALS, CONTACT } from "../data/site";
import { SERVICES } from "../data/services";

const ICONS = { linkedin: Linkedin, twitter: Twitter, github: Github } as const;

// Services hidden from the footer list only (still available everywhere else:
// dropdown, services page, detail pages, and routing).
const FOOTER_HIDDEN = new Set([
  "avionics",
  "infrastructure-solutions",
  "fixed-broadband",
  "mobile-rollout",
]);
const FOOTER_SERVICES = SERVICES.filter((s) => !FOOTER_HIDDEN.has(s.slug));

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const goTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setDone(true);
    setEmail("");
  };

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo invert />
            </div>
            <p className="text-blue-200/80 text-sm leading-relaxed mb-5">
              Transforming enterprise technology landscapes with intelligent
              infrastructure and strategic innovation.
            </p>

            {/* Contact details */}
            <ul className="space-y-3 text-sm text-blue-200/80 mb-6">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-400 mt-0.5 flex-shrink-0" aria-hidden />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-400 flex-shrink-0" aria-hidden />
                <a
                  href={`tel:${CONTACT.phoneHref}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-400 flex-shrink-0" aria-hidden />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-3">
              {SOCIALS.map(({ label, href, icon }) => {
                const Icon = ICONS[icon];
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 grid place-items-center rounded-lg bg-white/5 text-blue-300 hover:text-white hover:bg-brand-500 transition-colors"
                  >
                    <Icon size={17} aria-hidden />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            {/* <h2 className="eyebrow text-blue-300 mb-5">Quick Links</h2> */}
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-300 mb-5">Quick Links</h2>
            <ul className="space-y-3 text-sm text-blue-200/80">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            {/* <h2 className="eyebrow text-blue-300 mb-5">Services</h2> */}
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-300 mb-5">Services</h2>
            <ul className="space-y-3 text-sm text-blue-200/80">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="hover:text-white transition-colors text-left"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            {/* <h2 className="eyebrow text-blue-300 mb-5">Newsletter</h2> */}
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-300 mb-5">Newsletter</h2>
            <p className="text-sm text-blue-200/80 mb-4 leading-relaxed">
              Subscribe for the latest tech insights and updates.
            </p>
            {done ? (
              <p className="text-sm text-glow-300" role="status">
                Thanks — you're on the list.
              </p>
            ) : (
              <form onSubmit={subscribe} className="space-y-3" noValidate>
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-white/5 border border-white/15 text-white placeholder-blue-300/60 px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                {error && (
                  <p className="text-xs text-red-300" role="alert">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full bg-brand-500 hover:bg-brand-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-blue-300/70 text-xs">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-blue-300/70">
            <button
              type="button"
              onClick={goTop}
              aria-label="Go to top of page"
              className="group inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span className="grid place-items-center w-5 h-5 rounded-full bg-white/5 group-hover:bg-brand-500 transition-colors">
                <ArrowUp
                  size={12}
                  className="transition-transform group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </span>
              Go to Top
            </button>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
