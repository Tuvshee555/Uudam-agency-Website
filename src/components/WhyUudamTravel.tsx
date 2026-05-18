import Image from "next/image";

import { trustPillars, trustStats } from "@/data/home";
import trustVisual from "../../public/destinations/forbidden-city.jpg";

import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

export default function WhyUudamTravel() {
  return (
    <section id="why-uudam" className="section-shell bg-white text-(--color-copy-strong)">
      <div className="ui-container">
        <SectionIntro
          eyebrow="Яагаад Уудам Аялал"
          title="Итгэл гэдэг мэдрэмж, ойлгомжтой төлөвлөлт, нямбай хэрэгжилтээс эхэлдэг."
          copy="Тансаг аялал гэдэг зөвхөн өрөөний ангилал эсвэл чиглэл биш. Та асуухаас өмнө бүхнийг бодож төлөвлөсөн байна гэсэн тайван мэдрэмж юм."
        />

        <div className="mt-12 grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl bg-(--color-ink) text-white shadow-(--shadow-card)">
              <div className="absolute inset-0">
                <Image
                  src={trustVisual}
                  alt="Итгэлцлийн хэсгийн түүхэн орчны зураг"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1280px) 100vw, 44vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,27,45,0.18)_0%,rgba(8,27,45,0.84)_100%)]" />
              </div>

              <div className="relative z-10 flex min-h-125 flex-col justify-between gap-6 p-4 sm:min-h-135 sm:p-6">
                <div className="max-w-80 rounded-3xl border border-white/10 bg-[rgba(10,33,54,0.56)] p-5 backdrop-blur-md">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-(--color-brand-mist)">
                    Тайван итгэл
                  </p>
                  <p className="mt-3 font-display text-[2rem] leading-none">
                    Анхны хүсэлтээс буух мөч хүртэл хувийн анхаарал.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {trustStats.map((stat) => (
                    <div key={stat.label} className="rounded-[1.3rem] border border-white/10 bg-[rgba(10,33,54,0.58)] px-4 py-4 backdrop-blur-md">
                      <p className="font-display text-[2rem] leading-none text-white">{stat.value}</p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/58">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {trustPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.06} className="h-full">
                <article className="editorial-card h-full p-6 sm:p-7">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-(--color-brand)">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 font-display text-[2rem] leading-none text-(--color-copy-strong)">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-[0.98rem] leading-8 text-(--color-copy)">{pillar.copy}</p>
                  <p className="mt-5 text-sm leading-7 text-(--color-copy-strong)/76">{pillar.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
