interface ItemProps {
  content: string
  link: string
  hasBorder?: boolean
}

export const Item = ({ content, link, hasBorder = true }: ItemProps) => {
  return (
    <li className="relative group">
      <a
        href={`#${link}`}
        className={`text-base hover:text-[#1356a3] transition-colors ease-linear duration-200 leading-3 py-4 lg:py-3 px-5 text-[#141414] ${
          hasBorder ? "border-b border-[#c2c2c2]" : "border-none"
        } block lg:border-none`}
      >
        {content}
      </a>
      <div className="w-0 hidden rounded-lg lg:block group-hover:w-full absolute h-1 bg-[#1356a3] transition-all duration-200 ease-linear" />
    </li>
  )
}
