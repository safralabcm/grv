export const Photo = ({ src, alt }: { src: string; alt: string }) => {
  return <img className="w-1/2 rounded-lg" src={src} alt={alt} />;
};
