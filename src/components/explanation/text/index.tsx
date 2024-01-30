export const ExplanationText = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => {
  return <div className={`text-sm md:text-base ${className}`}>{text}</div>
}
