import { Github, Instagram, Mail, X } from 'lucide-react'

type FooterVariant = 'minimal' | 'soft' | 'split'

type FooterProps = {
  variant?: FooterVariant
  year?: number
  name?: string
}

const socials = [
  { label: 'X', href: '#', Icon: X },
  { label: 'Instagram', href: '#', Icon: Instagram },
  { label: 'GitHub', href: '#', Icon: Github },
  { label: 'Email', href: 'mailto:hello@example.com', Icon: Mail },
]

export default function Footer({
  variant = 'minimal',
  year = 2025,
  name = 'Robinson Honour',
}: FooterProps) {
  const base = 'w-full mt-16 pb-12 px-4 sm:px-6'

  if (variant === 'soft') {
    return (
      <footer className={base}>
        <div className="rounded-3xl border border-black/10 bg-white/80 px-6 py-8 text-center backdrop-blur">
          <p className="text-base text-black/60">Copyright © {year} {name}.</p>
          <div className="mt-4 flex justify-center gap-5 text-black/60">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition hover:scale-110 hover:text-black"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    )
  }

  if (variant === 'split') {
    return (
      <footer className={base}>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-8 sm:flex-row">
          <p className="text-sm text-black/55">Copyright © {year} {name}.</p>
          <div className="flex items-center gap-4 text-black/60">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition hover:scale-110 hover:text-black"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className={base}>
      <div className="border-t border-black/10 pt-8 text-center">
        <p className="text-base text-black/55">Copyright © {year} {name}.</p>
        <div className="mt-4 flex justify-center gap-6 text-black/60">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="transition hover:scale-110 hover:text-black"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
