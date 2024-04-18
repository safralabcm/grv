import { useTranslation } from "react-i18next";
import { ContainerListItemText } from "../explanation/container-list-item-text/container-list-item-text";
import { ContainerList } from "../explanation/container-list/container-list";
import { ExplanationText } from "../explanation/text";
import { ExplanationTitle } from "../explanation/title/title";
import { Photo } from "../photo/photo";

export const OurServices = () => {
  const { t } = useTranslation();

  return (
    <article id="nossosservicos" className="container">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="items-start hidden gap-4 lg:flex">
          <Photo
            src="/assets/our-services-photo-1.jpg"
            alt="Imagem ilustrativa de um café"
          />
          <Photo
            src="/assets/our-services-photo-2.jpg"
            alt="Imagem ilustrativa de um café"
          />
        </div>

        <div>
          <ExplanationTitle
            title={t("our-services.title")}
            className="text-[#1C1D22]"
          />
          <ExplanationText text={t("our-services.text")} />

          <main className="flex flex-wrap justify-between gap-8 mt-4 md:gap-4 md:grid md:grid-cols-2">
            <article>
              <h1 className="text-xl font-medium">Arábica</h1>
              <ContainerList className="mt-4">
                <ContainerListItemText content="Semi Washed 15UP" />
                <ContainerListItemText content="Fine Cup 17/18 & 14/16" />
                <ContainerListItemText content="Grinders FC 13UP/12UP" />
                <ContainerListItemText content="Good Cup 17/18 & 14/16" />
                <ContainerListItemText content="Grinders GC 13UP/12UP" />
                <ContainerListItemText content="Rio Minas 17/18 & 15/16 & 14/16" />
              </ContainerList>
            </article>
            <article>
              <h1 className="text-xl font-medium">Conilon</h1>
              <ContainerList className="mt-4">
                <ContainerListItemText content="Conilon Semi Washed" />
                <ContainerListItemText content="Conilon 14UP Type 4/5" />
                <ContainerListItemText content="Conilon 13UP Type 5/6" />
                <ContainerListItemText content="Conilon 12UP 600 Def" />
                <ContainerListItemText content="Conilon 16UP Type 3/4" />
              </ContainerList>
            </article>
          </main>
        </div>
      </div>
    </article>
  );
};
