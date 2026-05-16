"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

type TravelPackage = {
  id: number;
  destination: string;
  country: string;
  image: string;
  date: string;
  duration: string;
  price: string;
  summary: string;
  category: "china" | "asia" | "special";
  inclusions: string[];
  itinerary: string[];
  notes: string[];
};

const packages: TravelPackage[] = [
  {
    id: 1,
    destination: "Бээжин",
    country: "БНХАУ",
    image: "/destinations/beijing-premium.jpg",
    date: "2026.06.12, 2026.07.05",
    duration: "5 өдөр 4 шөнө",
    price: "1,490,000₮",
    summary:
      "Хориотой хот, Цагаан хэрэм, хотын соёлын гол цэгүүдийг цэгцтэй маршрутаар үзэх олон нийтийн хамгийн их сонголттой багц.",
    category: "china",
    inclusions: [
      "Олон улсын нислэг",
      "4 шөнийн буудал",
      "Өглөөний цай",
      "Хот дотор унаа",
      "Монгол хэлтэй хөтөч",
      "Визийн материалын дэмжлэг",
    ],
    itinerary: [
      "1 дэх өдөр: Улаанбаатар - Бээжин нислэг, буудалд байрлах",
      "2 дахь өдөр: Хориотой хот, Тяньаньмэний талбай",
      "3 дахь өдөр: Цагаан хэрэм, уламжлалт худалдааны гудамж",
      "4 дахь өдөр: Чөлөөт өдөр, сонголтот хөтөлбөр",
      "5 дахь өдөр: Нисэх буудал хүргэлт, Улаанбаатар буцах",
    ],
    notes: [
      "Гадаад пасспорт буцах өдрөөс хойш 6 сараас дээш хүчинтэй байх",
      "Хөтөлбөрийн дараалал цаг агаар, орон нутгийн ачааллаас шалтгаалан солигдож болно",
      "Нэмэлт үзвэр болон хоолны зардал тусдаа тооцогдоно",
    ],
  },
  {
    id: 2,
    destination: "Шанхай",
    country: "БНХАУ",
    image: "/destinations/shanghai-premium.jpg",
    date: "2026.06.28, 2026.07.22",
    duration: "6 өдөр 5 шөнө",
    price: "2,350,000₮",
    summary:
      "Орчин үеийн хотын өнгө төрх, худалдаа, архитектурын үзэмжийг дээд зэрэглэлийн буудлын стандарттай хослуулсан багц.",
    category: "special",
    inclusions: [
      "Олон улсын нислэг",
      "5 шөнийн 4-5 одтой буудал",
      "Хотын аяллын маршрут",
      "Хөтөч ба орчуулга",
      "Өдөр тутмын өглөөний цай",
    ],
    itinerary: [
      "1 дэх өдөр: Шанхай хотод буух, амралт",
      "2 дахь өдөр: Бунд, цамхаг, голын эргийн тойрог",
      "3 дахь өдөр: Юй цэцэрлэг, музей, соёлын бүс",
      "4 дахь өдөр: Чөлөөт өдөр, худалдааны бүс",
      "5 дахь өдөр: Сонголтот хөтөлбөр, оройн аялал",
      "6 дахь өдөр: Улаанбаатар буцах",
    ],
    notes: [
      "Тансаг ангиллын буудлын өрөөний төрөл үлдэгдлээс хамаарч өөрчлөгдөнө",
      "Аяллын даатгал нэмж авахыг зөвлөж байна",
      "Суудал баталгаажуулалт төлбөр орсны дарааллаар явагдана",
    ],
  },
  {
    id: 3,
    destination: "Токио, Фүжи уул",
    country: "Япон",
    image: "/destinations/tokyo-premium.jpg",
    date: "2026.07.03, 2026.08.10",
    duration: "7 өдөр 6 шөнө",
    price: "2,830,000₮",
    summary:
      "Токио хотын орчин үеийн хэмнэл болон Фүжи уулын байгалийг хослуулсан урт хугацааны хамгийн эрэлттэй маршрут.",
    category: "asia",
    inclusions: [
      "Олон улсын нислэг",
      "6 шөнийн буудал",
      "Хурдны галт тэрэгний тийз",
      "Өглөөний цай",
      "Монгол хөтөч, орчуулга",
    ],
    itinerary: [
      "1 дэх өдөр: Токио хотод буух, байрлах",
      "2 дахь өдөр: Шибүя, Асакуса, хотын аялал",
      "3 дахь өдөр: Фүжи уулын бүсэд бүтэн өдрийн аялал",
      "4 дахь өдөр: Соёлын дүүрэг, музей",
      "5 дахь өдөр: Чөлөөт өдөр",
      "6 дахь өдөр: Сонголтот хөтөлбөр",
      "7 дахь өдөр: Улаанбаатар буцах",
    ],
    notes: [
      "Япон визийн материалд урьдчилсан санхүүгийн нотолгоо шаардана",
      "Хоолны онцгой шаардлагыг захиалга хийхдээ урьдчилан мэдээлнэ",
      "Тээшний жинг агаарын тээврийн журмаар мөрдөнө",
    ],
  },
  {
    id: 4,
    destination: "Каппадок, Истанбул",
    country: "Турк",
    image: "/destinations/cappadocia-premium.jpg",
    date: "2026.07.18, 2026.09.02",
    duration: "9 өдөр 8 шөнө",
    price: "4,590,000₮",
    summary:
      "Европ, Азийн зааг дахь түүхэн дурсгал, бөмбөлөгт аялал, дээд зэрэглэлийн буудлын үйлчилгээтэй тусгай багц.",
    category: "special",
    inclusions: [
      "Олон улсын хоёр талын нислэг",
      "Дотоод шилжилтийн нислэг",
      "8 шөнийн буудал",
      "Өдөр тутмын өглөөний цай",
      "Бүх маршрутын унаа",
      "Тусгай хөтөч, орчуулагч",
    ],
    itinerary: [
      "1 дэх өдөр: Истанбул хотод буух",
      "2 дахь өдөр: Түүхэн дүүрэг, гол дурсгалууд",
      "3 дахь өдөр: Каппадок руу шилжих",
      "4 дахь өдөр: Бөмбөлөгт аялал, газар дээрх маршрут",
      "5 дахь өдөр: Хадат хөндийн аялал",
      "6 дахь өдөр: Чөлөөт өдөр",
      "7 дахь өдөр: Истанбул буцах",
      "8 дахь өдөр: Худалдаа, соёлын аялал",
      "9 дахь өдөр: Улаанбаатар буцах",
    ],
    notes: [
      "Бөмбөлөгт аялал цаг агаарын нөхцлөөс хамааран хойшилж болно",
      "Нэмэлт даатгал болон сонголтот хөтөлбөр тусдаа үнэтэй",
      "Нэг өрөөнд байрлах зорчигчийн тоо сонгосон багцаас шалтгаална",
    ],
  },
  {
    id: 5,
    destination: "Бангкок, амралтын арал",
    country: "Тайланд",
    image: "/destinations/bangkok-premium.jpg",
    date: "2026.08.01, 2026.09.14",
    duration: "7 өдөр 6 шөнө",
    price: "3,550,000₮",
    summary:
      "Дулаан уур амьсгалтай амралт, хот болон арал хосолсон маршрутаар гэр бүл болон хосын аялалд тохиромжтой багц.",
    category: "asia",
    inclusions: [
      "Олон улсын нислэг",
      "6 шөнийн буудал",
      "Хотын аялал",
      "Арал руу шилжүүлэг",
      "Өглөөний цай",
    ],
    itinerary: [
      "1 дэх өдөр: Бангкок хотод буух",
      "2 дахь өдөр: Хотын төв маршрут",
      "3 дахь өдөр: Арал руу шилжих",
      "4 дахь өдөр: Амралт, чөлөөт өдөр",
      "5 дахь өдөр: Сонголтот усан хөтөлбөр",
      "6 дахь өдөр: Бангкокт буцаж ирэх",
      "7 дахь өдөр: Улаанбаатар буцах",
    ],
    notes: [
      "Тропикийн улиралд борооны богино хугацааны аадар орох магадлалтай",
      "Нарнаас хамгаалах хэрэгсэл болон хөнгөн хувцас бэлтгэнэ",
      "Амралтын газрын дотоод журмыг заавал мөрдөнө",
    ],
  },
];

const filters = [
  { id: "all", label: "Бүгд" },
  { id: "china", label: "Хятад" },
  { id: "asia", label: "Ази" },
  { id: "special", label: "Тусгай багц" },
] as const;

export default function Packages() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]["id"]>("all");
  const [selectedId, setSelectedId] = useState<number>(packages[0].id);

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? packages
        : packages.filter((item) => item.category === activeFilter),
    [activeFilter],
  );

  const selected = filtered.find((item) => item.id === selectedId) ?? filtered[0] ?? packages[0];

  return (
    <section id="packages" className="ui-section bg-white">
      <div className="ui-container">
        <div className="mb-10 space-y-4 md:mb-12">
          <span className="section-kicker">Аяллын багцууд</span>
          <h2 className="section-title">Үнэ, хугацаа, хөтөлбөр нь тодорхой багц санал</h2>
          <p className="section-copy">
            Аяллын сонголт хийхдээ хамгийн түрүүнд харах шаардлагатай мэдээллийг нэг дор төвлөрүүллээ.
            Очих газар, огноо, хугацаа, үнэ, багтсан үйлчилгээ, дэлгэрэнгүй хөтөлбөр бүгд ил тод.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`btn-base ${isActive ? "btn-primary" : "btn-secondary"}`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 14 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="surface-card overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.destination} чиглэлийн зураг`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(11,42,70,0.8)_100%)]" />
                  <div className="absolute inset-x-4 bottom-4">
                    <p className="text-xs font-semibold tracking-[0.08em] text-white/80">{item.country}</p>
                    <h3 className="mt-1 text-[1.45rem] font-black text-white">{item.destination}</h3>
                  </div>
                </div>

                <div className="space-y-4 p-5">
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <p className="text-[var(--neutral-400)]">Хөдлөх огноо</p>
                    <p className="text-right font-semibold text-[var(--neutral-900)]">{item.date}</p>
                    <p className="text-[var(--neutral-400)]">Хугацаа</p>
                    <p className="text-right font-semibold text-[var(--neutral-900)]">{item.duration}</p>
                    <p className="text-[var(--neutral-400)]">Эхлэх үнэ</p>
                    <p className="text-right text-xl font-black text-[var(--brand-700)]">{item.price}</p>
                  </div>

                  <p className="text-[0.94rem] leading-7 text-[var(--neutral-700)]">{item.summary}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.inclusions.slice(0, 3).map((point) => (
                      <span key={point} className="chip">
                        {point}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-1">
                    <a href="#contact" className="btn-base btn-primary flex-1">
                      Захиалах
                    </a>
                    <button
                      onClick={() => {
                        setSelectedId(item.id);
                        document
                          .getElementById("package-detail")
                          ?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="btn-base btn-secondary flex-1"
                    >
                      Дэлгэрэнгүй
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <section id="package-detail" className="mt-14 scroll-mt-28">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-3xl font-black">{selected.destination} багцын дэлгэрэнгүй</h3>
            <span className="chip">Сонгогдсон багц</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.9fr]">
            <div className="surface-card space-y-3 p-4 sm:p-6">
              <details open className="group rounded-xl border border-[var(--neutral-200)] p-4">
                <summary className="cursor-pointer text-base font-extrabold text-[var(--neutral-900)]">
                  Тойм
                </summary>
                <p className="mt-3 text-[0.95rem] leading-7">{selected.summary}</p>
              </details>

              <details open className="group rounded-xl border border-[var(--neutral-200)] p-4">
                <summary className="cursor-pointer text-base font-extrabold text-[var(--neutral-900)]">
                  Огноо, хугацаа, үнэ
                </summary>
                <div className="mt-3 grid gap-2 text-sm sm:grid-cols-3">
                  <div className="rounded-lg bg-[var(--brand-50)] p-3">
                    <p className="text-[var(--neutral-400)]">Хөдлөх огноо</p>
                    <p className="mt-1 font-semibold text-[var(--neutral-900)]">{selected.date}</p>
                  </div>
                  <div className="rounded-lg bg-[var(--brand-50)] p-3">
                    <p className="text-[var(--neutral-400)]">Хугацаа</p>
                    <p className="mt-1 font-semibold text-[var(--neutral-900)]">{selected.duration}</p>
                  </div>
                  <div className="rounded-lg bg-[var(--brand-50)] p-3">
                    <p className="text-[var(--neutral-400)]">Багц үнэ</p>
                    <p className="mt-1 font-bold text-[var(--brand-700)]">{selected.price}</p>
                  </div>
                </div>
              </details>

              <details open className="group rounded-xl border border-[var(--neutral-200)] p-4">
                <summary className="cursor-pointer text-base font-extrabold text-[var(--neutral-900)]">
                  Үнэд багтсан үйлчилгээ
                </summary>
                <ul className="mt-3 grid gap-2 text-sm">
                  {selected.inclusions.map((line) => (
                    <li key={line} className="rounded-lg bg-[var(--neutral-50)] px-3 py-2">
                      {line}
                    </li>
                  ))}
                </ul>
              </details>

              <details open className="group rounded-xl border border-[var(--neutral-200)] p-4">
                <summary className="cursor-pointer text-base font-extrabold text-[var(--neutral-900)]">
                  Өдрийн хөтөлбөр
                </summary>
                <ol className="mt-3 grid gap-2 text-sm">
                  {selected.itinerary.map((line) => (
                    <li key={line} className="rounded-lg bg-[var(--neutral-50)] px-3 py-2">
                      {line}
                    </li>
                  ))}
                </ol>
              </details>

              <details open className="group rounded-xl border border-[var(--neutral-200)] p-4">
                <summary className="cursor-pointer text-base font-extrabold text-[var(--neutral-900)]">
                  Чухал тэмдэглэл
                </summary>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--neutral-700)]">
                  {selected.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </details>
            </div>

            <aside className="surface-card h-fit overflow-hidden lg:sticky lg:top-28">
              <div className="relative aspect-[16/11]">
                <Image
                  src={selected.image}
                  alt={`${selected.destination} хотын зураг`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 p-5">
                <h4 className="text-2xl font-black">{selected.destination}</h4>
                <p className="text-sm">{selected.summary}</p>
                <div className="subtle-divider" />
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <p className="text-[var(--neutral-400)]">Огноо</p>
                  <p className="text-right font-semibold text-[var(--neutral-900)]">{selected.date}</p>
                  <p className="text-[var(--neutral-400)]">Хугацаа</p>
                  <p className="text-right font-semibold text-[var(--neutral-900)]">{selected.duration}</p>
                  <p className="text-[var(--neutral-400)]">Үнэ</p>
                  <p className="text-right text-lg font-black text-[var(--brand-700)]">{selected.price}</p>
                </div>
                <a href="#contact" className="btn-base btn-primary w-full">
                  Энэ багцыг захиалах
                </a>
                <a href="tel:77136633" className="btn-base btn-secondary w-full">
                  Шууд залгах
                </a>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </section>
  );
}
