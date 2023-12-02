import { Dispatch, SetStateAction } from "react"
import { Item } from "./item"

interface HeaderNavProps {
  isOpenMenu: boolean
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>
}

export const HeaderNav = ({ isOpenMenu, setIsOpenMenu }: HeaderNavProps) => {
  return (
    <nav className="relative ml-auto" aria-label="Navegação para o site">
      <button
        onClick={() => setIsOpenMenu((prev) => !prev)}
        className="border border-[#141204] outline-none rounded p-1 cursor-pointer flex items-center gap-1 font-semibold lg:hidden hover:border-[#1356a3] transition-colors duration-200 ease-linear"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-align-justify hover:stroke-[#1356a3]"
        >
          <line x1="3" x2="21" y1="6" y2="6" />
          <line x1="3" x2="21" y1="12" y2="12" />
          <line x1="3" x2="21" y1="18" y2="18" />
        </svg>
        <p className="hover:text-[#1356a3]">MENU</p>
      </button>
      <ul
        className={`${
          isOpenMenu
            ? "absolute opacity-100 z-50 animationToTop"
            : "hidden animationToBottom"
        } absolute flex-col  border border-[#14120426] rounded bg-white px-0 right-0 w-[240px] lg:w-full mt-1 lg:mt-0 lg:py-0 gap-4 lg:bg-none lg:rounded-none lg:border-none lg:static lg:flex lg:flex-row flex-wrap lg:gap-3 justify-end lg:mr-5 items-center`}
      >
        <Item content="Início" link="inicio" />
        <Item content="Nossa história" link="quemsomos" />
        <Item content="Nossos serviços" link="nossosservicos" />
        <Item content="História do Café no BR" link="historiacafebrasil" />
        <Item content="História do Café no ES" link="historiacafees" />
        <Item content="Contato" link="contato" hasBorder={false} />
      </ul>
    </nav>
  )
}
