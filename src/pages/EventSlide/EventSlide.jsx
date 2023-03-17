import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import styles from './EventSlide.module.css';
import 'swiper/swiper.css';
import 'swiper/css/navigation';

import eventSlide01 from '../../assets/images/smallbanner01_03.jpg';
import eventSlide02 from '../../assets/images/smallbanner02_03.jpg';
import eventSlide03 from '../../assets/images/smallbanner03_03.jpg';
import eventSlide04 from '../../assets/images/smallbanner04_03.jpg';
import eventSlide05 from '../../assets/images/smallbanner05_03.jpg';
import eventSlide06 from '../../assets/images/smallbanner06_03.jpg';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function EventSlide() {
  return (
    <>
      <div>
        <h2
          style={{ 'margin-left': '60px', 'margin-bottom': '12px' }}
          className={styles.list_title}
        >
          이벤트
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
          <img src={eventSlide01} alt="이미지 사진" />
        </SwiperSlide>

        <SwiperSlide style={{ 'margin-right': '4px' }}>
          <img src={eventSlide02} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide style={{ 'margin-right': '0' }}>
          <img src={eventSlide03} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={eventSlide04} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={eventSlide05} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={eventSlide06} alt="이미지 사진" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
