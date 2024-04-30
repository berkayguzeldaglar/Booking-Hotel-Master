import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function SliderComment() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="comment-item">
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem eligendi quam dolor, non nesciunt esse?</p> 
               <div className="line"></div>
               <p>Angelina Cole, Traveller</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="comment-item">
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem eligendi quam dolor, non nesciunt esse? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
               <div className="line"></div> 
               <p>John Smith, Businesman</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="comment-item">
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem eligendi quam dolor, non nesciunt esse? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, eius beatae autem laudantium iure alias?</p> 
               <div className="line"></div>
               <p>Pam Pamelar, Traveller</p>
            </div>
        </SwiperSlide>

        
        
        
      </Swiper>
    </>
  );
}
