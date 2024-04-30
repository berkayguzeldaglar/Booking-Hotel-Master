import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function SliderRooms() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        breakpoints={{
            900: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="rooms-item">
                <img src="./img/room-1.jpg" alt="room1" />
                <h2>DELUXE ROOM - ONE KING BED</h2>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="rooms-item">
                <img src="./img/bg-1.jpg" alt="bg-1" />
                <h2>FAMİLY SPECİAL - THREE DOUBLE BED</h2>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="rooms-item">
                <img src="./img/room-2.jpg" alt="room2" />
                <h2>PREMİUM ROOM - TWO SİNGLE  BED</h2>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="rooms-item">
                <img src="./img/room-3.jpg" alt="room3" />
                <h2>STANDART ROOM - ONE KING BED</h2>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="rooms-item">
                <img src="./img/room-4.jpg" alt="room4" />
                <h2>SUPERİOR ROOM - TWO DOUBLE BED</h2>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="rooms-item">
                <img src="./img/room-5.jpg" alt="room5" />
                <h2>GRND SUPERİOR ROOM - TWO KING BED</h2>
            </div>
        </SwiperSlide>

        
        
      </Swiper>
    </>
  );
}
