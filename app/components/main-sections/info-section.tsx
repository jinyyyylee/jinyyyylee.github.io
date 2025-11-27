export interface InfoSectionData {
  id: string;
  label: string;
  title: string;
  description: string;
  cta?: {
    label: string;
    href: string;
  };
}

export function InfoSection({
  id,
  label,
  title,
  description,
  cta,
}: InfoSectionData) {
  return (
    <section
      id={id}
      className="scroll-mt-32 space-y-4 rounded-3xl border border-neutral-200 p-8 dark:border-neutral-800"
    >
      <p className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
        {label}
      </p>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-base leading-7 text-neutral-600 dark:text-neutral-400">{description}</p>
      {cta ? (
        <a
          href={cta.href}
          className="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          {cta.label}
        </a>
      ) : null}
    </section>
  );
}

