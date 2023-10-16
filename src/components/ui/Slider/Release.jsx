import React from "react";
import './Slider.scss'
import { DateDay, DateMonth, DateYear } from "./Date";
const Release = ({el, releaseProps}) => {
  return (
    <div className="slider__slide-release">
      <span className="slider__slide-date">{DateYear(el[releaseProps])}</span>
      <div className="slider__slide-line"></div>
      <span className="slider__slide-date">{DateMonth(el[releaseProps])}</span>
      <div className="slider__slide-line"></div>
      <span className="slider__slide-date">{DateDay(el[releaseProps])}</span>
    </div>
  );
};

export default Release;
