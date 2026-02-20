export type CaseStudy = {
  challenge: string
  research: string
  userFlow: string
  wireframe: string
  outcome: string
}

export type ProjectDetailData = {
  title: string
  subtitle: string
  description: string
  technologies: string[]
  role?: string
  date: string
  type: string
  client: string
  image: string
  mockup?: string
  gallery?: string[]
  liveUrl?: string
  caseStudy?: CaseStudy
}

