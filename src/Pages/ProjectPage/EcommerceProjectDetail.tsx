import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import Button from '../../Components/ui/button'
import { type ProjectDetailData } from './types'
import ProjectDetailHeader from '../../Components/ui/ProjectDetailHeader'

type EcommerceProjectDetailProps = {
  project: ProjectDetailData
  onPrevious?: () => void
  onNext?: () => void
}

export default function EcommerceProjectDetail({
  project,
  onPrevious,
  onNext,
}: EcommerceProjectDetailProps) {
  const galleryImages = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image]
  const showcaseImages = galleryImages.length >= 3 ? galleryImages.slice(1, 3) : galleryImages.slice(0, 2)

  return (
    <section className="mt-8 w-full px-4 pb-12 sm:px-6">
      <ProjectDetailHeader
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        role={project.role}
        year={project.date}
        projectLabel="Web App"
        previewImage={project.mockup ?? project.image}
      />

      <section className="mt-8">
        <div className="rounded-[28px] border border-black/10 bg-[#f3f3f3] p-3 shadow-[0_14px_35px_rgba(0,0,0,0.12)] sm:p-4">
          <div className="rounded-[22px] bg-[#111214] p-2 sm:p-3">
            <img
              src={galleryImages[0] ?? project.image}
              alt={`${project.title} showcase main`}
              className="h-[220px] w-full rounded-[16px] object-contain sm:h-[420px]"
            />
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {showcaseImages.map((img, index) => (
            <div
              key={`${project.title}-showcase-${index}`}
              className="rounded-[22px] border border-black/10 bg-[#f3f3f3] p-3"
            >
              <div className="rounded-[16px] bg-[#111214] p-2">
                <img
                  src={img}
                  alt={`${project.title} showcase ${index + 1}`}
                  className="h-40 w-full rounded-[12px] object-cover sm:h-48"
                />
              </div>
            </div>
          ))}
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
