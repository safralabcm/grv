import { ReactNode } from "react"

export const FooterContent = ({
  content,
  link = "",
}: {
  content: ReactNode
  link?: string
}) => {
  const DynamicContent = link !== "" ? "a" : "p"

  return (
    <DynamicContent href={link} className="text-white font-normal text-base">
      {content}
    </DynamicContent>
  )
}
