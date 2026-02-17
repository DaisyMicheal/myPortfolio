import { ArrowRight, Link } from 'lucide-react'
import Button from '../../Components/button'
import {
 aiStudyBud,
 dashboard,
 foodApp,
 nuvix,
 recipeApp,
 voxaWeb,
} from '../../assets/images'

const projects = [
 {
  title: 'Pxxl App',
  description:
   'Enterprise-grade cloud deployment platform enabling instant deployment of websites and APIs.',
  image: dashboard,
  alt: 'Pxxl App project screenshot',
  link: 'https://example.com/pxxl-app',
 },
 {
  title: "Olamide's Tour Website",
  description:
   'Official site featuring tour schedules, ticket info, and immersive visuals for fan engagement.',
  image: voxaWeb,
  alt: "Olamide tour website screenshot",
  link: 'https://example.com/olamide-tour',
 },
 {
  title: 'Nuvix',
  description:
   'Modern digital product site with clean interactions and conversion-focused layout.',
  image: nuvix,
  alt: 'Nuvix website screenshot',
  link: 'https://example.com/nuvix',
 },
 {
  title: 'Food App',
  description:
   'Mobile-first food ordering interface with clear UX flow and visual hierarchy.',
  image: foodApp,
  alt: 'Food app interface screenshot',
  link: 'https://example.com/food-app',
 },
 {
  title: 'Recipe App',
  description:
   'Recipe discovery product with card-based browsing and simple navigation.',
  image: recipeApp,
  alt: 'Recipe app interface screenshot',
  link: 'https://example.com/recipe-app',
 },
 {
  title: 'AI Study Bud',
  description:
   'Learning platform concept designed for focused student workflows.',
  image: aiStudyBud,
  alt: 'AI Study Bud project screenshot',
  link: 'https://example.com/ai-study-bud',
 },
]

export default function Project() {
 return (
  <section className="relative mt-14 w-full px-4 pb-12 sm:px-6">
   <div
    className="pointer-events-none absolute -left-6 top-10 h-20 w-20 rounded-full bg-violet-200/40 blur-2xl"
    style={{ animation: 'about-float 7s ease-in-out infinite' }}
   />
   <div
    className="pointer-events-none absolute -right-4 bottom-8 h-24 w-24 rounded-full bg-cyan-200/35 blur-2xl"
    style={{ animation: 'about-float 8s ease-in-out infinite reverse' }}
   />

   <h2 className="text-center text-3xl font-bold tracking-tight text-black sm:text-4xl">
    Here&apos;s What I&apos;ve Been Up To.
   </h2>

   <div className="mt-10 grid gap-8 md:grid-cols-2">
    {projects.map((project) => (
     <article
      key={project.title}
      className="rounded-3xl border border-black/10 bg-white/85 p-5 shadow-[0_16px_36px_rgba(15,23,42,0.08)] backdrop-blur"
     >
      <a
       href={project.link}
       target="_blank"
       rel="noreferrer"
       aria-label={`Open ${project.title}`}
       className="group relative block overflow-hidden rounded-3xl border border-black/10"
      >
       <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/35">
        <span className="inline-flex h-11 w-11 scale-90 items-center justify-center rounded-full border border-white/60 bg-white/15 text-white opacity-0 backdrop-blur transition duration-300 group-hover:scale-100 group-hover:opacity-100">
         <Link size={18} />
        </span>
       </div>
       <img
        src={project.image}
        alt={project.alt}
        className="h-44 w-full object-cover transition duration-500 hover:scale-105 sm:h-52"
       />
      </a>

      <h3 className="mt-5 text-lg font-semibold tracking-tight text-black sm:text-lg">
       {project.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-black/55 sm:text-sm">
       {project.description}
      </p>

     </article>
    ))}
   </div>

   <div className="mt-10 flex justify-center">
    <Button
     variant="outline"
     size="lg"
     animation="slide-fill"
     icon={<ArrowRight size={16} />}
     iconPosition="right"
     className="border-black/20 text-black/75"
    >
     View All
    </Button>
   </div>
  </section>
 )
}
