import { useEffect, useMemo, useRef, useState } from "react";

type IconName = "mobile" | "frontend" | "backend" | "bolt" | "handshake" | "puzzle";

export interface HeroStat {
  label: string;
  targetValue: number;
  suffix: string;
  description: string;
  languages: string[];
  icon: IconName;
  accentClass: string;
  gradientClass: string;
}

const highlightPhrases = [
  "Next.js · Vue 3 · Nuxt 기반으로 안정적인 Web App을 설계하고 개발합니다.",
  "Flutter · Android · iOS 전반에서 실서비스 Mobile App을 개발·배포합니다.",
  "Java · MyBatis · MySQL · Redis를 활용해 확장성과 안정성을 갖춘 백엔드를 구현합니다.",
];

const stats: HeroStat[] = [
  {
    label: "Mobile Development",
    targetValue: 5,
    suffix: "년+",
    description: "Flutter · Android · iOS",
    languages: ["Swift", "Kotlin", "Dart", "Objective-C", "Java"],
    icon: "mobile",
    accentClass: "text-sky-500",
    gradientClass: "from-sky-500/70 via-cyan-400/20 to-transparent",
  },
  {
    label: "Frontend Development",
    targetValue: 3,
    suffix: "년+",
    description: "Vue · Nuxt · Next.js",
    languages: ["JavaScript", "TypeScript", "SCSS", "Tailwind"],
    icon: "frontend",
    accentClass: "text-emerald-500",
    gradientClass: "from-emerald-500/70 via-lime-400/20 to-transparent",
  },
  {
    label: "Backend Development",
    targetValue: 3,
    suffix: "년+",
    description: "Java · MyBatis · MySQL",
    languages: ["Java", "Spring Boot", "MySQL", "MyBatis", "Redis"],
    icon: "backend",
    accentClass: "text-purple-500",
    gradientClass: "from-purple-500/70 via-fuchsia-400/20 to-transparent",
  },
];

export function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);
  const [statCounts, setStatCounts] = useState<number[]>(() => stats.map(() => 0));
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const current = highlightPhrases[phraseIndex];
    if (charIndex < current.length) {
      const typingId = setTimeout(() => setCharIndex((value) => value + 1), 45);
      return () => clearTimeout(typingId);
    }
    const holdId = setTimeout(() => {
      setCharIndex(0);
      setPhraseIndex((value) => (value + 1) % highlightPhrases.length);
    }, 2200);
    return () => clearTimeout(holdId);
  }, [charIndex, phraseIndex]);

  const typedText = useMemo(() => {
    return highlightPhrases[phraseIndex].slice(0, charIndex);
  }, [phraseIndex, charIndex]);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasEntered) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setStatCounts((previous) => {
        let hasReachedAll = true;
        const updated = previous.map((value, index) => {
          const target = stats[index].targetValue;
          if (value < target) {
            hasReachedAll = false;
            return value + 1;
          }
          return value;
        });

        if (hasReachedAll) {
          window.clearInterval(intervalId);
        }

        return updated;
      });
    }, 400);

    return () => window.clearInterval(intervalId);
  }, [hasEntered]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className={`
        scroll-mt-32 space-y-10 rounded-4xl border border-neutral-200
        bg-white/80 p-8 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.6)]
        backdrop-blur-xl transition-all duration-700
        dark:border-neutral-800 dark:bg-neutral-900/60
        ${
        hasEntered ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }
      `}
    >
      <div className={`
        space-y-6 text-center
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
          ABOUT ME
        </div>
        <div className="space-y-3">
          <p className={`
            text-sm font-semibold tracking-[0.3em] text-neutral-500 uppercase
            dark:text-neutral-400
          `}>
            다양한 플랫폼에서 가치를 창출하는 풀스택 개발자
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
              경험 기반의 문제 해결과 제품 임팩트에 집중합니다.
            </span>
          </p>
        </div>
        <div
          aria-live="polite"
          className={`
            mx-auto max-w-4xl rounded-3xl border border-neutral-200/70
            bg-gradient-to-r from-neutral-50/70 via-white to-neutral-50/70 px-5
            py-4 text-base text-neutral-700 shadow-lg shadow-slate-200/10
            dark:border-neutral-700/60 dark:from-neutral-900/60
            dark:via-neutral-900/40 dark:to-neutral-900/60 dark:text-neutral-200
          `}
        >
          <span className={`
            pr-2 font-semibold text-neutral-900
            dark:text-white
          `}>&gt;</span>
          {typedText}
          <span className={`
            ml-1 inline-block h-4 w-[2px] animate-pulse bg-neutral-400
            align-middle
            dark:bg-neutral-200
          `} />
        </div>
      </div>

      <div className={`
        grid gap-6
        md:grid-cols-3
      `}>
        {stats.map((stat, index) => (
          <div key={stat.label} className={`
            rounded-[26px] bg-gradient-to-br
            ${stat.gradientClass}
            overflow-hidden p-px
          `}>
            <div className={`
              flex h-full flex-col items-center justify-center gap-2
              rounded-[23px] bg-white/80 p-6 text-center shadow-xl
              shadow-sky-900/5 transition-all duration-500
              hover:scale-105
              dark:bg-neutral-950/70
            `}>
              <div
                className={`
                  mx-auto mb-4 flex h-14 w-14 items-center justify-center
                  rounded-2xl bg-white/80 text-2xl
                  ${stat.accentClass}
                `}
              >
                {renderIcon(stat.icon)}
              </div>
              <p className={`
                text-sm font-semibold tracking-[0.25em] text-neutral-500
                uppercase
                dark:text-neutral-400
              `}>
                {stat.label}
              </p>
              <p className={`
                text-xl font-bold tracking-tight text-neutral-900
                dark:text-white
              `}>
                {statCounts[index]}
                {stat.suffix}
              </p>
              <p className={`
                text-sm text-neutral-500
                dark:text-neutral-400
              `}>{stat.description}</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {stat.languages.map((language) => (
                  <span
                    key={language}
                    className={`
                      rounded-full border border-neutral-300/50
                      bg-neutral-100/80 px-2.5 py-1 text-xs font-medium
                      text-neutral-700
                      dark:border-white/20 dark:bg-white/10
                      dark:text-neutral-200
                    `}
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`
          rounded-3xl border border-neutral-200/70 bg-neutral-50/70 p-6 text-sm
          leading-relaxed text-neutral-700
          dark:border-white/10 dark:bg-white/5 dark:text-neutral-300
        `}
      >
        <div className="mb-6 space-y-2">
          <p
            className={`
              text-xs font-semibold tracking-[0.3em] text-neutral-500 uppercase
              dark:text-neutral-400
            `}
          >
            Professional Profile
          </p>
          <p
            className={`
              text-base font-semibold text-neutral-900
              dark:text-white
            `}
          >
            👋 Full-Stack Developer 이진영입니다.
          </p>
          <p>
            모바일, 프론트엔드, 백엔드까지 다양한 기술 스택을 활용해 서비스의 전 과정을 주도적으로 설계하고
            구현해온 풀스택 개발자입니다.
          </p>
          <p>
            사용자 경험을 높이고 안정적인 서비스 운영을 목표로 기술적 완성도에 끝까지 집중합니다.
          </p>
        </div>

        <div
          className={`flex flex-col gap-6`}
        >
          <section
            className={`
              rounded-2xl border border-neutral-200/70 bg-white/60 p-4 shadow-sm
              shadow-slate-200/40
              dark:border-white/10 dark:bg-neutral-900/60
            `}
          >
            <h3
              className={`
                mb-2 text-sm font-semibold text-neutral-900
                dark:text-white
              `}
            >
              📌 Frontend Development
            </h3>
            <p className="mb-1 break-keep">
              Vue.js, Nuxt.js, Next.js를 기반으로 웹 서비스의 전면적인 개발과 구조 설계를 주도해 왔습니다.
              <br/>
              프로젝트 공통 컴포넌트 시스템을 직접 구축해 개발 생산성을 극대화했으며, 렌더링 구조 최적화를 통해
              UX·퍼포먼스 개선에 집중해왔습니다.
              <br/>
              프론트엔드 팀장으로서 정기 코드 리뷰와 멘토링을 통해 팀의 코드 품질과 기술 성장을 함께 이끌었습니다.
            </p>
          </section>

          <section
            className={`
              rounded-2xl border border-neutral-200/70 bg-white/60 p-4 shadow-sm
              shadow-slate-200/40
              dark:border-white/10 dark:bg-neutral-900/60
            `}
          >
            <h3
              className={`
                mb-2 text-sm font-semibold text-neutral-900
                dark:text-white
              `}
            >
              📌 Mobile App Development (Android · iOS · Flutter)
            </h3>
            <p className="mb-1 break-keep">
              Native(Android/iOS)와 Flutter, WebView 기반의 하이브리드 앱까지 폭넓은 모바일 개발 경험을 보유하고
              있습니다.
              <br/>
              푸시 알림, 소셜 로그인, 보안 솔루션, 스토어 심사 대응 등 라이브 서비스 운영에 필요한 기능을 안정적으로
              구현하고 유지해왔습니다.
              <br/>
              특히 까다로운 앱 스토어 배포 및 버전 관리 전담 경험을 바탕으로, 서비스가 중단 없이 안정적으로
              릴리즈될 수 있도록 관리해 왔습니다.
            </p>
          </section>

          <section
            className={`
              rounded-2xl border border-neutral-200/70 bg-white/60 p-4 shadow-sm
              shadow-slate-200/40
              md:col-span-2
              dark:border-white/10 dark:bg-neutral-900/60
            `}
          >
            <h3
              className={`
                mb-2 text-sm font-semibold text-neutral-900
                dark:text-white
              `}
            >
              📌 Backend Development
            </h3>
            <p className="mb-1">
              Java, Spring Boot, MySQL 기반의 RESTful API 설계·구현을 통해 Web/App 서비스와의 안정적인 데이터 통신을
              담당했습니다.
              <br/>
              비즈니스 로직 구현뿐 아니라 PG(결제), SMS/알림톡, 실시간 처리 등 필수적인 3rd Party 서비스 연동까지 직접
              구축하며 서비스의 완성도를 높였습니다.
            </p>
            <p className="mb-1">
              
            </p>
          </section>
        </div>
      </div>

      {/* <div className="grid gap-6 md:grid-cols-3">
        {strengthCards.map((strength) => (
          <div key={strength.label} className={`rounded-[26px] bg-gradient-to-br p-px`}>
            <div className="group rounded-[23px] border border-white/60 bg-white/80 p-6 transition duration-500 hover:-translate-y-2 hover:border-white hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/50">
              <p className="text-lg font-semibold text-neutral-900 dark:text-white">{strength.label}</p>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{strength.description}</p>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}

function renderIcon(name: IconName) {
  const baseProps = {
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "mobile":
      return (
        <svg viewBox="0 0 24 24" {...baseProps}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <circle cx="12" cy="18" r="0.75" />
        </svg>
      );
    case "frontend":
      return (
        <svg viewBox="0 0 24 24" {...baseProps}>
          <path d="M3 5h18M5 9h14v11H5z" />
          <path d="m9 14-2 2 2 2m6-4 2 2-2 2" />
        </svg>
      );
    case "backend":
      return (
        <svg viewBox="0 0 24 24" {...baseProps}>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6m-14 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" {...baseProps}>
          <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
        </svg>
      );
    case "handshake":
      return (
        <svg viewBox="0 0 24 24" {...baseProps}>
          <path d="M4 12 2 9l4-4 5 5" />
          <path d="m20 12 2-3-4-4-5 5M8 17l-3-3" />
          <path d="m12 13 3 3 3-3" />
        </svg>
      );
    case "puzzle":
      return (
        <svg viewBox="0 0 24 24" {...baseProps}>
          <path d="M7 14v-4a2 2 0 0 1 2-2h2V6a2 2 0 1 1 2 2h2a2 2 0 0 1 2 2v2h2a2 2 0 0 1-2 2h-2v2a2 2 0 0 1-2 2h-2a2 2 0 1 1-2-2H9a2 2 0 0 1-2-2z" />
        </svg>
      );
    default:
      return null;
  }
}

