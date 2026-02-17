type CardProps = {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={`
        rounded-xl bg-[#E9EFF6]/20 shadow-md transition-all duration-300 text-left p-3
        ${hover ? 'hover:-translate-y-1 hover:shadow-xl' : ''}
        ${className || ''}
      `}
    >
      {children}
    </div>
  )
}
