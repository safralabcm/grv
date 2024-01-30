import { useTranslation } from 'react-i18next'
import { ContainerListItemIcon } from '../explanation/container-list-item-icon/container-list-item-icon'
import { ContainerListItemText } from '../explanation/container-list-item-text/container-list-item-text'
import { ContainerListItem } from '../explanation/container-list-item/container-list-item'
import { ContainerList } from '../explanation/container-list/container-list'
import { ExplanationText } from '../explanation/text'
import { ExplanationTitle } from '../explanation/title/title'
import { Photo } from '../photo/photo'

export const WhoWheAre = () => {
  const { t } = useTranslation()

  return (
    <article id="quemsomos" className="container">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <ExplanationTitle title={t('who-we-are.our-history')} />
          <ExplanationText text={t('who-we-are.text-one')} />

          <ExplanationText text={t('who-we-are.text-two')} className="mt-4" />

          <ExplanationText text={t('who-we-are.text-three')} className="mt-4" />

          <h3 className="mt-5 mb-4 text-lg md:text-2xl">
            {t('who-we-are.area-title-one')}{' '}
            <span className="effectText text-[#141414]">
              {t('who-we-are.area-title-two')}
            </span>{' '}
            {t('who-we-are.area-title-three')}
          </h3>

          <ul className="flex flex-wrap gap-4 md:grid md:grid-cols-2">
            <ContainerList>
              <ContainerListItem>
                <ContainerListItemIcon>
                  <img src="/icons/check.svg" />
                </ContainerListItemIcon>
                <ContainerListItemText content={t('who-we-are.brokerage')} />
              </ContainerListItem>
              <ContainerListItem>
                <ContainerListItemIcon>
                  <img src="/icons/check.svg" />
                </ContainerListItemIcon>
                <ContainerListItemText
                  content={t('who-we-are.commercialization-coffess')}
                />
              </ContainerListItem>
              <ContainerListItem>
                <ContainerListItemIcon>
                  <img src="/icons/check.svg" />
                </ContainerListItemIcon>
                <ContainerListItemText
                  content={t('who-we-are.commercialization')}
                />
              </ContainerListItem>
            </ContainerList>

            <ContainerList>
              <ContainerListItem>
                <ContainerListItemIcon>
                  <img src="/icons/check.svg" />
                </ContainerListItemIcon>
                <ContainerListItemText
                  content={t('who-we-are.commercialization-fine-coffess')}
                />
              </ContainerListItem>
              <ContainerListItem>
                <ContainerListItemIcon>
                  <img src="/icons/check.svg" />
                </ContainerListItemIcon>
                <ContainerListItemText content={t('who-we-are.markets')} />
              </ContainerListItem>
              <ContainerListItem>
                <ContainerListItemIcon>
                  <img src="/icons/check.svg" />
                </ContainerListItemIcon>
                <ContainerListItemText
                  content={t('who-we-are.verified-coffess')}
                />
              </ContainerListItem>
            </ContainerList>
          </ul>
        </div>

        <div className="items-center hidden gap-4 lg:flex">
          <Photo src="./assets/who-we-are-photo-1.jpg" />
          <Photo src="./assets/who-we-are-photo-2.jpg" />
        </div>
      </div>
    </article>
  )
}
