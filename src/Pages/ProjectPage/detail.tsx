import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router'
import RecipeProjectDetail from './RecipeProjectDetail'
import MakeProjectDetail from './MakeProjectDetail'
import VoxaProjectDetail from './VoxaProjectDetail'
import UncutxtraProjectDetail from './EcommerceProjectDetail'
import FoodAppProjectDetail from './FoodAppProjectDetail'
import AiStudyBudProjectDetail from './AiStudyBudProjectDetail'
import { projectItems } from './projectsData'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const currentIndex = useMemo(
    () => projectItems.findIndex((item) => item.slug === slug),
    [slug]
  )

  if (currentIndex < 0) {
    return (
      <main className="w-full px-4 pt-24 sm:px-6">
        <h1 className="text-3xl font-bold text-black sm:text-4xl">Project not found</h1>
        <p className="mt-2 text-black/55">The requested project detail does not exist.</p>
      </main>
    )
  }

  const project = projectItems[currentIndex]

  const handlePrevious = () => {
    const nextIndex = (currentIndex - 1 + projectItems.length) % projectItems.length
    navigate(`/project/${projectItems[nextIndex].slug}`)
  }

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projectItems.length
    navigate(`/project/${projectItems[nextIndex].slug}`)
  }

  return (
    <main className="w-full">
      {project.slug === 'recipe-app' ? (
        <RecipeProjectDetail
          project={project}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      ) : project.slug === 'make' ? (
        <MakeProjectDetail
          project={project}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      ) : project.slug === 'voxaApp' ? (
        <VoxaProjectDetail
          project={project}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      ) : project.slug === 'ecommerce' ? (
        <UncutxtraProjectDetail
          project={project}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      ) : project.slug === 'food-app' ? (
        <FoodAppProjectDetail
          project={project}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      ) : project.slug === 'ai-study-bud' ? (
        <AiStudyBudProjectDetail
          project={project}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      ) : (
        <main className="w-full px-4 pt-24 sm:px-6">
          <h1 className="text-3xl font-bold text-black sm:text-4xl">Project not found</h1>
          <p className="mt-2 text-black/55">No dedicated page exists for this project yet.</p>
        </main>
      )}
    </main>
  )
}
