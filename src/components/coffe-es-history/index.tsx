import { ExplanationTitle } from "../explanation/title/title"
import { HistoryImage } from "../history-image/history-image"

export const CoffeeEsBrazil = () => {
  return (
    <section
      id="historiacafees"
      className="max-w-[1600px] p-4 md:p-10 lg:py-5 lg:px-20 mb-12"
    >
      <ExplanationTitle
        className="before:hidden lg:before:block"
        title="História do café no Espírito Santo"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center">
        <HistoryImage
          content="Após a crise cafeeira, o Espírito Santo buscou alternativas
              econômicas, mas o café ainda é a principal cultura do estado,
              especialmente o café tipo Conilon. O Espírito Santo é atualmente
              um dos principais estados produtores de café no Brasil."
          title="Atualmente"
          nameImage="atualmente"
          className="bg-atualmente"
        />
        <HistoryImage
          content="O Espírito Santo experimentou um grande boom cafeeiro no final do
              século XIX e início do século XX. No entanto, também foi afetado
              pela crise cafeeira, levando a um declínio na produção e à
              necessidade de diversificação econômica."
          title="Boom e crise"
          nameImage="boom"
          className="bg-boom"
        />
        <HistoryImage
          content="A história do café no estado do Espírito Santo está intimamente
              ligada ao desenvolvimento econômico da região. A cultura do café
              começou a se expandir no final do século XIX, adaptando-se bem às
              condições climáticas e geográficas favoráveis do estado."
          title="Sucesso"
          nameImage="sucesso"
          className="bg-sucesso"
        />
      </div>
    </section>
  )
}
