"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const scenes = [
  { bg: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1920&q=80", location: "Токио, Япон" },
  { bg: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&q=80", location: "Истанбул, Турк" },
  { bg: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1920&q=80", location: "Бангкок, Тайланд" },
  { bg: "https://images.unsplash.com/photo-1545156521-77bd85671d30?w=1920&q=80", location: "Шанхай, Хятад" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => { setCurrent((c) => (c + 1) % scenes.length); setTransitioning(false); }, 800);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[680px] overflow-hidden">
      {scenes.map((scene, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{ scale }}
          animate={{ opacity: i === current ? (transitioning ? 0 : 1) : 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${scene.bg})`, y }} />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/25 to-black/70" />
          <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-transparent" />
        </motion.div>
      ))}

      <motion.div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 lg:px-16 max-w-7xl mx-auto" style={{ opacity }}>
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-gold-light" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-gold-light font-light">
              Онцгой аялалын туршлага
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3rem,7vw,6.5rem)] font-light leading-[0.95] tracking-tight text-white"
            style={{ textShadow: "0 4px 40px rgba(0,0,0,0.5)" }}
          >
            Дэлхий таныг
            <br />
            <em className="italic gold-text">хүлээж байна</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9 }}
            className="mt-6 text-white/75 text-base font-light leading-relaxed max-w-md"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Монголын талаас дэлхийн гайхамшиг руу — таны мөрөөдлийн аяллыг бид бүтээнэ.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#packages"
              className="px-7 py-3.5 rounded-full text-[13px] tracking-wide font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(184,134,11,0.4)]"
              style={{ background: "linear-gradient(135deg, #B8860B, #D4A017, #B8860B)" }}
            >
              Багцуудыг үзэх
            </a>
            <a
              href="#destinations"
              className="px-7 py-3.5 rounded-full text-[13px] tracking-wide font-medium text-white glass-dark hover:bg-white/20 transition-all duration-300"
            >
              Очир харах
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          className="absolute right-8 lg:right-16 bottom-24 flex flex-col items-end gap-6"
        >
          <div className="flex flex-col items-center gap-3">
            {scenes.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-500 rounded-full ${i === current ? "w-1 h-8 bg-gold-light" : "w-1 h-2 bg-white/30 hover:bg-white/60"}`}
              />
            ))}
          </div>
          <div className="text-right">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold-light">Одоо үзэж байна</p>
            <p className="text-[13px] text-white font-light mt-0.5">{scenes[current].location}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.4em] uppercase text-white/40">Гүйлгэх</span>
          <div className="w-px h-10 bg-linear-to-b from-gold-light to-transparent" />
        </motion.div>
      </motion.div>

      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black/30 to-transparent z-10 pointer-events-none" />
    </section>
  );
}
