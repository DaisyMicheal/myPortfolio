"use client"

import { useState } from "react"
import { Home, X, Github, FileText } from "lucide-react"

export default function Navbar() {
  const [active, setActive] = useState("blog")

  const navItems = [
    { id: "home", icon: Home },
    { id: "x", icon: X },
    { id: "github", icon: Github },
    { id: "docs", icon: FileText },
  ]

  return (
    <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-4 px-6 py-2
                      bg-white/70 backdrop-blur-xl 
                      border border-white/40
                      shadow-lg shadow-black/5
                      rounded-2xl">

        {navItems.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={item.id} className="flex items-center gap-6">
              <button
                onClick={() => setActive(item.id)}
                className="p-2 rounded-xl text-gray-500 hover:text-black 
                           hover:scale-110 transition-all duration-200"
              >
                <Icon size={20} />
              </button>

              {/* Divider after first icon */}
              {index === 0 && (
                <div className="w-px h-5 bg-gray-300" />
              )}
            </div>
          )
        })}

        {/* Blog Button with Animated Active State */}
        <button
          onClick={() => setActive("blog")}
          className={`relative px-5 py-2 text-sm font-medium rounded-lg 
                      transition-all duration-300 ${active === "blog"
              ? "bg-black text-white shadow-md"
              : "text-gray-600 hover:text-black"
            }`}
        >
          Blog
        </button>
      </div>
    </div>
  )
}