type SectionIntroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  className?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export default function SectionIntro({
  eyebrow,
  title,
  copy,
  className,
  align = "left",
  tone = "dark",
}: SectionIntroProps) {
  const isLight = tone === "light";
  const alignClass = align === "center" ? "mx-auto text-center" : "";
  const eyebrowClass = align === "center" ? "justify-center" : "";

  return (
    <div className={["space-y-4", alignClass, className].filter(Boolean).join(" ")}>
      <span
        className={[
          "section-eyebrow",
          eyebrowClass,
          isLight ? "text-(--color-brand-mist) before:bg-[rgba(216,228,240,0.62)]" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {eyebrow}
      </span>
      <h2 className={["section-title", isLight ? "text-white" : "text-(--color-copy-strong)"].join(" ")}>
        {title}
      </h2>
      <p
        className={[
          "section-copy",
          isLight ? "text-white/72" : "text-(--color-copy)",
          align === "center" ? "mx-auto" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {copy}
      </p>
    </div>
  );
}
