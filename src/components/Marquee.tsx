import { PARTNERS } from "../data/partners";
import PartnerCard from "./PartnerCard";

type MarqueeProps = {
  /** Background the marquee sits on, used to colour the edge fades. */
  variant?: "default" | "subtle";
};

export default function Marquee({ variant = "default" }: MarqueeProps) {
  const fade = variant === "subtle" ? "#F8FAFC" : "#ffffff";
  // Duplicate the list so the -50% scroll loops seamlessly.
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <div
      className="relative w-full overflow-hidden py-2"
      role="list"
      aria-label="Partners and clients"
      style={{ ["--marquee-fade" as string]: fade }}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[var(--marquee-fade)] to-transparent z-10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[var(--marquee-fade)] to-transparent z-10"
        aria-hidden
      />
      <div className="flex marquee-track w-max items-stretch">
        {loop.map((partner, i) => (
          <div key={i} role="listitem" aria-hidden={i >= PARTNERS.length}>
            <PartnerCard partner={partner} fixedWidth />
          </div>
        ))}
      </div>
    </div>
  );
}
