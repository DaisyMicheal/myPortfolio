import { useEffect, useState } from 'react'
import {
  aiStudyBud,
  foodApp,
  headerImg,
  recipeApp,
  voxaWeb,
} from '../../assets/images/index'

type Project = {
  image: string
  alt: string
}

function getRelativeOffset(index: number, activeIndex: number, total: number) {
  let diff = index - activeIndex
  if (diff > total / 2) diff -= total
  if (diff < -total / 2) diff += total
  return diff
}

export default function Slider() {
  const projects: Project[] = [

    { image: foodApp, alt: 'Food app project preview' },
    { image: recipeApp, alt: 'Recipe app project preview' },
    { image: headerImg, alt: 'ecommerceweb project preview' },
    { image: voxaWeb, alt: 'Voxa web project preview' },
    { image: aiStudyBud, alt: 'AI Study Bud project preview' },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length)
    }, 2200)
    return () => window.clearInterval(timer)
  }, [projects.length])

  return (
    <section
      className="portfolio-focus mx-auto mt-6 w-full max-w-5xl px-4 sm:px-6"
      aria-label="Project image slider"
    >
      <div className="portfolio-focus__bg-orb portfolio-focus__bg-orb--one" />
      <div className="portfolio-focus__bg-orb portfolio-focus__bg-orb--two" />

      <div className="portfolio-focus__stage">
        {projects.map((project, index) => {
          const offset = getRelativeOffset(index, activeIndex, projects.length)
          const isVisible = Math.abs(offset) <= 2

          const transformMap: Record<number, string> = {
            [-2]: 'translate(-50%, -50%) translateX(-170%) scale(0.72)',
            [-1]: 'translate(-50%, -50%) translateX(-90%) scale(0.86)',
            [0]: 'translate(-50%, -50%) translateX(0%) scale(1)',
            [1]: 'translate(-50%, -50%) translateX(90%) scale(0.86)',
            [2]: 'translate(-50%, -50%) translateX(170%) scale(0.72)',
          }

          const opacityMap: Record<number, number> = {
            [-2]: 0.32,
            [-1]: 0.72,
            [0]: 1,
            [1]: 0.72,
            [2]: 0.32,
          }

          return (
            <figure
              key={project.alt}
              className="portfolio-focus__card"
              style={{
                transform:
                  transformMap[offset] ?? 'translate(-50%, -50%) translateX(0) scale(0.6)',
                opacity: isVisible ? (opacityMap[offset] ?? 0) : 0,
                zIndex: 10 - Math.abs(offset),
                filter: offset === 0 ? 'none' : 'blur(0.45px)',
              }}
            >
              <div className="portfolio-focus__chrome">
                <span className="portfolio-focus__dot portfolio-focus__dot--red" />
                <span className="portfolio-focus__dot portfolio-focus__dot--yellow" />
                <span className="portfolio-focus__dot portfolio-focus__dot--green" />
              </div>
              <div className="portfolio-focus__viewport">
                <img src={project.image} alt={project.alt} className="portfolio-focus__image" />
              </div>
            </figure>
          )
        })}
      </div>
    </section>
  )
}
