import { useTranslation } from "react-i18next";
import { FooterContent } from "../explanation/footer-content/footer-content";
import { FooterTitle } from "../explanation/footer-title/footer-title";
import { ExplanationText } from "../explanation/text";
import { ExplanationTitle } from "../explanation/title/title";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contato" className="bg-[#F9FAFB]">
      <main className="container">
        <div className="border border-[#1F78DE] rounded-xl md:rounded-tl-[60px] md:rounded-br-[60px] bg-white p-4 md:p-10 lg:p-14 flex flex-col lg:flex-row justify-between gap-6 mb-20">
          <div className="flex flex-col w-full lg:w-2/5">
            <ExplanationTitle
              title={t("footer.location.title")}
              className="text-[#1C1D22] after:hidden mb-4 "
            />
            <ExplanationText
              text={t("footer.location.text")}
              className="max-w-lg mb-6 lg:mb-10"
            />
            <a
              className="flex py-2 px-6 w-fit bg-[#1f78de] gap-1 text-white rounded-full text-base lg:text-lg items-center"
              href="mailto:bruna@grvcoffee.com"
            >
              {t("footer.location.button")}
              <img src="/icons/phone.svg" className="phone-icon" />
            </a>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.6270975581197!2d-40.29794932505464!3d-20.315696650434298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817ce928de7f9%3A0xe32a0a8e9a7a0e6!2zRWRpZsOtY2lvIFBhbMOhY2lvIGRvIENhZsOp!5e0!3m2!1spt-BR!2sbr!4v1701534682090!5m2!1spt-BR!2sbr"
            className="w-full lg:ml-4 lg:w-3/5"
            width="400"
            height="300"
            style={{
              border: 0,
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col lg:flex-row">
          <img
            src="assets/logoBR.png"
            alt="logo GRV"
            className="w-[200px] h-[120px] flex mb-4 md:mb-0"
          />
          <div className="flex flex-col justify-between w-full mt-0 md:flex-row">
            <div className="w-fit lg:ml-10">
              <FooterTitle title={t("footer.localization")} />
              <FooterContent>
                <p>
                  {t("footer.localization-info-one")} <br />{" "}
                  {t("footer.localization-info-two")}
                </p>
              </FooterContent>
            </div>

            <div className="w-fit">
              <FooterTitle title={t("footer.navigation")} />
              <ul className="flex flex-col gap-3">
                <FooterContent className="transition-all duration-200 ease-linear hover:translate-x-1">
                  <a href="#inicio">{t("header.home")}</a>
                </FooterContent>
                <FooterContent className="transition-all duration-200 ease-linear hover:translate-x-1">
                  <a href="#historia">{t("header.our-history")}</a>
                </FooterContent>
                <FooterContent className="transition-all duration-200 ease-linear hover:translate-x-1">
                  <a href="#servicos">{t("header.our-services")}</a>
                </FooterContent>
                <FooterContent className="transition-all duration-200 ease-linear hover:translate-x-1">
                  <a href="#historiacafebrasil">{t("header.coffee-in-br")}</a>
                </FooterContent>
                <FooterContent className="transition-all duration-200 ease-linear hover:translate-x-1">
                  <a href="historiacafees">{t("header.coffee-in-es")}</a>
                </FooterContent>
              </ul>
            </div>

            <div className="w-fit">
              <FooterTitle title="Coffee Traders" />
              <ul className="flex flex-col gap-3">
                <FooterContent>
                  <a href="mailto:bruna@grvcoffee.com">bruna@grvcoffee.com</a>
                </FooterContent>
                <FooterContent>
                  <a href="mailto:grives@grvcoffee.com">grives@grvcoffee.com</a>
                </FooterContent>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </footer>
  );
};
