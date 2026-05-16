"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FormEvent, useState } from "react";

const channels = [
  { title: "Утас", value: "7713 6633", href: "tel:77136633" },
  { title: "Цахим шуудан", value: "uudamtravel6@gmail.com", href: "mailto:uudamtravel6@gmail.com" },
  {
    title: "Фэйсбүүк",
    value: "Уудам аялал жуулчлал",
    href: "https://www.facebook.com/uudamtravelagency",
  },
];

export default function CTA() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = (formData.get("name") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const destination = (formData.get("destination") as string)?.trim();
    const month = (formData.get("month") as string)?.trim();
    const travelers = (formData.get("travelers") as string)?.trim();
    const note = (formData.get("note") as string)?.trim();

    const message = [
      "Сайн байна уу?",
      "Уудам аяллын зөвлөгөө авах хүсэлт илгээлээ.",
      `Нэр: ${name}`,
      `Утас: ${phone}`,
      `Чиглэл: ${destination}`,
      `Төлөвлөсөн сар: ${month}`,
      `Зорчигчийн тоо: ${travelers}`,
      `Нэмэлт хүсэлт: ${note || "Байхгүй"}`,
    ].join("\n");

    window.open(`https://wa.me/97677136633?text=${encodeURIComponent(message)}`, "_blank");
    event.currentTarget.reset();
    setSent(true);
  };

  return (
    <section id="contact" className="ui-section bg-[var(--brand-50)]">
      <div className="ui-container">
        <div className="mb-10 space-y-4 md:mb-12">
          <span className="section-kicker">Захиалга, зөвлөгөө</span>
          <h2 className="section-title">Аяллаа өнөөдрөөс төлөвлөе</h2>
          <p className="section-copy">
            Доорх маягтыг бөглөөд илгээнэ үү. Манай зөвлөх баг таны хүсэлт дээр үндэслэн
            тохирсон багц, огноо, үнийн хувилбарыг богино хугацаанд илгээнэ.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_1.2fr]">
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="surface-card space-y-5 p-5 sm:p-6"
          >
            <div className="flex items-center gap-3">
              <span className="relative size-12 overflow-hidden rounded-full border border-[rgba(17,62,103,0.25)]">
                <Image src="/brand/uudam-logo.jpg" alt="Уудам лого" fill sizes="48px" className="object-cover" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-[var(--brand-700)]">Уудам Аялал Жуулчлал</p>
                <p className="text-xs text-[var(--neutral-400)]">Итгэлтэй, төлөвлөгөөтэй аяллын хамтрагч</p>
              </div>
            </div>

            <div className="space-y-3">
              {channels.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-[var(--neutral-200)] bg-white px-4 py-3 transition-colors hover:border-[var(--brand-700)]"
                >
                  <p className="text-xs font-bold tracking-[0.08em] text-[var(--neutral-400)]">{item.title}</p>
                  <p className="mt-1 text-[0.96rem] font-semibold text-[var(--neutral-900)]">{item.value}</p>
                </a>
              ))}
            </div>

            <div className="rounded-xl bg-white p-4 text-sm leading-7 text-[var(--neutral-700)]">
              <p className="font-semibold text-[var(--neutral-900)]">Ажлын цаг</p>
              <p>Даваа - Бямба, 09:00 - 19:00</p>
              <p>Нямд утсаар урьдчилан холбогдоно</p>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="surface-card p-5 sm:p-6"
          >
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="form-label">
                  Нэр
                </label>
                <input id="name" name="name" required className="form-field" placeholder="Жишээ: Батбаяр" />
              </div>

              <div>
                <label htmlFor="phone" className="form-label">
                  Утас
                </label>
                <input
                  id="phone"
                  name="phone"
                  required
                  className="form-field"
                  placeholder="Жишээ: 99112233"
                  inputMode="tel"
                />
              </div>

              <div>
                <label htmlFor="destination" className="form-label">
                  Сонирхож буй чиглэл
                </label>
                <select id="destination" name="destination" required className="form-field">
                  <option value="">Сонгоно уу</option>
                  <option value="Бээжин">Бээжин</option>
                  <option value="Шанхай">Шанхай</option>
                  <option value="Токио">Токио</option>
                  <option value="Каппадок">Каппадок</option>
                  <option value="Бангкок">Бангкок</option>
                </select>
              </div>

              <div>
                <label htmlFor="month" className="form-label">
                  Төлөвлөсөн сар
                </label>
                <input id="month" name="month" className="form-field" placeholder="Жишээ: 2026 оны 7 сар" />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="travelers" className="form-label">
                  Зорчигчийн тоо
                </label>
                <input id="travelers" name="travelers" className="form-field" placeholder="Жишээ: 2 том хүн, 1 хүүхэд" />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="note" className="form-label">
                  Нэмэлт хүсэлт
                </label>
                <textarea
                  id="note"
                  name="note"
                  rows={4}
                  className="form-field resize-y"
                  placeholder="Төсөв, буудлын ангилал, онцгой шаардлагаа бичнэ үү"
                />
              </div>

              <div className="sm:col-span-2">
                <button type="submit" className="btn-base btn-primary w-full">
                  Зөвлөгөөний хүсэлт илгээх
                </button>
                <p className="mt-2 text-xs text-[var(--neutral-400)]">
                  Илгээх товчийг дарахад Ватсап цонх нээгдэж хүсэлт автоматаар бөглөгдөнө.
                </p>
                {sent && (
                  <p className="mt-2 text-sm font-semibold text-[var(--brand-700)]">
                    Хүсэлт амжилттай бэлтгэгдлээ. Манай баг танд удахгүй холбогдоно.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
