import { useTranslation } from "react-i18next";
import { ExplanationTitle } from "../explanation/title/title";
import { HistoryImage } from "../history-image/history-image";

export const CoffeeEsBrazil = () => {
  const { t } = useTranslation();

  return (
    <section id="historiacafees" className="container !pt-0">
      <ExplanationTitle
        className="mt-4 mb-4 text-[#1C1D22]"
        title={t("es-history.title")}
      />
      <div className="grid items-center justify-center grid-cols-1 gap-6 lg:grid-cols-2">
        <HistoryImage
          content={t("es-history.emergence.text")}
          title={t("es-history.emergence.title")}
          nameImage="surgimento"
        />
        <HistoryImage
          content={t("es-history.boom-downturn.text")}
          title={t("es-history.boom-downturn.title")}
          nameImage="boom"
        />
        <HistoryImage
          content={t("es-history.success.text")}
          title={t("es-history.success.title")}
          nameImage="sucesso"
        />
        <HistoryImage
          content={t("es-history.presently.text")}
          title={t("es-history.presently.title")}
          nameImage="atualmente"
        />
      </div>
    </section>
  );
};
