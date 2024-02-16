export const ContainerListItemText = ({
  content,
  className,
}: {
  content: string;
  className?: string;
}) => {
  return (
    <p
      className={`text-sm md:text-base before:bg-[#1f78de] before:w-3 before:h-1 before:rounded-sm flex items-center gap-2 w-fit ${className}`}
    >
      {content}
    </p>
  );
};
