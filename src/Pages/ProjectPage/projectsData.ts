import {
  AiChat,
  Calender,
  Home as AiHome,
  LandingMockup,
  Login,
  Setup1,
  Setup2,
  Setup3,
  Signup,
  Task,
  MakeDesktopMockup,
  MakePhoneMockup,
  aiStudyBud,
  recipeFood,
  recipe,
  recipe2,
  recipe3,
  recipe4,
  headerImg,
  Img2,
  Img1,
  Bookmark,
  voxaApp,
} from '../../assets/images'
import { type ProjectDetailData } from './types'

export type ProjectItem = ProjectDetailData & {
  slug: string
  cardDescription: string
}

export const projectItems: ProjectItem[] = [
  {
    slug: 'ecommerce',
    title: 'Ecommerce Platform ',
    subtitle: 'Learning platform website.',
    cardDescription:
      'Educational platform website with clear service-focused landing structure.',
    description:
      'An e-commerce platform built for selling electrical and solar products, including inverters, solar panels, batteries, lighting systems, and other power solutions. ',
    technologies: ['Wordpress'],
    role: 'web developer',
    date: '2025',
    type: 'Web Platform',
    client: 'israelelectricals',
    image: headerImg,
    gallery: [headerImg, Img1, Img2],
    liveUrl: 'https://israelelectricals.com',
  },
  {
    slug: 'voxaApp',
    title: 'Voxa App',
    subtitle: 'Voice-first fintech app case study.',
    cardDescription:
      'Voice-first payments experience designed for speed, access, and trust.',
    description:
      'A voice-first fintech concept that helps users send money, check balances, and perform quick transactions through intuitive voice interactions.',
    technologies: ['Figma', 'react Native', 'React', 'User Research', 'UI UX'],
    role: 'Mercy Chisom',
    date: '2025',
    type: 'Mobile Product Design',
    client: 'Self Initiated',
    image: voxaApp,
    mockup: voxaApp,
    gallery: [],
    liveUrl: 'https://github.com/DaisyMicheal/VoxaPay.git',
  },

  {
    slug: 'make',
    title: 'Make.com Redesign',
    subtitle: 'Case-study redesign focused on clarity and conversion.',
    cardDescription:
      'Landing page redesign case study with cleaner hierarchy and clearer CTA flow.',
    description:
      'A UI UX redesign of the Make.com landing experience to improve first-impression clarity and decision confidence for new users.',
    technologies: ['Figma', 'UI UX', 'Interaction Design'],
    role: 'Mercy Chisom',
    date: '2025',
    type: 'Landing Page Redesign',
    client: 'Self Initiated',
    image: MakeDesktopMockup,
    mockup: MakeDesktopMockup,
    gallery: [MakeDesktopMockup, MakePhoneMockup],
    liveUrl: 'https://example.com/make-redesign',
  },
  {
    slug: 'food-app',
    title: 'Food App',
    subtitle: 'Mobile-first ordering experience.',
    cardDescription:
      'Mobile food ordering interface with clear UX flow and visual hierarchy.',
    description:
      'A mobile UX-focused food app concept with streamlined browsing, cart actions, and checkout flow for speed and clarity.',
    technologies: ['Flutter', 'Figma'],
    role: 'Mercy Chisom',
    date: '2024',
    type: 'Mobile Product Design',
    client: 'Concept',
    image: recipeFood,
    gallery: [Bookmark],
    liveUrl: 'https://github.com/DaisyMicheal/Recipe_App.git',
  },
  {
    slug: 'recipe-app',
    title: 'Recipe App',
    subtitle: 'Discover and save recipes quickly.',
    cardDescription:
      'Recipe discovery product with card-based browsing and simple navigation.',
    description:
      'A recipe platform interface designed for quick discovery, category exploration, and easy personal collections.',
    technologies: ['Figma'],
    role: 'Mercy Chisom',
    date: '2024',
    type: 'Interface Design',
    client: 'Concept',
    image: recipe,
    gallery: [recipe, recipe2, recipe3, recipe4],
    liveUrl: 'https://example.com/recipe-app',
    caseStudy: {
      challenge:
        'Users struggled to find local recipes quickly and needed clearer steps, ingredients, and discovery paths.',
      research:
        'Interviewed food lovers and home cooks to validate what matters most: quick filtering, easy steps, and visual confidence.',
      userFlow:
        'Structured flow from search -> recipe detail -> save/favorite -> tutorial watch so users can move from intent to action faster.',
      wireframe:
        'Created low-fidelity wireframes to test hierarchy first, then refined to polished screens with readable spacing and clear CTA placement.',
      outcome:
        'Designed an interface that improves recipe discovery and comprehension while maintaining a friendly, modern visual tone.',
    },
  },

  {
    slug: 'ai-study-bud',
    title: 'AI Study Bud',
    subtitle: 'A focused learning assistant for students.',
    cardDescription:
      'Learning platform concept designed for focused student workflows.',
    description:
      'A productivity-focused learning tool that helps students organize study plans, track progress, and stay consistent.',
    technologies: ['React', 'tailwind', 'Figma'],
    role: 'Mercy Chisom',
    date: '2026',
    type: 'Product Interface',
    client: 'Internal Project',
    image: aiStudyBud,
    mockup: LandingMockup,
    gallery: [
      AiHome,
      AiChat,
      Task,
      Calender,
      Login,
      Signup,
      Setup1,
      Setup2,
      Setup3,
    ],
    liveUrl: 'https://example.com/ai-study-bud',
  },
]
