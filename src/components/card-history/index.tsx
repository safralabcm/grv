import { ButtonSwiper } from "../button-swiper";
import { ExplanationText } from "../explanation/text";
import { ExplanationTitle } from "../explanation/title/title";

interface CardHistoryProps {
  preview: string;
  title: string;
  content: string;
  prevButtonClassname: string;
  nextButtonClassname: string;
}

export const CardHistory = ({
  preview,
  content,
  title,
  nextButtonClassname,
  prevButtonClassname,
}: CardHistoryProps) => {
  return (
    <div className="w-full rounded-2xl overflow-hidden flex flex-col md:flex-row  h-full md:h-[600px] cursor-pointer">
      <div className="w-full md:h-full h-[300px] md:w-5/12 ">
        <img
          src={preview}
          alt="Imagem representativa do café"
          className="object-cover object-center w-full h-full"
        />
      </div>
      <main className="flex flex-col flex-1 w-full h-full gap-4 p-4 bg-white md:p-10 md:w-7/12">
        <ExplanationTitle title={title} className="w-fit after:w-full" />
        <ExplanationText
          text={content}
          className="text-sm !leading-loose text-[#141204] md:text-lg"
        />
        <ButtonSwiper
          nextButtonClassname={nextButtonClassname}
          prevButtonClassname={prevButtonClassname}
        />
      </main>
    </div>
  );
};
