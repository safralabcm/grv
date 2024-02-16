export const FooterTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-[#141204] text-lg md:text-xl font-bold tracking-wide mb-4 md:mb-6 gap-2 lg:mt-0 my-4 after:bg-[#1f78de] after:rounded-md after:w-full after:h-1 flex flex-col items-start after:mt-[5px] w-fit">
      {title}
    </h1>
  );
};
