import { PARTNERS } from "../data/partners";
import PartnerCard from "./PartnerCard";
import Reveal from "./Reveal";

/** Responsive showcase grid: 2 cols mobile → 3 tablet → 4 desktop. */
export default function PartnerGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
      {PARTNERS.map((partner, i) => (
        <Reveal key={partner.name} delay={(i % 4) * 60}>
          <PartnerCard partner={partner} />
        </Reveal>
      ))}
    </div>
  );
}
