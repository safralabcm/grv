import { ExplanationTitle } from "../explanation/title/title"

interface HistoryImageProps {
  title: string
  content: string
  nameImage: string
  className?: string
}

export const HistoryImage = ({
  content,
  title,
  className,
  nameImage,
}: HistoryImageProps) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82)), url("/assets/${nameImage}.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className={`${className} bg-cover h-full md:h-72 rounded-xl p-8 flex bg-center flex-col justify-start text-white`}
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
