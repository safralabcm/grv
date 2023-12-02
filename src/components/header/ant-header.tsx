import { useTranslation } from "react-i18next"
import Select from "react-select"
import makeAnimated from "react-select/animated"
const animatedComponents = makeAnimated()

export const AntHeader = () => {
  const { i18n } = useTranslation()

  const options = [
    {
      value: "pt-BR",
      label: (
        <div className="flex items-center gap-2">
          <img src="/assets/brazil-flag.png" height="30px" width="30px" />
          Brazil
        </div>
      ),
    },
    {
      value: "en",
      label: (
        <div className="flex items-center gap-2">
          <img src="/assets/usa-flag.png" height="30px" width="30px" />
          English
        </div>
      ),
    },
  ]

  return (
    <nav
      aria-label="Navegação de redes sociais"
      className="bg-[#1356a3] p-4 pl-12 pr-8 text-white relative sub-header"
    >
      <ul className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center flex-col md:flex-row my-0 mx-auto lg:mx-0 lg:mr-auto gap-4 lg:gap-0">
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
          defaultValue={options[0]}
          components={animatedComponents}
          onChange={(e: any) => i18n.changeLanguage(e.value)}
          placeholder="Selecione um Idioma"
          className="lg:mt-0 mt-4"
          classNames={{
            menuList: () => "bg-white text-black",
          }}
        />
      </ul>
    </nav>
  )
}
