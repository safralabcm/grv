import { ReactNode } from 'react'

export const FooterContent = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className={`text-base font-normal text-white ${className}`}>
      {children}
    </div>
  )
}
