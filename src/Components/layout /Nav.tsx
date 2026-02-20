import { Home, X, Github, FileText } from "lucide-react"
import { Link } from 'react-router'
import cvFile from '../../assets/UZOCHUKWU MERCY CHISOM (1).pdf'

export default function Navbar() {
  const TWITTER_URL = 'https://x.com'
  const GITHUB_URL = 'https://github.com/DaisyMicheal'
  const BEHANCE_URL = 'https://www.behance.net/'
  const CV_URL = cvFile

  return (
    <div className="fixed left-1/2 top-3 z-50 w-[calc(100%-1rem)] -translate-x-1/2 px-2 sm:top-6 sm:w-auto sm:px-0">
      <div className="mx-auto flex max-w-full items-center gap-2 overflow-x-auto px-3 py-2 sm:gap-4 sm:px-6
                      bg-white/70 backdrop-blur-xl 
                      border border-white/40
                      shadow-lg shadow-black/5
                      rounded-xl sm:rounded-2xl">
        <Link
          to="/"
          aria-label="Go to home page"
          className="shrink-0 rounded-xl p-2 text-gray-500 transition-all duration-200 hover:scale-110 hover:text-black"
        >
          <Home size={18} />
        </Link>

        <div className="h-5 w-px bg-gray-300" />

        <a
          href={TWITTER_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Open X (Twitter)"
          className="shrink-0 rounded-xl p-2 text-gray-500 transition-all duration-200 hover:scale-110 hover:text-black"
        >
          <X size={18} />
        </a>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Open GitHub profile"
          className="shrink-0 rounded-xl p-2 text-gray-500 transition-all duration-200 hover:scale-110 hover:text-black"
        >
          <Github size={18} />
        </a>

        <a
          href={CV_URL}
          download
          aria-label="Download CV"
          className="shrink-0 rounded-xl p-2 text-gray-500 transition-all duration-200 hover:scale-110 hover:text-black"
        >
          <FileText size={18} />
        </a>

        <a
          href={BEHANCE_URL}
          target="_blank"
          rel="noreferrer"
          className="relative shrink-0 whitespace-nowrap rounded-lg bg-black px-3 py-2 text-xs font-medium text-white shadow-md transition-all duration-300 hover:scale-[1.02] sm:px-5 sm:text-sm"
        >
          Behance
        </a>
      </div>
    </div>
  )
}
