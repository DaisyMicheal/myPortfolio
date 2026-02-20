import { ArrowRight, Link as LinkIcon } from 'lucide-react'
import Button from '../../Components/ui/button'
import { Link, useNavigate } from 'react-router'
import { projectItems } from '../ProjectPage/projectsData'

type ProjectMode = 'preview' | 'all'

type ProjectProps = {
 mode?: ProjectMode
 showTitle?: boolean
}

export default function Project({ mode = 'preview', showTitle = true }: ProjectProps) {
 const navigate = useNavigate()
 const visibleProjects = mode === 'preview' ? projectItems.slice(0, 4) : projectItems

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

   {showTitle && (
    <h2 className="text-center text-3xl font-bold tracking-tight text-black sm:text-4xl">
     Here&apos;s What I&apos;ve Been Up To.
    </h2>
   )}

   <div className="mt-10 grid gap-8 md:grid-cols-2">
    {visibleProjects.map((project) => (
     <article
      key={project.title}
      className="rounded-3xl border border-black/10 bg-white/85 p-5 shadow-[0_16px_36px_rgba(15,23,42,0.08)] backdrop-blur"
     >
      <Link
       to={`/project/${project.slug}`}
       aria-label={`Open ${project.title}`}
       className="group relative block overflow-hidden rounded-3xl border border-black/10"
      >
       <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/35">
        <span className="inline-flex h-11 w-11 scale-90 items-center justify-center rounded-full border border-white/60 bg-white/15 text-white opacity-0 backdrop-blur transition duration-300 group-hover:scale-100 group-hover:opacity-100">
         <LinkIcon size={18} />
        </span>
       </div>
       <img
        src={project.image}
        alt={project.title}
        className="h-44 w-full object-cover transition duration-500 hover:scale-105 sm:h-52"
       />
      </Link>

      <h3 className="mt-5 text-lg font-semibold tracking-tight text-black sm:text-lg">
       {project.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-black/55 sm:text-sm">
       {project.cardDescription}
      </p>

     </article>
    ))}
   </div>

   {mode === 'preview' && (
    <div className="mt-10 flex justify-center">

     <Button
      variant="outline"
      size="lg"
      animation="slide-fill"
      icon={<ArrowRight size={16} />}
      iconPosition="right"
      className="border-black/20 text-black/75"
      onClick={() => navigate('/project')}
     >

      View All
     </Button>

    </div>
   )}
  </section>
 )
}
