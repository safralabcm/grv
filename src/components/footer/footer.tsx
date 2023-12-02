import { FooterContent } from "../explanation/footer-content/footer-content"
import { FooterTitle } from "../explanation/footer-title/footer-title"

export const Footer = () => {
  return (
    <footer id="contato" className="container bg-[#1356a3]">
      <div className="flex flex-col lg:flex-row">
        <img
          src="assets/logoBR.png"
          alt="logo GRV"
          className="w-[200px] h-[120px] flex mb-4 md:mb-0"
        />
        <div className="flex justify-between flex-col md:flex-row w-full mt-0">
          <div className="w-fit lg:ml-10">
            <FooterTitle title="Localização" />
            <FooterContent
              content={
                <p>
                  Av. Nossa Senhora dos Navegantes, 675 <br /> Palácio do Café -
                  Enseada do Suá Vitória, Espírito Santo
                </p>
              }
            />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.6270975581197!2d-40.29794932505464!3d-20.315696650434298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817ce928de7f9%3A0xe32a0a8e9a7a0e6!2zRWRpZsOtY2lvIFBhbMOhY2lvIGRvIENhZsOp!5e0!3m2!1spt-BR!2sbr!4v1701534682090!5m2!1spt-BR!2sbr"
              className="mt-4 w-full"
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

          <div className="w-fit">
            <FooterTitle title="Navegação" />
            <ul className="flex flex-col gap-3">
              <FooterContent content="Início" link="#inicio" />
              <FooterContent content="Nossa História" link="#historia" />
              <FooterContent content="Nossos serviços" link="#servicos" />
              <FooterContent
                content="História do café no BR"
                link="#historiacafebrasil"
              />
              <FooterContent
                content="História do café no ES"
                link="#historiacafees"
              />
            </ul>
          </div>

          <div className="w-fit">
            <FooterTitle title="Coffe Traders" />
            <ul className="flex flex-col gap-3">
              <FooterContent
                content="bruna@grvcoffee.com"
                link="mailto:bruna@grvcoffee.com"
              />
              <FooterContent
                content="grives@grvcoffee.com"
                link="mailto:grives@grvcoffee.com"
              />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
