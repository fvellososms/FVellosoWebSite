type LogoProps = {
  variant?: "color" | "light";
  className?: string;
};

export default function Logo({ variant = "color", className = "" }: LogoProps) {
  const wordColor = variant === "light" ? "#ffffff" : "#0b3c6b";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span
        className="font-[family-name:var(--font-display)] text-[1.65rem] font-extrabold leading-none tracking-tight"
        style={{ color: wordColor }}
      >
        FVelloso
      </span>
    </span>
  );
}
