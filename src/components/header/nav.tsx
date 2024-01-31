import { Dispatch, ReactNode, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'
import Select from 'react-select'
import { Item } from './item'

interface OptionsProps {
  value: string
  label: ReactNode
}
interface HeaderNavProps {
  isOpenMenu: boolean
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>
}

export const HeaderNav = ({ isOpenMenu, setIsOpenMenu }: HeaderNavProps) => {
  const { t } = useTranslation()

  const { i18n } = useTranslation()

  const options: OptionsProps[] = [
    {
      value: 'pt-BR',
      label: (
        <div className="flex items-center gap-2">
          <img src="/assets/brazil-flag.png" height="30px" width="30px" />
          Brazil
        </div>
      ),
    },
    {
      value: 'en',
      label: (
        <div className="flex items-center gap-2">
          <img src="/assets/usa-flag.png" height="30px" width="30px" />
          English
        </div>
      ),
    },
  ]

  const method = (option: string) => {
    i18n.changeLanguage(option)
  }

  const languageInLocalStorage = window.localStorage.getItem('i18nextLng')

  const findLanguageEqualLocalStorageLanguage = options.find(
    (language) => language?.value === languageInLocalStorage
  )

  const defaultLanguage =
    findLanguageEqualLocalStorageLanguage?.value !== ''
      ? findLanguageEqualLocalStorageLanguage
      : options[0]

  const optionsList = [
    {
      label: t('header.coffee-in-br'),
      value: 'historiacafebrasil',
    },
    {
      label: t('header.coffee-in-es'),
      value: 'historiacafees',
    },
  ]

  return (
    <nav aria-label="Navegação para o site">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpenMenu((prev) => !prev)}
          className="border border-[#B3B3B3] h-9 outline-none rounded p-1 cursor-pointer flex items-center gap-1 font-semibold lg:hidden hover:border-[#1356a3] transition-colors duration-200 ease-linear"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-align-justify hover:stroke-[#1356a3]"
          >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
        </button>
        <Select
          options={options}
          defaultValue={defaultLanguage}
          onChange={(option) => method((option as OptionsProps).value)}
          placeholder="Selecione um Idioma"
          className="flex lg:hidden"
          classNames={{
            menuList: () => 'bg-white text-black',
          }}
        />
      </div>
      <ul
        className={`${
          isOpenMenu
            ? 'absolute opacity-100 z-50 animationToTop'
            : 'hidden static'
        } flex-col border border-[#14120426] rounded bg-white px-0 right-0 w-[240px] lg:w-full mt-1 lg:mt-0 lg:py-0 gap-4 lg:bg-none lg:rounded-none lg:border-none lg:static lg:flex lg:flex-row flex-wrap lg:gap-3 justify-end lg:mr-5 items-center`}
      >
        <Item content={t('header.home')} link="inicio" />
        <Item content={t('header.our-history')} link="quemsomos" />
        <Item content={t('header.our-services')} link="nossosservicos" />
        <Item content={t('header.history')} options={optionsList} />
        <Item content={t('header.contact')} link="contato" hasBorder={false} />
      </ul>
    </nav>
  )
}
