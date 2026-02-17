import { profile } from '../../assets/images'
import { Sparkles } from 'lucide-react'

export default function About() {
 return (
  <section className="about-creative relative mx-auto mt-20 w-full max-w-5xl px-6 pb-16">
   <div className="about-orb about-orb--violet" />
   <div className="about-orb about-orb--mint" />

   <div className="relative grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
    <div>
     <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-black/60 backdrop-blur">
      <Sparkles size={14} className="text-violet-500" />
      DESIGNER MINDSET
     </div>

     <h2 className="mt-5 text-2xl font-bold tracking-tight text-black sm:text-3xl">
      About My Craft
     </h2>

     <div className="mt-7 space-y-7 text-sm leading-relaxed text-black/60">
      <p>
       I enjoy building things that make sense: clean, structured, and
       intentional.
      </p>
      <p>
       I&apos;m Mercy Chisom. I design and build web and mobile products,
       turning ideas into useful experiences with strong UI/UX thinking.
       I focus on real problems, not just pretty screens.
      </p>
      <p>
       When I&apos;m not building, I&apos;m crocheting, still working with
       patterns, rhythm, and patience in a different form. Always
       learning. Always refining. Always building better.
      </p>
     </div>
    </div>

    <div className="relative mx-auto mt-6 w-full max-w-sm">
     <div className="about-main-photo">
      <img
       src={profile}
       alt="Mercy Chisom portrait"
       className="h-full w-full object-cover"
      />
      <div className="about-grid-overlay" />
     </div>

     <div className="about-side-photo">
      <img
       src={profile}
       alt="Creative profile detail"
       className="h-full w-full object-cover saturate-125 contrast-95"
      />
     </div>

     <div className="about-note">
      UI. Motion. System.
     </div>
    </div>
   </div>
  </section>
 )
}
