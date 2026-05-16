"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "12+", label: "Жилийн туршлага" },
  { value: "8,000+", label: "Аялагч" },
  { value: "24", label: "Улс, хотын чиглэл" },
  { value: "99%", label: "Сэтгэл ханамж" },
];

const reasons = [
  {
    title: "Нарийвчилсан төлөвлөлт",
    text: "Маршрут, буудал, тээвэр, хөтөч, визийн шаардлагыг нэг хүснэгтэд уялдуулж зохион байгуулна.",
  },
  {
    title: "Ил тод гэрээ, нөхцөл",
    text: "Үнэ, багтсан үйлчилгээ, нэмэлт зардал, цуцлалтын нөхцөлийг урьдчилан ойлгомжтой тайлбарлана.",
  },
  {
    title: "Хариуцлагатай баг",
    text: "Аяллын өмнө болон аяллын явцад манай зөвлөх баг тасралтгүй дэмжлэг үзүүлдэг.",
  },
  {
    title: "Зорилтот багц зөвлөмж",
    text: "Гэр бүл, хос, байгууллага, эмнэлгийн зорилготой аялал бүрт тохирсон багц санал гаргана.",
  },
  {
    title: "Чанартай түнш сүлжээ",
    text: "Нислэг, буудал, орон нутгийн түншүүдтэй баталгаатай хамтран ажилладаг тул аялал тогтвортой.",
  },
  {
    title: "Мобайлд ээлтэй мэдээлэл",
    text: "Огноо, хугацаа, үнэ, маршрут зэрэг чухал мэдээлэл гар утсаар шууд уншихад хялбар бүтэцтэй.",
  },
];

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l7 3v6c0 5.1-3 9.8-7 11-4-1.2-7-5.9-7-11V5l7-3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Experience() {
  return (
    <section id="about" className="ui-section">
      <div className="ui-container">
        <div className="mb-10 space-y-4 md:mb-12">
          <span className="section-kicker">Яагаад Уудам гэж</span>
          <h2 className="section-title">Аялал бүрийг итгэлтэй, цэгцтэй зохион байгуулдаг</h2>
          <p className="section-copy">
            Манай зорилго бол зөвхөн тийз захиалах биш. Харин таны аяллыг эхнээс нь дуустал
            эрсдэл багатай, цагийн хувьд оновчтой, чанарын баталгаатай байдлаар удирдах юм.
          </p>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="surface-card-soft p-5 text-center"
            >
              <p className="text-[2rem] font-black text-[var(--brand-700)]">{item.value}</p>
              <p className="mt-1 text-sm font-semibold text-[var(--neutral-900)]">{item.label}</p>
            </motion.article>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="surface-card p-5"
            >
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-[var(--brand-50)] text-[var(--brand-700)]">
                <ShieldIcon />
              </div>
              <h3 className="text-xl font-black">{reason.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-7">{reason.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
