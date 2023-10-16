import React, { useEffect, useState } from "react";
import "./Slider.scss";
import { Pagination, Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Slide from "./Slide";
import { useSlider } from "../../../hook/queries/useSlider";
import {CircularProgress} from '@mui/material'
const Slider = () => {
  const { data, isLoading, error } = useSlider();
  if (isLoading)
    return (
      <div className="flex">
        <CircularProgress></CircularProgress>
      </div>
    );
  if (error) return <p className="container">Error {error.message}</p>;
  const newData = Array.from(data.results)
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, 5);
  return (
    <div className="slider">
      <Swiper
        modules={[Pagination, Autoplay, Keyboard]}
        spaceBetween={0}
        slidesPerView={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, dynamicBullets: false }}
      >
        {newData.map((el) => (
          <SwiperSlide key={el.id}>
            <Slide el={el}></Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
