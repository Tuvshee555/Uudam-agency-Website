import Image from "next/image";

import contactVisual from "../../public/destinations/zhangjiajie.jpg";

import BookingForm from "./BookingForm";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

const channels = [
  { title: "Утас", value: "+976 7713 6633", href: "tel:+97677136633" },
  { title: "Имэйл", value: "uudamtravel6@gmail.com", href: "mailto:uudamtravel6@gmail.com" },
  {
    title: "Фэйсбүүк",
    value: "facebook.com/uudamtravelagency",
    href: "https://www.facebook.com/uudamtravelagency",
  },
  { title: "Ватсапп", value: "wa.me/97677136633", href: "https://wa.me/97677136633" },
];

export default function CTA() {
  return (
    <section id="contact" className="section-shell bg-(--color-canvas) text-(--color-copy-strong)">
      <div className="ui-container">
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl bg-(--color-ink) text-white shadow-(--shadow-card)">
              <div className="absolute inset-0">
                <Image
                  src={contactVisual}
                  alt="Захиалгын хэсгийн байгалийн зураг"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1280px) 100vw, 42vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,27,45,0.28)_0%,rgba(8,27,45,0.82)_100%)]" />
              </div>

              <div className="relative z-10 flex min-h-135 flex-col justify-between gap-8 p-6 sm:min-h-155 sm:p-8">
                <div className="max-w-120">
                  <p className="text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-(--color-brand-mist)">
                    Сүүлийн алхам
                  </p>
                  <h2 className="mt-4 font-display text-[2.8rem] leading-[0.92] text-white sm:text-[3.4rem]">
                    Та хүссэн аяллаа хэл, үлдсэнийг нь бид бүрдүүлнэ.
                  </h2>
                  <p className="mt-5 text-base leading-8 text-white/74">
                    Чиглэл, хугацаа, аяллаас авах мэдрэмжээ бидэнд бичээрэй. Бид ердийн жагсаалт биш,
                    танд тохирсон нямбай дараагийн алхмыг санал болгоно.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {channels.map((channel) => (
                    <a
                      key={channel.title}
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="rounded-[1.35rem] border border-white/10 bg-[rgba(10,33,54,0.58)] px-4 py-4 backdrop-blur-md transition-colors hover:bg-[rgba(10,33,54,0.72)]"
                    >
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-(--color-brand-mist)">
                        {channel.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/78">{channel.value}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="editorial-card p-6 sm:p-8 lg:p-10">
              <SectionIntro
                eyebrow="Аяллаа эхлүүлэх"
                title="Тансаг аялал тодорхой хүсэлтээс эхэлдэг."
                copy="Хаашаа явах, ямар мэдрэмж хүсэж байгаагаа доорх маягтаар хуваалцаарай. Үлдсэн маршрут, хэмнэл, нямбай жижиг деталь бүрийг бид хариуцна."
              />
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
