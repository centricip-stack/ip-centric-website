import {
  Shield,
  Server,
  Cloud,
  BarChart2,
  Code2,
  Network,
  ShieldCheck,
  Wifi,
  SignalHigh,
  Rocket,
  Plane,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  /** URL-friendly id, used for anchor links (/services#slug). */
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
};

export const SERVICES: Service[] = [
  {
    slug: "cyber-security",
    icon: Shield,
    title: "Cyber Security",
    desc: "Advanced threat protection and proactive security posture management. We safeguard your critical assets from evolving risks.",
  },
  {
    slug: "managed-services",
    icon: Server,
    title: "Managed Services",
    desc: "End-to-end IT support and infrastructure management. Let us handle the technology while you focus on business growth.",
  },
  {
    slug: "cloud-services",
    icon: Cloud,
    title: "Cloud Services",
    desc: "Seamless cloud migration, architecture, and optimization. Leverage the full power of modern cloud environments.",
  },
  {
    slug: "data-sciences",
    icon: BarChart2,
    title: "Data Sciences",
    desc: "Transform raw data into actionable business intelligence. Advanced analytics and machine learning solutions.",
  },
  {
    slug: "app-development",
    icon: Code2,
    title: "App Development",
    desc: "Custom enterprise software and modernization. Purpose-built applications to drive operational efficiency.",
  },
  {
    slug: "defense-solutions",
    icon: ShieldCheck,
    title: "Defense Solutions",
    desc: "Secure defense communications, law-enforcement solutions, and specialized consultancy for mission-critical operations.",
  },
  {
    slug: "fixed-broadband",
    icon: Wifi,
    title: "Fixed Broadband Services",
    desc: "High-speed fixed broadband design, deployment, and last-mile connectivity for enterprises and communities.",
  },
  {
    slug: "mobile-rollout",
    icon: SignalHigh,
    title: "Mobile Roll Out & Optimization",
    desc: "End-to-end mobile network rollout, site planning, and RF optimization for peak coverage and performance.",
  },
  {
    slug: "aerospace",
    icon: Rocket,
    title: "Aerospace",
    desc: "Engineering and systems integration for aerospace platforms, from concept through mission-ready deployment.",
  },
  {
    slug: "avionics",
    icon: Plane,
    title: "Avionics",
    desc: "Design, integration, and testing of avionics systems and embedded flight electronics to exacting safety standards.",
  },
  {
    slug: "infrastructure-solutions",
    icon: Network,
    title: "Infrastructure Solutions",
    desc: "Robust network design and connectivity solutions. Build a resilient foundation for your digital enterprise.",
  },
];

/**
 * Ordered list of services shown in the Navbar "Services" dropdown.
 * (Infrastructure Solutions is shown on the Services page but kept out of the
 * dropdown to match the requested menu — add its slug here to include it.)
 */
const MENU_ORDER = [
  "cyber-security",
  "managed-services",
  "cloud-services",
  "data-sciences",
  "app-development",
  "defense-solutions",
  "fixed-broadband",
  "mobile-rollout",
  "aerospace",
  "avionics",
];

export const SERVICE_MENU: Service[] = MENU_ORDER.map(
  (slug) => SERVICES.find((s) => s.slug === slug)!
);
