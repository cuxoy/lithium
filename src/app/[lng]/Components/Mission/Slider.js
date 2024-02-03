"use client";
import { useTranslation } from "@/app/i18n/client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./mission.scss";

// import required modules
import { Scrollbar } from "swiper/modules";

export default function App({ lng }) {
  const { t } = useTranslation(lng);

  return (
    <>
      <Swiper
        spaceBetween={20}
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mission__item">
            <div className="mission__item_title">
              {t("mission__item1_title")}
            </div>
            <div className="mission__item_text">
              {t("mission__item1_text_1")}
            </div>
            <div className="mission__item_text">
              {t("mission__item1_text_2")}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="mission__item">
            <div className="mission__item_title">
              {t("mission__item2_title")}
            </div>
            <div className="mission__item_text">
              {t("mission__item2_text_1")}
            </div>
            <div className="mission__item_text">
              {t("mission__item2_text_2")}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mission__item">
            <div className="mission__item_title">
              {t("mission__item3_title")}
            </div>
            <div className="mission__item_text">
              {t("mission__item3_text_1")}
            </div>
            <div className="mission__item_text">
              {t("mission__item3_text_2")}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mission__item">
            <div className="mission__item_title">
              {t("mission__item4_title")}
            </div>
            <div
              className="mission__item_text"
              dangerouslySetInnerHTML={{ __html: t("mission__item4_text_1") }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
