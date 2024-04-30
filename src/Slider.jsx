import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="bg-slider">
                <img src="./img/bg-1.jpg" alt="bg-1" />
                <div>
                <h2 className='scale-up-center'>WELCOME TO</h2>
                <h1 className='scale-up-center'>HOTEL MASTER</h1>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="bg-slider">
                <img src="./img/bg-3.jpg" alt="bg-3" />
                <div>
                <h2 className='scale-up-center'>ENJOY</h2>
                <h1 className='scale-up-center'>SPA MASTER</h1>
                <p className='scale-up-center'>The Finest Spa on Earth</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="bg-slider">
                <img src="./img/bg-2.jpg" alt="bg-2" />
                <div>
                <h3 className='scale-up-center'>Perfect Place For Dining</h3>
                <p className='scale-up-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis at rem tenetur quis, itaque alias accusantium commodi quo expedita magnam animi soluta illo cumque fugiat, aut repellat ea sequi aperiam!</p>
                
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
