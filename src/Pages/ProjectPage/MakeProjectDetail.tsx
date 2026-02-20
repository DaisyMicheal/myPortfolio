import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import Button from '../../Components/ui/button'
import { MakeDesktopMockup, MakePhoneMockup } from '../../assets/images'
import profile from '../../assets/images/profile.jpg'
import { type ProjectDetailData } from './types'

type MakeProjectDetailProps = {
  project: ProjectDetailData
  onPrevious?: () => void
  onNext?: () => void
}

const keyProblems = [
  'Unclear value proposition - users cannot quickly understand what Make.com does.',
  'Visual design is distracting due to heavy use of gradients and multiple accent colors.',
  'Dense layout creates cognitive overload and feels intimidating for non-developers.',
]

const solutions = [
  'Clarified Value Proposition: Replaced the generic headline with a simple, user-centered statement explaining what Make.com does and who it is for.',
  'Simplified Visual Hierarchy: Reduced heavy gradients/multiple colors and introduced a more minimal color palette to draw attention to the primary CTA.',
  'Improved Layout Flow: Restructured content above the fold using whitespace, shorter text, and scannable blocks so users can understand the platform quickly.',
  'Stronger Call-to-Action Visibility: Increased contrast around the CTA, placed it higher in the visual hierarchy, and reduced competing elements so users notice it faster.',
  'Cleaner Navigation: Streamlined menu items and reduced visual noise so users can easily explore features without cognitive overload.',
]

const personaGoals = [
  'Automate repetitive business tasks easily',
  'Understand what the platform does within seconds',
  'Access simple onboarding and example workflows',
  'A clear CTA so he knows what action to take next',
]

const personaMotivation = [
  'Save time and reduce stress from manual tasks',
  'Run his business more efficiently',
  'Have more time for marketing and customer service',
  'Improve workflow without needing advanced tech skills',
]

const personaPainPoints = [
  'Landing page feels too overwhelming',
  'Confusing value proposition at first glance',
  'Too many colors competing with CTA',
  'Dense information makes platform feel complex',
]

const brandPalette = [
  { name: 'Main', hex: '#6C2BD9' },
  { name: 'Dark', hex: '#3F1955' },
  { name: 'Lighter', hex: '#FFC8FC' },
  { name: 'Darker', hex: '#290042' },
]

const basePalette = [
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Black', hex: '#000000' },
]

const grayPalette = [
  { step: '100', hex: '#EFEFEF' },
  { step: '200', hex: '#CCCCCC' },
  { step: '300', hex: '#898989' },
  { step: '400', hex: '#565656' },
  { step: '500', hex: '#3D3D3D' },
  { step: '600', hex: '#2B2B2B' },
  { step: '700', hex: '#1A1A1A' },
]

export default function MakeProjectDetail({ project, onPrevious, onNext }: MakeProjectDetailProps) {
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
            <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-6xl">
              {project.title}
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-black/65 sm:text-xl">
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
                <p className="mt-1 text-sm font-medium text-black/80">Landing Redesign</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-black/45">Category</p>
                <p className="mt-1 text-sm font-medium text-black/80">UI UX</p>
              </div>
            </div>
          </article>

          <div className="flex items-end justify-center">
            <img
              src={MakeDesktopMockup}
              alt="Make landing redesign desktop mockup"
              className="h-[260px] w-full max-w-[700px] object-contain sm:h-[420px]"
            />
          </div>
        </div>
      </section>

      <section className="mt-8 bg-white px-2 py-6 sm:px-0 sm:py-8">
        <h2 className="text-2xl font-semibold text-black sm:text-4xl">Problem Statement</h2>
        <p className="mt-5  text-base leading-relaxed text-black/75 sm:text-lg">
          The original Make.com landing page fails to clearly communicate the platform&apos;s purpose and value within the first few seconds of user interaction. New visitors struggle
          to understand what the product does, which leads to confusion, high bounce rates, and reduced conversion. The interface also relies heavily on bold gradients and multiple
          accent colors, making the visual hierarchy unclear and distracting from the primary
          call-to-action. Additionally, the layout feels dense and intimidating, especially for
          non-technical users and small to medium business owners who form a large percentage of
          the target audience.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <article>
            <h3 className="text-base font-semibold text-black sm:text-sm">Key Problem Identified</h3>
            <div className="mt-5 space-y-5">
              {keyProblems.map((item, index) => (
                <div key={item} className="flex gap-3">
                  <span className="min-w-10 text-base font-semibold leading-none text-[#8d00ff]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="pt-1 text-base leading-relaxed text-black/75 sm:text-sm">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="flex justify-center">
            <img
              src={MakeDesktopMockup}
              alt="Desktop redesign key problems visual"
              className="h-[240px] w-full max-w-[580px] object-contain sm:h-[420px]"
            />
          </div>
        </div>
      </section>

      <section className="mt-6 bg-white px-2 py-2 sm:px-0 sm:py-6">
        <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
          <div className="flex justify-center lg:justify-start">
            <img
              src={MakePhoneMockup}
              alt="Mobile redesign mockup"
              className="h-[300px] w-full max-w-[300px] object-contain sm:h-[460px]"
            />
          </div>

          <article className="space-y-5">
            {solutions.map((item, index) => (
              <div key={item} className="flex gap-3">
                <span className="min-w-10 text-xl font-semibold leading-none text-[#8d00ff]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="pt-1 text-base leading-relaxed text-black/75 sm:text-sm">{item}</p>
              </div>
            ))}
          </article>
        </div>
      </section>

      <section className="mt-8 px-4 py-5 sm:px-6 sm:py-8">
        <h2 className="text-xl font-semibold text-black sm:text-2xl">User Persona</h2>

        <div className="mt-5 grid gap-6 lg:grid-cols-[0.45fr_1.55fr]">
          <aside>
            <img
              src={profile}
              alt="Daisy Micheal persona"
              className="h-24 w-24 rounded-full object-cover sm:h-24 sm:w-24"
            />
            <div className="mt-4 space-y-2 text-base text-black/80 sm:text-sm">
              <p>Age: 30</p>
              <p>Occupation : Business Owner</p>
              <p>Status: Married</p>
              <p>Location: Lagos,Nigeria</p>
            </div>
          </aside>

          <article>
            <h3 className="text-xl font-semibold text-black sm:text-2xl">Daisy Micheal</h3>
            <p className=" text-sm italic text-black/75 sm:text-sm">
              &ldquo;Make should be easy to use not stressful&rdquo;
            </p>

            <div className="mt-5 rounded-2xl bg-white p-5 sm:p-6">
              <h4 className="text-xl font-semibold text-[#8d00ff] sm:text-lg">Biography</h4>
              <p className="mt-3 text-base leading-relaxed text-black/75 sm:text-base">
                Daisy Micheal is a 30-year-old small business owner who runs an online store. she
                handles customer messages, inventory, and orders manually, which takes time and
                reduces productivity. She is open to automation tools but gets overwhelmed quickly
                when interfaces look too technical. She wants a simple tool that explains itself
                clearly and helps him automate tasks without stress.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <article className="rounded-2xl bg-white p-5 sm:p-6">
            <h4 className="text-xl font-semibold text-[#8d00ff] sm:text-lg">Goals and Needs</h4>
            <ul className="mt-4 space-y-3 text-base text-black/80 sm:text-sm">
              {personaGoals.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#8d00ff]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-white p-5 sm:p-6">
            <h4 className="text-xl font-semibold text-[#8d00ff] sm:text-lg">Motivation</h4>
            <ul className="mt-4 space-y-3 text-base text-black/80 sm:text-sm">
              {personaMotivation.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#8d00ff]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-[#fbfbfb] p-5 sm:p-6">
            <h4 className="text-xl font-semibold text-[#8d00ff] sm:text-lg">Pain Points</h4>
            <ul className="mt-4 space-y-3 text-base text-black/80 sm:text-sm">
              {personaPainPoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#8d00ff]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section
        className="relative mt-8 overflow-hidden rounded-2xl p-5 sm:p-8"
        style={{
          background:
            'linear-gradient(135deg, #f5f2f7 0%, #f3f0f6 52%, #efeaf4 100%)',
        }}
      >
        <div className="relative">
          <h2 className="text-lg font-semibold text-black sm:text-xl">Design System</h2>
          <p className="mt-1 text-lg font-semibold text-[#8d00ff] sm:text-xl">Color Palette</p>

          <div className="mt-5 grid gap-3 lg:grid-cols-[1.35fr_0.85fr]">
            <article className="rounded-2xl bg-white/95 p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-black/80 sm:text-xl">Brand Color</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {brandPalette.map((color) => (
                  <div
                    key={color.hex}
                    className="w-[90px] overflow-hidden rounded-xl bg-white text-center shadow-[0_1px_0_rgba(0,0,0,0.04),0_8px_16px_rgba(0,0,0,0.06)]"
                  >
                    <div className="h-12 sm:h-14" style={{ backgroundColor: color.hex }} />
                    <div className="px-2 py-2 sm:py-3">
                      <p className="text-sm font-semibold text-black/75">{color.name}</p>
                      <p className="text-[13px] font-semibold text-black/70">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl bg-white/95 p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-black/80 sm:text-xl">Base Color</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {basePalette.map((color) => (
                  <div
                    key={color.hex}
                    className="w-[90px] overflow-hidden rounded-xl bg-white text-center shadow-[0_1px_0_rgba(0,0,0,0.04),0_8px_16px_rgba(0,0,0,0.06)]"
                  >
                    <div
                      className="h-12 border border-black/10 sm:h-14"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="px-2 py-2 sm:py-3">
                      <p className="text-sm font-semibold text-black/75">{color.name}</p>
                      <p className="text-[13px] font-semibold text-black/70">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <article className="mt-4 rounded-2xl bg-white/95 p-4 sm:p-6">
            <h3 className="text-xl font-semibold text-black/80 sm:text-xl">Grayscale Color</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {grayPalette.map((color) => (
                <div
                  key={color.hex}
                  className="w-[90px] overflow-hidden rounded-xl bg-white text-center shadow-[0_1px_0_rgba(0,0,0,0.04),0_8px_16px_rgba(0,0,0,0.06)]"
                >
                  <div className="h-12 sm:h-14" style={{ backgroundColor: color.hex }} />
                  <div className="px-2 py-2 sm:py-3">
                    <p className="text-sm font-semibold text-black/75">{color.step}</p>
                    <p className="text-[13px] font-semibold text-black/70">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mt-8 rounded-2xl bg-[#f4f0f3] p-5 sm:p-8">
        <h2 className="text-lg font-semibold text-[#8d00ff] sm:text-lg">Typography</h2>

        <article className="mt-4 rounded-xl bg-white/70 p-4 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xl font-semibold text-black/85 sm:text-2xl">Montserrat</p>
            <div className="flex items-end gap-1 text-black">
              <span className="text-2xl font-semibold leading-none ">Aa</span>
              <span className="pb-2 text-xl ">Aa</span>
            </div>
          </div>
        </article>

        <article className="mt-7">
          <h3 className="text-xl font-semibold text-black/75 sm:text-2xl">Hierarchy</h3>
          <div className="mt-3 grid grid-cols-4 overflow-hidden rounded-sm">
            <span className="h-6 bg-[#1f2023]" />
            <span className="h-6 bg-[#55565a]" />
            <span className="h-6 bg-[#8c8d90]" />
            <span className="h-6 bg-[#b7b8ba]" />
          </div>

          <div className="mt-7 space-y-3">
            <div className="flex items-end gap-3">
              <p className="text-2xl font-semibold text-black/85 sm:text-lg">Montserrat</p>
              <p className="text-2xl text-black/75 sm:text-2xl">36/48</p>
            </div>
            <div className="space-y-1.5 text-black/80">
              <div className="flex items-baseline gap-4">
                <p className="text-xl font-semibold ">Heading</p>
                <p className="text-xl ">34/40</p>
              </div>
              <div className="flex items-baseline gap-4">
                <p className="text-lg font-medium ">Title</p>
                <p className="text-lg ">24/32</p>
              </div>
              <div className="flex items-baseline gap-4">
                <p className="text-base ">Subtitle</p>
                <p className="text-base ">20/28</p>
              </div>
              <div className="flex items-baseline gap-4">
                <p className="text-base font-medium">Body L Medium</p>
                <p className="text-base ">16/24</p>
              </div>
              <div className="flex items-baseline gap-4">
                <p className="text-sm sm:text-lg">Body L</p>
                <p className="text-sm ">16/24</p>
              </div>
              <div className="flex items-baseline gap-4">
                <p className="text-sm font-medium sm:text-base">Body M Medium</p>
                <p className="text-sm sm:text-base">14/20</p>
              </div>
              <div className="flex items-baseline gap-4">
                <p className="text-sm sm:text-base">Body M</p>
                <p className="text-sm sm:text-base">14/20</p>
              </div>
              <div className="flex items-baseline gap-4">
                <p className="text-xs font-medium sm:text-sm">Caption Medium</p>
                <p className="text-xs sm:text-sm">12/18</p>
              </div>
              <div className="flex items-baseline gap-4">
                <p className="text-xs sm:text-sm">Caption</p>
                <p className="text-xs sm:text-sm">12/18</p>
              </div>
              <div className="flex items-baseline gap-4">
                <p className="text-[11px] sm:text-xs">Label</p>
                <p className="text-[11px] sm:text-xs">11/16</p>
              </div>
            </div>
          </div>
        </article>
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
            animation="none"
            icon={<ArrowLeft size={16} />}
            className="rounded-2xl border-transparent bg-[#ececec] px-6 text-black/80 hover:bg-[#e2e2e2]"
            onClick={onPrevious}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="lg"
            animation="none"
            icon={<ArrowRight size={16} />}
            iconPosition="right"
            className="rounded-2xl border-transparent bg-[#ececec] px-8 text-black/80 hover:bg-[#e2e2e2]"
            onClick={onNext}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  )
}
