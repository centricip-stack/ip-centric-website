export default function Logo({
  className = "",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <img
      src="/images/logo.png"
      alt="IP Centric Systems"
      width={160}
      height={40}
      className={`h-10 w-auto object-contain ${invert ? "brightness-0 invert opacity-90" : ""} ${className}`}
    />
  );
}
