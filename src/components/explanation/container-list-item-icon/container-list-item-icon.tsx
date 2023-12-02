import { ReactNode } from "react"

export const ContainerListItemIcon = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <div className="bg-[#1f78de] flex items-center justify-center rounded w-6 h-6 font-bold text-white">
      {children}
    </div>
  )
}
