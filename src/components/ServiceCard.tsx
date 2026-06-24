import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { type Service } from "../data/services";

type ServiceCardProps = {
  service: Service;
  index?: number;
  /** Kept for backwards compatibility; "Learn more" always links now. */
  link?: boolean;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const { icon: Icon, title, desc, slug } = service;

  return (
    <article
      id={slug}
      className="card-accent group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden scroll-mt-28 h-full flex flex-col"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-[52px] h-[52px] bg-blue-50 text-brand-500 rounded-xl grid place-items-center group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
          <Icon size={26} aria-hidden />
        </div>
      </div>
      <h3 className="font-display text-ink text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted text-sm leading-relaxed mb-6 flex-1">{desc}</p>
      {/* Opens the dedicated service page in a new tab */}
      <Link
        to={`/services/${slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-500 font-semibold text-sm inline-flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300 w-fit"
        aria-label={`Learn more about ${title} (opens in a new tab)`}
      >
        Learn more <ArrowRight size={15} aria-hidden />
      </Link>
    </article>
  );
}
