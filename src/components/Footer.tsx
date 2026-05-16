"use client";

import Image from "next/image";
import Link from "next/link";

const navGroups = [
  {
    title: "Хурдан холбоос",
    links: [
      { label: "Нүүр", href: "/" },
      { label: "Чиглэл", href: "#destinations" },
      { label: "Аяллын багц", href: "#packages" },
      { label: "Холбоо", href: "#contact" },
    ],
  },
  {
    title: "Үйлчилгээ",
    links: [
      { label: "Гэр бүлийн аялал", href: "#packages" },
      { label: "Хосын аялал", href: "#packages" },
      { label: "Эмнэлгийн аялал", href: "#packages" },
      { label: "Байгууллагын аялал", href: "#packages" },
    ],
  },
  {
    title: "Мэдээлэл",
    links: [
      { label: "Яагаад Уудам гэж", href: "#about" },
      { label: "Үйлчлүүлэгчийн сэтгэгдэл", href: "#reviews" },
      { label: "Үнэ ба нөхцөл", href: "#packages" },
      { label: "Захиалгын зөвлөгөө", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--brand-900)] text-white">
      <div className="ui-container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative size-12 overflow-hidden rounded-full border border-white/30 bg-white">
                <Image src="/brand/uudam-logo.jpg" alt="Уудам лого" fill sizes="48px" className="object-cover" />
              </span>
              <span>
                <span className="block text-base font-extrabold tracking-[0.12em]">УУДАМ</span>
                <span className="block text-[0.68rem] tracking-[0.18em] text-white/70">АЯЛАЛ ЖУУЛЧЛАЛ</span>
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-white/80">
              Улаанбаатараас олон улсын чиглэлд итгэлтэй, цэвэр бүтэцтэй аяллын үйлчилгээ.
              Танд тохирсон төлөвлөгөөг мэргэжлийн баг богино хугацаанд боловсруулна.
            </p>

            <div className="space-y-1 text-sm text-white/86">
              <p>Утас: 7713 6633</p>
              <p>Цахим шуудан: uudamtravel6@gmail.com</p>
              <p>Фэйсбүүк: Уудам аялал жуулчлал</p>
            </div>
          </div>

          {navGroups.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-bold tracking-[0.08em] text-white/95">{group.title}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/78">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-sm text-white/65 sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Уудам Аялал Жуулчлал. Бүх эрх хуулиар хамгаалагдсан.</p>
          <p className="mt-2 sm:mt-0">Улаанбаатар хот, Монгол Улс</p>
        </div>
      </div>
    </footer>
  );
}
