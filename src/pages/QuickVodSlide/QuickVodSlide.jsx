import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/swiper.css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function QuickVodSlide() {
  return (
    <>
      <div>
        <h2 style={{ 'margin-left': '60px', 'margin-bottom': '12px' }}>
          Quick VOD
        </h2>
      </div>

      <Swiper
        style={{ 'margin-bottom': '36px' }}
        spaceBetween={10}
        slidesPerView={5.2}
        slidesPerGroup={5}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide style={{ 'margin-left': '40px' }}>
          {/* <img src={"../"} alt="이미지 사진" /> */}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
