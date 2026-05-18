import Image from "next/image";

import { curatedExperiences } from "@/data/home";

import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

export default function Experience() {
  return (
    <section id="experiences" className="section-shell bg-(--color-canvas-alt) text-(--color-copy-strong)">
      <div className="ui-container">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <Reveal>
            <div className="space-y-8 lg:sticky lg:top-28">
              <SectionIntro
                eyebrow="Сонгомол туршлагууд"
                title="Өнгө аястай, зөв хэмнэлтэй, дотно мэдрэмжтэй мөчүүд."
                copy="Хамгийн сайхан дурсамж олон зүйл үзсэнээс биш, зөв зүйлсийг зөв хурдаар, амьдран мэдэрснээс төрдөг."
              />
              <div className="editorial-card-dark p-6 sm:p-7">
                <p className="text-sm leading-8 text-(--color-copy)">
                  Бид маршрут бүрийг таны аялал ямар мэдрэмж төрүүлэхийг хүсэж байгаагаар нь бүтээдэг —
                  баярт, тайван, адал явдалтай эсвэл тэдгээрийн тэнцвэртэй хослол.
                </p>
                <a href="#contact" className="ui-button ui-button-primary mt-6 w-full sm:w-auto">
                  Хүсэлтээ эхлүүлэх
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {curatedExperiences.map((experience, index) => (
              <Reveal key={experience.title} delay={index * 0.06} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-4xl border border-(--color-line) bg-white shadow-(--shadow-soft)">
                  <div className="relative aspect-4/5 overflow-hidden">
                    <Image
                      src={experience.image}
                      alt={`${experience.title} туршлагын зураг`}
                      fill
                      placeholder="blur"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,27,45,0.08)_0%,rgba(8,27,45,0.3)_42%,rgba(8,27,45,0.9)_100%)]" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-(--color-brand-mist)">
                      Аяллын өнгө
                    </p>
                    <h3 className="mt-2 font-display text-[2rem] leading-none text-white">
                      {experience.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/72">{experience.copy}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <span key={tag} className="info-chip text-white/74">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
