"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const destinations = [
  "Шанхай",
  "Бээжин",
  "Токио",
  "Каппадок",
  "Бангкок",
  "Чүнчин",
  "Одоогоор шийдээгүй",
] as const;

const journeyStyles = [
  "Сонгодог тансаг аялал",
  "Хувийн тусгай аялал",
  "Их аяллын цуглуулга",
  "Надад зөвлөмж хэрэгтэй",
] as const;

export default function BookingForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const fullName = (formData.get("fullName") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const destination = (formData.get("destination") as string)?.trim();
    const month = (formData.get("month") as string)?.trim();
    const guests = (formData.get("guests") as string)?.trim();
    const style = (formData.get("style") as string)?.trim();
    const notes = (formData.get("notes") as string)?.trim();

    const message = [
      "Сайн байна уу, Уудам Аялал,",
      "Би аяллаа төлөвлөж эхлэх хүсэлтэй байна.",
      `Нэр: ${fullName}`,
      `Утас: ${phone}`,
      `Сонирхож буй чиглэл: ${destination}`,
      `Аялах хугацаа: ${month}`,
      `Аялагчдын тоо: ${guests}`,
      `Аяллын хэв маяг: ${style}`,
      `Нэмэлт мэдээлэл: ${notes || "Байхгүй"}`,
    ].join("\n");

    window.open(`https://wa.me/97677136633?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    form.reset();
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="fullName" className="field-label">
          Овог нэр
        </label>
        <input id="fullName" name="fullName" required className="field" placeholder="Нэрээ бичнэ үү" />
      </div>

      <div>
        <label htmlFor="phone" className="field-label">
          Утас эсвэл Ватсапп
        </label>
        <input
          id="phone"
          name="phone"
          required
          className="field"
          placeholder="+976 9911 2233"
          inputMode="tel"
        />
      </div>

      <div>
        <label htmlFor="destination" className="field-label">
          Чиглэл
        </label>
        <select id="destination" name="destination" required className="field">
          <option value="">Чиглэл сонгоно уу</option>
          {destinations.map((destination) => (
            <option key={destination} value={destination}>
              {destination}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="month" className="field-label">
          Аялах хугацаа
        </label>
        <input id="month" name="month" className="field" placeholder="2026 оны 10 сар, хуримын аялал гэх мэт" />
      </div>

      <div>
        <label htmlFor="guests" className="field-label">
          Аялагчид
        </label>
        <input id="guests" name="guests" className="field" placeholder="2 том хүн, 1 хүүхэд" />
      </div>

      <div>
        <label htmlFor="style" className="field-label">
          Аяллын хэв маяг
        </label>
        <select id="style" name="style" className="field">
          <option value="">Багцаа сонгоно уу</option>
          {journeyStyles.map((style) => (
            <option key={style} value={style}>
              {style}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="notes" className="field-label">
          Нэмэлт хүсэлт
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={5}
          className="field min-h-35 resize-y"
          placeholder="Төсвийн хүрээ, баярын шалтгаан, буудлын сонголт эсвэл бидэнд мэдэгдэх зүйлээ бичнэ үү"
        />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" className="ui-button ui-button-primary w-full sm:w-auto">
          Аяллаа төлөвлөх
        </button>
        <p className="mt-3 text-sm leading-7 text-(--color-copy)">
          Энэ нь урьдчилан бөглөгдсөн Ватсапп мессеж нээж, манай баг танд хамгийн хурдан дараагийн алхмаар хариулах боломж бүрдүүлнэ.
        </p>
        <p aria-live="polite" className="mt-2 min-h-6 text-sm font-semibold text-(--color-brand)">
          {sent ? "Таны хүсэлт илгээхэд бэлэн боллоо. Бид удахгүй тохирсон санал хүргэнэ." : ""}
        </p>
      </div>
    </form>
  );
}
