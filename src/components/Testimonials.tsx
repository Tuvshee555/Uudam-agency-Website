"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Манай гэр бүл Тайландын аяллаа Уудамаар зохион байгуулуулсан. Нислэг, буудал, өдөр тутмын хөтөлбөр яг амласан түвшинд байсан.",
    name: "Бадамцэцэг М.",
    role: "Гэр бүлийн аялал",
  },
  {
    quote:
      "Хөх хотын эмнэлгийн аялалд хугацаа их чухал байсан. Бүх цаг төлөвлөлт маш нарийн болсон тул бид тайван явж чадсан.",
    name: "Гантулга Д.",
    role: "Эмнэлгийн аялал",
  },
  {
    quote:
      "Токио, Фүжи чиглэлийн багц нь үнэхээр тав тухтай байсан. Маршрут нь ачаалалгүй, үйлчилгээ нь мэргэжлийн санагдсан.",
    name: "Оюунгэрэл Б.",
    role: "Хосын аялал",
  },
  {
    quote:
      "Байгууллагын багийн аяллыг нэг дор цэгцтэй зохион байгуулсан нь маш том давуу тал байлаа. Харилцаа шуурхай, тодорхой.",
    name: "Мөнхбаяр С.",
    role: "Байгууллагын аялал",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, idx) => (
        <svg key={idx} width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M10 2.4l2.3 4.65 5.12.75-3.7 3.6.87 5.1L10 14.1l-4.59 2.4.88-5.1-3.7-3.6 5.11-.75L10 2.4z"
            fill="#113E67"
            fillOpacity="0.88"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="ui-section bg-white">
      <div className="ui-container">
        <div className="mb-10 space-y-4 md:mb-12">
          <span className="section-kicker">Сэтгэгдэл</span>
          <h2 className="section-title">Бидэнтэй аялсан үйлчлүүлэгчдийн үнэлгээ</h2>
          <p className="section-copy">
            Үйлчилгээний чанар, мэдээллийн ойлгомжтой байдал, аяллын үеийн дэмжлэг нь манай
            хэрэглэгчдийн хамгийн их онцолдог давуу талууд юм.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="surface-card flex h-full flex-col p-5"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-7 text-[var(--neutral-700)]">
                “{item.quote}”
              </blockquote>
              <div className="mt-5 border-t border-[var(--neutral-200)] pt-4">
                <p className="text-sm font-extrabold text-[var(--neutral-900)]">{item.name}</p>
                <p className="text-xs text-[var(--neutral-400)]">{item.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
