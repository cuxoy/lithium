"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./slider.scss";

import { Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={2.99}
        spaceBetween={120}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 1,
        }}
        loop
        centeredSlides
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/slide_1.png" alt="slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide_2.png" alt="slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide_3.png" alt="slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide_1.png" alt="slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide_2.png" alt="slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide_3.png" alt="slide 3" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
