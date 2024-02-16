import { withTranslation } from "react-i18next";
import { Certifications } from "./components/certifications/certifications";
import { CoffeeHistoryBrazil } from "./components/coffee-brazil-history";
import { CoffeeEsBrazil } from "./components/coffee-es-history";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { OurServices } from "./components/our-qualities/our-services";
import { WhoWheAre } from "./components/who-we-are/whoweare";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <WhoWheAre />
      <OurServices />
      <Certifications />
      <CoffeeHistoryBrazil />
      <CoffeeEsBrazil />
      <Footer />
    </>
  );
};

export default withTranslation()(App);
