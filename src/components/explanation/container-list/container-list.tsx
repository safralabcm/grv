import { ReactNode } from "react"

export const ContainerList = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-4">{children}</div>
}
