import { type Partner } from "../data/partners";

type PartnerCardProps = {
  partner: Partner;
  /** Marquee cards are fixed-width; grid cards fill their cell. */
  fixedWidth?: boolean;
};

export default function PartnerCard({ partner, fixedWidth = false }: PartnerCardProps) {
  const { name, fullName, logo } = partner;
  const alt = `${fullName ?? name} logo`;

  return (
    <div
      className={`group flex flex-col items-center justify-between bg-white border border-gray-200 rounded-2xl shadow-sm px-5 pt-6 pb-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-brand-500/40 ${
        fixedWidth ? "flex-none w-[208px] mx-3" : "w-full"
      }`}
      title={fullName ?? name}
    >
      {/* Logo area — fixed height reserves space, so there is no layout shift */}
      <div className="flex items-center justify-center h-16 w-full mb-4">
        {logo ? (
          <img
            src={`/images/partners/${logo}`}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="max-h-16 max-w-[150px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span className="font-display font-extrabold text-2xl tracking-tight text-navy-900/80">
            {name}
          </span>
        )}
      </div>

      {/* Partner name — dark, bold, high contrast */}
      <p className="font-display text-sm font-bold text-ink text-center leading-snug">
        {name}
      </p>
    </div>
  );
}
