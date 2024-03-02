import { useTranslation } from "react-i18next";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardHistory } from "../card-history";
import { ExplanationTitle } from "../explanation/title/title";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const CoffeeEsBrazil = () => {
  const { t } = useTranslation();

  const coffeeEsHistoryData = [
    {
      id: "1",
      content: t("es-history.emergence.text"),
      title: t("es-history.emergence.title"),
      preview: "/assets/surgimento.png",
    },
    {
      id: "2",
      content: t("es-history.boom-downturn.text"),
      title: t("es-history.boom-downturn.title"),
      preview: "/assets/boom.png",
    },
    {
      id: "3",
      content: t("es-history.success.text"),
      title: t("es-history.success.title"),
      preview: "/assets/sucesso.png",
    },
    {
      id: "4",
      content: t("es-history.presently.text"),
      title: t("es-history.presently.title"),
      preview: "/assets/atualmente.png",
    },
  ];

  return (
    <section id="historiacafees" className="container !pt-0">
      <ExplanationTitle
        className="mt-4 mb-4 text-[#1C1D22]"
        title={t("es-history.title")}
      />
      <div className="w-full shadow-[0_0px_20px_10px] shadow-black/10 rounded-2xl overflow-hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".next-button-es",
            prevEl: ".prev-button-es",
            disabledClass: "swiper-button-disabled",
          }}
        >
          {coffeeEsHistoryData.map((item) => (
            <SwiperSlide key={item.id}>
              <CardHistory
                content={item.content}
                title={item.title}
                preview={item.preview}
                nextButtonClassname="next-button-es"
                prevButtonClassname="prev-button-es"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
