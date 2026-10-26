export type WorkMedia =
  | { type: "image"; src: string }
  | { type: "video"; src: string };

export type Work = {
  id: string;
  date: string;
  /** Mirrors the "(Team)" tag shown next to the date on team projects. */
  team?: boolean;
  title: { ko: string; en: string };
  description: { ko: string; en: string };
  tags: { ko: string[]; en: string[] };
  media: WorkMedia | { pc: WorkMedia; mobile: WorkMedia };
};

export const works: Work[] = [
  {
    id: "paris-baguette",
    date: "2026.10.",
    title: {
      ko: "네이버페이 - 파리바게뜨 제휴 이벤트 페이지",
      en: "Naver Pay — Paris Baguette Partnership Event Page",
    },
    description: {
      ko: "인터랙션·웹 단독 디자인",
      en: "Solo interaction and web design",
    },
    tags: {
      ko: ["#Interaction", "#AI Motion"],
      en: ["#Interaction", "#AI Motion"],
    },
    media: { type: "video", src: "/videos/01.mp4" },
  },
  {
    id: "centralsquare",
    date: "2025.03.-05.",
    team: true,
    title: {
      ko: "Centralsquare - 리브랜딩 및 웹 개편",
      en: "Centralsquare — Rebranding & Web Overhaul",
    },
    description: {
      ko: "CI 리브랜딩, 웹 디자인 담당",
      en: "Led CI rebranding and web design",
    },
    tags: {
      ko: ["#Rebranding", "#Web"],
      en: ["#Rebranding", "#Web"],
    },
    media: {
      pc: { type: "video", src: "/videos/02-pc.mp4" },
      mobile: { type: "video", src: "/videos/02-mobile.mp4" },
    },
  },
  {
    id: "synce",
    date: "2025.03.-05.",
    title: {
      ko: "Synce - 성형 후 헬스케어 앱 전체 페이지",
      en: "Synce — Full Page Design for Post-Surgery Healthcare",
    },
    description: {
      ko: "창업 프로젝트, 브랜딩·앱 단독 디자인, UT·로컬라이제이션",
      en: "Startup project — solo branding and app design, UT and localization",
    },
    tags: {
      ko: ["#Product Design", "#App"],
      en: ["#Product Design", "#App"],
    },
    // Only one video was provided for Synce (no separate mobile cut yet),
    // so the PC/Mobile toggle is dropped here until a second clip arrives.
    media: { type: "video", src: "/videos/03.mp4" },
  },
  {
    id: "umbrella-campaign",
    date: "2026.10.-",
    team: true,
    title: {
      ko: "네이버 예약 - 엄브렐러 캠페인 페이지",
      en: "Naver Reservations — Umbrella Campaign Page",
    },
    description: {
      ko: "키비주얼, 웹 디자인 담당",
      en: "Led key visual and web design",
    },
    tags: {
      ko: ["#Key Visual", "#Web"],
      en: ["#Key Visual", "#Web"],
    },
    media: { type: "video", src: "/videos/04.mp4" },
  },
  {
    id: "maejeom-running",
    date: "2026.04.-06.",
    team: true,
    title: {
      ko: "네이버페이 - 매점 달리기 이벤트 페이지",
      en: "Naver Pay — Campus Store Run Event Page",
    },
    description: {
      ko: "인터랙션·모션 디자인 담당",
      en: "Led interaction and motion design",
    },
    tags: {
      ko: ["#Interaction", "#Motion"],
      en: ["#Interaction", "#Motion"],
    },
    media: { type: "video", src: "/videos/05.mp4" },
  },
  {
    id: "face-sign",
    date: "2026.01.",
    title: {
      ko: "네이버페이 - 페이스사인 이벤트 페이지",
      en: "Naver Pay — Face Sign Event Page",
    },
    description: {
      ko: "웹 단독 디자인",
      en: "Solo web design",
    },
    tags: {
      ko: ["#Interaction", "#Web"],
      en: ["#Interaction", "#Web"],
    },
    media: { type: "video", src: "/videos/06.mp4" },
  },
  {
    id: "habit-app",
    date: "2023.02.",
    title: {
      ko: "021 - 습관 형성 앱 메인 페이지",
      en: "021 — Habit-Forming App Main Page",
    },
    description: {
      ko: "앱 단독 디자인",
      en: "Solo app design",
    },
    tags: {
      ko: ["#Product Design", "#App"],
      en: ["#Product Design", "#App"],
    },
    media: { type: "video", src: "/videos/07.mp4" },
  },
  {
    id: "flea-market",
    date: "2026.07.-09.",
    team: true,
    title: {
      ko: "N 플리마켓 - 온라인 기획전 키비주얼",
      en: "N Flea Market — Online Campaign Key Visuals",
    },
    description: {
      ko: "프리미엄, 메루카리, 캠핑 위크 키 비주얼, 모션 디자인 담당",
      en: "Key visual and motion design for Premium, Mercari, and Camping Week",
    },
    tags: {
      ko: ["#Key Visual", "#Banner"],
      en: ["#Key Visual", "#Banner"],
    },
    media: { type: "video", src: "/videos/08.mp4" },
  },
  {
    id: "store-discovery",
    date: "2026.05.-06.",
    team: true,
    title: {
      ko: "네이버 플러스 스토어 - 스토어의 발견 캠페인",
      en: "Naver Plus Store — Store Discovery Campaign",
    },
    description: {
      ko: "배너/SNS/옥외광고 및 가이드 제작 담당",
      en: "Produced banner, social, and out-of-home ads plus the brand guide",
    },
    tags: {
      ko: ["#Banner", "#SNS", "#OOH"],
      en: ["#Banner", "#SNS", "#OOH"],
    },
    media: { type: "video", src: "/videos/09.mp4" },
  },
];
