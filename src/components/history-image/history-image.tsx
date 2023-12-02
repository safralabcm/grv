import { ExplanationTitle } from "../explanation/title/title"

interface HistoryImageProps {
  title: string
  content: string
  className?: string
}

export const HistoryImage = ({
  content,
  title,
  className,
}: HistoryImageProps) => {
  return (
    <div
      className={`${className} bg-cover h-full md:h-72 rounded-xl p-8 flex bg-center flex-col justify-start text-white bg-gradient-to-r from-[rgba(0, 0, 0, 0.82)] to-[rgba(0, 0, 0, 0.82)]`}
    >
      <ExplanationTitle
        className="before:hidden lg:before:block font-semibold text-2xl mb-1 relative"
        title={title}
      />
      <p className="font-normal tracking-wide text-[#adadad] leading-relaxed">
        {content}
      </p>
    </div>
  )
}
