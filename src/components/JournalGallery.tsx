import Image from "next/image";

import { journalEntries } from "@/data/home";

import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

const layoutClasses = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5 md:row-span-1",
  "md:col-span-5 md:row-span-1",
  "md:col-span-4 md:row-span-1",
  "md:col-span-4 md:row-span-1",
  "md:col-span-4 md:row-span-1",
] as const;

const articleMinH = [
  "min-h-80 md:min-h-[540px]",
  "min-h-60 md:min-h-64",
  "min-h-60 md:min-h-64",
  "min-h-56 md:min-h-60",
  "min-h-56 md:min-h-60",
  "min-h-56 md:min-h-60",
] as const;

export default function JournalGallery() {
  return (
    <section id="journal" className="section-shell bg-(--color-canvas-alt) text-(--color-copy-strong)">
      <div className="ui-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Зургийн тэмдэглэл"
            title="Нээж өгдөг орон зайнуудаас авсан богинохон өнгө аяс."
            copy="Бид маршрут төлөвлөхдөө яг ийм мэдрэмж хөөдөг — гэрэлт ирэлт, нам гүм өглөө, газрыг таных мэт болгодог мөчүүд."
          />
          <a href="#contact" className="ui-button ui-button-secondary w-fit">
            Төлөвлөж эхлэх
          </a>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-12">
          {journalEntries.map((entry, index) => (
            <Reveal key={entry.place} delay={index * 0.05} className={layoutClasses[index]}>
              <article className={`group relative overflow-hidden rounded-4xl border border-(--color-line) bg-black shadow-(--shadow-card) ${articleMinH[index]}`}>
                <Image
                  src={entry.image}
                  alt={`${entry.place} зургийн тэмдэглэл`}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,27,45,0.02)_0%,rgba(8,27,45,0.2)_38%,rgba(8,27,45,0.92)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-(--color-brand-mist)">
                    {entry.place}
                  </p>
                  <p className="mt-2 max-w-[32ch] text-sm leading-7 text-white/74">{entry.caption}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
