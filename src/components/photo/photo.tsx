export const Photo = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  return (
    <img className={`w-1/2 rounded-lg ${className}`} src={src} alt={alt} />
  );
};
