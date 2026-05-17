"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const departures = [
  {
    route: "Бээжин хотын багц",
    date: "2026.06.12",
    duration: "5 өдөр 4 шөнө",
    price: "1,490,000₮",
  },
  {
    route: "Токио, Фүжи уул",
    date: "2026.07.03",
    duration: "7 өдөр 6 шөнө",
    price: "2,830,000₮",
  },
  {
    route: "Каппадок, Истанбул",
    date: "2026.07.18",
    duration: "9 өдөр 8 шөнө",
    price: "4,590,000₮",
  },
];

const heroFacts = ["Албан ёсны гэрээтэй үйлчилгээ", "Ил тод үнэ, тодорхой нөхцөл", "24/7 аяллын дэмжлэг"];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[86vh] overflow-hidden pt-[7.5rem]">
      <Image
        src="/destinations/shanghai-premium.jpg"
        alt="Дэлхийн аяллын чиглэл"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(11,42,70,0.92)_14%,rgba(11,42,70,0.66)_45%,rgba(11,42,70,0.3)_80%,rgba(11,42,70,0.65)_100%)]" />

      <div className="ui-container relative z-10 pb-16">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-[680px]"
          >
            <span className="section-kicker text-white before:bg-white/45">Улаанбаатараас дэлхий рүү</span>
            <h1 className="mt-5 text-[clamp(2.1rem,5.4vw,4.2rem)] font-black leading-[1.1] text-white">
              Төлөвлөгөөтэй аялал,
              <br />
              итгэлтэй үйлчилгээ
            </h1>
            <p className="mt-6 max-w-[58ch] text-[1.04rem] leading-8 text-white/82">
              Уудам Аялал Жуулчлал нь аяллын маршрут, визийн дэмжлэг, буудал, унаа, хөтөчийн
              үйлчилгээг нэг системээр цэгцтэй зохион байгуулж, танд тайван бөгөөд чанартай
              аяллын туршлага хүргэнэ.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#packages" className="btn-base btn-primary">
                Багц аялал үзэх
              </a>
              <a
                href="#contact"
                className="btn-base border border-white/35 bg-white/10 text-white hover:bg-white/20"
              >
                Мэргэжилтэнтэй холбогдох
              </a>
            </div>

            <ul className="mt-8 grid gap-2.5 sm:grid-cols-3">
              {heroFacts.map((fact) => (
                <li
                  key={fact}
                  className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium text-white/90"
                >
                  {fact}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, delay: 0.16 }}
            className="surface-card overflow-hidden lg:max-w-[460px] lg:justify-self-end"
          >
            <div className="border-b border-[var(--neutral-200)] bg-[var(--brand-50)] p-5">
              <div className="flex items-center gap-3">
                <span className="relative size-11 overflow-hidden rounded-full border border-[rgba(17,62,103,0.2)]">
                  <Image
                    src="/brand/uudam-logo.jpg"
                    alt="Уудам лого"
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>
                <div>
                  <p className="text-sm font-bold text-[var(--brand-700)]">Ойрын хөдөлгөөнүүд</p>
                  <p className="text-xs text-[var(--neutral-400)]">Хязгаартай суудалтай огноонууд</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 p-5">
              {departures.map((item) => (
                <article
                  key={item.route}
                  className="rounded-xl border border-[var(--neutral-200)] p-4 transition-colors hover:border-[var(--brand-700)]"
                >
                  <h3 className="text-[1.02rem] font-extrabold text-[var(--neutral-900)]">{item.route}</h3>
                  <div className="mt-2 grid grid-cols-2 gap-y-2 text-sm">
                    <p className="text-[var(--neutral-400)]">Хөдлөх огноо</p>
                    <p className="text-right font-semibold text-[var(--neutral-900)]">{item.date}</p>
                    <p className="text-[var(--neutral-400)]">Хугацаа</p>
                    <p className="text-right font-semibold text-[var(--neutral-900)]">{item.duration}</p>
                    <p className="text-[var(--neutral-400)]">Багц үнэ</p>
                    <p className="text-right text-base font-extrabold text-[var(--brand-700)]">{item.price}</p>
                  </div>
                </article>
              ))}
              <a href="#contact" className="btn-base btn-secondary w-full">
                Захиалгын зөвлөгөө авах
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
