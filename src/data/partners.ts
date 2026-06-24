export type Partner = {
  /** Concise label shown on the card. */
  name: string;
  /** Full / official name — used for the logo's alt text and tooltip. */
  fullName?: string;
  /** Logo filename inside /public/images/partners/. Omit if none yet. */
  logo?: string;
};

/**
 * Partner logos live in /public/images/partners/.
 * To add a partner: drop the logo in that folder and add an entry here.
 * A partner without a `logo` renders as a clean text wordmark automatically.
 */
export const PARTNERS: Partner[] = [
  { name: "Kaspersky", logo: "kaspersky.jpg" },
  { name: "Dell Technologies", logo: "dell.jpg" },
  {
    name: "Central Ordnance Depot",
    fullName: "Central Ordnance Depot",
    logo: "cod.jpg",
  },
  { name: "Router Switch", logo: "router-switch.jpg" },
  { name: "Jazz", logo: "jazz.jpg" },
  { name: "PTCL", fullName: "Pakistan Telecommunication Company Ltd", logo: "ptcl.jpg" },
  { name: "SCO", fullName: "Special Communications Organization", logo: "sco.jpg" },
  { name: "Recorded Future", logo: "recorded-future.jpg" },
  { name: "Starlink", logo: "starlink.jpg" },
  { name: "Huawei", logo: "huawei.jpg" },
  { name: "Rapid7", logo: "rapid7.jpg" },
  {
    name: "Rawalpindi Chamber of Commerce",
    fullName: "Rawalpindi Chamber of Commerce & Industry",
    logo: "rcci.jpg",
  },
  { name: "Inotech", logo: "inotech.jpg" },
  {
    name: "PSEB",
    fullName: "Pakistan Software Export Board",
    logo: "pseb.jpg",
  },
  {
    name: "PPRA",
    fullName: "Public Procurement Regulatory Authority",
    logo: "ppra.jpg",
  },
  {
    name: "United Nations Global Marketplace",
    fullName: "United Nations Global Marketplace",
    logo: "un-gm.png",
  },
];
