"use client";

const items = [
  { value: "10 Очир", icon: "✦" },
  { value: "Шууд нислэг", icon: "✦" },
  { value: "8,000+ аялагч", icon: "✦" },
  { value: "Эмнэлгийн аялал", icon: "✦" },
  { value: "12 жилийн туршлага", icon: "✦" },
  { value: "Цагийн тусламж", icon: "✦" },
  { value: "₮850,000-аас эхлэн", icon: "✦" },
  { value: "Монголын №1 аялал жуулчлал", icon: "✦" },
];

export default function StatsMarquee() {
  return (
    <div className="relative overflow-hidden py-4 border-y border-[#E8E2D8] bg-[#F5F0E6]">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-5 mx-8 flex-none">
            <span className="text-gold text-xs">{item.icon}</span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#888] font-light">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
