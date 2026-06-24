import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS } from "../data/site";
import { SERVICE_MENU } from "../data/services";

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile drawer
  const [svcOpen, setSvcOpen] = useState(false); // desktop dropdown
  const [mSvcOpen, setMSvcOpen] = useState(false); // mobile services accordion
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const svcRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  // Close menus on route change.
  useEffect(() => {
    setOpen(false);
    setSvcOpen(false);
    setMSvcOpen(false);
  }, [location.pathname, location.hash]);

  // Scroll-aware shadow.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the desktop dropdown on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSvcOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Hover helpers with a small close delay so the pointer can travel to the panel.
  const openSvc = () => {
    window.clearTimeout(closeTimer.current);
    setSvcOpen(true);
  };
  const scheduleCloseSvc = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setSvcOpen(false), 120);
  };

  const linkBase =
    "text-sm font-semibold transition-colors pb-1 border-b-2 whitespace-nowrap";

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b transition-shadow ${
        scrolled ? "border-gray-200 shadow-sm" : "border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center h-20">
          <div className="flex-1 flex items-center">
            <Link to="/" aria-label="IP Centric Systems — home">
              <Logo />
            </Link>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, to }) =>
              to === "/services" ? (
                <div
                  key={to}
                  ref={svcRef}
                  className="relative"
                  onMouseEnter={openSvc}
                  onMouseLeave={scheduleCloseSvc}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node))
                      setSvcOpen(false);
                  }}
                >
                  <div className="flex items-center gap-1">
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        `${linkBase} ${
                          isActive
                            ? "text-brand-500 border-brand-500"
                            : "text-ink border-transparent hover:text-brand-500 hover:border-brand-500"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                    <button
                      type="button"
                      onClick={() => setSvcOpen((v) => !v)}
                      aria-haspopup="true"
                      aria-expanded={svcOpen}
                      aria-label="Toggle services menu"
                      className="text-ink hover:text-brand-500 transition-colors p-0.5"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          svcOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden
                      />
                    </button>
                  </div>

                  {/* Dropdown panel */}
                  <div
                    role="menu"
                    aria-label="Services"
                    className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[540px] bg-white rounded-2xl border border-gray-100 shadow-2xl shadow-navy-900/10 p-3 transition-all duration-200 origin-top ${
                      svcOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-1">
                      {SERVICE_MENU.map(({ slug, title, icon: Icon }) => (
                        <Link
                          key={slug}
                          to={`/services/${slug}`}
                          role="menuitem"
                          className="group/item flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
                        >
                          <span className="w-9 h-9 flex-shrink-0 bg-blue-50 text-brand-500 rounded-lg grid place-items-center group-hover/item:bg-brand-500 group-hover/item:text-white transition-colors">
                            <Icon size={17} aria-hidden />
                          </span>
                          <span className="text-sm font-semibold text-ink group-hover/item:text-brand-600 transition-colors leading-tight">
                            {title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `${linkBase} ${
                      isActive
                        ? "text-brand-500 border-brand-500"
                        : "text-ink border-transparent hover:text-brand-500 hover:border-brand-500"
                    }`
                  }
                >
                  {label}
                </NavLink>
              )
            )}
          </div>

          <div className="flex-1 hidden md:flex justify-end">
            <Link
              to="/contact"
              className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex-1 flex justify-end">
            <button
              onClick={() => setOpen((v) => !v)}
              className="text-ink hover:text-brand-500 p-1"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden absolute w-full bg-white border-t border-gray-100 shadow-lg py-4 px-6 z-50 max-h-[calc(100vh-5rem)] overflow-y-auto"
        >
          {NAV_LINKS.map(({ label, to }) =>
            to === "/services" ? (
              <div key={to} className="border-b border-gray-50">
                <div className="flex items-center justify-between">
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `block flex-1 text-left font-medium py-3.5 transition-colors ${
                        isActive ? "text-brand-500" : "text-ink hover:text-brand-500"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => setMSvcOpen((v) => !v)}
                    aria-expanded={mSvcOpen}
                    aria-label="Toggle services submenu"
                    className="p-2 -mr-2 text-ink hover:text-brand-500"
                  >
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        mSvcOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                </div>
                {/* Accordion sub-list */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mSvcOpen ? "max-h-[640px]" : "max-h-0"
                  }`}
                >
                  <div className="pl-3 pb-2 space-y-0.5">
                    {SERVICE_MENU.map(({ slug, title, icon: Icon }) => (
                      <Link
                        key={slug}
                        to={`/services/${slug}`}
                        className="flex items-center gap-3 py-3 px-2 rounded-lg text-sm text-muted hover:text-brand-600 hover:bg-blue-50 transition-colors"
                      >
                        <span className="w-8 h-8 flex-shrink-0 bg-blue-50 text-brand-500 rounded-lg grid place-items-center">
                          <Icon size={16} aria-hidden />
                        </span>
                        {title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `block w-full text-left font-medium py-3.5 transition-colors border-b border-gray-50 ${
                    isActive ? "text-brand-500" : "text-ink hover:text-brand-500"
                  }`
                }
              >
                {label}
              </NavLink>
            )
          )}
          <Link
            to="/contact"
            className="block text-center w-full bg-brand-500 text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-md mt-4"
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
