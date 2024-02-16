import { useTranslation } from "react-i18next";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ExplanationTitle } from "../explanation/title/title";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ButtonSwiper } from "../button-swiper";
import { CardHistory } from "../card-history";

export const CoffeeHistoryBrazil = () => {
  const { t } = useTranslation();

  const coffeeEsHistoryData = [
    {
      id: "1",
      content: t("brazil-history.leadership.text"),
      title: t("brazil-history.leadership.title"),
      preview: "/assets/lideranca.jpg",
    },
    {
      id: "2",
      content: t("brazil-history.journey.text"),
      title: t("brazil-history.journey.title"),
      preview: "/assets/jornada.jpg",
    },
    {
      id: "3",
      content: t("brazil-history.growth.text"),
      title: t("brazil-history.growth.title"),
      preview: "/assets/crescimento.jpg",
    },
    {
      id: "4",
      content: t("brazil-history.brazil-world.text"),
      title: t("brazil-history.brazil-world.title"),
      preview: "/assets/brazil-world.jpg",
    },
  ];

  return (
    <section id="historiacafebrasil" className="container ">
      <ExplanationTitle
        className="mt-4 mb-4 text-[#1C1D22]"
        title={t("brazil-history.title")}
      />
      <div className="relative w-full shadow-[0_0px_20px_10px] shadow-black/10 rounded-2xl overflow-hidden">
        <ButtonSwiper
          nextButtonClassname="next-button-es"
          prevButtonClassname="prev-button-es"
        />
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
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
