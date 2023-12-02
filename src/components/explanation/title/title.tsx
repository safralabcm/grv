interface ExplanationTitleProps {
  title: string
  className?: string
}

export const ExplanationTitle = ({
  title,
  className,
}: ExplanationTitleProps) => {
  return (
    <h2
      className={`text-xl gap-2 font-bold md:text-3xl flex items-center lg:gap-3 mb-4 title ${className}`}
    >
      {title}
    </h2>
  )
}
