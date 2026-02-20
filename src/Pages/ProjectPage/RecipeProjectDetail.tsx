import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import Button from '../../Components/ui/button'
import { type ProjectDetailData } from './types'
import {
  mockup,
  SolMockup,
  RepMockup,
  onboardingMockup,
  HomeMockup,
} from '../../assets/images'

type RecipeProjectDetailProps = {
  project: ProjectDetailData
  onPrevious?: () => void
  onNext?: () => void
}

const solutionPoints = [
  'Smart filtering to quickly find meals by category and preference.',
  'Step-by-step recipe detail pages with clear ingredients and timing.',
  'Save to favorites so users can return to trusted meals faster.',
  'Dark and light-friendly visual system for comfortable browsing.',
  'Clean navigation that reduces friction from discovery to cooking.',
]

const palette = [
  { label: '#332E27', ring: '#332E27', fill: '#f7f5ef', pos: 'left-[2%] top-[30%]' },
  { label: '#F5BC1C', ring: '#F5BC1C', fill: '#f7f5ef', pos: 'left-[28%] top-[8%]' },
  { label: '#676668', ring: '#676668', fill: '#f7f5ef', pos: 'left-[56%] top-[30%]' },
  { label: '#F5EEE7', ring: '#f5eee7', fill: '#fffdf8', pos: 'left-[12%] top-[66%]' },
  { label: '#FFFFFF', ring: '#e7e4de', fill: '#ffffff', pos: 'left-[36%] top-[66%]' },
]

export default function RecipeProjectDetail({
  project,
  onPrevious,
  onNext,
}: RecipeProjectDetailProps) {
  return (
    <section className="mt-8 w-full px-4 pb-12 sm:px-6">
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
            <h2 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
              UI UX Recipe App
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-black/65 sm:text-lg">
              {project.description}
            </p>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-black/45">
                Tools
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
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
                <p className="mt-1 text-sm font-medium text-black/80">
                  {project.role ?? 'Mercy Chisom'}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-black/45">Year</p>
                <p className="mt-1 text-sm font-medium text-black/80">{project.date}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-black/45">Project</p>
                <p className="mt-1 text-sm font-medium text-black/80">Mobile App</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-black/45">Category</p>
                <p className="mt-1 text-sm font-medium text-black/80">UI UX</p>
              </div>
            </div>
          </article>

          <div className="flex items-end justify-center">
            <img
              src={mockup}
              alt={`${project.title} mockup`}
              className="h-[360px] w-full max-w-[720px] object-contain sm:h-[440px]"
            />
          </div>
        </div>
      </section>

      <section className="mt-8 bg-white px-2 py-6 sm:px-0 sm:py-8">
        <article>
          <h3 className="text-3xl font-semibold text-black sm:text-3xl">Problem Statement</h3>
          <p className="mt-2 max-w-4xl text-base leading-relaxed text-black/65 sm:text-lg">
            {project.caseStudy?.challenge}
          </p>
        </article>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <article>
            <h3 className="text-2xl font-semibold tracking-tight text-black sm:text-4xl">
              Solution
            </h3>
            <div className="mt-4 space-y-4">
              {solutionPoints.map((point, index) => (
                <div key={point} className="flex gap-3">
                  <span className="min-w-10 text-lg font-semibold leading-none text-[#e6dd9f]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="pt-1 text-base leading-relaxed text-black/75 sm:text-lg">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <div className="p-0">
            <img
              src={SolMockup}
              alt={`${project.title} solution mockup`}
              className="h-[420px] w-full object-contain sm:h-[640px]"
            />
          </div>
        </div>
      </section>

      <section
        className="mt-5 p-6 sm:p-8"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      >
        <p className="inline-block rounded-full bg-[#f1edc9] px-3 py-1 text-xs font-semibold text-black/75">
          Font & Colour
        </p>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-black/70">
          Poppins is a modern geometric sans-serif font that balances clean readability with
          a friendly, approachable style.
        </p>

        <div className="mt-10">
          <div className="relative inline-block">
            <p className="text-5xl font-semibold tracking-tight text-black sm:text-6xl">Poppins</p>
            <span className="absolute -left-3 -top-4 -rotate-[22deg] rounded bg-[#2f6fed] px-2 py-1 text-xs font-semibold text-white">
              Bold
            </span>
            <span className="absolute left-16 -top-8 rotate-[28deg] rounded bg-[#f5bc1c] px-2 py-1 text-xs font-semibold text-black">
              Medium
            </span>
            <span className="absolute right-0 -top-2 rotate-[11deg] rounded bg-white px-2 py-1 text-xs font-semibold text-black/80 shadow-sm">
              Regular
            </span>
            <span className="absolute right-2 top-12 -rotate-[32deg] rounded bg-white px-2 py-1 text-xs font-semibold text-black/80 shadow-sm">
              Semibold
            </span>
          </div>
        </div>

        <h3 className="mt-14 text-2xl font-semibold tracking-tight text-black">Colour palette</h3>
        <div className="relative mt-8 h-[260px] max-w-xl">
          {palette.map((color) => (
            <div key={color.label} className={`absolute ${color.pos}`}>
              <div
                className="flex h-24 w-24 items-center justify-center rounded-full border-[6px] bg-white text-center shadow-sm"
                style={{ borderColor: color.ring, backgroundColor: color.fill }}
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-black/55">Hex</p>
                  <p className="text-[10px] font-semibold text-black/80">{color.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="relative mt-8 overflow-hidden p-4 sm:p-6"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      >
        <div className="pointer-events-none absolute -left-12 top-8 h-36 w-36 rounded-full bg-[#f5bc1c]/20 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -right-10 bottom-12 h-40 w-40 rounded-full bg-[#332e27]/10 blur-3xl animate-pulse" />

        <p className="text-lg font-medium text-black/85">Features</p>

        <div className="relative mt-5 space-y-6">
          <article className="grid gap-4 rounded-2xl bg-white/60 p-4 transition-transform duration-500 hover:-translate-y-1 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold text-black/85">Verified Babysitters</p>
              <p className="mt-2 text-xs leading-relaxed text-black/70 sm:text-sm">
                Moms can connect with verified babysitters in their area and review profiles
                before choosing the best support for their families.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <img
                src={HomeMockup}
                alt="Feature mockup left"
                className="h-40 object-contain transition-transform duration-500 hover:scale-105 sm:h-52"
              />
            </div>
          </article>

          <article className="grid gap-4 rounded-2xl bg-white/60 p-4 transition-transform duration-500 hover:-translate-y-1 lg:grid-cols-2 lg:items-center">
            <div className="order-2 flex justify-center lg:order-1">
              <img
                src={onboardingMockup}
                alt="Medical tracker mockup"
                className="h-44 object-contain transition-transform duration-500 hover:scale-105 sm:h-56"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold text-black/85">Vaccination and medical tracker</p>
              <p className="mt-2 text-xs leading-relaxed text-black/70 sm:text-sm">
                Stay organized with vaccination schedules, reminders, and important child health
                records in one simple flow.
              </p>
            </div>
          </article>

          <article className="grid gap-4 rounded-2xl bg-white/60 p-4 transition-transform duration-500 hover:-translate-y-1 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold text-black/85">E-Commerce for Mom & Baby Essentials</p>
              <p className="mt-2 text-xs leading-relaxed text-black/70 sm:text-sm">
                Discover curated essentials including food, skincare, and nutrition products with
                an easy shopping experience inside the app.
              </p>
            </div>
            <div className="flex justify-center gap-3">
              <img
                src={RepMockup}
                alt="E-commerce list mockup"
                className="h-40 object-contain transition-transform duration-500 hover:scale-105 sm:h-52"
              />
            </div>
          </article>
        </div>
      </section>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        {project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            <Button
              variant="primary"
              size="lg"
              animation="lift"
              icon={<ExternalLink size={18} />}
              iconPosition="right"
              className="rounded-2xl"
            >
              Visit Project
            </Button>
          </a>
        ) : (
          <span />
        )}

        <div className="flex gap-3">
          <Button
            variant="outline"
            size="lg"
            animation="lift"
            icon={<ArrowLeft size={16} />}
            className="rounded-2xl"
            onClick={onPrevious}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="lg"
            animation="lift"
            icon={<ArrowRight size={16} />}
            iconPosition="right"
            className="rounded-2xl"
            onClick={onNext}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  )
}
