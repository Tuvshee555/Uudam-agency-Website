"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const destinations = [
  {
    name: "Токио",
    nameEn: "Tokyo",
    country: "Япон",
    image: "/destinations/tokyo-shibuya.jpg",
    tagline: "Гэрэл ба уламжлал",
    color: "#B8860B",
  },
  {
    name: "Каппадок",
    nameEn: "Cappadocia",
    country: "Турк",
    image: "/destinations/cappadocia.jpg",
    tagline: "Тэнгэрийн бөмбөрцөг",
    color: "#B8860B",
  },
  {
    name: "Бангкок",
    nameEn: "Bangkok",
    country: "Тайланд",
    image: "/destinations/bangkok-temple.jpg",
    tagline: "Амьдрал дүүрэн хот",
    color: "#B8860B",
  },
  {
    name: "Шанхай",
    nameEn: "Shanghai",
    country: "Хятад",
    image: "/destinations/shanghai.jpg",
    tagline: "Ирээдүйн хот",
    color: "#B8860B",
  },
  {
    name: "Жанжяажие",
    nameEn: "Zhangjiajie",
    country: "Хятад",
    image: "/destinations/zhangjiajie.jpg",
    tagline: "Тэнгэрийн баганууд",
    color: "#B8860B",
  },
  {
    name: "Бээжин",
    nameEn: "Beijing",
    country: "Хятад",
    image: "/destinations/forbidden-city.jpg",
    tagline: "5000 жилийн түүх",
    color: "#B8860B",
  },
];

function DestinationCard({ dest, index }: { dest: typeof destinations[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex-none w-65 md:w-80 h-100 md:h-115 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-500"
    >
      <div
        className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${dest.image})` }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/15 to-transparent" />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(to top, rgba(184,134,11,0.25), transparent)` }}
      />

      <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-[10px] tracking-[0.35em] uppercase mb-1.5 text-gold-light">
          {dest.country}
        </p>
        <h3 className="font-display text-2xl font-light text-white leading-none">
          {dest.name}
        </h3>
        <p className="text-[11px] text-gold-light/70 font-light mt-0.5">{dest.nameEn}</p>
        <p className="text-sm text-white/70 font-light mt-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
          {dest.tagline}
        </p>
        <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-75">
          <span className="text-[11px] tracking-[0.2em] uppercase text-gold-light">Үзэх</span>
          <div className="w-6 h-px bg-gold-light" />
        </div>
      </div>

      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 shadow-md">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6h8M6 2l4 4-4 4" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </motion.div>
  );
}

export default function Destinations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 380 : -380, behavior: "smooth" });
  };

  return (
    <section id="destinations" className="ui-section overflow-hidden bg-[#FAFAF8]">
      <div className="ui-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-gold" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-gold">Аяллын очир</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight text-[#1A1A1A]">
              Алдарт<br />
              <em className="italic gold-text">Очирууд</em>
            </h2>
            <p className="text-xs text-[#aaa] mt-1 tracking-wider">Iconic Destinations</p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="hidden md:flex gap-3">
            <button onClick={() => scroll("left")} className="w-11 h-11 rounded-full card-light hover:border-gold/30 transition-all duration-300 flex items-center justify-center group">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M10 3l-5 5 5 5" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#B8860B] transition-colors"/>
              </svg>
            </button>
            <button onClick={() => scroll("right")} className="w-11 h-11 rounded-full card-light hover:border-gold/30 transition-all duration-300 flex items-center justify-center group">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#B8860B] transition-colors"/>
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="ui-container flex gap-6 overflow-x-auto no-scrollbar pb-4"
        
      >
        {destinations.map((dest, i) => (
          <DestinationCard key={dest.name} dest={dest} index={i} />
        ))}
        <div className="flex-none w-6" />
      </div>
    </section>
  );
}

