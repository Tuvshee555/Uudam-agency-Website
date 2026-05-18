import Image from "next/image";

import { testimonialStories } from "@/data/home";

import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

export default function Testimonials() {
  const [featuredStory, ...sideStories] = testimonialStories;

  return (
    <section id="stories" className="section-shell bg-(--color-canvas) text-(--color-copy-strong)">
      <div className="ui-container">
        <SectionIntro
          eyebrow="Зочдын сэтгэгдэл"
          title="Хүмүүс хаашаа явснаа бус, аялал нь ямар мэдрэмж төрүүлснийг илүү санадаг."
          copy="Эдгээр түүхүүд брэндийн тухай аливаа сурталчилгаанаас илүү ихийг өгүүлнэ. Нийтлэг утас нь итгэл юм. Төлөвлөгөө цэгцтэй, дэлгэрэнгүй нь бэлэн, аялагч хүн анхаарал халамж мэдэрсэн байдаг."
        />

        <div className="mt-12 grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <article className="editorial-card overflow-hidden p-4 sm:p-5">
              <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
                <div className="relative min-h-75 overflow-hidden rounded-[1.7rem]">
                  <Image
                    src={featuredStory.image}
                    alt={`${featuredStory.trip} аяллын зураг`}
                    fill
                    placeholder="blur"
                    sizes="(max-width: 1280px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-col justify-between gap-6 p-2 sm:p-3">
                  <div>
                    <p className="text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-(--color-brand)">
                      Онцлох түүх
                    </p>
                    <blockquote className="mt-4 font-display text-[2.2rem] leading-[1.02] text-(--color-copy-strong) sm:text-[2.7rem]">
                      “{featuredStory.quote}”
                    </blockquote>
                  </div>
                  <div className="border-t border-(--color-line) pt-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-(--color-copy-strong)">
                      {featuredStory.traveler}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-(--color-copy)">{featuredStory.trip}</p>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5">
            {sideStories.map((story, index) => (
              <Reveal key={story.traveler} delay={index * 0.08}>
                <article className="editorial-card grid gap-4 overflow-hidden p-4 sm:grid-cols-[0.7fr_1.3fr] sm:items-center sm:p-5">
                  <div className="relative min-h-55 overflow-hidden rounded-[1.4rem]">
                    <Image
                      src={story.image}
                      alt={`${story.trip} аяллын зураг`}
                      fill
                      placeholder="blur"
                      sizes="(max-width: 1280px) 100vw, 24vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-1 sm:p-2">
                    <blockquote className="font-display text-[1.8rem] leading-[1.05] text-(--color-copy-strong)">
                      “{story.quote}”
                    </blockquote>
                    <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-(--color-copy-strong)">
                      {story.traveler}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-(--color-copy)">{story.trip}</p>
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
