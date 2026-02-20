import type { ReactNode } from 'react'
type ContainerProps = {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <div className='min-h-screen px-2 sm:px-4'>
      <div className='mx-auto w-full max-w-5xl md:border-x md:border-black/10'>{children}</div>
    </div>
  )
}
export default Container
