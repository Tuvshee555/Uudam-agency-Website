import Image from "next/image";
import Link from "next/link";

import logo from "../../public/brand/uudam-logo.jpg";

const footerGroups = [
  {
    title: "Судлах",
    links: [
      { label: "Нээлт", href: "#discover" },
      { label: "Чиглэлүүд", href: "#destinations" },
      { label: "Багцууд", href: "#packages" },
      { label: "Түүхүүд", href: "#stories" },
    ],
  },
  {
    title: "Аяллын дизайн",
    links: [
      { label: "Хувийн хотын аялал", href: "#packages" },
      { label: "Сонгомол туршлага", href: "#experiences" },
      { label: "Зургийн тэмдэглэл", href: "#journal" },
      { label: "Аяллаа төлөвлөх", href: "#contact" },
    ],
  },
  {
    title: "Холбогдох",
    links: [
      { label: "+976 7713 6633", href: "tel:+97677136633" },
      { label: "uudamtravel6@gmail.com", href: "mailto:uudamtravel6@gmail.com" },
      { label: "Фэйсбүүк", href: "https://www.facebook.com/uudamtravelagency" },
      { label: "Ватсапп", href: "https://wa.me/97677136633" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-(--color-ink) text-white">
      <div className="ui-container py-14 sm:py-16">
        <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Уудам Аяллын нүүр хуудас">
              <span className="relative size-12 overflow-hidden rounded-full border border-white/14 bg-white/10">
                <Image src={logo} alt="Уудам Аяллын лого" fill sizes="48px" className="object-cover" />
              </span>
              <span>
                <span className="block font-display text-[1.38rem] tracking-[0.08em] text-white">УУДАМ</span>
                <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/54">
                  Аялал
                </span>
              </span>
            </Link>

            <p className="max-w-120 text-sm leading-8 text-white/68">
              Уудам Аялал Улаанбаатараас гарах чиглэл бүрийг кино мэт дүр зураг, чанартай байрлал,
              хувийн анхааралтай үйлчилгээтэйгээр нямбай бүтээдэг.
            </p>

            <div className="flex flex-wrap gap-2">
              <a href="#contact" className="ui-button ui-button-primary">
                Аяллаа төлөвлөх
              </a>
              <a href="#journal" className="ui-button ui-button-secondary">
                Тэмдэглэл үзэх
              </a>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-(--color-brand-mist)">
                {group.title}
              </p>
              <ul className="mt-5 space-y-3 text-sm text-white/66">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/52 sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Уудам Аялал. Бүх эрх хуулиар хамгаалагдсан.</p>
          <p className="mt-2 sm:mt-0">Улаанбаатар, Монгол</p>
        </div>
      </div>
    </footer>
  );
}
