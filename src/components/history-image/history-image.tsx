import { ExplanationTitle } from "../explanation/title/title";

interface HistoryImageProps {
  title: string;
  content: string;
  nameImage: string;
  className?: string;
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
        background: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.90)), url("/assets/${nameImage}.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className={`${className} relative bg-cover h-full md:h-80 rounded-xl p-8 flex bg-center flex-col justify-start text-white`}
    >
      <div className="absolute top-0 rounded-l-xl left-0 h-full w-2 bg-[#1f78de]" />
      <ExplanationTitle
        className="relative mb-1 text-2xl font-semibold after:hidden"
        title={title}
      />
      <p className="font-normal leading-loose md:leading-relaxed tracking-wide text-[#d4d4d4]">
        {content}
      </p>
    </div>
  );
};
