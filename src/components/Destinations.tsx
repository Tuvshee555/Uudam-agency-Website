import Image from "next/image";

import { featuredDestinations } from "@/data/home";

import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

export default function Destinations() {
  return (
    <section id="destinations" className="section-shell bg-(--color-canvas) text-(--color-copy-strong)">
      <div className="ui-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Онцлох чиглэлүүд"
            title="Дүр зураг, хэмнэл, амралтын мэдрэмжийг нэгтгэсэн маршрутууд."
            copy="Бид чиглэл бүрийг зөвхөн алдартай гэдгээр нь бус, зөв хэмнэл, зөв байрлал, зөв үйлчилгээтэй үедээ хамгийн сайхнаар мэдрэгдэх боломжийг нь харж сонгодог."
          />
          <a href="#packages" className="ui-button ui-button-secondary w-fit">
            Онцгой багцууд үзэх
          </a>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:auto-rows-70 xl:auto-rows-75">
          {featuredDestinations.map((destination, index) => {
            const featuredClass = destination.featured
              ? "min-h-105 lg:col-span-2 lg:row-span-2 lg:min-h-0"
              : "min-h-70 lg:min-h-0";

            return (
              <Reveal key={destination.name} delay={index * 0.06} className={featuredClass}>
                <article className="group relative h-full overflow-hidden rounded-4xl border border-(--color-line) bg-black shadow-(--shadow-card)">
                  <Image
                    src={destination.image}
                    alt={`${destination.name} чиглэлийн зураг`}
                    fill
                    placeholder="blur"
                    sizes={destination.featured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,27,45,0.04)_0%,rgba(8,27,45,0.18)_35%,rgba(8,27,45,0.92)_100%)]" />
                  <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
                    <span className="info-chip border-white/16 bg-[rgba(10,33,54,0.4)] text-white/82">
                      {destination.length}
                    </span>
                    <span className="rounded-full border border-white/12 bg-[rgba(10,33,54,0.36)] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/58">
                      {destination.country}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-(--color-brand-mist)">
                      {destination.mood}
                    </p>
                    <h3 className="mt-2 font-display text-[2.1rem] leading-none text-white sm:text-[2.6rem]">
                      {destination.name}
                    </h3>
                    <p className="mt-3 max-w-[42ch] text-sm leading-7 text-white/70 sm:text-[0.98rem]">
                      {destination.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {destination.highlights.map((highlight) => (
                        <span key={highlight} className="info-chip text-white/74">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
