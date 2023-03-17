import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import style from './PopularProgramSlide.module.css';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
// import fireStore from '../../utils/firebase/firebase';

// eslint-disable-next-line import/no-duplicates
import contentsMovie01 from '../../assets/images/amugeosdo_02.jpg';
import contentsMovie02 from '../../assets/images/alsseurinjap_02.jpg';
import contentsMovie03 from '../../assets/images/blackdog_02.jpg';
import contentsMovie04 from '../../assets/images/bomulchajgi_02.jpg';
import contentsMovie05 from '../../assets/images/canadacheckin_02.jpg';
import contentsMovie06 from '../../assets/images/hwanhon_02.jpg';
import contentsMovie07 from '../../assets/images/killimanjaro_02.jpg';
import contentsMovie08 from '../../assets/images/maknaeadeul_02.jpg';
import contentsMovie09 from '../../assets/images/nollauntoyoil_02.jpg';
import contentsMovie10 from '../../assets/images/showmethemoney_02.jpg';
import contentsMovie11 from '../../assets/images/sulkkundosi_02.jpg';
import contentsMovie12 from '../../assets/images/teolsaking_02.jpg';
import contentsMovie13 from '../../assets/images/urideurui_02.jpg';
import QuickVodSlide from '../QuickVodSlide/QuickVodSlide';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function PopularProgramSlide() {
  return (
    <>
      <div>
        <h2
          style={{ 'margin-left': '60px', 'margin-bottom': '12px' }}
          className={style.list_title}
        >
          실기간 인기 프로그램
        </h2>
      </div>
      <Swiper
        style={{ 'margin-bottom': '36px' }}
        spaceBetween={10}
        slidesPerView={7.2}
        slidesPerGroup={6}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide style={{ 'margin-left': '40px' }}>
          <div>
            <img src={contentsMovie01} alt="이미지 사진" />
            <p className={style.contentTitle}>
              <img
                className={style.contentNumber}
                src="/src/assets/images/numbers/one.png"
                alt="숫자 사진"
              />
              <span className={style.content_name}>
                아무것도 하고 싶지 않아
              </span>
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={contentsMovie03} alt="이미지 사진" />
            <p className={style.contentTitle}>
              <img
                className={style.contentNumber}
                src="/src/assets/images/numbers/two.png"
                alt="숫자 사진"
              />
              <span className={style.content_name}>
                아무것도 하고 싶지 않아
              </span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={contentsMovie03} alt="이미지 사진" />
            <p className={style.contentTitle}>
              <img
                className={style.contentNumber}
                src="/src/assets/images/numbers/three.png"
                alt="숫자 사진"
              />
              <span className={style.content_name}>
                아무것도 하고 싶지 않아
              </span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={contentsMovie04} alt="이미지 사진" />
            <p className={style.content_name}>아무것도 하고 싶지 않아</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={contentsMovie03} alt="이미지 사진" />
            <p className={style.content_name}>아무것도 하고 싶지 않아</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={contentsMovie03} alt="이미지 사진" />
            <p className={style.content_name}>아무것도 하고 싶지 않아</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={contentsMovie03} alt="이미지 사진" />
            <p className={style.content_name}>아무것도 하고 싶지 않아</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={contentsMovie03} alt="이미지 사진" />
            <p className={style.content_name}>아무것도 하고 싶지 않아</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={contentsMovie03} alt="이미지 사진" />
            <p className={style.content_name}>아무것도 하고 싶지 않아</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={contentsMovie03} alt="이미지 사진" />
            <p className={style.content_name}>아무것도 하고 싶지 않아</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={contentsMovie03} alt="이미지 사진" />
            <p className={style.content_name}>아무것도 하고 싶지 않아</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={contentsMovie03} alt="이미지 사진" />
            <p className={style.content_name}>아무것도 하고 싶지 않아</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={contentsMovie03} alt="이미지 사진" />
            <p className={style.content_name}>아무것도 하고 싶지 않아</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={contentsMovie03} alt="이미지 사진" />
            <p className={style.content_name}>아무것도 하고 싶지 않아</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={contentsMovie03} alt="이미지 사진" />
            <p className={style.content_name}>아무것도 하고 싶지 않아</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={contentsMovie03} alt="이미지 사진" />
            <p className={style.content_name}>아무것도 하고 싶지 않아</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={contentsMovie04} alt="이미지 사진" />
            <p className={style.content_name}>아무것도 하고 싶지 않아</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
