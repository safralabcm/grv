import { ExplanationText } from "../explanation/text";
import { ExplanationTitle } from "../explanation/title/title";
import { Photo } from "../photo/photo";

interface BoxCertificationProps {
  title: string;
  text: string;
  src: string;
  classNamePhoto?: string;
  href: string;
}

export const BoxCertification = ({
  src,
  text,
  title,
  classNamePhoto,
  href,
}: BoxCertificationProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex flex-col p-5 rounded-md transition-all ease-linear duration-200 md:hover:bg-white shadow-[0px_0px_18px_-10px] hover:shadow-[0px_0px_25px_-5px] border border-[#e9e9e9] md:border-none shadow-[#4e4e50]  md:shadow-[#e2e1e1] md:hover:shadow-[#cdcccc] overflow-hidden h-full w-full md:h-[300px] md:w-80"
    >
      <Photo
        src={src}
        alt={`${title} certificação`}
        className={`w-20 h-20 ${classNamePhoto}`}
      />
      <div className="mt-auto">
        <ExplanationTitle
          title={title}
          className="text-[#1C1D22] !text-lg !mb-3 !gap-0 !after:mt-0 w-fit after:w-full"
        />
        <ExplanationText text={text} />
      </div>
    </a>
  );
};
