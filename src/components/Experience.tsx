"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "12+", label: "Жилийн туршлага", sub: "Years of Excellence" },
  { value: "8,000+", label: "Аялагч", sub: "Happy Travelers" },
  { value: "24", label: "Улс орон", sub: "Countries" },
  { value: "99%", label: "Сэтгэл ханамж", sub: "Satisfaction" },
];

const features = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 2L17.09 8.26L24 9.27L19 14.14L20.18 21.02L14 17.77L7.82 21.02L9 14.14L4 9.27L10.91 8.26L14 2Z"
          stroke="#B8860B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Тусгайлан боловсруулсан",
    sub: "Curated Experiences",
    desc: "Туршлагатай мэргэжилтнүүд таны аяллыг нарийн нягт боловсруулна.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path
          d="M4 10L14 3L24 10L24 24L4 24Z"
          stroke="#B8860B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 24v-8h8v8"
          stroke="#B8860B"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Шууд нислэгийн сонголт",
    sub: "Direct Flight Options",
    desc: "Улаанбаатараас шууд нислэгийн холболтыг найдвартай хангана.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect
          x="3"
          y="5"
          width="22"
          height="18"
          rx="2"
          stroke="#B8860B"
          strokeWidth="1.5"
        />
        <path d="M3 11h22" stroke="#B8860B" strokeWidth="1.5" />
        <path
          d="M9 2v6M19 2v6"
          stroke="#B8860B"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 17h4M8 20h8"
          stroke="#B8860B"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Уян хатан хуваарь",
    sub: "Flexible Scheduling",
    desc: "Сарын явдлаас эхлэн бүлгийн болон хувийн аялал хүртэл захиалах боломжтой.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 3C9.03 3 5 7.03 5 12c0 7 9 15 9 15s9-8 9-15c0-4.97-4.03-9-9-9z"
          stroke="#B8860B"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M11 12l2 2 4-4"
          stroke="#B8860B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Эмнэлгийн аялал",
    sub: "Medical Travel",
    desc: "Хөххотын эмнэлгийн үзлэг, мэргэжлийн зөвлөгөөг багтаасан онцгой багц.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="#B8860B" strokeWidth="1.5" />
        <path
          d="M14 8v6l4 2"
          stroke="#B8860B"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Цагийн тусламж",
    sub: "24/7 Support",
    desc: "Аяллын өмнө, явах үед болон буцаж ирсний дараа таны зүгт байна.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path
          d="M4 14s2-5 10-5 10 5 10 5-2 5-10 5S4 14 4 14z"
          stroke="#B8860B"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="14" cy="14" r="3" stroke="#B8860B" strokeWidth="1.5" />
      </svg>
    ),
    title: "Ил тод үнэ",
    sub: "Transparent Pricing",
    desc: "Нуугдмал төлбөр байхгүй. Харсан үнэ нь яг төлөх үнэ — дүн дутуугүй.",
  },
];

export default function Experience() {
  return (
    <section
      id="about"
      className="py-24 justify-center items-center px-6 lg:px-10 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-gold">
              Яагаад Уудам вэ
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight text-[#1A1A1A]">
            Зүгээр аялал биш —
            <br />
            <em className="italic gold-text">Туршлага</em>
          </h2>
          <p className="text-xs text-[#bbb] mt-1 tracking-wider">
            Not Just a Trip — An Experience
          </p>
          <p className="mt-5 text-[#666] font-light leading-relaxed text-base max-w-xl mx-auto">
            Монголоос дэлхийг аялах урлагийг боловсронгуй болгоход бид арав
            гаруй жил зарцуулсан. Олон мянган монгол гэр бүл бидэнд итгэн
            аялсаар байна.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-3 text-[13px] tracking-wide uppercase text-gold hover:text-gold-light transition-colors group"
          >
            <span>Мэргэжилтэнтэй ярилцах</span>
            <div className="w-8 h-px bg-gold group-hover:w-12 transition-all duration-300" />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-2xl p-6 bg-[#F9F5EC] border border-[#E8DFC8] text-center"
            >
              <p className="font-display text-4xl font-light leading-none gold-text">
                {stat.value}
              </p>
              <p className="text-[13px] text-[#555] mt-2 font-medium">
                {stat.label}
              </p>
              <p className="text-[10px] text-[#bbb] tracking-wider mt-0.5">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="group card-light rounded-2xl p-7 hover:border-gold/25 hover:shadow-md transition-all duration-500"
            >
              <div className="mb-4 w-11 h-11 rounded-xl bg-[#F9F5EC] border border-[#E8DFC8] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {feat.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-[#1A1A1A] mb-0.5">
                {feat.title}
              </h3>
              <p className="text-[10px] text-[#bbb] tracking-wider mb-3">
                {feat.sub}
              </p>
              <p className="text-[13px] text-[#777] font-light leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
