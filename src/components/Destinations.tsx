"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const destinations = [
  {
    name: "Бээжин",
    country: "БНХАУ",
    image: "/destinations/beijing-premium.jpg",
    season: "4-10 сар",
    flight: "Шууд нислэг",
    summary: "Түүх, ордон, соёл, худалдааг нэг аяллаар цэгцтэй үзэх боломжтой хот.",
  },
  {
    name: "Шанхай",
    country: "БНХАУ",
    image: "/destinations/shanghai-premium.jpg",
    season: "Бүх улирал",
    flight: "Шууд нислэг",
    summary: "Орчин үеийн хотын хэмнэл, тансаг буудал, өндөр зэрэглэлийн үйлчилгээ.",
  },
  {
    name: "Токио",
    country: "Япон",
    image: "/destinations/tokyo-premium.jpg",
    season: "3-11 сар",
    flight: "Шилжиж нисэх",
    summary: "Дэвшилтэт технологи, уламжлалт соёл, цэвэр зохион байгуулалттай маршрут.",
  },
  {
    name: "Каппадок",
    country: "Турк",
    image: "/destinations/cappadocia-premium.jpg",
    season: "4-10 сар",
    flight: "Шилжиж нисэх",
    summary: "Өвөрмөц хадат тогтоц, халуун агаарын бөмбөлөг, сонгодог түүхэн дурсгал.",
  },
  {
    name: "Бангкок",
    country: "Тайланд",
    image: "/destinations/bangkok-premium.jpg",
    season: "11-4 сар",
    flight: "Шилжиж нисэх",
    summary: "Дулаан уур амьсгал, амралт, хоолны баялаг соёлыг хослуулсан чиглэл.",
  },
  {
    name: "Чүнчин",
    country: "БНХАУ",
    image: "/destinations/chongqing-premium.jpg",
    season: "3-11 сар",
    flight: "Шууд нислэг",
    summary: "Уулан хотын өвөрмөц дүр төрх, хотын үзэмж, амтат хоолны аяллын төв.",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="ui-section">
      <div className="ui-container">
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-4">
            <span className="section-kicker">Онцлох чиглэлүүд</span>
            <h2 className="section-title">Аялахад хамгийн их сонгогддог хотууд</h2>
            <p className="section-copy">
              Бид чиглэл бүрт нислэг, буудал, маршрутын логистикийг урьдчилан шалгаж,
              захиалагч бүрт ойлгомжтой бүтэцтэй аяллын хувилбар санал болгодог.
            </p>
          </div>
          <a href="#packages" className="btn-base btn-secondary w-fit">
            Бүх багц үзэх
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="surface-card overflow-hidden"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.name} хотын зураг`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(11,42,70,0.64)_100%)]" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-white/80">{item.country}</p>
                    <h3 className="mt-1 text-2xl font-black text-white">{item.name}</h3>
                  </div>
                </div>
              </div>

              <div className="space-y-4 p-5">
                <p className="text-[0.96rem] leading-7 text-[var(--neutral-700)]">{item.summary}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="chip">Улирал: {item.season}</span>
                  <span className="chip">Нислэг: {item.flight}</span>
                </div>
                <a href="#contact" className="btn-base btn-secondary w-full">
                  Энэ чиглэлээр зөвлөгөө авах
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
