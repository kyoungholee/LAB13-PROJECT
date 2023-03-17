import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import styles from './LiveChannel.module.css';
import 'swiper/swiper.css';
import 'swiper/css/navigation';

import liveChannel01 from '../../assets/images/liveframe01_02.jpg';
import liveChannel02 from '../../assets/images/liveframe02_02.jpg';
import liveChannel03 from '../../assets/images/liveframe03_02.jpg';
import liveChannel04 from '../../assets/images/liveframe04_02.jpg';
import liveChannel05 from '../../assets/images/liveframe05_02.jpg';
import liveChannel06 from '../../assets/images/liveframe06_02.jpg';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function LiveChannel() {
  return (
    <>
      <div>
        <h2
          style={{ 'margin-left': '60px', 'margin-bottom': '12px' }}
          className={styles.list_title}
        >
          인기 LIVE 채널
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
          <img src={liveChannel01} alt="이미지 사진" />
        </SwiperSlide>

        <SwiperSlide style={{ 'margin-right': '4px' }}>
          <img src={liveChannel02} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide style={{ 'margin-right': '0' }}>
          <img src={liveChannel03} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={liveChannel04} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={liveChannel05} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={liveChannel06} alt="이미지 사진" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
