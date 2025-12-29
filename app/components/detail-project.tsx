import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { ProjectItem, ProjectCategory } from "./main-sections/projects-section";

interface DetailProjectProps {
  project: ProjectItem;
  onClose: () => void;
}

export default function DetailProject({ project, onClose }: DetailProjectProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  function handleOverlayClick() {
    onClose();
  }

  function handleContentClick(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
  }

  function handleEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  const modalContent = (
    <div
      className={`
        fixed inset-0 z-[9999] flex items-center justify-center bg-black/40
        backdrop-blur-sm px-4
      `}
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
      aria-labelledby="project-modal-title"
    >
      <div
        className={`
          relative w-full max-w-4xl max-h-[90vh] rounded-3xl border border-neutral-200
          bg-white shadow-2xl dark:border-neutral-700 dark:bg-neutral-900
          overflow-hidden flex flex-col p-4
          [&_*::-webkit-scrollbar]:hidden [&_*]:scrollbar-width-none
        `}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }}
        onClick={handleContentClick}
      >
        <button
          type="button"
          onClick={onClose}
          className={`
            absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center
            rounded-full bg-white/80 text-neutral-500 backdrop-blur-sm
            transition hover:bg-white hover:text-neutral-800
            dark:bg-neutral-800/80 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white
          `}
          aria-label="프로젝트 상세 모달 닫기"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto flex-1 p-6 md:p-8">
          <div className="flex flex-col gap-6">
            {/* 헤더 섹션 */}
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative h-48 w-full overflow-hidden rounded-2xl md:h-64 md:w-2/5 flex-shrink-0">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>

              <div className="flex-1 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                  {project.summary}
                </p>
                <h2 id="project-modal-title" className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-50">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className={`
                        rounded-full px-3 py-1 text-xs font-semibold text-white
                        ${getCategoryBadgeClass(category)}
                      `}
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                    기여도
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 dark:from-emerald-600 dark:to-sky-600 transition-all duration-500"
                        style={{ width: `${project.contribution}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 whitespace-nowrap">
                      {project.contribution}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 한 줄 요약 */}
            {project.oneLineSummary && (
              <div className={`
                rounded-xl border border-neutral-200 bg-gradient-to-r from-neutral-50 to-neutral-100
                p-4 dark:border-neutral-700 dark:from-neutral-800/50 dark:to-neutral-900/50
              `}>
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {project.oneLineSummary}
                </p>
              </div>
            )}

            {/* 프로젝트 개요 */}
            {project.overview && (
              <div className="space-y-3">
                <h3 className={`
                  text-lg font-bold text-neutral-900
                  dark:text-neutral-100
                `}>
                  프로젝트 개요
                </h3>
                <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 whitespace-pre-line">
                  {project.overview}
                </p>
              </div>
            )}

            {/* 담당 역할 및 주요 기여 */}
            {project.roles && project.roles.length > 0 && (
              <div className="space-y-4">
                <h3 className={`
                  text-lg font-bold text-neutral-900
                  dark:text-neutral-100
                `}>
                  담당 역할 및 주요 기여
                </h3>
                <div className="space-y-3">
                  {project.roles.map((role, index) => (
                    <div
                      key={index}
                      className={`
                        rounded-xl border border-neutral-200 bg-white p-4
                        dark:border-neutral-700 dark:bg-neutral-800/50
                      `}
                    >
                      <div className="flex gap-3">
                        <span className={`
                          flex h-6 w-6 flex-shrink-0 items-center justify-center
                          rounded-full bg-gradient-to-r from-emerald-500 to-sky-500
                          text-xs font-bold text-white
                        `}>
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 whitespace-pre-line">
                            {role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 사용 기술 스택 */}
            <div className="space-y-3">
              <h3 className={`
                text-lg font-bold text-neutral-900
                dark:text-neutral-100
              `}>
                사용 기술
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stacks.map((stack) => (
                  <span
                    key={stack}
                    className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (typeof window === "undefined") {
    return null;
  }

  return createPortal(modalContent, document.body);
}

function getCategoryBadgeClass(category: ProjectCategory) {
  switch (category) {
    case "Mobile":
      return "bg-sky-500 dark:bg-sky-500/90";
    case "Frontend":
      return "bg-emerald-500 dark:bg-emerald-500/90";
    case "Backend":
      return "bg-purple-500 dark:bg-purple-500/90";
    default:
      return "bg-neutral-500 dark:bg-neutral-500/90";
  }
}