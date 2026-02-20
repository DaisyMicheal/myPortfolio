import { type ButtonHTMLAttributes, type ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'
type ButtonAnimation = 'none' | 'lift' | 'slide-fill' | 'glow'
type IconPosition = 'left' | 'right'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  animation?: ButtonAnimation
  fullWidth?: boolean
  icon?: ReactNode
  iconPosition?: IconPosition
}

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ')
}

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-xl font-medium outline-none transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-black/30'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-black text-white border border-black',
  secondary: 'bg-[#f1f5f9] text-slate-900 border border-slate-300',
  outline: 'bg-transparent text-black border border-black/20',
  ghost: 'bg-transparent text-black border border-transparent hover:bg-black/5',
  success: 'bg-emerald-600 text-white border border-emerald-600',
  danger: 'bg-rose-600 text-white border border-rose-600',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
  icon: 'h-10 w-10 p-0',
}

const animations: Record<ButtonAnimation, string> = {
  none: '',
  lift: 'hover:-translate-y-0.5',
  'slide-fill': 'overflow-hidden',
  glow: 'hover:shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_12px_24px_rgba(99,102,241,0.25)]',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  animation = 'lift',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(
        base,
        variants[variant],
        sizes[size],
        animations[animation],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {animation === 'slide-fill' && (
        <span className="absolute inset-0 -translate-x-full bg-black/90 transition-transform duration-300 ease-out group-hover:translate-x-0" />
      )}

      {icon && iconPosition === 'left' && <span className="relative z-10">{icon}</span>}
      {children && (
        <span
          className={cx(
            'relative z-10',
            animation === 'slide-fill' && variant !== 'primary' && 'group-hover:text-white'
          )}
        >
          {children}
        </span>
      )}
      {icon && iconPosition === 'right' && (
        <span
          className={cx(
            'relative z-10',
            animation === 'slide-fill' && variant !== 'primary' && 'group-hover:text-white'
          )}
        >
          {icon}
        </span>
      )}
    </button>
  )
}
