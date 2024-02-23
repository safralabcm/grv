import { useTranslation } from "react-i18next";
import { ContainerListItemText } from "../explanation/container-list-item-text/container-list-item-text";
import { ContainerList } from "../explanation/container-list/container-list";
import { ExplanationText } from "../explanation/text";
import { ExplanationTitle } from "../explanation/title/title";
import { BeanCoffee } from "../icons/bean-coffee";
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

          <div className="flex items-center gap-1 my-4">
            <BeanCoffee />
            <ExplanationTitle
              title={t("our-services.discover-our-coffees")}
              className="!mb-0 font-semibold md:text-xl after:hidden"
            />
          </div>
          {/* <h3 className="mt-5 mb-4 text-lg md:text-2xl text-[#141414]">
            Conheça nossos cafés <span className="effectText">Arábicos</span> e{" "}
            <span className="effectText">Conilon</span>
          </h3> */}
          {/* <ExplanationText text="Externamente, GRV é conhecida mundialmente pelo seu serviço de qualidade e seu suporte informativo, garantindo que o café chegue em diversos destinos diferentes, sempre prezando pela seriedade e compromisso de quem está exportando e quem está importando, atuando com todas as qualidades tradicionais e especiais." /> */}

          <main className="flex flex-wrap justify-between gap-8 md:gap-4 md:grid md:grid-cols-2">
            <article>
              <h1 className="text-xl font-medium">Arábica</h1>
              <ContainerList className="mt-4">
                <ContainerListItemText content="Semi washed 15UP" />
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
                <ContainerListItemText content="Conilon Semi Whased 14UP" />
                <ContainerListItemText content="Conilon 16UP Type 3/4" />
                <ContainerListItemText content="Conilon 13UP Type 5/6" />
                <ContainerListItemText content="Conilon 12UP 600 Def" />
                <ContainerListItemText content="Conilon 14UP Type 4/5" />
              </ContainerList>
            </article>
          </main>
        </div>
      </div>
    </article>
  );
};
