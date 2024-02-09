import { useTranslation } from "react-i18next";
import { ExplanationTitle } from "../explanation/title/title";
import { HistoryImage } from "../history-image/history-image";

export const CoffeeHistoryBrazil = () => {
  const { t } = useTranslation();

  return (
    <section id="historiacafebrasil" className="container ">
      <ExplanationTitle
        className="mt-4 mb-4 text-[#1C1D22]"
        title={t("brazil-history.title")}
      />
      <div className="grid items-center justify-center grid-cols-1 gap-6 lg:grid-cols-2">
        <HistoryImage
          content={t("brazil-history.leadership.text")}
          title={t("brazil-history.leadership.title")}
          nameImage="lideranca"
        />
        <HistoryImage
          content={t("brazil-history.journey.text")}
          title={t("brazil-history.journey.title")}
          nameImage="jornada"
        />
        <HistoryImage
          content={t("brazil-history.growth.text")}
          title={t("brazil-history.growth.title")}
          nameImage="crescimento"
        />
        <HistoryImage
          content={t("brazil-history.brazil-world.text")}
          title={t("brazil-history.brazil-world.title")}
          nameImage="brazil-world"
        />
      </div>
    </section>
  );
};
