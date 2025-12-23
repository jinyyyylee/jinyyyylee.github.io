import Image from "next/image";
import { useRef } from "react";

const features = [
  "Heic 확장자 파일 업로드 및 미리보기",
  "Heic 확장자 파일 변환 가능 (JPEG, PNG 등)",
  "Heic 확장자 파일 다운로드 가능",
];

const techStacks = ["Tauri", "Rust", "JavaScript", "Tailwind"];

export function PlatformExtensionSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      id="platform-extension"
      ref={sectionRef}
      className={`
        scroll-mt-32 space-y-10 rounded-4xl border border-neutral-200
        bg-white/80 p-8 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.6)]
        backdrop-blur-xl transition-all duration-700
        dark:border-neutral-800 dark:bg-neutral-900/60
      `}
    >
      <div className={`
        mb-10 space-y-6 text-center
        lg:text-left
      `}>
        <div className={`
          inline-flex items-center gap-3 rounded-full border
          border-neutral-200/60 bg-gradient-to-r px-4 py-2 text-xs font-semibold
          tracking-[0.3em] text-neutral-600
          dark:border-neutral-700 dark:from-neutral-900/50
          dark:via-neutral-800/50 dark:text-neutral-200
        `}>
          <span className={`
            h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-green-500
            motion-safe:animate-pulse
          `} />
          PLATFORM EXTENSION PROJECTS
        </div>
        <div className="space-y-3">
          <p className={`
            text-sm font-semibold tracking-[0.3em] text-neutral-500 uppercase
            dark:text-neutral-400
          `}>
            토이 프로젝트
          </p>
          <p className={`
            text-xl leading-tight font-bold tracking-tight text-transparent
            sm:text-xl
          `}>
            <span className={`
              bg-gradient-to-r from-neutral-900 via-slate-700 to-sky-600
              bg-clip-text
              dark:from-white dark:via-slate-200 dark:to-sky-400
            `}>
              경계없는 기술의 확장성을 추구하는 토이 프로젝트입니다.
            </span>
          </p>
        </div>
      </div>

      <div className={`
        grid gap-8
        lg:grid-cols-2 lg:gap-12
      `}>
        {/* 왼쪽 섹션 - 노트북 이미지 */}
        <div className="relative">
          <div className={`
            relative aspect-4/3 overflow-hidden rounded-2xl bg-black/30
            dark:bg-neutral-900/50
          `}>
            
            <Image
              src={`/heicconvert.png`}
              alt="윈도우 데스크톱 애플리케이션"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* 오른쪽 섹션 - 텍스트 정보 */}
        <div className="flex flex-col justify-center space-y-4">
          {/* 메인 헤딩 */}
          <h2 className={`
            text-3xl leading-tight font-bold text-neutral-900
            lg:text-xl
            dark:text-white
          `}>
            윈도우 데스크톱 애플리케이션
          </h2>

          {/* 주요 기능 */}
          <div className="space-y-3">
            <h3 className={`
              text-base font-semibold text-neutral-900
              dark:text-neutral-200
            `}>주요 기능</h3>
            <ul className="space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`
                    text-sm text-neutral-700
                    dark:text-white/70
                  `}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 기술 스택 */}
          <div className="space-y-3">
            <h3 className={`
              text-base font-semibold text-neutral-900
              dark:text-neutral-200
            `}>기술 스택</h3>
            <div className="flex flex-wrap gap-2">
              {techStacks.map((stack) => (
                <span
                  key={stack}
                  className={`
                    rounded-full border border-orange-500/50 bg-white px-3 py-1
                    text-xs font-medium text-orange-400
                    dark:border-orange-500/50 dark:bg-black dark:text-orange-400
                  `}
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <a href="ms-windows-store://pdp/?productid=9N67720G0VWM" target="_blank" rel="noopener noreferrer" className={`
              w-full rounded-[20px] bg-orange-500 py-3 text-center text-sm
              font-medium text-white transition-colors duration-300 ease-in-out
              hover:bg-orange-600
              dark:bg-orange-500/50 dark:hover:bg-orange-500/70
            `}>다운로드 받기</a>
          </div>
         </div>
      </div>
    </section>
  );
}