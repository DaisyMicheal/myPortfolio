import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import Button from '../../Components/ui/button'
import { profile, VoxaUi } from '../../assets/images/index'
import { type ProjectDetailData } from './types'

type VoxaProjectDetailProps = {
  project: ProjectDetailData
  onPrevious?: () => void
  onNext?: () => void
}

export default function VoxaProjectDetail({
  project,
  onPrevious,
  onNext,
}: VoxaProjectDetailProps) {
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
              src={project.mockup ?? project.image}
              alt={`${project.title} mockup`}
              className="h-[260px] w-full max-w-[700px] object-contain sm:h-[420px]"
            />
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl  p-5 sm:p-8 bg-[#F9FAFB] ">
        <h2 className="text-xl font-semibold text-black sm:text-2xl">Overview</h2>
        <p className="mt-4 max-w-6xl text-sm leading-relaxed text-black/75 sm:text-base">
          Voxa is a voice-first fintech app that lets users send money, check balances, and
          purchase airtime using simple voice commands. The goal is to create a fast, secure, and
          accessible payment experience for people who prefer hands-free interactions: commuters,
          busy professionals, and users with visual or dexterity challenges.
        </p>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl bg-white p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-black sm:text-xl">Problem Statement</h3>
            <p className="mt-3 text-sm leading-relaxed text-black/75 sm:text-base">
              Traditional fintech apps require too many manual steps - typing amounts, searching
              contacts, and navigating multiple screens. This makes sending money slow and
              inconvenient, especially for users who are busy, driving, multitasking, or visually
              impaired. There is no quick, hands-free way to complete simple financial tasks.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-5 sm:p-6">
            <h3 className="text-xl font-semibold text-black sm:text-2xl">Solution</h3>
            <p className="mt-3 text-sm leading-relaxed text-black/75 sm:text-base">
              Voxa simplifies payments with a voice-first experience. Users can send money, check
              balances, and perform key actions using natural voice commands, supported by clear
              visual confirmations for security. This creates a fast, hands-free, and accessible
              way to manage everyday financial tasks.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-8 rounded-2xl bg-[#f4f0f3]  p-5 sm:p-8">
        <h2 className="text-xl font-semibold text-black sm:text-2xl">Empathy Map</h2>

        <div className="relative mt-6 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl bg-white p-5 sm:p-6">
            <h3 className="text-xl font-semibold text-[#8d00ff] sm:text-2xl">Say</h3>
            <ul className="mt-4 space-y-3 text-sm text-black/80 ">
              <li>• I want to send money quickly.</li>
              <li>• Why do I have to type everything?</li>
              <li>• I hope this app understands my voice.</li>
            </ul>
          </article>

          <article className="rounded-2xl bg-white p-5 sm:p-6">
            <h3 className="text-xl font-semibold text-[#8d00ff] sm:text-2xl">Think</h3>
            <ul className="mt-4 space-y-3 text-sm text-black/80 ">
              <li>• Will this make my life easier?</li>
              <li>• Is it safe to use voice for payments?</li>
              <li>• I don’t want to make a mistake.</li>
            </ul>
          </article>

          <article className="rounded-2xl bg-white p-5 sm:p-6">
            <h3 className="text-xl font-semibold text-[#8d00ff] sm:text-2xl">Does</h3>
            <ul className="mt-4 space-y-3 text-sm text-black/80 ">
              <li>• Struggles with typing while busy or on the move.</li>
              <li>• Repeats actions because traditional apps take many steps.</li>
              <li>• Tests voice commands carefully to see if they work.</li>
            </ul>
          </article>

          <article className="rounded-2xl bg-white ml-6 p-5 sm:p-6">
            <h3 className="text-xl font-semibold text-[#8d00ff] sm:text-2xl">Feels</h3>
            <ul className="mt-4 space-y-3 text-sm text-black/80 ">
              <li>• Frustrated with slow transfer processes.</li>
              <li>• Overwhelmed by cluttered fintech interfaces.</li>
              <li>• Relieved when tasks are fast and hands-free.</li>
              <li>• Confident when the app gives clear confirmations.</li>
            </ul>
          </article>

          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <img
              src={profile}
              alt="Empathy map persona"
              className="h-24 w-24 rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl bg-[#f4f0f3] p-5 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.45fr_1.55fr]">
          <aside>
            <img
              src={profile}
              alt="Daniel Okoro persona"
              className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28"
            />
            <div className="mt-4 space-y-2 text-sm text-black/80 sm:text-base">
              <p>Age: 28</p>
              <p>Occupation : Sale Executive</p>
              <p>Status: Married</p>
              <p>Location: Lagos, Nigeria</p>
            </div>
          </aside>

          <article>
            <h3 className="text-3xl font-semibold text-black sm:text-5xl">Daniel Okoro</h3>
            <p className="mt-1 text-base italic text-black/75 sm:text-xl">
              &ldquo;Banking should be easy to use not stressful&rdquo;
            </p>

            <div className="mt-4 rounded-2xl bg-white p-5 sm:p-6">
              <h4 className="text-2xl font-semibold text-[#8d00ff] sm:text-3xl">Biography</h4>
              <p className="mt-3 text-base leading-relaxed text-black/75 sm:text-lg">
                Daniel Okoro is a 28-year-old sales executive who spends most of his day moving
                between meetings and commuting across the city. He frequently sends money to
                family, colleagues, and vendors, but traditional banking apps feel slow and
                stressful because they require too much manual typing. Daniel wants a faster,
                easier, hands-free way to complete simple financial tasks without interrupting his
                day.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <article className="rounded-2xl bg-white p-5 sm:p-6">
            <h4 className="text-xl font-semibold text-[#8d00ff] sm:text-2xl">Goals and Needs</h4>
            <ul className="mt-4 space-y-3 text-sm text-black/80 sm:text-base">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#8d00ff]" />
                <span>Quickly send money without multiple screens.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#8d00ff]" />
                <span>Complete financial tasks while multitasking.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#8d00ff]" />
                <span>Easily check his balance using voice instead of typing.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#8d00ff]" />
                <span>Receive clear confirmations to avoid mistakes.</span>
              </li>
            </ul>
          </article>

          <article className="rounded-2xl bg-white p-5 sm:p-6">
            <h4 className="text-xl font-semibold text-[#8d00ff] sm:text-2xl">Motivation</h4>
            <ul className="mt-4 space-y-3 text-sm text-black/80 sm:text-base">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#8d00ff]" />
                <span>Saves time during a busy workday.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#8d00ff]" />
                <span>Wants tools that feel modern and efficient.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#8d00ff]" />
                <span>Prefers convenience over complex interactions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#8d00ff]" />
                <span>Enjoys hands-free solutions when commuting.</span>
              </li>
            </ul>
          </article>

          <article className="rounded-2xl bg-white p-5 sm:p-6">
            <h4 className="text-xl font-semibold text-[#8d00ff] sm:text-2xl">Pain Point</h4>
            <ul className="mt-4 space-y-3 text-sm text-black/80 sm:text-base">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#8d00ff]" />
                <span>Too many steps to complete simple transfers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#8d00ff]" />
                <span>Difficulty using small on-screen buttons while moving.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#8d00ff]" />
                <span>Fear of sending money to the wrong person.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#8d00ff]" />
                <span>Traditional fintech apps feel cluttered and overwhelming.</span>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mt-8 rounded-2xl bg-[#f4f0f3] p-5 sm:p-8">
        <h2 className="text-xl font-semibold text-black sm:text-2xl">User Journey Map</h2>

        <div className="mt-5 overflow-x-auto">
          <div className="min-w-[980px]">
            <div className="grid grid-cols-[120px_repeat(5,minmax(0,1fr))] gap-x-2 gap-y-3">
              <div className="rounded-xl bg-[#7b17db] px-3 py-1.5 text-center text-xs font-semibold text-white">
                Phase
              </div>
              <div className="rounded-xl border border-[#b87df3] bg-white px-2 py-1.5 text-center text-xs text-black/85">
                Discover
              </div>
              <div className="rounded-xl border border-[#b87df3] bg-white px-2 py-1.5 text-center text-xs text-black/85">
                Onboarding
              </div>
              <div className="rounded-xl border border-[#b87df3] bg-white px-2 py-1.5 text-center text-xs text-black/85">
                Voice Command
              </div>
              <div className="rounded-xl border border-[#b87df3] bg-white px-2 py-1.5 text-center text-xs text-black/85">
                Confirmation
              </div>
              <div className="rounded-xl border border-[#b87df3] bg-white px-2 py-1.5 text-center text-xs text-black/85">
                Transaction Success
              </div>

              <div className="rounded-xl bg-[#7b17db] px-3 py-1.5 text-center text-xs font-semibold text-white">
                Action
              </div>
              <p className="text-xs leading-relaxed text-black/80">
                • Hears about Voxa from a friend and downloads the app.
              </p>
              <p className="text-xs leading-relaxed text-black/80">• Creates an account.</p>
              <p className="text-xs leading-relaxed text-black/80">• Says, “Voxa, send ₦3,000 to Tunde.”</p>
              <p className="text-xs leading-relaxed text-black/80">
                • Reviews detected amount and recipient, then confirms.
              </p>
              <p className="text-xs leading-relaxed text-black/80">
                • Transaction completes, user sees receipt and undo option.
              </p>

              <div className="rounded-xl bg-[#7b17db] px-3 py-1.5 text-center text-xs font-semibold text-white">
                Thought & Emotion
              </div>
              <p className="text-xs leading-relaxed text-black/80">
                • A voice payment app? Will this actually make things easier?
              </p>
              <p className="text-xs leading-relaxed text-black/80">• I hope it understands my voice clearly.</p>
              <p className="text-xs leading-relaxed text-black/80">• Did it hear me correctly?</p>
              <p className="text-xs leading-relaxed text-black/80">• Good, this looks correct.</p>
              <p className="text-xs leading-relaxed text-black/80">• That was fast.</p>
            </div>

            <div className="relative mt-1 h-16">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 980 64" preserveAspectRatio="none">
                <path
                  d="M180,52 C300,44 380,34 470,26 C570,18 650,10 780,6"
                  fill="none"
                  stroke="#b30bff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute left-[178px] top-[38px] text-[30px]">😐</span>
              <span className="absolute left-[365px] top-[26px] text-[30px]">🙂</span>
              <span className="absolute left-[552px] top-[14px] text-[30px]">😄</span>
              <span className="absolute left-[742px] top-[0px] text-[30px]">😍</span>
            </div>

            <div className="grid grid-cols-[120px_repeat(5,minmax(0,1fr))] gap-x-2 gap-y-3">
              <div className="rounded-xl bg-[#7b17db] px-3 py-1.5 text-center text-xs font-semibold text-white">
                Feelings
              </div>
              <p className="text-xs leading-relaxed text-black/80">• Curious, open-minded.</p>
              <p className="text-xs leading-relaxed text-black/80">• Slightly nervous but interested.</p>
              <p className="text-xs leading-relaxed text-black/80">• Cautious, expectant.</p>
              <p className="text-xs leading-relaxed text-black/80">• Reassured, more confident.</p>
              <p className="text-xs leading-relaxed text-black/80">• Satisfied and impressed.</p>

              <div className="rounded-xl bg-[#7b17db] px-3 py-1.5 text-center text-xs font-semibold text-white">
                Opportunity
              </div>
              <p className="text-xs leading-relaxed text-black/80">
                • Show a strong value proposition and quick demo in the app store.
              </p>
              <p className="text-xs leading-relaxed text-black/80">
                • Keep setup short and reassuring, explain how voice commands work.
              </p>
              <p className="text-xs leading-relaxed text-black/80">
                • Show live transcription and visual feedback instantly.
              </p>
              <p className="text-xs leading-relaxed text-black/80">
                • Make confirmation clear and simple to build user trust.
              </p>
              <p className="text-xs leading-relaxed text-black/80">
                • Offer quick repeat action or recent contacts for next time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl bg-white p-5 sm:p-8">
        <h2 className="text-xl font-semibold text-black sm:text-2xl">UI Interface</h2>
        <p className="mt-2 text-sm leading-relaxed text-black/65 sm:text-base">
          Final interface screens focused on clarity, fast action, and confident voice-based transaction flow.
        </p>

        <div className="mt-5 overflow-hidden rounded-2xl border border-black/10 bg-[#f6f6f8] p-2 sm:p-3">
          <img
            src={VoxaUi}
            alt="Voxa UI interface screens"
            className="w-full object-contain"
          />
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
