"use client";

import { motion } from "framer-motion";

const channels = [
  {
    label: "Залгах",
    sub: "Call Us",
    value: "7713 6633",
    href: "tel:77136633",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bg: "linear-gradient(135deg, #B8860B, #D4A017)",
    textColor: "#FFFFFF",
    shadow: "0 8px 30px rgba(184,134,11,0.35)",
    accent: null,
  },
  {
    label: "WhatsApp",
    sub: "Чат хийх",
    value: "7713 6633",
    href: "https://wa.me/97677136633",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="#25D366" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bg: "#FFFFFF",
    textColor: "#1A1A1A",
    border: "1px solid #E0EBE0",
    shadow: "0 4px 20px rgba(0,0,0,0.07)",
    accent: "#25D366",
  },
  {
    label: "Facebook",
    sub: "Мессеж бичих",
    value: "Uudam Travel Agency",
    href: "https://www.facebook.com/uudamtravelagency",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="#1877F2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bg: "#FFFFFF",
    textColor: "#1A1A1A",
    border: "1px solid #E0E8F5",
    shadow: "0 4px 20px rgba(0,0,0,0.07)",
    accent: "#1877F2",
  },
];

export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-10 relative overflow-hidden bg-[#FAFAF8]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(184,134,11,0.05),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-gold" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-gold">Аялалд бэлэн үү?</span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight text-[#1A1A1A]">
            Таны аялал
            <br />
            <em className="italic gold-text">өнөөдөр эхэлнэ</em>
          </h2>
          <p className="text-xs text-[#bbb] mt-1 tracking-wider mb-5">Your Journey Starts Today</p>
          <p className="text-[#888] font-light text-base max-w-md mx-auto leading-relaxed">
            Аяллын мэргэжилтэнтэй ярилцаж, зөвхөн таны хувьд тусгайлан гарган тавьсан маршрут авна уу.
            Үнэ төлбөргүй зөвлөгөө, ямар ч үүрэгдэлгүй.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid sm:grid-cols-3 gap-4"
        >
          {channels.map((ch) => (
            <motion.a
              key={ch.label}
              href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center gap-4 p-8 rounded-2xl text-center"
              style={{ background: ch.bg, border: ch.border, boxShadow: ch.shadow, color: ch.textColor }}
            >
              <div
                className="w-13 h-13 rounded-full flex items-center justify-center"
                style={{ background: ch.accent ? `${ch.accent}12` : "rgba(255,255,255,0.2)" }}
              >
                {ch.icon}
              </div>
              <div>
                <p className="font-semibold tracking-wide text-base">{ch.label}</p>
                <p className="text-[11px] mt-0.5 opacity-60">{ch.sub}</p>
                <p className="text-[13px] mt-1 font-medium" style={{ color: ch.accent || "rgba(255,255,255,0.9)" }}>
                  {ch.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-[13px] text-[#bbb] font-light">
            Ажлын цаг: Даваа–Бямба, 09:00–19:00 (УБ цаг)
          </p>
          <a
            href="mailto:uudamtravel6@gmail.com"
            className="text-[13px] text-gold hover:text-gold-light transition-colors font-light mt-1 inline-block"
          >
            uudamtravel6@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
