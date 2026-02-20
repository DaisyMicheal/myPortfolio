type ProjectDetailHeaderProps = {
  title: string
  description: string
  technologies: string[]
  role?: string
  year: string
  projectLabel: string
  categoryLabel?: string
  previewImage: string
}

export default function ProjectDetailHeader({
  title,
  description,
  technologies,
  role,
  year,
  projectLabel,
  categoryLabel = 'UI UX',
  previewImage,
}: ProjectDetailHeaderProps) {
  return (
    <section className="mt-8 overflow-hidden rounded-lg bg-[#f6f5ef]">
      <div
        className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      >
        <article className="space-y-4">
          <p className="text-sm font-medium text-black/60">Self Initiated Project</p>
          <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-6xl">{title}</h1>
          <p className="max-w-xl text-base leading-relaxed text-black/65 sm:text-xl">{description}</p>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-black/45">Tools</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-black/10 bg-white/85 px-3 py-1 text-sm text-black/75"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-black/45">Designer</p>
              <p className="mt-1 text-sm font-medium text-black/80">{role ?? 'Mercy Chisom'}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-black/45">Year</p>
              <p className="mt-1 text-sm font-medium text-black/80">{year}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-black/45">Project</p>
              <p className="mt-1 text-sm font-medium text-black/80">{projectLabel}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-black/45">Category</p>
              <p className="mt-1 text-sm font-medium text-black/80">{categoryLabel}</p>
            </div>
          </div>
        </article>

        <div className="flex items-end justify-center">
          <img
            src={previewImage}
            alt={`${title} mockup`}
            className="h-[300px] w-full max-w-[720px] object-contain sm:h-[420px]"
          />
        </div>
      </div>
    </section>
  )
}

