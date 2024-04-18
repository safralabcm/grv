import { useTranslation } from "react-i18next";

export const Main = () => {
  const { t } = useTranslation();

  return (
    <main
      id="inicio"
      className="relative overflow-hidden after:absolute after:left-0 after:top-0 after:w-full after:h-full after:opacity-0 after:transition-all hover:after:opacity-40 group"
    >
      <img
        src="/assets/main-bg.jpg"
        alt="Imagem representativa do café"
        className="object-cover object-center w-full h-[26rem] md:h-[35rem] md:max-h-[40rem] transition-all ease-linear duration-200 group-hover:scale-110 brightness-50"
      />
      <div className="absolute bottom-0  flex flex-col justify-center items-start md:items-end text-center text-white left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-xl leading-none md:text-2xl">{t("main.title")}</h3>
        <h1 className="text-6xl pacifico-regular md:text-8xl">
          {t("main.title2")}
        </h1>
        <h3 className="my-2 text-xl md:text-2xl">{t("main.title3")}</h3>
        <h1 className="text-6xl pacifico-regular md:text-8xl">
          {t("main.title4")}
        </h1>
      </div>
    </main>
  );
};
