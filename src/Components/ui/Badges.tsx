type BadgesProps = {
  children: string
  variant?: 'primary' | 'neutral'
}
function Badges({ children, variant = 'primary' }: BadgesProps) {
  const base =
    'text-center px-6 py-1 inline-block font-medium text-sm rounded-lg border-1 border-[#938FE3] font-semibold'
  const variants = {
    primary: 'bg-[#F4F0FF] text-[#6561A7] rounded-full',
    neutral: 'bg-primary text-gray-600',
  }
  return <span className={`${base}${variants[variant]}`}>{children}</span>
}

export default Badges
