/**
 * Single source of truth for site-wide content.
 * NOTE: contact details below were carried over from the original project,
 * which had conflicting values across the page. They are now unified here.
 * >>> Verify and replace with your real business details before launch. <<<
 */

export const SITE = {
  name: "IP Centric Systems",
  tagline: "Transformative IT partnership for the modern enterprise.",
  description:
    "Enterprise IT consulting in cybersecurity, managed IT, cloud, data science, application development, and infrastructure. We modernize, secure, and accelerate.",
  url: "https://www.ipcentric.com",
} as const;

export const CONTACT = {
  email: "contact@ipcentricsys.com",
  phone: "+971 55 953 2073",
  phoneHref: "+971559532073",
  address: "IP Centric Systems LLC, Redmond, Seattle, WA, USA",
  // Google Maps embed for the address above (no API key required).
  mapEmbed:
    "https://www.google.com/maps?q=Redmond,+WA,+USA&output=embed",
} as const;

export const SOCIALS = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Twitter / X", href: "#", icon: "twitter" },
  { label: "GitHub", href: "#", icon: "github" },
] as const;

export type NavItem = { label: string; to: string };

export const NAV_LINKS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Clients", to: "/clients" },
  { label: "Contact", to: "/contact" },
];

export const STATS = [
  { value: "150+", label: "Enterprise Clients" },
  { value: "98%", label: "Client Retention" },
  { value: "12+", label: "Years of Excellence" },
] as const;
