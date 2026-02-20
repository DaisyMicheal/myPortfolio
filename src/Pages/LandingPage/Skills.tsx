import {
  Atom,
  Braces,
  CodeXml,
  Figma,
  Github,
  NotebookText,
  Smartphone,
  Wind,
  type LucideIcon,
} from 'lucide-react'

type Skill = {
  name: string
  Icon: LucideIcon
  color: string
}

export default function Skills() {
  const skills: Skill[] = [
    { name: 'Figma', Icon: Figma, color: '#f24e1e' },
    { name: 'HTML', Icon: CodeXml, color: '#e34f26' },
    { name: 'JavaScript', Icon: Braces, color: '#d4b316' },
    { name: 'Tailwind', Icon: Wind, color: '#0ea5e9' },
    { name: 'React', Icon: Atom, color: '#06b6d4' },
    { name: 'React Native', Icon: Smartphone, color: '#2563eb' },
    { name: 'Notion', Icon: NotebookText, color: '#111827' },
    { name: 'GitHub', Icon: Github, color: '#111827' },
  ]

  const loopedSkills = [...skills, ...skills]

  return (
    <section className="skills-section mt-16 w-full overflow-hidden rounded-3xl px-4 py-10 sm:px-6 sm:py-12">
      <div className="skills-bg-grid" />
      <div className="skills-bg-wave" />
      <div className="skills-bg-shape skills-bg-shape--one" />
      <div className="skills-bg-shape skills-bg-shape--two" />
      <div className="skills-bg-shape skills-bg-shape--three" />

      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          How Can I Help?
        </h2>
        <p className="mt-3 text-base text-white/75 sm:text-lg">
          Let&apos;s turn your vision into something amazing.
        </p>
      </div>

      <div className="skills-marquee relative z-10 mt-8">
        <div className="skills-track">
          {loopedSkills.map((skill, index) => (
            <div key={`${skill.name}-${index}`} className="skills-chip">
              <skill.Icon size={16} style={{ color: skill.color }} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
