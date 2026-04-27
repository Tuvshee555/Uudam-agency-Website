"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Уудам манай гэр бүлийн Тайландын аяллыг мартагдашгүй болгосон. Нисэх онгоцны буудлаас зочид буудлын харагдах байдал хүртэл бүх зүйл төгс байлаа.",
    quoteEn: "Uudam made our Thailand trip unforgettable.",
    name: "Бадамцэцэг М.",
    role: "4 хүний гэр бүл — Бангкок, Тайланд",
    avatar: "Б",
    stars: 5,
  },
  {
    quote: "Хөх Хотын эмнэлгийн аялалд санаа зовж байсан ч баг бүх зүйлийг зохион байгуулсан. Орчуулагч, цаг товлолт, ресторан зөвлөмж хүртэл. Үнэхээр 5 одтой үйлчилгээ.",
    quoteEn: "The Hohhot medical trip was handled perfectly.",
    name: "Гантулга Д.",
    role: "Эмнэлгийн аялал — Хөх Хот, Хятад",
    avatar: "Г",
    stars: 5,
  },
  {
    quote: "Япон гайхамшигтай байлаа. Уудам Шинкансен захиалж, уламжлалт рёкан болон Мишленийн ресторан хүртэл бүгдийг зохицуулсан. Итгэмээргүй үнэ цэнтэй.",
    quoteEn: "Japan was incredible — Shinkansen, ryokan, Michelin restaurant.",
    name: "Оюунгэрэл Б.",
    role: "Хосын аялал — Токио & Фүжи",
    avatar: "О",
    stars: 5,
  },
  {
    quote: "Турк мөрөөдлийн аялал байлаа — Каппадок дахь нарны мандалтаар бөмбөгт онгоцоор нисэх нь мартагдашгүй. Уудам бүх зүйлийг хялбар болгосон.",
    quoteEn: "The Cappadocia balloon ride was unforgettable.",
    name: "Энхжаргал Т.",
    role: "Ганц аялагч — Истанбул & Каппадок",
    avatar: "Э",
    stars: 5,
  },
  {
    quote: "Шанхайд бизнес аялал хийсэн бөгөөд Уудам бидэнд бүх зүйлд дэвшилт хийлгэсэн. 5 одтой буудал, хувийн машин, Бундийн оройн зоог — бидэнд стресс байгаагүй.",
    quoteEn: "Business trip to Shanghai — flawless from start to finish.",
    name: "Мөнхбаяр С.",
    role: "Бизнес аялал — Шанхай",
    avatar: "М",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="ui-section overflow-hidden bg-white">
      <div className="ui-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-gold">Аялагчдын сэтгэгдэл</span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight text-[#1A1A1A]">
            Аялагчдын
            <br />
            <em className="italic gold-text">дуу хоолой</em>
          </h2>
          <p className="text-xs text-[#bbb] mt-1 tracking-wider">Voices of Our Travelers</p>
        </motion.div>
      </div>

      <div
        className="ui-container flex gap-6 overflow-x-auto no-scrollbar pb-4"
        
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="flex-none w-80 md:w-96 card-light rounded-2xl p-8 flex flex-col hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex gap-1 mb-5">
              {Array.from({ length: t.stars }).map((_, j) => (
                <svg key={j} width="13" height="13" viewBox="0 0 14 14" fill="#B8860B">
                  <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.43L7 8.885l-3.09 1.615.59-3.43L2 4.635l3.455-.505L7 1z"/>
                </svg>
              ))}
            </div>

            <blockquote className="flex-1 text-[14px] text-[#555] font-light leading-relaxed italic font-display mb-3">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <p className="text-[10px] text-[#ccc] font-light italic mb-4">{t.quoteEn}</p>

            <div className="flex items-center gap-3 pt-4 border-t border-[#F0EAE0]">
              <div className="w-9 h-9 rounded-full bg-[#F9F5EC] border border-[#E8DFC8] flex items-center justify-center font-display text-base font-medium text-gold">
                {t.avatar}
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#1A1A1A]">{t.name}</p>
                <p className="text-[11px] text-[#999] font-light mt-0.5">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="flex-none w-6" />
      </div>
    </section>
  );
}

