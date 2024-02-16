import { useTranslation } from "react-i18next";

export const Main = () => {
  const { t } = useTranslation();

  return (
    <main
      id="inicio"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.82)), url("/assets/main-bg.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="flex items-center justify-center main-bg"
    >
      <div className="flex flex-col items-center text-center text-white">
        <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          {t("main.title")}
          <br />
          {t("main.title2")}
        </h1>
        <p className="text-base lg:text-lg py-4 px-4 md:px-10 max-w-3xl text-[#D3D3D3]">
          {t("main.description")}
        </p>

        <a
          className="flex py-2 px-6 bg-[#1f78de] gap-1 text-white rounded-full text-lg mt-4 items-center"
          href="mailto:bruna@grvcoffee.com"
        >
          {t("main.contact")}
          <img src="/icons/envelope-simple.svg" className="phone-icon" />
        </a>
      </div>
    </main>
  );
};
