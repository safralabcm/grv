import { withTranslation } from 'react-i18next'
import { CoffeeEsBrazil } from './components/coffe-es-history'
import { CoffeeHistoryBrazil } from './components/coffee-brazil-history'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { Main } from './components/main/main'
import { OurServices } from './components/our-qualities/our-services'
import { WhoWheAre } from './components/who-we-are/whoweare'

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <WhoWheAre />
      <OurServices />
      <CoffeeHistoryBrazil />
      <CoffeeEsBrazil />
      <Footer />
    </>
  )
}

export default withTranslation()(App)
