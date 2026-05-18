"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import logo from "../../public/brand/uudam-logo.jpg";

const navLinks = [
  { label: "Нээлт", href: "#discover" },
  { label: "Чиглэлүүд", href: "#destinations" },
  { label: "Багцууд", href: "#packages" },
  { label: "Яагаад бид", href: "#why-uudam" },
  { label: "Захиалга", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const headerClasses = scrolled
    ? "border-white/10 bg-[rgba(8,27,45,0.84)] shadow-(--shadow-header) backdrop-blur-xl"
    : "border-transparent bg-transparent";

  const navClasses = scrolled ? "text-white/76 hover:text-white" : "text-white/76 hover:text-white";

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${headerClasses}`}>
        <div className="ui-container flex h-21 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Уудам Аяллын нүүр хуудас">
            <span className="relative size-12 overflow-hidden rounded-full border border-white/18 bg-white/10 shadow-[0_12px_28px_rgba(0,0,0,0.16)]">
              <Image
                src={logo}
                alt="Уудам Аяллын лого"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </span>
            <span className="leading-none text-white">
              <span className="block font-display text-[1.38rem] tracking-[0.08em]">
                УУДАМ
              </span>
              <span className="mt-1 block text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-white/62">
                Аялал
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 xl:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`group relative text-[0.84rem] font-semibold uppercase tracking-[0.12em] transition-colors ${navClasses}`}
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-(--color-brand-mist) transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href="tel:+97677136633"
              className="rounded-full border border-white/14 bg-white/6 px-4 py-2 text-[0.78rem] font-semibold uppercase tracking-widest text-white/74 transition-colors hover:text-white"
            >
              +976 7713 6633
            </a>
            <a href="#contact" className="ui-button ui-button-primary">
              Аяллаа төлөвлөх
            </a>
          </div>

          <button
            type="button"
            aria-label="Цэс нээх"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-11 place-items-center rounded-full border border-white/18 bg-white/8 text-white xl:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition-all ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition-all ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-5 rounded bg-current transition-all ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[rgba(8,27,45,0.96)] px-6 pb-8 pt-28 text-white xl:hidden"
          >
            <div className="ui-container flex h-full flex-col">
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-[1.4rem] border border-white/10 bg-white/5 px-5 py-4 font-display text-[1.9rem] leading-none tracking-[0.02em]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-auto rounded-4xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--color-brand-mist)">
                  Холбоо барих
                </p>
                <a href="tel:+97677136633" className="mt-4 block text-2xl font-display">
                  +976 7713 6633
                </a>
                <a href="mailto:uudamtravel6@gmail.com" className="mt-2 block text-sm text-white/74">
                  uudamtravel6@gmail.com
                </a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="ui-button ui-button-primary mt-6 w-full">
                  Аяллаа төлөвлөх
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
