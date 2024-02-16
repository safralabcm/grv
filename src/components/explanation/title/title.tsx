interface ExplanationTitleProps {
  title: string;
  className?: string;
}

export const ExplanationTitle = ({
  title,
  className,
}: ExplanationTitleProps) => {
  return (
    <h2
      className={`text-xl font-bold md:text-3xl gap-2 mb-4 after:bg-[#1f78de] after:rounded-md after:w-28 after:h-1 flex flex-col items-start after:mt-[5px] ${className}`}
    >
      {title}
    </h2>
  );
};
