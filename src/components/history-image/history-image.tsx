import { ExplanationTitle } from '../explanation/title/title'

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
        background: `linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.8)), url("/assets/${nameImage}.jpg")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      className={`${className} bg-cover h-full md:h-80 rounded-xl p-8 flex bg-center flex-col justify-start text-white`}
    >
      <ExplanationTitle
        className="relative mb-1 text-2xl font-semibold before:hidden lg:before:block"
        title={title}
      />
      <p className="font-normal leading-relaxed tracking-wide text-[#d4d4d4]">
        {content}
      </p>
    </div>
  )
}
