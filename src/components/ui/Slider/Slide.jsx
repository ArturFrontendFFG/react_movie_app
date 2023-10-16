import React from "react";
import Info from "./Info";
import IMAGE_SOURCE from '../../../js/IMAGE_SOURCE'
const Slide = ({ el}) => {
  return (
    <div
      className="slider__slide container"
      style={{
        backgroundImage: `url(${IMAGE_SOURCE("original") + el.backdrop_path})`,
      }}
    >
      <div className="slider__slide-content">
        <Info el={el}></Info>
        <div className="slider__slide-poster">
          <img
            className="slider__slide-posterImage"
            src={IMAGE_SOURCE("w500/") + el.poster_path}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
