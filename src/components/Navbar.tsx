"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "Очир", href: "#destinations" },
  { label: "Багцууд", href: "#packages" },
  { label: "Бидний тухай", href: "#about" },
  { label: "Холбоо барих", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-black/6 shadow-sm py-3"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-display text-2xl font-light tracking-[0.15em] gold-text">
              УУДАМ
            </span>
            <span className={`text-[9px] tracking-[0.3em] uppercase font-light transition-colors duration-500 ${scrolled ? "text-[#999]" : "text-[#ccc]"}`}>
              Аялал Жуулчлал
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[13px] tracking-wide transition-colors duration-300 font-light hover:text-gold ${
                  scrolled ? "text-[#555]" : "text-[#ddd]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:77136633"
              className={`text-[13px] tracking-wider transition-colors font-semibold ${scrolled ? "text-gold" : "text-gold-light"} hover:text-gold-light`}
            >
              7713 6633
            </a>
            <a
              href="#packages"
              className="px-5 py-2.5 rounded-full text-[12px] tracking-wide font-medium transition-all duration-300 text-white hover:scale-105 hover:shadow-[0_4px_20px_rgba(184,134,11,0.35)]"
              style={{ background: "linear-gradient(135deg, #B8860B, #D4A017, #B8860B)" }}
            >
              Захиалах
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2 bg-[#1A1A1A]" : scrolled ? "bg-[#1A1A1A]" : "bg-white"}`} />
            <span className={`block w-4 h-px transition-all duration-300 bg-gold ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2 bg-[#1A1A1A]" : scrolled ? "bg-[#1A1A1A]" : "bg-white"}`} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMenuOpen(false)}
                className="font-display text-4xl font-light italic text-[#1A1A1A] hover:text-gold transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <a href="tel:77136633" className="mt-4 text-gold tracking-widest text-sm uppercase font-semibold">
              7713 6633
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
