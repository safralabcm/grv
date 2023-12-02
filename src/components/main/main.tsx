import { useTranslation } from "react-i18next"

export const Main = () => {
  const { t } = useTranslation()

  return (
    <main id="inicio" className="main-bg flex items-center justify-center ">
      <div className="flex flex-col items-center text-white text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          {t("main.title")}
          <br />
          {t("main.title2")}
        </h1>
        <p className="text-base lg:text-lg py-4 px-4 md:px-10 max-w-3xl text-[#D3D3D3]">
          O aroma irresistível e o sabor excepcional do nosso café refletem o
          sucesso da sua satisfação. Nossa marca se orgulha em criar momentos
          memoráveis em cada xícara, cultivando o êxito através do seu
          contentamento
        </p>

        <a
          className="flex py-2 px-6 bg-[#1356a3] gap-1 text-white rounded-full text-lg mt-4 items-center"
          href="mailto:bruna@grvcoffee.com"
        >
          Entre em contato
          <img src="/icons/envelope-simple.svg" className="phone-icon" />
        </a>
      </div>
    </main>
  )
}
