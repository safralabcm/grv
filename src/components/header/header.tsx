import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { AntHeader } from "./ant-header";
import { HeaderNav } from "./nav";
const animatedComponents = makeAnimated();

interface OptionsProps {
  value: string;
  label: ReactNode;
}

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { i18n } = useTranslation();

  const options: OptionsProps[] = [
    {
      value: "pt-BR",
      label: (
        <div className="flex items-center gap-2">
          <img src="/assets/brazil-flag.png" height="30px" width="30px" />
          Portuguese
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
  ];

  const method = (option: string) => {
    i18n.changeLanguage(option);
  };

  const languageInLocalStorage = window.localStorage.getItem("i18nextLng");

  const findLanguageEqualLocalStorageLanguage = options.find(
    (language) => language?.value === languageInLocalStorage
  );

  const defaultLanguage =
    findLanguageEqualLocalStorageLanguage?.value !== ""
      ? findLanguageEqualLocalStorageLanguage
      : options[0];

  return (
    <header className="flex flex-col w-full gap-2 mb-4 bg-white">
      <AntHeader />
      <div className="flex items-center justify-between w-full gap-4 container-header">
        <img
          src="assets/logoBR.png"
          alt="logo GRV"
          className="w-[120px] h-[90px] sm:w-[140px] sm:h-[100px] lg:w-[180px] lg:h-[120px] flex"
        />
        <HeaderNav isOpenMenu={openMenu} setIsOpenMenu={setOpenMenu} />
        <Select
          options={options}
          defaultValue={defaultLanguage}
          components={animatedComponents}
          onChange={(option) => method((option as OptionsProps).value)}
          placeholder="Selecione um Idioma"
          className="hidden mt-4 lg:mt-0 lg:flex"
          classNames={{
            menuList: () => "bg-white text-black",
          }}
        />
      </div>
    </header>
  );
};
