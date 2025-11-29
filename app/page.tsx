'use client'

import Image from "next/image";
import { HeroSection } from "./components/main-sections/hero-section";
import { ProjectsSection } from "./components/main-sections/projects-section";
import { PlatformExtensionSection } from "./components/main-sections/platform-extension-section";

interface NavigationItem {
  id: string;
  label: string;
  icon: string;
}

const navigationItems: NavigationItem[] = [
  { id: "hero", label: "홈", icon: "🏠" },
  { id: "projects", label: "주요 프로젝트", icon: "🗂️" },
  { id: "platform-extension", label: "플랫폼 확장 프로젝트", icon: "🗂️" },
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <div className={`
      relative min-h-screen bg-white font-sans text-neutral-900
      dark:bg-neutral-950 dark:text-neutral-100
    `}
      >
      <div className={`
        mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-12
        lg:grid lg:grid-cols-[240px_1fr] lg:gap-12
      `}>
        <aside
          className={`
            flex w-full flex-col gap-6 overflow-y-auto rounded-3xl border
            border-neutral-200 bg-neutral-50/70 p-6
            max-lg:hidden
            lg:sticky lg:top-12 lg:max-h-[calc(100vh-6rem)]
            dark:border-neutral-800 dark:bg-neutral-900/60
          `}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            aside::-webkit-scrollbar {
              display: none !important;
            }
          `}</style>
          {/* 기본정보 섹션 */}
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
          <div className="mt-5 flex flex-col gap-4">
            {/* 이름 */}
            <h1 className={`
              text-2xl font-bold text-neutral-900
              dark:text-neutral-100
            `}>이진영</h1>
            
            {/* 직무 */}
            <div>
              <p className={`
                mb-1 text-sm text-neutral-500
                dark:text-neutral-400
              `}>직무</p>
              <p className={`
                text-sm text-neutral-700
                dark:text-neutral-300
              `}>
                Mobile · Frontend · Backend
              </p>
            </div>

            {/* 정보 카드들 */}
            <div className="flex flex-col gap-3">
              {/* 경력사항 카드 */}
              <div className={`
                rounded-lg border border-neutral-200 bg-neutral-100 p-4
                dark:border-neutral-700 dark:bg-neutral-800/50
              `}>
                <p className={`
                  mb-2 text-xs font-medium text-neutral-500
                  dark:text-neutral-400
                `}>
                  경력사항
                </p>
                <p className={`
                  text-sm font-semibold text-neutral-900
                  dark:text-neutral-100
                `}>
                  WillbeSoft
                </p>
                <p className={`
                  mt-1 text-xs text-neutral-600
                  dark:text-neutral-400
                `}>
                  2021 ~ 2025 (4년 4개월)
                </p>
              </div>

              {/* 자격증 카드 */}
              <div className={`
                rounded-lg border border-neutral-200 bg-neutral-100 p-4
                dark:border-neutral-700 dark:bg-neutral-800/50
              `}>
                <p className={`
                  mb-2 text-xs font-medium text-neutral-500
                  dark:text-neutral-400
                `}>
                  자격증
                </p>
                <div className="space-y-1.5">
                  <p className={`
                    text-sm text-neutral-700
                    dark:text-neutral-300
                  `}>
                    정보처리기사 취득
                  </p>
                  <p className={`
                    text-sm text-neutral-700
                    dark:text-neutral-300
                  `}>
                    토익스피킹 Lv.6
                  </p>
                </div>
              </div>

              {/* 연락처 카드 */}
              <div className={`
                rounded-lg border border-neutral-200 bg-neutral-100 p-4
                dark:border-neutral-700 dark:bg-neutral-800/50
              `}>
                <p className={`
                  mb-2 text-xs font-medium text-neutral-500
                  dark:text-neutral-400
                `}>
                  연락처
                </p>
                <a
                  href="mailto:jinyyyy.lee@gmail.com"
                  className={`
                    text-sm break-all text-blue-600 underline underline-offset-4
                    transition-colors
                    hover:text-blue-700
                    dark:text-blue-400 dark:hover:text-blue-300
                  `}
                >
                  jinyyyy.lee@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <div className={`
            border-t border-neutral-200
            dark:border-neutral-700
          `}></div>

          {/* 메뉴 섹션 */}
          <div className="flex flex-col gap-3">
            <h2 className={`
              text-xs font-semibold tracking-wider text-neutral-500 uppercase
              dark:text-neutral-400
            `}>
              MENU
            </h2>
            <nav className={`
              space-y-1 text-sm font-medium text-neutral-500
              dark:text-neutral-400
            `}>
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`
                    flex items-center gap-3 rounded-2xl px-4 py-3 transition
                    hover:bg-white hover:text-neutral-900
                    focus-visible:ring-2 focus-visible:ring-neutral-400
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-transparent
                    dark:hover:bg-neutral-800 dark:hover:text-white
                  `}
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
          </div>

          {/* 구분선 */}
          <div className={`
            border-t border-neutral-200
            dark:border-neutral-700
          `}></div>

          {/* 액션 버튼 섹션 */}
          <div className="flex flex-col gap-3">
            <a className={`
              flex w-full items-center justify-center gap-2 rounded-2xl border
              border-neutral-200 px-4 py-3 text-center text-sm font-semibold
              transition
              hover:bg-white
              focus-visible:ring-2 focus-visible:ring-neutral-400
              focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
              dark:border-neutral-700 dark:hover:bg-neutral-800
            `}
               onClick={() => {
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
              className={`
                flex items-center justify-center gap-2 rounded-2xl border
                border-neutral-200 px-4 py-3 text-center text-sm font-semibold
                transition
                hover:bg-white
                focus-visible:ring-2 focus-visible:ring-neutral-400
                focus-visible:ring-offset-2
                focus-visible:ring-offset-transparent
                dark:border-neutral-700 dark:hover:bg-neutral-800
              `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`
                  h-5 w-5 text-neutral-500
                  dark:text-neutral-300
                `}
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 3v10m0 0l-3-3m3 3l3-3M4 17h12" />
              </svg>
              경력기술서 다운로드
            </a>

          </div>
        </aside>

        <main className="flex flex-1 flex-col gap-12">
          <HeroSection />
          <ProjectsSection />
          <PlatformExtensionSection />
          {/* <TechStackSection /> */}
        </main>
      </div>
      
      {/* 우측 하단 고정 문구 */}
      <div className="fixed right-6 bottom-6 z-10">
        <p className={`
          rounded-full border border-neutral-200/50 bg-white/80 px-4 py-2
          text-xs text-neutral-400 shadow-sm backdrop-blur-sm
          dark:border-neutral-800/50 dark:bg-neutral-900/80
          dark:text-neutral-500
        `}>
          현재 프로젝트는 Next.js 기반으로 개발되었습니다.
        </p>
      </div>
    </div>
  );
}
