import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousal = () => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>< img src='https://img.lazcdn.com/us/domino/e6c0847e-9534-41f3-ba28-9a29753ea492_PK-1976-688.jpg_2200x2200q80.jpg'/></SwiperSlide>
        <SwiperSlide>< img src='https://img.lazcdn.com/us/domino/7309730c-4b4e-4ee6-b3d4-cd2eb00218a7_PK-1976-688.jpg_2200x2200q80.jpg'/></SwiperSlide>
        <SwiperSlide>< img src='https://img.lazcdn.com/us/domino/8569d7fd-2f11-4f1c-9b86-bceda43d14cb_PK-1976-688.jpg_2200x2200q80.jpg'/></SwiperSlide>
        <SwiperSlide>< img src='https://img.lazcdn.com/us/domino/b9de7be7-173a-4c6b-8765-36672bf24677_PK-1976-688.jpg_2200x2200q80.jpg'/></SwiperSlide>
        <SwiperSlide>< img src='https://img.lazcdn.com/us/domino/292abe7a-72a4-4043-b0ed-c048c275bcd2_PK-1976-688.jpg_2200x2200q80.jpg'/></SwiperSlide>
        <SwiperSlide>< img src='https://img.lazcdn.com/us/domino/4a5e2cea-79f9-40ad-af18-5c5e495e19ef_PK-1976-688.jpg_2200x2200q80.jpg'/></SwiperSlide>
        <SwiperSlide>< img src='https://img.lazcdn.com/us/domino/4a5e2cea-79f9-40ad-af18-5c5e495e19ef_PK-1976-688.jpg_2200x2200q80.jpg'/></SwiperSlide>
        <SwiperSlide>< img src='https://img.lazcdn.com/us/domino/d0ad0a62-278d-422b-ba74-2efaadefc96f_PK-1976-688.jpg_2200x2200q80.jpg'/></SwiperSlide>
        <SwiperSlide>< img src='https://img.lazcdn.com/us/domino/98d1a99a-82f6-4ee5-8b64-776416e088cd_PK-1976-688.jpg_2200x2200q80.jpg'/></SwiperSlide>
      </Swiper>
  )
}

export default Carousal