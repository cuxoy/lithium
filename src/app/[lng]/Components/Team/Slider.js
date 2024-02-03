"use client";
import React, { useRef, useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./team.scss";

// import required modules
import { Navigation } from "swiper/modules";

export default function App({ lng }) {
  const { t } = useTranslation(lng);

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="team__item">
            <div className="team__item_photo">
              <img src="/images/team_photo_1.jpg" alt="team member photo" />
            </div>
            <div className="team__item_name">{t("team__item_1_name")}</div>
            <div className="team__item_position">
              {t("team__item_1_position")}
            </div>
            <div className="team__item_text">{t("team__item_1_text")}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team__item">
            <div className="team__item_photo">
              <img src="/images/team_photo_2.jpg" alt="team member photo" />
            </div>
            <div className="team__item_name">{t("team__item_2_name")}</div>
            <div className="team__item_position">
              {t("team__item_2_position")}
            </div>
            <div className="team__item_text">{t("team__item_2_text")}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team__item">
            <div className="team__item_photo">
              <img src="/images/team_photo_3.jpg" alt="team member photo" />
            </div>
            <div className="team__item_name">{t("team__item_3_name")}</div>
            <div className="team__item_position">
              {t("team__item_3_position")}
            </div>
            <div className="team__item_text">{t("team__item_3_text")}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team__item">
            <div className="team__item_photo">
              <img src="/images/team_photo_4.jpg" alt="team member photo" />
            </div>
            <div className="team__item_name">{t("team__item_4_name")}</div>
            <div className="team__item_position">
              {t("team__item_4_position")}
            </div>
            <div className="team__item_text">{t("team__item_4_text")}</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
