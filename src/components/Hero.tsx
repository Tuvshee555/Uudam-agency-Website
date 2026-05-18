import Image from "next/image";

import { heroBackdrop, heroHighlights, heroMetrics, heroSpotlight } from "@/data/home";

import ParallaxLayer from "./ParallaxLayer";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="discover" className="relative isolate flex min-h-screen items-end overflow-hidden bg-(--color-ink) pt-24 text-white">
      <Image
        src={heroBackdrop}
        alt="Уудам Аяллын оройн хотын дүр зураг"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(106deg,rgba(8,27,45,0.94)_14%,rgba(8,27,45,0.72)_42%,rgba(8,27,45,0.26)_70%,rgba(8,27,45,0.84)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(17,62,103,0.24),transparent_24%),linear-gradient(180deg,rgba(8,27,45,0.12)_0%,rgba(8,27,45,0.34)_100%)]" />

      <div className="ui-container relative z-10 flex min-h-screen items-end pb-10 pt-32 sm:pb-12">
        <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1.06fr)_minmax(320px,380px)] lg:items-end">
          <Reveal className="max-w-3xl">
            <span className="section-eyebrow text-(--color-brand-mist) before:bg-[rgba(216,228,240,0.62)]">
              Улаанбаатараас төлөвлөсөн
            </span>
            <h1 className="mt-6 max-w-[14ch] font-display text-[clamp(3.1rem,9vw,6.6rem)] leading-[0.98] tracking-[-0.035em] text-white">
              Кино мэт тайван аялал.
            </h1>
            <p className="mt-6 max-w-[60ch] text-[1.04rem] leading-8 text-white/72 sm:text-[1.08rem]">
              Уудам Аялал таны аяллыг эхний хүсэлтээс эхлээд буцах мөч хүртэл нямбай бүтээнэ. Чиглэл,
              зочид буудал, газар дээрх дэмжлэг, хэмнэл бүхнийг нэг уялдаатай төлөвлөж өгнө.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="ui-button ui-button-primary">
                Аяллаа төлөвлөх
              </a>
              <a href="#destinations" className="ui-button ui-button-ghost">
                Чиглэл үзэх
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {heroHighlights.map((item) => (
                <span key={item} className="info-chip text-white/82">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <ParallaxLayer className="lg:justify-self-end">
            <Reveal delay={0.12}>
              <aside className="editorial-panel overflow-hidden p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3 px-1 pb-4 pt-1">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-(--color-brand-mist)">
                      {heroSpotlight.badge}
                    </p>
                    <h2 className="mt-2 font-display text-[2rem] leading-none text-white">
                      {heroSpotlight.title}
                    </h2>
                  </div>
                  <span className="rounded-full border border-white/12 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/58">
                    Хувийн
                  </span>
                </div>

                <div className="relative aspect-4/3 overflow-hidden rounded-[1.6rem] border border-white/10">
                  <Image
                    src={heroSpotlight.image}
                    alt="Токио болон Фүжи уулын тансаг аяллын дүр зураг"
                    fill
                    placeholder="blur"
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,27,45,0.06)_0%,rgba(8,27,45,0.78)_100%)]" />
                  <p className="absolute inset-x-5 bottom-5 text-sm leading-6 text-white/82">
                    {heroSpotlight.description}
                  </p>
                </div>

                <div className="mt-5 grid gap-3">
                  {heroSpotlight.details.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex flex-col gap-1.5 rounded-[1.15rem] border border-white/10 bg-white/5 px-4 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                    >
                      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/52">
                        {detail.label}
                      </span>
                      <span className="text-sm font-medium text-white/82 sm:max-w-56 sm:text-right">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>

                <ul className="mt-5 grid gap-2 text-sm leading-6 text-white/68">
                  {heroSpotlight.notes.map((note) => (
                    <li key={note} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-(--color-brand-mist)" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="ui-button ui-button-primary mt-6 w-full">
                  Хувийн санал авах
                </a>
              </aside>
            </Reveal>
          </ParallaxLayer>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/40 bg-white/88 backdrop-blur-xl">
        <div className="ui-container grid gap-4 py-5 sm:grid-cols-3 sm:py-6">
          {heroMetrics.map((item) => (
            <div key={item.label} className="flex items-center justify-between gap-4 border-(--color-line) sm:border-r sm:pr-6 last:sm:border-r-0">
              <p className="font-display text-[2.1rem] leading-none text-(--color-brand)">{item.value}</p>
              <p className="max-w-48 text-sm uppercase tracking-[0.12em] text-(--color-copy)">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
