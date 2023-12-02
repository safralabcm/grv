import { ContainerListItemText } from "../explanation/container-list-item-text/container-list-item-text"
import { ContainerListItem } from "../explanation/container-list-item/container-list-item"
import { ContainerList } from "../explanation/container-list/container-list"
import { ExplanationText } from "../explanation/text"
import { ExplanationTitle } from "../explanation/title/title"
import { Photo } from "../photo/photo"

export const OurServices = () => {
  return (
    <article id="nossosservicos" className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="hidden lg:flex items-center gap-4">
          <Photo src="/assets/our-services-photo-1.png" />
          <Photo src="/assets/our-services-photo-2.png" />
        </div>

        <div className="our-qualities-content">
          <ExplanationTitle title="Nossas Qualidades" />
          <ExplanationText
            text="O café tem uma grande variedade de tipos e sabores. O gosto é
            pessoal e difícil de capturar em palavras e descrições. Abaixo você
            encontra todas as qualidades com as quais nossa empresa trabalha."
          />

          <ul className="flex flex-wrap md:grid md:grid-cols-2 gap-4 mt-5">
            <ContainerList>
              <ContainerListItem>
                <div className="bg-[#1f78de] flex items-center justify-center p-1 px-3 rounded w-5 font-bold text-white">
                  1
                </div>
                <ContainerListItemText content="Fine Cup 17/18 and 15/16" />
              </ContainerListItem>
              <ContainerListItem>
                <div className="bg-[#1f78de] flex items-center justify-center p-1 px-3 rounded w-5 font-bold text-white">
                  3
                </div>
                <ContainerListItemText content="Good Cup 17/18 and 14/16" />
              </ContainerListItem>
              <ContainerListItem>
                <div className="bg-[#1f78de] flex items-center justify-center p-1 px-3 rounded w-5 font-bold text-white">
                  5
                </div>
                <ContainerListItemText content="Conilon 13up, 14up, 16up, 17/18up" />
              </ContainerListItem>
              <ContainerListItem>
                <div className="bg-[#1f78de] flex items-center justify-center p-1 px-3 rounded w-5 font-bold text-white">
                  7
                </div>
                <ContainerListItemText content="RFA, 4C, Glypho Free" />
              </ContainerListItem>
            </ContainerList>

            <ContainerList>
              <ContainerListItem>
                <div className="bg-[#1f78de] flex items-center justify-center p-1 px-3 rounded w-5 font-bold text-white">
                  2
                </div>
                <ContainerListItemText content="Good Cup 17/18 and 14/16" />
              </ContainerListItem>
              <ContainerListItem>
                <div className="bg-[#1f78de] flex items-center justify-center p-1 px-3 rounded w-5 font-bold text-white">
                  4
                </div>
                <ContainerListItemText content="Rio minas 17/18 and 15/16" />
              </ContainerListItem>
              <ContainerListItem>
                <div className="bg-[#1f78de] flex items-center justify-center p-1 px-3 rounded w-5 font-bold text-white">
                  6
                </div>
                <ContainerListItemText content="Organic Fine Cup" />
              </ContainerListItem>
            </ContainerList>
          </ul>
        </div>
      </div>
    </article>
  )
}
