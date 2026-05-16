"use client";

const items = [
  "Шууд нислэгийн боломжтой багц",
  "Эмнэлгийн аяллын тусгай хөтөлбөр",
  "24/7 аяллын үеийн дэмжлэг",
  "Гэр бүл, хос, байгууллагын захиалга",
  "12 жилийн салбарын туршлага",
  "8,000+ сэтгэл хангалуун аялагч",
  "Үнэ болон нөхцөл ил тод",
  "Төлөвлөгөөт маршрут, чанартай үйлчилгээ",
];

export default function StatsMarquee() {
  return (
    <section className="border-y border-[var(--neutral-200)] bg-white py-3">
      <div className="ui-container overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...items, ...items].map((item, index) => (
            <div key={`${item}-${index}`} className="mx-7 inline-flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-[var(--brand-700)]" />
              <span className="text-[0.78rem] font-semibold tracking-[0.08em] text-[var(--neutral-400)]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
