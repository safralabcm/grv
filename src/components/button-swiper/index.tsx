interface ButtonSwiperProps {
  prevButtonClassname: string;
  nextButtonClassname: string;
}

export const ButtonSwiper = ({
  nextButtonClassname,
  prevButtonClassname,
}: ButtonSwiperProps) => {
  return (
    <div className="flex items-center self-end gap-4 mt-auto ml-auto">
      <button
        className={` z-10 flex w-9 h-9 md:w-12 md:h-12 items-center justify-center bg-[#FAFAFA] text-[#1F78DE] disabled:opacity-40 border-2 border-[#dfe6ed] rounded-full ${prevButtonClassname}`}
      >
        <img src="/icons/chevron-left.svg" alt="Flecha para a esquerda" />
      </button>
      <button
        className={`z-10 flex w-9 h-9 md:w-12 md:h-12 items-center justify-center bg-[#FAFAFA] text-[#1F78DE] disabled:opacity-40 border-2 border-[#dfe6ed] rounded-full ${nextButtonClassname}`}
      >
        <img src="/icons/chevron-right.svg" alt="Flecha para a direita" />
      </button>
    </div>
  );
};
