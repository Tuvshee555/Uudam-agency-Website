"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const packages = [
  {
    id: 1,
    destination: "Бээжин",
    destinationEn: "Beijing",
    country: "Хятад",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=900&q=85",
    price: "1,490,000",
    badge: "Хамгийн их захиалагдсан",
    badgeEn: "Most Popular",
    badgeColor: "#B8860B",
    highlights: ["Шууд нислэг", "3★ Зочид буудал", "Хот аялал", "Виза дэмжлэг"],
    duration: "5 шөнө",
    category: "china",
    description: "Хориотой хот, Цагаан хэрэм, эртний хутагтуудыг үзэх онцгой аялал.",
  },
  {
    id: 2,
    destination: "Ордос",
    destinationEn: "Ordos",
    country: "Хятад",
    image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=900&q=85",
    price: "1,090,000",
    badge: "Хямд",
    badgeEn: "Budget Friendly",
    badgeColor: "#888",
    highlights: ["Автобусны тээвэр", "3★ Зочид буудал", "Соёлын аялал", "Монгол өв"],
    duration: "4 шөнө",
    category: "china",
    description: "Ордосын музей, Чингис хааны булшны цогцолборыг үзэх ойр аялал.",
  },
  {
    id: 3,
    destination: "Хөх Хот",
    destinationEn: "Hohhot",
    country: "Хятад",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&q=85",
    price: "850,000",
    badge: "Эмнэлгийн аялал",
    badgeEn: "Medical Tour",
    badgeColor: "#2E86AB",
    highlights: ["Эрүүл мэндийн үзлэг", "Мэргэжилтний зөвлөгөө", "Орчуулагч", "Эмнэлэг шилжүүлэг"],
    duration: "3 шөнө",
    category: "china",
    description: "Өвөр Монголын шилдэг эмнэлгүүдэд дэлгэрэнгүй эрүүл мэндийн үзлэг хийлгэнэ.",
  },
  {
    id: 4,
    destination: "Тайланд",
    destinationEn: "Thailand",
    country: "Тайланд",
    image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=900&q=85",
    price: "3,550,000",
    badge: "Тропик аялал",
    badgeEn: "Tropical Escape",
    badgeColor: "#B8860B",
    highlights: ["Хоёр чиглэлд нислэг", "5★ Буудал", "Арал аялал", "Гудамжны хоол"],
    duration: "7 шөнө",
    category: "asia",
    description: "Алтан сүм хийдүүд, туяа усан далай, дэлхийн зэргийн хоол хүнс.",
  },
  {
    id: 5,
    destination: "Гуанжоу · Макао · Шэньжэн",
    destinationEn: "Guangzhou · Macau · Shenzhen",
    country: "Хятад",
    image: "https://images.unsplash.com/photo-1567942712661-82b9b407abbf?w=900&q=85",
    price: "2,500,000",
    badge: "Гурван хот",
    badgeEn: "Triple City",
    badgeColor: "#B8860B",
    highlights: ["3 хот", "Дэлгүүр хэсэх", "Казино", "Кантоны цамхаг"],
    duration: "6 шөнө",
    category: "china",
    description: "Перл голын дельтагийн гурван алдарт хотыг нэгтгэсэн аялал.",
  },
  {
    id: 6,
    destination: "Чунцин",
    destinationEn: "Chongqing",
    country: "Хятад",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=85",
    price: "1,890,000",
    badge: "Нуугдмал эрдэнэ",
    badgeEn: "Hidden Gem",
    badgeColor: "#B8860B",
    highlights: ["Шууд нислэг", "Халуун шөл", "3 голын аялал", "Уулын хот"],
    duration: "5 шөнө",
    category: "china",
    description: "Хятадын хамгийн драмчилсан хот — ууланд баригдсан, халуун шөлөөрөө алдартай.",
  },
  {
    id: 7,
    destination: "Хайнань",
    destinationEn: "Hainan",
    country: "Хятад",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=85",
    price: "2,790,000",
    badge: "Эрэг ба нар",
    badgeEn: "Beach & Sun",
    badgeColor: "#B8860B",
    highlights: ["Эрэгт буудал", "Санья булан", "Татваргүй дэлгүүр", "Усан спорт"],
    duration: "6 шөнө",
    category: "china",
    description: "Хятадын тропик арлын диваажин — цэвэр цагаан элсэн эрэг, хаан зэргийн буудлууд.",
  },
  {
    id: 8,
    destination: "Шанхай",
    destinationEn: "Shanghai",
    country: "Хятад",
    image: "https://images.unsplash.com/photo-1545156521-77bd85671d30?w=900&q=85",
    price: "4,590,000",
    badge: "Премиум",
    badgeEn: "Premium",
    badgeColor: "#B8860B",
    highlights: ["5★ Зочид буудал", "Бунд аялал", "Юй цэцэрлэг", "Франц хороолол"],
    duration: "7 шөнө",
    category: "china",
    description: "Дорно дахин уулзах хамгийн космополит хот — бүх мэдрэхүйн баялаг.",
  },
  {
    id: 9,
    destination: "Токио & Фүжи уул",
    destinationEn: "Tokyo & Mt. Fuji",
    country: "Япон",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=900&q=85",
    price: "2,830,000",
    badge: "Гарын үсэг аялал",
    badgeEn: "Signature",
    badgeColor: "#B8860B",
    highlights: ["Хоёр чиглэлд нислэг", "Шинкансен", "Фүжи уул", "Шибуя & Асакуса"],
    duration: "7 шөнө",
    category: "japan",
    description: "Шибуягийн гэрэлт гудамжнаас Фүжийн ариун оргил хүртэл — Японы хамгийн сонирхолтой аялал.",
  },
  {
    id: 10,
    destination: "Турк",
    destinationEn: "Turkey",
    country: "Турк",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=900&q=85",
    price: "4,590,000",
    badge: "Премиум",
    badgeEn: "Premium",
    badgeColor: "#B8860B",
    highlights: ["Хоёр чиглэлд нислэг", "Каппадок", "Бөмбөгт онгоц", "Истанбул хуучин хот"],
    duration: "9 шөнө",
    category: "europe",
    description: "Үлгэр ярианы яндангуудын дээгүүр нисэх, Бизантийн мозайк, Босфорын бүрэнхий.",
  },
];

const filters = [
  { id: "all", label: "Бүгд" },
  { id: "china", label: "Хятад" },
  { id: "asia", label: "Ази" },
  { id: "japan", label: "Япон" },
  { id: "europe", label: "Европ" },
];

function PackageCard({ pkg, index }: { pkg: typeof packages[0]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer card-light hover:shadow-lg transition-all duration-500 h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${pkg.image})` }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] tracking-wide font-medium"
          style={{ background: `${pkg.badgeColor}18`, color: pkg.badgeColor, border: `1px solid ${pkg.badgeColor}40` }}
        >
          {pkg.badge}
        </div>

        <div className="absolute bottom-3 right-3 text-right">
          <p className="text-[10px] text-white/60 tracking-wider uppercase">{pkg.country}</p>
          <p className="font-display text-xl font-light text-white leading-tight">
            {pkg.destination.split("·")[0].trim()}
          </p>
          <p className="text-[10px] text-white/50 mt-0.5">{pkg.destinationEn.split("·")[0].trim()}</p>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-4">
        <p className="text-[14px] text-[#666] font-light leading-relaxed line-clamp-2">
          {pkg.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {pkg.highlights.map((h) => (
            <span key={h} className="px-2.5 py-1 rounded-full text-[11px] text-[#666] bg-[#F5F0E6] border border-[#E8DFC8]">
              {h}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] text-[#bbb] tracking-wide uppercase mb-0.5">Эхлэх үнэ</p>
            <p className="font-display text-2xl md:text-[2rem] font-semibold gold-text">₮{pkg.price}</p>
            <p className="text-[11px] text-[#bbb] mt-0.5">{pkg.duration}</p>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex min-h-12 min-w-[124px] items-center justify-center px-6 py-3 rounded-lg text-[13px] tracking-wide font-semibold whitespace-nowrap text-white transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(184,134,11,0.35)]"
            style={{ background: "linear-gradient(135deg, #B8860B, #D4A017, #B8860B)" }}
          >
            Захиалах
          </motion.a>
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gold/20 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
}

export default function Packages() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? packages : packages.filter((p) => p.category === active);

  return (
    <section id="packages" className="ui-section bg-[#F5F0E6]">
      <div className="ui-container">
        <div className="flex flex-col items-center text-center gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-gold" />
              <span className="text-[11px] tracking-[0.35em] uppercase text-gold">Аяллын санал</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight text-[#1A1A1A]">
              Аяллаа
              <br />
              <em className="italic gold-text">сонгоорой</em>
            </h2>
            <p className="text-xs text-[#bbb] mt-1 tracking-wider">Choose Your Adventure</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`inline-flex min-h-12 items-center justify-center px-6 py-3 rounded-md text-[13px] tracking-wide font-semibold transition-all duration-300 ${
                  active === f.id
                    ? "text-white shadow-[0_4px_16px_rgba(184,134,11,0.3)]"
                    : "bg-white border border-[#E0D8C8] text-[#777] hover:text-[#1A1A1A] hover:border-gold/30"
                }`}
                style={active === f.id ? { background: "linear-gradient(135deg, #B8860B, #D4A017)" } : {}}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filtered.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}



