import { ExplanationTitle } from "../explanation/title/title"
import { HistoryImage } from "../history-image/history-image"

export const CoffeeHistoryBrazil = () => {
  return (
    <section
      id="historiacafebrasil"
      className="max-w-[1600px] p-4 md:p-10 lg:py-5 lg:px-20"
    >
      <ExplanationTitle
        className="before:hidden lg:before:block"
        title="História do café no Brasil"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center">
        <HistoryImage
          content="Atualmente, o Brasil é o maior produtor e exportador de café do
              mundo, conhecido por sua qualidade e variedade. A cafeicultura
              continua desempenhando um papel fundamental na economia brasileira
              e é parte importante da identidade cultural do país."
          title="Liderança Mundial"
          nameImage="lideranca"
          // className="bg-lideranca"
        />
        <HistoryImage
          content="A produção de café no Brasil passou por várias fases ao longo dos
              anos, impulsionando a economia brasileira no início. No entanto, a
              dependência excessiva do café como principal produto de exportação
              trouxe desafios, especialmente durante a crise do café no século
              XX. Isso levou o Brasil a diversificar sua economia e explorar
              outros setores."
          title="Crescimento"
          nameImage="crescimento"
          className="bg-crescimento"
        />
        <HistoryImage
          content="A história do café no Brasil começou no século XVIII e está ligada
              à cultura e à economia do país. Acredita-se que o café tenha sido
              introduzido em 1727, quando um sargento contrabandeou sementes de
              café da Guiana Francesa. Inicialmente, seu cultivo era restrito a
              algumas áreas, mas logo se espalhou, tornando-se a principal
              cultura e fonte de riqueza do país."
          title="Jornada"
          nameImage="jornada"
          className="bg-jornada"
        />
      </div>
    </section>
  )
}
