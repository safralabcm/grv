import { ReactNode } from "react"

export const ContainerListItem = ({ children }: { children: ReactNode }) => {
  return (
    <li className="grid grid-cols-actMobile md:flex items-center gap-1">
      {children}
    </li>
  )
}
