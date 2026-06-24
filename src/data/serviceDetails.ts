/**
 * Rich content for each dedicated service page, keyed by service slug.
 * The ServiceDetail page template renders this alongside the base Service
 * (icon / title / short description) from services.ts.
 */

export type Benefit = { title: string; desc: string };
export type GalleryImage = { src: string; alt: string };

export type ServiceDetailContent = {
  /** SEO meta description for the page. */
  metaDescription: string;
  /** One-line positioning statement shown under the title in the hero. */
  tagline: string;
  /** Local hero background image (guaranteed to load). */
  heroImage: string;
  /** Overview paragraphs: what it is + why it matters. */
  overview: string[];
  /** Key benefits. */
  benefits: Benefit[];
  /** Features / solutions offered. */
  features: string[];
  /** Technologies & platforms used. */
  technologies: string[];
  /** Industry applications. */
  industries: string[];
  /** Related images (photo URLs degrade gracefully to the hero image). */
  gallery: GalleryImage[];
};

const HERO = {
  circuit: "/images/services-hero.jpg",
  mesh: "/images/clients-hero.jpg",
  network: "/images/about-hero.jpg",
  support: "/images/contact-hero.jpg",
};

// A small pool of high-quality tech/business photos for the gallery.
const PHOTO = {
  circuit: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
  datacenter: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
  network: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
  data: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
  team: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80",
  code: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80",
};

export const SERVICE_DETAILS: Record<string, ServiceDetailContent> = {
  "cyber-security": {
    metaDescription:
      "Enterprise cyber security services — threat detection, incident response, and proactive security posture management to protect your critical assets.",
    tagline: "Protect what matters with defence-grade security.",
    heroImage: HERO.circuit,
    overview: [
      "Cyber Security at IP Centric Systems is a continuous discipline, not a one-time project. We help enterprises identify risk, harden their environments, and respond decisively when threats emerge — combining always-on monitoring with deep human expertise.",
      "As attack surfaces expand across cloud, mobile, and operational technology, a reactive posture is no longer enough. Our team embeds security thinking into every layer of your stack so resilience becomes a built-in property of your business, not an afterthought.",
    ],
    benefits: [
      { title: "Reduced breach risk", desc: "Proactive threat hunting and continuous monitoring shrink the window attackers can exploit." },
      { title: "Faster response", desc: "A defined incident-response playbook means containment in minutes, not days." },
      { title: "Regulatory confidence", desc: "Align with ISO 27001, SOC 2, GDPR, and sector mandates with audit-ready controls." },
      { title: "Business continuity", desc: "Resilient architectures keep critical operations running through disruption." },
    ],
    features: [
      "24/7 Security Operations Center (SOC) monitoring",
      "Vulnerability assessment and penetration testing",
      "Endpoint detection and response (EDR/XDR)",
      "Identity and access management (IAM)",
      "Security awareness training programs",
      "Incident response and digital forensics",
    ],
    technologies: ["SIEM", "Zero Trust", "EDR/XDR", "Kaspersky", "Rapid7", "Recorded Future"],
    industries: ["Defense", "Banking & Finance", "Healthcare", "Government", "Critical Infrastructure"],
    gallery: [
      { src: PHOTO.circuit, alt: "Security operations dashboard on a digital network" },
      { src: PHOTO.datacenter, alt: "Secured enterprise data center" },
    ],
  },

  "managed-services": {
    metaDescription:
      "Managed IT services — end-to-end infrastructure management, 24/7 support, and proactive monitoring so you can focus on growth.",
    tagline: "Your technology, expertly run — around the clock.",
    heroImage: HERO.support,
    overview: [
      "Our Managed Services give you a dedicated team that runs, monitors, and continuously improves your IT environment. From service desk to infrastructure operations, we handle the day-to-day so your people can focus on the business.",
      "We operate to clear SLAs with transparent reporting, predictable costs, and proactive maintenance that prevents issues before they reach your users.",
    ],
    benefits: [
      { title: "Predictable costs", desc: "Flat, transparent monthly pricing replaces unplanned IT spend." },
      { title: "Less downtime", desc: "Proactive monitoring catches problems before they affect users." },
      { title: "Expertise on tap", desc: "Access a broad bench of specialists without hiring in-house." },
      { title: "Focus on core work", desc: "Offload routine operations and reclaim your team's time." },
    ],
    features: [
      "24/7 service desk and end-user support",
      "Proactive infrastructure monitoring and alerting",
      "Patch, backup, and disaster-recovery management",
      "Network and server administration",
      "Asset lifecycle and vendor management",
      "Monthly performance and SLA reporting",
    ],
    technologies: ["Microsoft 365", "ITIL", "RMM tools", "Dell Technologies", "VMware", "Azure"],
    industries: ["SMEs", "Healthcare", "Logistics", "Professional Services", "Government"],
    gallery: [
      { src: PHOTO.team, alt: "Managed services support team at work" },
      { src: PHOTO.datacenter, alt: "Server infrastructure under active management" },
    ],
  },

  "cloud-services": {
    metaDescription:
      "Cloud services — migration, architecture, and optimization across AWS, Azure, and Google Cloud for a scalable, cost-efficient enterprise.",
    tagline: "Migrate, modernize, and optimize in the cloud.",
    heroImage: HERO.mesh,
    overview: [
      "We help enterprises move to the cloud with confidence — designing resilient architectures, migrating workloads with minimal disruption, and optimizing for both performance and cost.",
      "Whether you're pursuing a lift-and-shift, a full re-platform, or a multi-cloud strategy, our engineers align cloud adoption with your business outcomes rather than chasing technology for its own sake.",
    ],
    benefits: [
      { title: "Elastic scalability", desc: "Scale capacity up or down on demand to match real workload needs." },
      { title: "Lower TCO", desc: "Right-sizing and FinOps practices cut waste and control spend." },
      { title: "Global reach", desc: "Deploy close to your users for low-latency performance worldwide." },
      { title: "Built-in resilience", desc: "Multi-zone designs deliver high availability and rapid recovery." },
    ],
    features: [
      "Cloud readiness and migration assessment",
      "Workload migration and re-platforming",
      "Cloud-native architecture and Kubernetes",
      "Cost optimization and FinOps",
      "Infrastructure as Code automation",
      "Cloud security and governance",
    ],
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Terraform", "Docker"],
    industries: ["Finance", "Retail & E-commerce", "Healthcare", "Media", "Public Sector"],
    gallery: [
      { src: PHOTO.network, alt: "Global cloud network connectivity" },
      { src: PHOTO.circuit, alt: "Cloud infrastructure architecture" },
    ],
  },

  "data-sciences": {
    metaDescription:
      "Data science services — analytics, machine learning, and business intelligence that turn raw data into measurable decisions.",
    tagline: "Turn data into decisions, and decisions into impact.",
    heroImage: HERO.network,
    overview: [
      "Our Data Sciences practice transforms raw, scattered data into clear, actionable intelligence. We build the pipelines, models, and dashboards that let leaders see what's happening — and what's about to.",
      "From predictive maintenance to customer analytics, we focus on the use cases that move your numbers, delivering models that are explainable, governed, and production-ready.",
    ],
    benefits: [
      { title: "Better decisions", desc: "Replace gut feel with evidence drawn from your own data." },
      { title: "Predictive insight", desc: "Anticipate demand, churn, and risk before they happen." },
      { title: "Operational efficiency", desc: "Automate analysis that once took analysts days." },
      { title: "Competitive edge", desc: "Surface patterns your competitors can't see." },
    ],
    features: [
      "Data engineering and pipeline development",
      "Machine learning and predictive modeling",
      "Business intelligence dashboards",
      "Natural language processing",
      "Computer vision solutions",
      "MLOps and model governance",
    ],
    technologies: ["Python", "TensorFlow", "Power BI", "Snowflake", "Apache Spark", "SQL"],
    industries: ["Finance", "Healthcare", "Logistics", "Manufacturing", "Telecom"],
    gallery: [
      { src: PHOTO.data, alt: "Data analytics dashboard with charts" },
      { src: PHOTO.code, alt: "Data science model development" },
    ],
  },

  "app-development": {
    metaDescription:
      "Custom application development — enterprise web, mobile, and API solutions engineered for performance, security, and scale.",
    tagline: "Purpose-built software that drives your business.",
    heroImage: HERO.circuit,
    overview: [
      "We design and build custom applications that fit your processes exactly — web platforms, mobile apps, and integration layers engineered for security, performance, and long-term maintainability.",
      "Using modern agile practices, we ship working software early and often, so you see value throughout the engagement rather than only at the end.",
    ],
    benefits: [
      { title: "Tailored fit", desc: "Software shaped around your workflow, not the other way around." },
      { title: "Faster delivery", desc: "Agile sprints deliver usable increments every cycle." },
      { title: "Scalable foundations", desc: "Architectures that grow cleanly with your user base." },
      { title: "Lower maintenance", desc: "Clean, tested code reduces long-term cost of ownership." },
    ],
    features: [
      "Custom web application development",
      "Native and cross-platform mobile apps",
      "API design and systems integration",
      "Legacy application modernization",
      "UX/UI design and prototyping",
      "QA automation and DevOps",
    ],
    technologies: ["React", "Node.js", "TypeScript", ".NET", "React Native", "PostgreSQL"],
    industries: ["Fintech", "Healthcare", "Logistics", "Retail", "Government"],
    gallery: [
      { src: PHOTO.code, alt: "Application source code on a screen" },
      { src: PHOTO.team, alt: "Development team collaborating" },
    ],
  },

  "defense-solutions": {
    metaDescription:
      "Defense solutions — secure communications, mission-critical systems, and specialized consultancy for defense and law-enforcement.",
    tagline: "Mission-critical technology for those who can't fail.",
    heroImage: HERO.network,
    overview: [
      "Our Defense Solutions deliver hardened, secure systems for defense, law-enforcement, and government operations where reliability and confidentiality are non-negotiable.",
      "We combine secure communications, situational-awareness platforms, and specialized consultancy to support missions in the most demanding environments.",
    ],
    benefits: [
      { title: "Operational security", desc: "Encrypted, resilient systems built for hostile environments." },
      { title: "Mission reliability", desc: "Redundant designs engineered to perform when it counts." },
      { title: "Compliance", desc: "Built to defense and government security standards." },
      { title: "Specialized expertise", desc: "Consultants experienced in mission-critical deployments." },
    ],
    features: [
      "Secure tactical communications",
      "Command, control, and situational awareness",
      "Law-enforcement technology solutions",
      "Secure networks and encryption",
      "Surveillance and monitoring systems",
      "Specialized defense consultancy",
    ],
    technologies: ["Encrypted comms", "SATCOM", "Secure networks", "Starlink", "Huawei", "SCO"],
    industries: ["Defense", "Law Enforcement", "Government", "Border Security", "Public Safety"],
    gallery: [
      { src: PHOTO.network, alt: "Secure defense communications network" },
      { src: PHOTO.datacenter, alt: "Secure operations infrastructure" },
    ],
  },

  "fixed-broadband": {
    metaDescription:
      "Fixed broadband services — network design, deployment, and last-mile connectivity for enterprises and communities.",
    tagline: "High-speed connectivity, engineered to reach.",
    heroImage: HERO.mesh,
    overview: [
      "We design and deploy fixed broadband networks that bring reliable, high-speed connectivity to enterprises, campuses, and communities — including challenging last-mile environments.",
      "From fiber backbone to fixed-wireless access, we build connectivity infrastructure that is scalable, resilient, and ready for tomorrow's bandwidth demands.",
    ],
    benefits: [
      { title: "Reliable speed", desc: "Consistent high-bandwidth connectivity for demanding workloads." },
      { title: "Wide coverage", desc: "Reach underserved and last-mile locations cost-effectively." },
      { title: "Future-ready", desc: "Capacity headroom for growing data demands." },
      { title: "Resilient design", desc: "Redundant paths keep connections up." },
    ],
    features: [
      "Fiber optic network design and deployment",
      "Fixed-wireless access (FWA) solutions",
      "Last-mile connectivity engineering",
      "Network capacity planning",
      "Quality of service (QoS) management",
      "Ongoing network operations support",
    ],
    technologies: ["Fiber (GPON)", "Fixed Wireless", "MPLS", "PTCL", "Huawei", "Router Switch"],
    industries: ["Telecom", "Education", "Government", "Real Estate", "Rural Connectivity"],
    gallery: [
      { src: PHOTO.network, alt: "Fixed broadband network connectivity" },
      { src: PHOTO.datacenter, alt: "Network distribution infrastructure" },
    ],
  },

  "mobile-rollout": {
    metaDescription:
      "Mobile roll out & optimization — site planning, network deployment, and RF optimization for peak mobile coverage and performance.",
    tagline: "Plan, deploy, and optimize networks at scale.",
    heroImage: HERO.mesh,
    overview: [
      "We deliver end-to-end mobile network roll out — from site acquisition and planning through deployment and RF optimization — helping operators expand coverage and capacity efficiently.",
      "Our optimization practice continuously tunes live networks to maximize coverage, throughput, and user experience while controlling operational cost.",
    ],
    benefits: [
      { title: "Faster rollout", desc: "Streamlined planning and deployment accelerate time to live." },
      { title: "Better coverage", desc: "RF optimization eliminates dead zones and weak spots." },
      { title: "Higher capacity", desc: "Tuned networks carry more traffic with less congestion." },
      { title: "Lower OPEX", desc: "Efficient designs reduce the cost per delivered megabit." },
    ],
    features: [
      "Radio site planning and acquisition",
      "Network design and dimensioning",
      "Deployment and commissioning",
      "RF drive testing and optimization",
      "Capacity and coverage analysis",
      "Performance monitoring and tuning",
    ],
    technologies: ["4G/LTE", "5G NR", "RAN", "Drive Testing", "Jazz", "Huawei"],
    industries: ["Telecom Operators", "Tower Companies", "Government", "Smart Cities", "Enterprise"],
    gallery: [
      { src: PHOTO.network, alt: "Mobile network coverage mapping" },
      { src: PHOTO.circuit, alt: "Radio network optimization" },
    ],
  },

  aerospace: {
    metaDescription:
      "Aerospace engineering services — systems integration and platform support from concept through mission-ready deployment.",
    tagline: "Engineering excellence for the skies and beyond.",
    heroImage: HERO.network,
    overview: [
      "Our Aerospace practice provides engineering and systems-integration services for aerospace platforms, supporting programs from early concept through to mission-ready deployment.",
      "We bring disciplined systems engineering, rigorous testing, and integration expertise to complex aerospace challenges where precision and safety are paramount.",
    ],
    benefits: [
      { title: "Systems rigor", desc: "Disciplined engineering processes for complex platforms." },
      { title: "Safety first", desc: "Designs and tests built to exacting aerospace standards." },
      { title: "Integration depth", desc: "Seamless integration of subsystems and software." },
      { title: "Lifecycle support", desc: "Engineering support across the full program lifecycle." },
    ],
    features: [
      "Aerospace systems engineering",
      "Subsystem integration and testing",
      "Embedded software for flight systems",
      "Ground support systems",
      "Reliability and safety analysis",
      "Program engineering support",
    ],
    technologies: ["Systems Engineering", "Embedded C", "DO-178C", "Simulation", "CAD/CAE", "Telemetry"],
    industries: ["Aerospace", "Defense", "Satellite", "Research", "Government"],
    gallery: [
      { src: PHOTO.network, alt: "Aerospace systems and connectivity" },
      { src: PHOTO.circuit, alt: "Aerospace electronics engineering" },
    ],
  },

  avionics: {
    metaDescription:
      "Avionics services — design, integration, and testing of avionics systems and embedded flight electronics to strict safety standards.",
    tagline: "Flight-critical electronics, engineered to standard.",
    heroImage: HERO.circuit,
    overview: [
      "Our Avionics practice designs, integrates, and tests avionics systems and embedded flight electronics, delivering solutions that meet the strict safety and certification requirements of modern aviation.",
      "From navigation and communication systems to flight-management electronics, we apply rigorous verification to ensure every component performs reliably in the air.",
    ],
    benefits: [
      { title: "Certified quality", desc: "Engineered to recognized avionics safety standards." },
      { title: "Reliable in flight", desc: "Hardened electronics validated for flight conditions." },
      { title: "Integrated systems", desc: "Cohesive integration of navigation, comms, and control." },
      { title: "Rigorous testing", desc: "Exhaustive verification and validation at every stage." },
    ],
    features: [
      "Avionics system design",
      "Embedded flight software development",
      "Navigation and communication systems",
      "Hardware-in-the-loop testing",
      "Certification and compliance support",
      "Integration and verification",
    ],
    technologies: ["DO-178C", "DO-254", "ARINC 429", "RTOS", "Embedded C", "HIL Testing"],
    industries: ["Aviation", "Defense", "Aerospace", "UAV/Drones", "Government"],
    gallery: [
      { src: PHOTO.circuit, alt: "Avionics circuit electronics" },
      { src: PHOTO.code, alt: "Embedded avionics software" },
    ],
  },

  "infrastructure-solutions": {
    metaDescription:
      "Infrastructure solutions — resilient network design, connectivity, and data-center infrastructure for the modern enterprise.",
    tagline: "A resilient foundation for your digital enterprise.",
    heroImage: HERO.mesh,
    overview: [
      "We build the robust network and data-center infrastructure that underpins everything your business runs on — designed for resilience, performance, and growth.",
      "From structured cabling to enterprise networking and data-center build-outs, we deliver a dependable foundation that scales with your ambitions.",
    ],
    benefits: [
      { title: "Rock-solid reliability", desc: "Redundant designs minimize downtime and risk." },
      { title: "Performance at scale", desc: "Infrastructure that keeps pace with demand." },
      { title: "Future-proofing", desc: "Built to accommodate tomorrow's workloads." },
      { title: "Unified management", desc: "Centralized visibility across your estate." },
    ],
    features: [
      "Enterprise network design",
      "Data-center build and migration",
      "Structured cabling and connectivity",
      "Network security and segmentation",
      "Wireless and SD-WAN solutions",
      "Infrastructure monitoring",
    ],
    technologies: ["Cisco", "SD-WAN", "VMware", "Dell Technologies", "Fortinet", "Huawei"],
    industries: ["Finance", "Healthcare", "Government", "Education", "Manufacturing"],
    gallery: [
      { src: PHOTO.datacenter, alt: "Enterprise data center infrastructure" },
      { src: PHOTO.network, alt: "Enterprise network connectivity" },
    ],
  },
};
