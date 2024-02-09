import { useTranslation } from "react-i18next";
import { BoxCertification } from "../box-certification";
import { ExplanationTitle } from "../explanation/title/title";

export const Certifications = () => {
  const { t } = useTranslation()

  return (
    <article id="nossosservicos" className="container">
      <div className="flex items-center">
        <ExplanationTitle
          title={t("certifications.title")}
          className="text-[#1C1D22] mx-auto after:w-full"
        />
      </div>
      <main className="flex flex-wrap items-center justify-center mt-8 gap-y-4 gap-x-4 lg:gap-24 lg:items-stretch">
        <BoxCertification
          src="/assets/fairtrade.png"
          text={t("certifications.fairtrade")}
          title="Fairtrade America"
          classNamePhoto="w-28 h-24"
          href="https://fairtrade.ca/"
        />
        <BoxCertification
          src="/assets/4c.png"
          text={t("certifications.4c")}
          title="4c certification"
          classNamePhoto="w-24 h-24"
          href="https://www.4c-services.org/"
        />
        <BoxCertification
          src="/assets/rainforest.png"
          text={t("certifications.rainforest")}
          title="Rainforest"
          classNamePhoto="w-24 h-24"
          href="https://www.rainforest-alliance.org/pt-br/"
        />
        {/* <Photo
          src="/assets/4c.png"
          alt="4c certificação"
          className="w-40 h-40"
        />
        <Photo
          src="/assets/fairtrade-america.png"
          alt="fairtrade america certificação"
          className="w-40 h-48"
        />
        <Photo
          src="/assets/rainforest.png"
          alt="rainforest certificação"
          className="w-40 h-40"
        /> */}
      </main>
    </article>
  );
};
