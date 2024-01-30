import { useTranslation } from 'react-i18next'
import { ContainerListItemText } from '../explanation/container-list-item-text/container-list-item-text'
import { ContainerListItem } from '../explanation/container-list-item/container-list-item'
import { ContainerList } from '../explanation/container-list/container-list'
import { ExplanationText } from '../explanation/text'
import { ExplanationTitle } from '../explanation/title/title'
import { Photo } from '../photo/photo'

export const OurServices = () => {
  const { t } = useTranslation()

  return (
    <article id="nossosservicos" className="container">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="items-center hidden gap-4 lg:flex">
          <Photo src="/assets/our-services-photo-1.jpg" />
          <Photo src="/assets/our-services-photo-2.jpg" />
        </div>

        <div className="our-qualities-content">
          <ExplanationTitle title={t('our-services.title')} />
          <ExplanationText text={t('our-services.text')} />

          <ul className="flex flex-wrap gap-4 mt-5 md:grid md:grid-cols-2">
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
