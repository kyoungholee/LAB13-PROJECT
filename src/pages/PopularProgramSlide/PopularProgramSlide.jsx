import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Link } from 'react-router-dom';
import 'swiper/swiper.css';
import 'swiper/css/navigation';
import './PopularProgramSlide.css';
import useDataFilter from '../../hooks/useDataFilter';

SwiperCore.use([Navigation, Pagination, A11y]);

export default function PopularProgramSlide() {
  const baseUrl = '../src/assets/images/'; // 경로 설정

  const numberUrl = '../src/assets/images/numbers/';

  const FilterData = useDataFilter('slide');
  const test = 1;

  return (
    <div className="swiper-title">
      <h2
        style={{ 'margin-left': '60px', 'margin-bottom': '8px' }}
        className="list_title"
      >
        실시간 인기 프로그램
      </h2>

      <Swiper
        style={{
          'margin-bottom': '36px',
          'margin-left': '44px',
          'padding-top': '10px',
        }}
        spaceBetween={10}
        slidesPerView={7.4}
        slidesPerGroup={6}
        navigation
      >
        {FilterData?.map(contents => (
          <SwiperSlide key={contents.id}>
            <div>
              <Link to={`${contents.src.slide}/${contents.id}`}>
                <img
                  src={`${baseUrl}${contents.src.slide}.jpg`}
                  alt={`${contents.name}`}
                />
                <p className="text-title">
                  <img
                    style={{ 'margin-top': '-24px' }}
                    src={`${numberUrl}${test}.png`}
                    alt="숫자 사진"
                  />
                  <span className="contentsName">{contents.name}</span>
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
