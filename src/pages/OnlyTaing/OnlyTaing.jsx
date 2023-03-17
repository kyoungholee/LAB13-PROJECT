import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import style from './OnlyTaing.module.css';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
// import fireStore from '../../utils/firebase/firebase';

// eslint-disable-next-line import/no-duplicates
import onlyTaing01 from '../../assets/images/allview_04.jpg';
import onlyTaing02 from '../../assets/images/foodcronicle_04.jpg';
import onlyTaing03 from '../../assets/images/lovecatcher_04.jpg';
import onlyTaing04 from '../../assets/images/strangeperson_04.jpg';
import onlyTaing05 from '../../assets/images/sulkkundosi_04.jpg';
import onlyTaing06 from '../../assets/images/transferrelationship2_04.jpg';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function OnlyTaing() {
  return (
    <>
      <div>
        <h2
          style={{ 'margin-left': '60px', 'margin-bottom': '12px' }}
          className={style.list_title}
        >
          티빙에서 꼭 봐야하는 콘텐츠
        </h2>
      </div>
      <Swiper
        style={{ 'margin-bottom': '36px' }}
        spaceBetween={10}
        slidesPerView={6.4}
        slidesPerGroup={6}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide style={{ 'margin-left': '40px' }}>
          <img src={onlyTaing01} alt="이미지 사진" />
          <div>
            <p className={style.content_name}>아무것도 하고 싶지 않아</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={onlyTaing02} alt="이미지 사진" />
          <div>
            <p className={style.content_name}>알쓸인잡</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={onlyTaing03} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={onlyTaing04} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={onlyTaing05} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={onlyTaing06} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={onlyTaing01} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={onlyTaing02} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={onlyTaing03} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={onlyTaing04} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={onlyTaing05} alt="이미지 사진" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={onlyTaing06} alt="이미지 사진" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
