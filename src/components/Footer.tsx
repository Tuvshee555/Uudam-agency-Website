"use client";

import Link from "next/link";

const footerLinks = {
  "Очирууд": ["Хятадын аялал", "Японы аялал", "Тайландын аялал", "Туркийн аялал", "Эмнэлгийн аялал"],
  "Компани": ["Бидний тухай", "Баг", "Ажлын байр", "Хэвлэл мэдээлэл", "Блог"],
  "Хууль эрх зүй": ["Нууцлалын бодлого", "Үйлчилгээний нөхцөл", "Цуцлах бодлого", "Күүкийн бодлого"],
};

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/uudamtravelagency",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M17 9a8 8 0 10-9.25 7.9V11.5H5.75V9h1.999V7.25c0-1.972 1.175-3.062 2.974-3.062.86 0 1.76.154 1.76.154V6.3h-.99c-.977 0-1.281.606-1.281 1.228V9h2.18l-.348 2.5H10.2v5.4A8.003 8.003 0 0017 9z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/97677136633",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M15.75 9.125a6.75 6.75 0 01-6.75 6.75 6.714 6.714 0 01-3.211-.813L2.25 16.5l1.448-3.462A6.714 6.714 0 012.25 9.125a6.75 6.75 0 016.75-6.75 6.75 6.75 0 016.75 6.75z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:uudamtravel6@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M2 6l7 5 7-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F5F0E6] border-t border-[#E8DFC8]">
      <div className="ui-container pt-16 pb-10">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 mb-14">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex flex-col leading-none mb-6">
              <span className="font-display text-2xl font-light tracking-[0.15em] gold-text">УУДАМ</span>
              <span className="text-[9px] tracking-[0.3em] text-[#aaa] uppercase font-light mt-0.5">
                Аялал Жуулчлал
              </span>
            </Link>

            <p className="text-[14px] text-[#888] font-light leading-relaxed max-w-xs">
              Монголын тэргүүлэх олон улсын аялал жуулчлалын компани.
              Гайхамшигт аялалын туршлагыг бид таны хувьд бүтээнэ.
            </p>

            <div className="flex gap-3 mt-7">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-[#E0D8C8] flex items-center justify-center text-[#999] hover:text-gold hover:border-gold/30 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="mt-6 space-y-2">
              <a href="tel:77136633" className="flex items-center gap-2 text-[13px] text-[#777] hover:text-gold transition-colors font-light">
                <span className="text-gold">✦</span> 7713 6633
              </a>
              <a href="mailto:uudamtravel6@gmail.com" className="flex items-center gap-2 text-[13px] text-[#777] hover:text-gold transition-colors font-light">
                <span className="text-gold">✦</span> uudamtravel6@gmail.com
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-5 font-semibold">
                {category}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-[#888] hover:text-[#1A1A1A] transition-colors duration-200 font-light">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#E0D5BE]">
          <p className="text-[12px] text-[#aaa] font-light">
            © {new Date().getFullYear()} Уудам Аялал Жуулчлал. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse-gold bg-gold" />
            <p className="text-[11px] text-[#aaa] tracking-wide">Улаанбаатар, Монгол</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

