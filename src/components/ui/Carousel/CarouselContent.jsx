import React from "react";
import { Genres } from "../Slider/Genres";
import "./Carousel.scss";
import { useNavigate } from "react-router-dom";
import { MinButton } from "../../widgets/Button/Button";
const CarouselContent = ({ item, IMAGE_SOURCE }) => {
  const navigator = useNavigate();

  return (
    <div
      className="carousel__slide"
      style={{
        backgroundImage: `url(${IMAGE_SOURCE("w500") + item.poster_path})`,
      }}
    >
      <div className="carousel__slide-content">
        <div className="carousel__slide-title">
          {item.title}{" "}
          <span className="carousel__slide-average">{item.vote_average}</span>
        </div>
        <div className="carousel__slide-genres">{Genres(item.genre_ids)}</div>
        <p className="carousel__slide-overview">{over(item.overview)}</p>
      </div>
      <MinButton
        onClick={() => navigator(`/movie/${item.id}`)}
        className="carousel__slide-btn"
      >
        Watch
      </MinButton>
      <p className="carousel__slide-views"> Popularity: {item.popularity}</p>
    </div>
  );
};

const over = (str) => {
  let fin = "";
  const arrLetters = str.split(" ");
  if (arrLetters.length <= 0) {
    fin = "We don't have overview" 
  } else if (arrLetters.length < 40) {
    fin = arrLetters.join(" ");
  } else {
    fin = arrLetters.slice(0,36).join(" ") + "...";
  }
  return fin;
};

export default CarouselContent;
