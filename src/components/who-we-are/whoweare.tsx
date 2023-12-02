import { ContainerListItemIcon } from "../explanation/container-list-item-icon/container-list-item-icon"
import { ContainerListItemText } from "../explanation/container-list-item-text/container-list-item-text"
import { ContainerListItem } from "../explanation/container-list-item/container-list-item"
import { ContainerList } from "../explanation/container-list/container-list"
import { ExplanationText } from "../explanation/text"
import { ExplanationTitle } from "../explanation/title/title"
import { Photo } from "../photo/photo"

export const WhoWheAre = () => {
  return (
    <article id="quemsomos" className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <ExplanationTitle title="Nossa História" />
          <ExplanationText
            text="Em 2003, com 21 anos de experiência no mercado de café, o CEO da GRV
            Corretora de Café fundou a empresa para fornecer informações
            precisas sobre o mercado, previsões de safra e preços. Hoje, a
            empresa é uma líder reconhecida na intermediação de café, tanto
            nacional quanto internacionalmente."
          />

          <h3 className="text-lg md:text-2xl mt-5 mb-4">
            Conheça nossas{" "}
            <span className="effectText text-[#141414]">áreas</span> de atuação
          </h3>

          <ul className="flex flex-wrap md:grid md:grid-cols-2 gap-4">
            <ContainerList>
              <ContainerListItem>
                <ContainerListItemIcon>
                  <img src="/icons/check.svg" />
                </ContainerListItemIcon>
                <ContainerListItemText content="Corretagem" />
              </ContainerListItem>
              <ContainerListItem>
                <ContainerListItemIcon>
                  <img src="/icons/check.svg" />
                </ContainerListItemIcon>
                <ContainerListItemText content="Comercialização de cafés comerciais" />
              </ContainerListItem>
              <ContainerListItem>
                <ContainerListItemIcon>
                  <img src="/icons/check.svg" />
                </ContainerListItemIcon>
                <ContainerListItemText content="Comercialização" />
              </ContainerListItem>
            </ContainerList>

            <ContainerList>
              <ContainerListItem>
                <ContainerListItemIcon>
                  <img src="/icons/check.svg" />
                </ContainerListItemIcon>
                <ContainerListItemText content="Comercialização de cafés finos e especiais" />
              </ContainerListItem>
              <ContainerListItem>
                <ContainerListItemIcon>
                  <img src="/icons/check.svg" />
                </ContainerListItemIcon>
                <ContainerListItemText content="Mercados físicos e futuro" />
              </ContainerListItem>
              <ContainerListItem>
                <ContainerListItemIcon>
                  <img src="/icons/check.svg" />
                </ContainerListItemIcon>
                <ContainerListItemText content="Cafés verificados, certificados e orgânicos" />
              </ContainerListItem>
            </ContainerList>
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Photo src="./assets/who-we-are-photo-1.png" />
          <Photo src="./assets/who-we-are-photo-2.png" />
        </div>
      </div>
    </article>
  )
}
