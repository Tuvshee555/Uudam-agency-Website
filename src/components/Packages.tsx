import Image from "next/image";

import { signaturePackages } from "@/data/home";

import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

export default function Packages() {
  return (
    <section id="packages" className="section-shell bg-(--color-canvas-alt) text-(--color-copy-strong)">
      <div className="ui-container">
        <div className="grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          <Reveal>
            <div className="space-y-8 xl:sticky xl:top-28">
              <SectionIntro
                eyebrow="Онцгой багцууд"
                title="Аяллын өнгө аяст тохирох түвшнээ сонгоорой."
                copy="Хүн бүрийг нэг ижил төлөвлөгөөнд оруулахын оронд гурван тусдаа тансаг цуглуулгаар ажилладаг. Ингэснээр санал илүү тохирсон, нямбай болдог."
              />

              <div className="editorial-card-dark p-6 sm:p-7">
                <p className="text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-(--color-brand)">
                  Багц бүрт
                </p>
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-(--color-copy)">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-(--color-brand)" />
                    <span>Таны хэмнэл, төсөвт тохирсон нислэг ба байрны сонголт.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-(--color-brand)" />
                    <span>Ойлгомжтой багтаамж, шийдвэр гаргахад хялбар анхны санал.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-(--color-brand)" />
                    <span>Явахаас өмнөх зөвлөгөө, аяллын турш шуурхай дэмжлэг.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 xl:grid-cols-2 xl:items-stretch 2xl:grid-cols-3">
            {signaturePackages.map((travelPackage, index) => {
              const featuredClass = travelPackage.featured
                ? "xl:-translate-y-6 border-(--color-brand)/35 shadow-(--shadow-card)"
                : "border-(--color-line) shadow-(--shadow-soft)";

              return (
                <Reveal key={travelPackage.title} delay={index * 0.08} className="h-full">
                  <article
                    className={`group flex h-full flex-col overflow-hidden rounded-4xl border bg-white p-4 transition-transform duration-500 hover:-translate-y-2 ${featuredClass}`}
                  >
                    <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
                      <Image
                        src={travelPackage.image}
                        alt={`${travelPackage.title} багцын зураг`}
                        fill
                        placeholder="blur"
                        sizes="(max-width: 1279px) 100vw, (max-width: 1535px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,27,45,0.05)_0%,rgba(8,27,45,0.22)_46%,rgba(8,27,45,0.9)_100%)]" />
                      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-(--color-brand-mist)">
                            {travelPackage.length}
                          </p>
                          <h3 className="mt-2 font-display text-[2rem] leading-none text-white">
                            {travelPackage.title}
                          </h3>
                        </div>
                        {travelPackage.featured ? (
                          <span className="info-chip text-white/82">Их сонголт</span>
                        ) : null}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
                      <p className="text-sm uppercase tracking-[0.12em] text-(--color-copy)">
                        {travelPackage.subtitle}
                      </p>
                      <p className="mt-3 font-display text-[2.35rem] leading-none text-(--color-brand)">
                        {travelPackage.price}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-(--color-copy)">{travelPackage.idealFor}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        <span className="info-chip-light">{travelPackage.sample}</span>
                      </div>

                      <ul className="mt-5 grid gap-3 text-sm leading-6 text-(--color-copy)">
                        {travelPackage.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-(--color-brand)" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <a href="#contact" className="ui-button ui-button-primary mt-7 w-full">
                        Энэ багцыг сонгох
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
