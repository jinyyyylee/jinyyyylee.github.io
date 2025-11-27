'use client'

import Image from "next/image";
import { HeroSection, type HeroStat } from "./components/main-sections/hero-section";
import { InfoSection, type InfoSectionData } from "./components/main-sections/info-section";

const sections: InfoSectionData[] = [
  {
    id: "overview",
    label: "프로젝트 소개",
    title: "포트폴리오 개요",
    description:
      "Next.js + Tailwind 기반의 개인 포트폴리오 프로젝트입니다. 컴포넌트 기반 설계를 통해 재사용성을 높이고, 라이트·다크 테마를 즉시 지원합니다.",
  },
  {
    id: "tech",
    label: "기술 스택",
    title: "주요 기술 스택",
    description:
      "React Server Components, App Router, Image 최적화 등 최신 Next.js 기능을 활용합니다. 스타일링은 Tailwind CSS로 구성해 빠른 반복과 반응형 레이아웃을 제공합니다.",
  },
  {
    id: "deploy",
    label: "배포 & 문서",
    title: "배포와 참고 자료",
    description:
      "Vercel을 통한 CI/CD 파이프라인을 사용하여 안정적인 배포를 유지합니다. 공식 문서와 템플릿을 참고해 빠르게 시작할 수 있습니다.",
    cta: {
      label: "문서 살펴보기",
      href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    },
  },
];

interface NavigationItem {
  id: string;
  label: string;
  icon: string;
}

const navigationItems: NavigationItem[] = [
  { id: "hero", label: "홈", icon: "🏠" },
  ...sections.map((section) => ({
    id: section.id,
    label: section.label,
    icon: section.id === "overview" ? "👤" : section.id === "tech" ? "🧩" : "📤",
  })),
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-12 lg:grid lg:grid-cols-[260px_1fr] lg:gap-12">
        <aside className="flex w-full flex-col gap-8 rounded-3xl border border-neutral-200 bg-neutral-50/70 p-6 dark:border-neutral-800 dark:bg-neutral-900/60 lg:sticky lg:top-12 lg:h-fit max-lg:hidden">
          <div className="flex flex-col items-center gap-4 text-center">
            <div style={{ width: '100%' }}>
              <Image
                src={`${basePath}/profile.jpg`}
                alt="profile"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '9999px' }}
                unoptimized
              />
            </div>
            <div className="space-y-1">
              <p className="text-xl font-semibold">이진영</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Mobile · Frontend · Backend
              </p>
            </div>
          </div>

          <nav className="space-y-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-white hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent dark:hover:bg-neutral-800 dark:hover:text-white"
                onClick={e => {
                  e.preventDefault();
                  const element = document.getElementById(item.id);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                  // Optionally, set the hash in the URL without jumping
                  if (history.pushState) {
                    history.pushState(null, "", `#${item.id}`);
                  }
                }}
              >
                <span aria-hidden>{item.icon}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <a className="flex items-center justify-center gap-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 text-sm font-semibold transition hover:bg-white focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent dark:border-neutral-700 dark:hover:bg-neutral-800 text-center"
               onClick={() => {
                window.open("https://jpointofviewntoe.tistory.com", '_blank');
               }}
               target="_blank"
               rel="noopener noreferrer"
              >
                <Image src={`${basePath}/tistory.png`} alt="Tistory" width={24} height={24} />
                개발 블로그 바로가기
            </a>

            <a
              href={`${basePath}/career.pdf`}
              download
              className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm font-semibold transition hover:bg-white focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent dark:border-neutral-700 dark:hover:bg-neutral-800 text-center block"
            >
              경력기술서 다운로드
            </a>

          </div>
        </aside>

        <main className="flex flex-1 flex-col gap-12">
          <HeroSection />
          {sections.map((section) => (
            <InfoSection key={section.id} {...section} />
          ))}
        </main>
      </div>
    </div>
  );
}
