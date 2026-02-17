import { type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react'

type InputVariant = 'outline' | 'filled' | 'ghost'
type InputSize = 'sm' | 'md' | 'lg'

type SharedProps = {
  label?: string
  error?: string
  helperText?: string
  variant?: InputVariant
  fieldSize?: InputSize
  fullWidth?: boolean
  className?: string
}

type TextInputProps = SharedProps &
  InputHTMLAttributes<HTMLInputElement> & {
    as?: 'input'
  }

type TextAreaProps = SharedProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as: 'textarea'
  }

type FieldProps = TextInputProps | TextAreaProps

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ')
}

const base =
  'w-full rounded-2xl border transition duration-200 outline-none placeholder:text-black/45 focus:ring-2 focus:ring-black/10'

const variants: Record<InputVariant, string> = {
  outline: 'border-black/15 bg-white/75 text-black/80',
  filled: 'border-transparent bg-slate-100 text-black/85',
  ghost: 'border-black/10 bg-transparent text-black/80',
}

const sizes: Record<InputSize, string> = {
  sm: 'h-10 px-3 text-sm',
  md: 'h-12 px-4 text-base',
  lg: 'h-14 px-5 text-lg',
}

export default function Input({
  label,
  error,
  helperText,
  variant = 'outline',
  fieldSize = 'lg',
  fullWidth = true,
  className,
  as = 'input',
  ...props
}: FieldProps) {
  const sharedClass = cx(
    base,
    variants[variant],
    sizes[fieldSize],
    as === 'textarea' && 'h-auto py-4',
    error && 'border-red-400 focus:ring-red-200',
    fullWidth && 'w-full',
    className
  )

  return (
    <div className={cx(fullWidth && 'w-full')}>
      {label && <label className="mb-2 block text-sm font-medium text-black/70">{label}</label>}

      {as === 'textarea' ? (
        <textarea {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)} className={sharedClass} />
      ) : (
        <input {...(props as InputHTMLAttributes<HTMLInputElement>)} className={sharedClass} />
      )}

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      {!error && helperText && <p className="mt-1 text-xs text-black/45">{helperText}</p>}
    </div>
  )
}
