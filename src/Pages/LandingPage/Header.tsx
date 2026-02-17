import { profile } from '../../assets/images'
import { Code2, Figma, Sparkles } from 'lucide-react'
import Button from '../../Components/button'

export default function Header() {
   return (
      <section className="hero-simple relative w-full px-4 pb-10 pt-16 mt-20 sm:px-6 sm:pt-16 ">
         <div className="hero-orb hero-orb--one" />
         <div className="hero-orb hero-orb--two" />
         <div className="hero-line hero-line--one" />
         <div className="hero-line hero-line--two" />

         <div className="relative mx-auto w-full max-w-3xl text-black">
            <div className="relative inline-block">
               <div className="hero-profile-glow" />
               <div className="hero-float-tag hero-float-tag--figma">
                  <Figma size={14} />
                  Design
               </div>
               <div className="hero-float-tag hero-float-tag--code">
                  <Code2 size={14} />
                  Build
               </div>
               <div className="hero-float-dot">
                  <Sparkles size={12} />
               </div>
               <div className="h-30 w-30 overflow-hidden rounded-full border border-white/70 shadow-[0_16px_40px_rgba(168,85,247,0.2),0_8px_20px_rgba(14,165,233,0.18)]">
                  <img src={profile} alt="Mercy Chisom profile" className="h-full w-full object-cover" />
               </div>
            </div>

            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-3xl">
               Hey, I&apos;m Mercy Chisom.
               <span className="block">Frontend Dev &amp; UI/UX Designer</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/55">
               Creating innovative solutions and captivating designs. Building usable,
               thoughtful experiences from idea to interface.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
               <Button
                  variant="primary"
                  size="lg"
                  animation="none"
                  className="rounded-2xl hover:scale-105 hover:bg-black/90"
               >
                  Hire Me!
               </Button>
               <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-6 py-3 text-lg text-emerald-700">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-600" />
                  Available for new project
               </div>
            </div>
         </div>
      </section>
   )
}
