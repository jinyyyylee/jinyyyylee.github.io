import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import DetailProject from "../detail-project";

export type ProjectCategory = "Mobile" | "Frontend" | "Backend";

export interface ProjectItem {
  id: string;
  categories: ProjectCategory[];
  title: string;
  summary: string;
  description: string;
  stacks: string[];
  imageUrl: string;
  contribution: number;
  overview?: string;
  roles?: string[];
  oneLineSummary?: string;
}

const projectItems: ProjectItem[] = [
  {
    id: "saasda",
    categories: ["Frontend","Backend"],
    title: "Saasda",
    summary: "SaaS 플랫폼",
    description: "SAASDA는 교육 도메인을 기반으로 한 SaaS 형태의 LMS 서비스로, " +  
"초기 기획 및 설계 단계부터 개발에 참여하여 프론트엔드와 백엔드를 모두 경험한 프로젝트입니다. ",
    stacks: ["Nuxt.js", "Spring Boot", "MySQL", "JavaScript"],
    imageUrl: "/saasda.jpg",
    contribution: 80,
    overview: "SAASDA는 교육 도메인을 기반으로 한 SaaS 형태의 LMS 서비스로, 초기 기획 및 설계 단계부터 개발에 참여하여 프론트엔드와 백엔드를 모두 경험한 프로젝트입니다. 단순 기능 구현이 아닌, 장기 운영을 고려한 서비스 구조와 데이터 흐름 설계에 중점을 두고 개발을 진행하였습니다.",
    roles: [
      "Nuxt 기반 웹 프론트엔드 구현\nLMS 서비스 특성을 고려한 화면 구성 및 사용자 흐름 설계\n서비스 전반에서 재사용 가능한 컴포넌트 구조 설계",
      "Java 기반 백엔드 서비스 개발\n데이터베이스 설계 및 테이블 구조 정의\n서비스 로직 구현 및 API 설계\n본인인증 솔루션 연동",
      "다수의 사용자와 기관을 고려한 SaaS 구조 이해\n서비스 확장 및 운영을 고려한 개발 경험"
    ],
    oneLineSummary: "LMS SaaS 서비스의 초기 설계부터 프론트엔드·백엔드 개발까지 참여한 풀스택 프로젝트"
  },
  {
    id: "hanam",
    categories: ["Frontend", "Backend"],
    title: "하남시 진로·진학 통합 플랫폼",
    summary: "교육 관리 · 반응형 설계",
    description: "Nuxt3 기반 진로·교육 플랫폼으로 인증, 설문, 검사지 등 주요 서비스 로직을 중심으로 프론트엔드와 백엔드를 개발했습니다.",
    stacks: ["Nuxt3", "JavaScript", "Java", "MySQL", "MyBatis"],
    imageUrl: "/hanam.png",
    contribution: 60,
    overview: "하남시 진로·진학 통합 플랫폼은 학생과 학부모를 대상으로 한 공공기관 LMS 웹 서비스입니다. 실제 운영 환경에서 사용되는 서비스로, 안정성과 신뢰성이 중요한 프로젝트였습니다.",
    roles: [
      "Nuxt3 기반 웹 프론트엔드 구현\n웹 표준을 고려한 마크업 및 퍼블리싱\n이미지 최적화 및 UI 로직 구현",
      "Java 기반 백엔드 서비스 개발\n데이터베이스 설계 및 서비스 로직 구현\n공공 서비스 특성에 맞춘 본인인증 솔루션 연동"
    ],
    oneLineSummary: "공공기관 대상 LMS 웹 서비스로, 프론트엔드와 백엔드를 함께 개발한 실운영 프로젝트"
  },
  {
    id: "polzzak",
    categories: ["Frontend", "Backend"],
    title: "폴짝",
    summary: "국회의원 후원 웹 서비스",
    description: "Spring Boot와 Nuxt3 기반으로 후원·결제·회원 기능 등 핵심 서비스를 개발하며 전체 구조 설계와 구현에 참여했습니다.",
    stacks: ["Java", "Spring Boot", "Nuxt3"],
    imageUrl: "/polzzak.jpg",
    contribution: 40,
    overview: "폴짝은 국회의원 정보를 수집·정리하여 사용자에게 제공하고, \n해당 인물에 대한 응원 활동과 공식 후원 페이지로의 이동을 연결하는 정보성 웹 서비스입니다.",
    roles: [
      "Java 기반 백엔드 개발\n데이터베이스 설계\n서비스 로직 구현",
      "Nuxt3 기반 프론트엔드 개발\n웹 표준을 고려한 UI 구현\n이미지 최적화\n퍼블리싱 및 프론트엔드 로직 구현"
    ],
    oneLineSummary: "결제·회원 기능이 결합된 LMS 성격의 웹 서비스를 풀스택으로 개발"
  },
  {
    id: "hyundai-mobis",
    categories: ["Mobile"],
    title: "현대모비스 | 모비스쿨 (Mobischool)",
    summary: "내부 직원용 교육 서비스",
    description: "Flutter 기반 하이브리드 LMS 앱으로, 네이티브 보안 기능 구현부터 오픈 스토어 배포·운영까지 했습니다.",
    stacks: ["iOS", "Android", "Swift", "Kotlin"],
    imageUrl: "/mobischool.png",
    contribution: 90,
    overview: "Flutter 기반 하이브리드 LMS 앱으로, 네이티브 보안 기능 구현부터 오픈 스토어 배포·운영까지 담당한 프로젝트입니다.",
    roles: [
      "Flutter 기반 하이브리드 앱 개발\n네이티브 보안 기능 구현\n보안 솔루션 적용",
      "오픈 스토어 배포 및 운영 관리"
    ],
    oneLineSummary: "Flutter 기반 하이브리드 LMS 앱으로, 네이티브 보안 기능 구현부터 오픈 스토어 배포·운영까지 담당"
  },
  {
    id: "tip",
    categories: ["Frontend", "Backend", "Mobile"],
    title: "TIP (MetLife TIP)",
    summary: "보험 설계사 교육 서비스",
    description: "웹뷰 기반 하이브리드 구조 설계부터 구현까지 담당했으며, Spring Boot 백엔드 및 Vue3 프론트 개발을 함께 지원했습니다.",
    stacks: ["Java", "Spring Boot", "MySQL", "Vue3", "Swift", "Kotlin"],
    imageUrl: "/tip.png",
    contribution: 50,
    overview: "보험·금융 도메인의 내부 업무 및 교육 성격을 가진 하이브리드 앱으로, 웹과 앱이 긴밀히 연동되는 구조에서 다양한 기능 구현과 협업 개발을 경험한 프로젝트입니다.",
    roles: [
      "Kotlin / Swift 기반 하이브리드 앱 개발\n인증 및 보안 관련 서드파티 솔루션 연동\n하이브리드 앱에서 요구되는 웹–앱 연동 기능 개발",
      "백엔드 및 프론트엔드 개발 업무 지원"
    ],
    oneLineSummary: "웹–앱 연동 중심의 엔터프라이즈 LMS 성격 하이브리드 앱 개발 경험"
  },
  {
    id: "hanati",
    categories: ["Mobile"],
    title: "하나금융 TI",
    summary: "내부 직원용 교육 서비스",
    description: "Android/iOS 네이티브 기반 앱으로 LMS 기능을 개발하고 배포·운영을 관리했습니다.",
    stacks: ["iOS", "Android", "Swift", "Kotlin"],
    imageUrl: "/hanati.png",
    contribution: 80,
    overview: "하나금융 TI 내부 임직원 대상 교육용 LMS 모바일 앱으로, 금융권 특성상 강화된 보안과 인증 로직이 요구되는 환경에서 개발을 진행하였습니다.",
    roles: [
      "Kotlin / Swift 기반 네이티브 하이브리드 앱 개발\n패턴 로그인 등 인증 로직 직접 구현\n금융권 보안 정책에 따른 보안 솔루션 적용",
      "직원 교육용 학습 플레이어 개발\n자막 기능\n학습 진도율 체크",
      "비공개 앱 배포 방식을 통한 내부 전용 앱 배포\n유지보수 및 운영 관리"
    ],
    oneLineSummary: "금융권 보안 환경에서 인증·학습 기능을 구현한 내부 직원용 LMS 앱"
  },
  {
    id: "moongkle",
    categories: ["Frontend", "Mobile"],
    title: "뭉클",
    summary: "감사일기 커뮤니티 웹/앱",
    description: "Vue3·Swift·Kotlin 기반 커뮤니티 서비스로, 감사일기·피드·알림 등 핵심 기능을 구현하며 웹과 앱 개발 전반을 담당했습니다.",
    stacks: ["Vue", "Swift", "Kotlin", "Firebase"],
    imageUrl: "/moongkle.jpg",
    contribution: 50,
    overview: "뭉클은 LMS가 아닌 커뮤니티 중심 모바일 앱으로, 소셜 기능과 사용자 유입을 고려한 모바일 서비스 개발 경험을 쌓은 프로젝트입니다.",
    roles: [
      "Kotlin / Swift 기반 하이브리드 앱 개발\n딥링크 기능 구현\n소셜 로그인 네이티브 연동 (Apple, Google, Kakao, Naver)",
      "프론트엔드 개발 참여",
      "오픈 스토어 배포 및 운영 관리"
    ],
    oneLineSummary: "소셜 로그인과 커뮤니티 기능을 중심으로 한 모바일 앱 개발 프로젝트"
  },
  {
    id: "hanadigi",
    categories: ["Mobile"],
    title: "하나디지털캠퍼스",
    summary: "하나은행 직원 교육용 서비스",
    description: "Objective-C·Java 기반 LMS 기능을 개선·확장하며 모바일 앱 유지보수 및 신규 기능 개발을 수행했습니다.",
    stacks: ["Object-C", "Java"],
    imageUrl: "/hanadigital.jpg",
    contribution: 100,
    overview: "하나디지털캠퍼스는 금융권 임직원 대상 교육 플랫폼으로, 초기 커리어 단계에서 LMS 도메인과 하이브리드 앱 구조를 깊이 경험한 프로젝트입니다.",
    roles: [
      "Objective-C / Java 기반 하이브리드 앱 개발\n패턴 로그인 등 인증 로직 구현\n보안 솔루션 적용",
      "직원 교육용 학습 플레이어 개발\n자막 기능\n진도율 관리",
      "비공개 앱 배포 및 운영"
    ],
    oneLineSummary: "금융권 내부 교육용 LMS 앱으로 인증·보안·학습 기능을 구현한 프로젝트"
  },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [detailProject, setDetailProject] = useState<ProjectItem | null>(null);

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

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`
        scroll-mt-32 rounded-[32px] border border-neutral-200 bg-white/80 p-8
        shadow-[0_40px_120px_-60px_rgba(15,23,42,1)] backdrop-blur-2xl
        dark:border-white/10 dark:bg-neutral-950/70 dark:text-white
      `}
    >
      <div className={`
        space-y-6 text-center
        lg:text-left
      `}>
         <div className={`
           inline-flex items-center gap-3 rounded-full border
           border-neutral-200/60 bg-gradient-to-r px-4 py-2 text-xs
           font-semibold tracking-[0.3em] text-neutral-600
           dark:border-neutral-700 dark:from-neutral-900/50
           dark:via-neutral-800/50 dark:text-neutral-200
         `}>
          <span className={`
            h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-green-500
            motion-safe:animate-pulse
          `} />
          MAIN PROJECTS
        </div>
        <div className="space-y-3">
          <p className={`
            text-sm font-semibold tracking-[0.3em] text-neutral-500 uppercase
            dark:text-neutral-400
          `}>
            주요 프로젝트
          
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
              모바일·프론트엔드·백엔드를 넘나들며 설계와 구현을 주도한 대표 프로젝트들입니다.
            </span>
          </p>
        </div>
      </div>

      <div className={`
        mt-10 grid gap-6
        md:grid-cols-2
        lg:grid-cols-3
      `}>
        {projectItems.map((project, index) => (
          <article
            key={project.id}
            style={{ transitionDelay: `${index * 90}ms` }}
            onClick={() => setDetailProject(project)}
            className={`
              group flex transform-gpu flex-col gap-4 rounded-[20px] border
              border-neutral-200 bg-white text-left shadow-lg
              shadow-neutral-200/50 transition-all duration-500
              hover:-translate-y-2 hover:border-neutral-300 hover:shadow-xl
              dark:border-white/10 dark:bg-white/5 dark:shadow-black/40
              dark:hover:border-white/25
              ${
              hasEntered ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }
            `}
          >
            <div className="relative overflow-hidden rounded-t-[20px]">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={480}
                height={320}
                className={`
                  h-40 w-full object-cover transition duration-700
                  group-hover:scale-105
                `}
                unoptimized
              />
              <div className={`
                absolute top-3 right-3 flex flex-wrap justify-end gap-2
              `}>
                {project.categories.slice(0, 3).map((category) => (
                  <span
                    key={`${project.id}-${category}`}
                    className={`
                      rounded-full px-2 py-1 text-xs font-semibold
                      ${getCategoryBadgeClass(category)}
                    `}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 p-3">
              <div>
                <p className={`
                  text-sm tracking-[0.2em] text-neutral-500 uppercase
                  dark:text-neutral-400
                `}>{project.summary}</p>
                <div className="mt-1 flex items-center gap-2">
                  <h3 className={`
                    text-xl text-neutral-900
                    dark:text-white
                  `}>{project.title}</h3>
                </div>
                <div className="mt-3 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className={`
                      text-xs font-medium text-neutral-600
                      dark:text-neutral-400
                    `}>
                      기여도
                    </span>
                    <span className={`
                      text-xs font-semibold text-neutral-700
                      dark:text-neutral-300
                    `}>
                      {project.contribution}%
                    </span>
                  </div>
                  <div className={`
                    h-2 w-full overflow-hidden rounded-full bg-neutral-200
                    dark:bg-neutral-800
                  `}>
                    <div
                      className={`
                        h-full rounded-full bg-gradient-to-r from-emerald-500
                        to-sky-500 transition-all duration-700 ease-out
                        dark:from-emerald-600 dark:to-sky-600
                      `}
                      style={{ width: `${project.contribution}%` }}
                    />
                  </div>
                </div>
              </div>
              <p className={`
                text-sm text-neutral-600
                dark:text-white/50
              `}>{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stacks.map((stack) => (
                  <span
                    key={stack}
                    className={`
                      rounded-md border border-neutral-200 bg-neutral-50 px-3
                      py-1 text-xs font-medium text-neutral-700
                      dark:border-white/10 dark:bg-white/5 dark:text-white/90
                    `}
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {detailProject && (
        <DetailProject
          project={detailProject}
          onClose={() => setDetailProject(null)}
        />
      )}

    </section>
  );
}

function getCategoryBadgeClass(category: ProjectCategory) {
  const base = "text-xs font-semibold text-white";
  switch (category) {
    case "Mobile":
      return `${base} bg-sky-500 dark:bg-sky-500/90`;
    case "Frontend":
      return `${base} bg-emerald-500 dark:bg-emerald-500/90`;
    case "Backend":
      return `${base} bg-purple-500 dark:bg-purple-500/90`;
    default:
      return `${base} bg-neutral-500 dark:bg-neutral-500/90`;
  }
}

