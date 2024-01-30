import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
const animatedComponents = makeAnimated()

interface OptionsProps {
  value: string
  label: ReactNode
}

export const AntHeader = () => {
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

  return (
    <nav
      aria-label="Navegação de redes sociais"
      className="bg-[#1356a3] w-full p-4 pl-12 pr-8 text-white relative sub-header"
    >
      <ul className="flex flex-col items-center justify-between gap-4 lg:gap-8 lg:flex-row">
        <div className="flex flex-col items-center gap-4 mx-auto my-0 md:flex-row lg:mx-0 lg:mr-auto lg:gap-0">
          <li className="flex items-center gap-2 sub-header-item-one">
            <img src="/icons/map-pin.svg" />
            <p>Palácio do café - Vitória - ES</p>
          </li>
          <a href="mailto:traffic@grvcoffee.com">
            <li className="flex items-center gap-2 sub-header-item-one">
              <img src="/icons/envelope-simple.svg" />
              <p>traffic@grvcoffee.com</p>
            </li>
          </a>
          <a href="tel:+552733353999">
            <li className="flex items-center gap-2">
              <img src="/icons/phone.svg" />
              <p>+55 27 3335-3999</p>
            </li>
          </a>
        </div>
        <Select
          options={options}
          defaultValue={defaultLanguage}
          components={animatedComponents}
          onChange={(option) => method((option as OptionsProps).value)}
          placeholder="Selecione um Idioma"
          className="mt-4 lg:mt-0"
          classNames={{
            menuList: () => 'bg-white text-black',
          }}
        />
      </ul>
    </nav>
  )
}
