export const FooterTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-white text-lg font-bold tracking-wide mb-4 md:mb-6 gap-2 lg:mt-0 my-4 after:bg-[#1f78de] after:rounded-md after:w-12 after:h-1 flex flex-col items-start after:mt-[5px]">
      {title}
    </h1>
  );
};
