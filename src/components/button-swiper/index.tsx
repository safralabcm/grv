interface ButtonSwiperProps {
  prevButtonClassname: string;
  nextButtonClassname: string;
}

export const ButtonSwiper = ({
  nextButtonClassname,
  prevButtonClassname,
}: ButtonSwiperProps) => {
  return (
    <div>
      <button
        className={`absolute top-80 md:top-auto md:bottom-7 right-16 md:right-24 z-10 ml-3 flex w-9 h-9 md:w-12 md:h-12 items-center justify-center bg-[#FAFAFA] text-[#1F78DE] disabled:opacity-40 border-2 border-[#dfe6ed] rounded-full ${prevButtonClassname}`}
      >
        <img src="/icons/chevron-left.svg" alt="Flecha para a esquerda" />
      </button>
      <button
        className={`absolute top-80 md:top-auto md:bottom-7 right-0 md:right-4 z-10 mr-3 flex w-9 h-9 md:w-12 md:h-12 items-center justify-center bg-[#FAFAFA] text-[#1F78DE] disabled:opacity-40 border-2 border-[#dfe6ed] rounded-full ${nextButtonClassname}`}
      >
        <img src="/icons/chevron-right.svg" alt="Flecha para a direita" />
      </button>
    </div>
  );
};
