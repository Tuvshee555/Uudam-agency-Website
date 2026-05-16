"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Чиглэл", href: "#destinations" },
  { label: "Аяллын багц", href: "#packages" },
  { label: "Яагаад бид", href: "#about" },
  { label: "Холбоо", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-[rgba(17,62,103,0.14)] bg-white/94 shadow-[var(--shadow-header)] backdrop-blur-xl"
            : "border-transparent bg-[rgba(11,42,70,0.52)] backdrop-blur-md"
        }`}
      >
        <div className="ui-container flex h-[78px] items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3" aria-label="Нүүр хуудас">
            <span className="relative size-12 overflow-hidden rounded-full border border-white/35 bg-white shadow-sm">
              <Image
                src="/brand/uudam-logo.jpg"
                alt="Уудам аялал жуулчлалын лого"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </span>
            <span className="leading-tight">
              <span
                className={`block text-[1rem] font-extrabold tracking-[0.12em] ${
                  scrolled ? "text-[var(--brand-700)]" : "text-white"
                }`}
              >
                УУДАМ
              </span>
              <span
                className={`block text-[0.66rem] font-semibold tracking-[0.2em] ${
                  scrolled ? "text-[var(--neutral-400)]" : "text-white/80"
                }`}
              >
                АЯЛАЛ ЖУУЛЧЛАЛ
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[0.9rem] font-semibold transition-colors ${
                  scrolled
                    ? "text-[var(--neutral-700)] hover:text-[var(--brand-700)]"
                    : "text-white/88 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:77136633"
              className={`rounded-full border px-4 py-2 text-[0.86rem] font-semibold ${
                scrolled
                  ? "border-[rgba(17,62,103,0.2)] text-[var(--brand-700)]"
                  : "border-white/35 text-white"
              }`}
            >
              7713 6633
            </a>
            <a href="#contact" className="btn-base btn-primary">
              Зөвлөгөө авах
            </a>
          </div>

          <button
            aria-label="Цэс нээх"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`grid size-11 place-items-center rounded-full border lg:hidden ${
              scrolled
                ? "border-[rgba(17,62,103,0.2)] bg-[var(--brand-50)]"
                : "border-white/30 bg-white/10"
            }`}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded transition-all ${
                  scrolled ? "bg-[var(--brand-700)]" : "bg-white"
                } ${
                  menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-0.5 w-5 rounded transition-all ${
                  scrolled ? "bg-[var(--brand-700)]" : "bg-white"
                } ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-5 rounded transition-all ${
                  scrolled ? "bg-[var(--brand-700)]" : "bg-white"
                } ${
                  menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.24 }}
            className="fixed inset-0 z-40 flex flex-col bg-[var(--brand-900)] px-6 pb-8 pt-28 lg:hidden"
          >
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-lg font-bold text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-6 space-y-3 rounded-2xl border border-white/15 bg-white/5 p-5 text-white/85">
              <p className="text-sm font-semibold tracking-wide">Холбоо барих</p>
              <a href="tel:77136633" className="block text-lg font-bold">
                7713 6633
              </a>
              <a href="mailto:uudamtravel6@gmail.com" className="block text-sm">
                uudamtravel6@gmail.com
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-base btn-primary mt-2 w-full"
              >
                Аяллаа төлөвлөх
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
