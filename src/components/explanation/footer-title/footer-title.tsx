export const FooterTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-white text-lg font-bold tracking-wide mb-4 md:mb-6 flex items-center gap-1 before:w-3 before:h-3 before:rounded-full before:bg-white before:block lg:mt-0 my-4">
      {title}
    </h1>
  )
}
