import type { StaticImageData } from "next/image";

import bangkokPremium from "../../public/destinations/bangkok-premium.jpg";
import bangkokTemple from "../../public/destinations/bangkok-temple.jpg";
import beijingPremium from "../../public/destinations/beijing-premium.jpg";
import cappadociaPremium from "../../public/destinations/cappadocia-premium.jpg";
import chongqingPremium from "../../public/destinations/chongqing-premium.jpg";
import forbiddenCity from "../../public/destinations/forbidden-city.jpg";
import fujiBlossoms from "../../public/destinations/fuji-blossoms.jpg";
import glassBridge from "../../public/destinations/glass-bridge.jpg";
import shanghaiPremium from "../../public/destinations/shanghai-premium.jpg";
import shanghai from "../../public/destinations/shanghai.jpg";
import tianmen from "../../public/destinations/tianmen.jpg";
import tokyoPremium from "../../public/destinations/tokyo-premium.jpg";
import tokyoShibuya from "../../public/destinations/tokyo-shibuya.jpg";
import zhangjiajie from "../../public/destinations/zhangjiajie.jpg";

export type FeaturedDestination = {
  name: string;
  country: string;
  image: StaticImageData;
  length: string;
  mood: string;
  summary: string;
  highlights: string[];
  featured?: boolean;
};

export type SignaturePackage = {
  title: string;
  subtitle: string;
  image: StaticImageData;
  price: string;
  length: string;
  idealFor: string;
  sample: string;
  highlights: string[];
  featured?: boolean;
};

export type TrustPillar = {
  title: string;
  copy: string;
  detail: string;
};

export type CuratedExperience = {
  title: string;
  image: StaticImageData;
  copy: string;
  tags: string[];
};

export type TestimonialStory = {
  quote: string;
  traveler: string;
  trip: string;
  image: StaticImageData;
};

export type JournalEntry = {
  place: string;
  caption: string;
  image: StaticImageData;
};

export const heroBackdrop = shanghaiPremium;

export const heroHighlights = [
  "Хотын тансаг аялал",
  "Хувийн соёлын туршлага",
  "Тайван консерж дэмжлэг",
];

export const heroMetrics = [
  { value: "12+", label: "Аялал төлөвлөсөн жил" },
  { value: "8,000+", label: "Гадаадад аялуулсан зочин" },
  { value: "24/7", label: "Аяллын турш дэмжлэг" },
];

export const heroSpotlight = {
  badge: "Зуны онцлох багц",
  title: "Токио, Фүжи уулын оройн өнгө",
  description: "Токиогийн дизайн хороолол, Фүжигийн тайван өдрийг хослуулсан 7 өдрийн аялал.",
  image: tokyoPremium,
  details: [
    { label: "Хугацаа", value: "6 шөнө / 7 өдөр" },
    { label: "Хэлбэр", value: "Хот ба уул хосолсон хувийн аялал" },
    { label: "Буудал", value: "Сонгомол 5 одтой буудал" },
  ],
  notes: [
    "Өглөө бүр хөтөчтэй, орой чөлөөт хэмнэл",
    "Фүжигийн өдөр жолоочтой, хоол захиалгатай",
    "Виз ба нислэгийн өмнөх бэлтгэл дагалдана",
  ],
};

export const featuredDestinations: FeaturedDestination[] = [
  {
    name: "Шанхай",
    country: "БНХАУ",
    image: shanghaiPremium,
    length: "4-6 шөнө",
    mood: "Хотын тансаг өнгө",
    summary: "Голын эргийн тансаг буудал, арт деко гудамж, орчин үеийн хэмнэл.",
    highlights: ["Бунд дээрх алтан цаг", "Дизайн өнгө аястай буудал"],
    featured: true,
  },
  {
    name: "Бээжин",
    country: "БНХАУ",
    image: beijingPremium,
    length: "5 өдөр",
    mood: "Хаадын өв соёл",
    summary: "Ордон, ёслолын архитектур, түүхэн өвийг яаруу бусаар.",
    highlights: ["Хориотой хотын маршрут", "Хувийн хэмнэлтэй үзвэр"],
  },
  {
    name: "Токио",
    country: "Япон",
    image: tokyoPremium,
    length: "6-7 шөнө",
    mood: "Нарийн хэмнэл",
    summary: "Дизайн хороолол, шилдэг хоол, цэгцтэй шилжилттэй хотын аялал.",
    highlights: ["Шибүя ба Гинза", "Фүжи нэмэлт өдөр"],
  },
  {
    name: "Каппадок",
    country: "Турк",
    image: cappadociaPremium,
    length: "7-9 шөнө",
    mood: "Зүүд мэт байгаль",
    summary: "Наран мандах бөмбөлөг, агуйн буудал, мартагдашгүй байгаль.",
    highlights: ["Бөмбөлгийн өглөө", "Бутик агуйн буудал"],
  },
  {
    name: "Бангкок",
    country: "Тайланд",
    image: bangkokPremium,
    length: "5-7 шөнө",
    mood: "Сүм ба голын уур амьсгал",
    summary: "Голын эргийн үдэш, сүмийн тайван орчин, арлын амралт.",
    highlights: ["Амралт, спа нэмэлт", "Хот ба арал хослол"],
  },
  {
    name: "Чүнчин",
    country: "БНХАУ",
    image: chongqingPremium,
    length: "4-5 шөнө",
    mood: "Уулан хотын хэмнэл",
    summary: "Уулс, гүүр, шөнийн дүр зураг бүхий өвөрмөц уулан хот.",
    highlights: ["Шөнийн үзэмжийн маршрут", "Хоол төвтэй туршлага"],
  },
];

export const signaturePackages: SignaturePackage[] = [
  {
    title: "Сонгодог тансаг аялал",
    subtitle: "5-7 өдрийн хотын цэгцтэй аялал",
    image: shanghaiPremium,
    price: "2.4 сая₮-өөс",
    length: "Богино хугацааны дээд зэрэглэлийн аялалд",
    idealFor: "Хосууд болон анх удаа тансаг аялал сонгож буй зочдод.",
    sample: "Шанхай, Бээжин, Бангкок",
    highlights: [
      "Нислэг, буудал, шилжилтийн уялдаа",
      "Тайван чөлөөт цаг, уян хатан хоол",
      "Нисэхийн өмнөх товч бэлтгэл",
    ],
  },
  {
    title: "Хувийн тусгай аялал",
    subtitle: "7-10 өдрийн өндөр анхааралтай маршрут",
    image: tokyoPremium,
    price: "4.8 сая₮-өөс",
    length: "Хамгийн их сонгогддог цуглуулга",
    idealFor: "Бал сар, ойн аялал, илүү хувийн туршлага хүсдэг зочдод.",
    sample: "Токио, Фүжи, Каппадок",
    highlights: [
      "Хувийн хөтөч эсвэл жолоочтой аялал",
      "Дээд ангиллын өрөө, консерж үйлчилгээ",
      "Хоол, спа, туршлагын урьдчилсан захиалга",
    ],
    featured: true,
  },
  {
    title: "Их аяллын цуглуулга",
    subtitle: "10+ өдрийн захиалгат том аялал",
    image: cappadociaPremium,
    price: "6.9 сая₮-өөс",
    length: "Илүү өргөн цар хүрээтэй дурсамжид",
    idealFor: "Гэр бүл болон олон цэгийн төлөвлөлт шаардсан бүлгийн аялалд.",
    sample: "Олон улсын нислэг, галт тэрэг, орон нутгийн түнш",
    highlights: [
      "Олон цэгийн тайван зохион байгуулалт",
      "Тэмдэглэлт өдрийн хоол, тусгай хүсэлт",
      "Аяллын турш тусгай консерж холболт",
    ],
  },
];

export const trustStats = [
  { value: "97%", label: "Дахин хандалт болон санал болголт" },
  { value: "4.9/5", label: "Үйлчилгээний дундаж үнэлгээ" },
  { value: "48ц", label: "Саналын дундаж бэлтгэх хугацаа" },
  { value: "1:1", label: "Хувийн зөвлөхийн анхаарал" },
];

export const trustPillars: TrustPillar[] = [
  {
    title: "Захиалга бус төлөвлөлт",
    copy: "Аяллын хэмнэл, буудал, шилжилт бүрийг таны хүссэн уур амьсгалд тааруулна.",
    detail: "Санал бүр ойлгомжтой, ил тод.",
  },
  {
    title: "Чиглэлийн бодит мэдлэг",
    copy: "Маршрут бүр баталгаатай түнш, бодит хугацаа, газар дээрх нөхцөлд тооцоологдсон.",
    detail: "Шилжилт бага, урсгал сайтай аялал.",
  },
  {
    title: "Ил тод зөвлөмж ба үнэ",
    copy: "Улирал, буудал, маршрутын ялгааг тайлбарлаж, төсөв хаана үнэ цэнтэйг харуулна.",
    detail: "Бүрхэг санал, далд төлбөр байхгүй.",
  },
  {
    title: "Эхнээс нь дуустал тайван дэмжлэг",
    copy: "Аялалд өөрчлөлт гарвал баг хурдан хариу өгч, аяллын чанарыг хамгаална.",
    detail: "Тансаг байдал гэдэг тайван байдлыг хадгалах чадвар.",
  },
];

export const curatedExperiences: CuratedExperience[] = [
  {
    title: "Хувийн аялалчилгаа",
    image: fujiBlossoms,
    copy: "Хотын гол цэг, нууц үзэмж, жолоочтой өдрийг таны хэмнэлд тааруулна.",
    tags: ["Хувийн хөтөч", "Уян хатан хэмнэл", "Хос ба гэр бүл"],
  },
  {
    title: "Соёлын гүн туршлага",
    image: bangkokTemple,
    copy: "Сүмийн өглөө, өв соёлын дүүрэг, гар урлалын жинхэнэ мөчүүд.",
    tags: ["Орон нутгийн агуулга", "Хоол ба гар урлал", "Дээд түвшний нэвтрэлт"],
  },
  {
    title: "Адал явдалтай тансаг хослол",
    image: glassBridge,
    copy: "Сэтгэл хөдөлгөм байгалийг тав тухтай буудал, цэгцтэй логистикоор тэнцвэржүүлнэ.",
    tags: ["Үзэмжтэй сэтгэл хөдөлгөм", "Тав тух төвтэй", "Уулын маршрут"],
  },
  {
    title: "Сэргээх амралтын аялал",
    image: zhangjiajie,
    copy: "Уужуу өглөө, сэргээх орчин, тайван уур амьсгалд төвлөрсөн аялал.",
    tags: ["Спа төвтэй буудал", "Тайван хэмнэл", "Сэргээх аялал"],
  },
];

export const testimonialStories: TestimonialStory[] = [
  {
    quote:
      "Токиогийн аялал үнэхээр тэнцвэртэй байлаа. Өдөр бүр өөрийн хэлбэртэй мөртлөө хэт яаруу биш — жинхэнэ дээд зэрэглэлийн мэдрэмж.",
    traveler: "Оюунгэрэл Б.",
    trip: "Токио, Фүжи уулын хувийн аялал",
    image: tokyoShibuya,
  },
  {
    quote:
      "Ойн аяллаа онцгой болгохыг хүссэн. Уудам буудлаас эхлээд туршлага хүртэл бүгдийг нарийн зохион байгуулсан.",
    traveler: "Тэмүүлэн, Намуун",
    trip: "Каппадокийн тэмдэглэлт аялал",
    image: cappadociaPremium,
  },
  {
    quote:
      "Санал нь ойлгомжтой, дэгжин, бодитой байсан. Очсон хойно бүх зүйл урсгалаараа явсан.",
    traveler: "Мөнхбаяр С.",
    trip: "Шанхайн албан аялал",
    image: shanghai,
  },
];

export const journalEntries: JournalEntry[] = [
  {
    place: "Фүжигийн бүс",
    caption: "Зөөлөн гэрэл, нам гүм ус, удаан амсхийх хэмнэл.",
    image: fujiBlossoms,
  },
  {
    place: "Шанхай",
    caption: "Анхны сэтгэгдлийг урт хадгалах хотын өнгө аяс.",
    image: shanghai,
  },
  {
    place: "Бангкок",
    caption: "Оройн тансаг хэмнэлд шилжихийн өмнөх дулаан агшин.",
    image: bangkokTemple,
  },
  {
    place: "Тяньмэнь",
    caption: "Өндөрлөгийн хүчтэй дүр төрх, цэгцтэй логистик.",
    image: tianmen,
  },
  {
    place: "Токио",
    caption: "Хотын эрч хүчийг илүү тайван мэдрэмж болгосон зураг.",
    image: tokyoShibuya,
  },
  {
    place: "Хориотой хот",
    caption: "Зөв хэмнэлтэй бол өв соёл хүртэл дотно санагддаг.",
    image: forbiddenCity,
  },
];
