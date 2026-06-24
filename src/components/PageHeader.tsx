type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
};

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <header className="relative bg-navy-900 text-white py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-60" aria-hidden />
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-500/20 blur-3xl"
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto">
        {eyebrow && <p className="!font-bold uppercase tracking-wider text-blue-400 mb-4">{eyebrow}</p>}
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">
          {title}
        </h1>
        <p className="text-blue-100/90 text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </header>
  );
}
