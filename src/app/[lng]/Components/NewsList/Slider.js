"use client";
import React, { useRef, useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./newsList.scss";

// import required modules
import { Navigation } from "swiper/modules";

export default function App({ lng }) {
  const { t } = useTranslation(lng);

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="newsList__item">
            <div className="newsList__item_date">
              {t("newsList__item_1_date")}
            </div>
            <div className="newsList__item_photo">
              <img src="/images/news_photo_1.png" alt="news image 1" />
            </div>
            <div className="newsList__item_content">
              <div className="newsList__item_title">
                <Link href={`/${lng}/news/1`}>
                  {t("newsList__item_1_title")}
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="newsList__item">
            <div className="newsList__item_date">
              {t("newsList__item_2_date")}
            </div>
            <div className="newsList__item_photo">
              <img src="/images/news_photo_1.png" alt="news image 1" />
            </div>
            <div className="newsList__item_content">
              <div className="newsList__item_title">
                <Link href={`/${lng}/news/2`}>
                  {t("newsList__item_2_title")}
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="newsList__item">
            <div className="newsList__item_date">
              {t("newsList__item_3_date")}
            </div>
            <div className="newsList__item_photo">
              <img src="/images/news_photo_1.png" alt="news image 1" />
            </div>
            <div className="newsList__item_content">
              <div className="newsList__item_title">
                <Link href={`/${lng}/news/3`}>
                  {t("newsList__item_3_title")}
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
