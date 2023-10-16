import React from "react";
import "../Details.scss";
import IMAGE_SOURCE from "../../../../js/IMAGE_SOURCE";

const Slides = ({ item }) => {
  const image = () => {
    if (item.poster_path === null) {
      return `/src/assets/images/notfound.png`;
    } else {
      return `${IMAGE_SOURCE("w500") + item.poster_path}`;
    }
  };
  return (
    <div className="details__carousel-slide">
      <div className="details__carousel-backdrop">
        <a className="details__carousel-link" href={`/movie/${item.id}`}>
          <img className="details__carousel-background" src={image()} alt="poster" />
          <div className="details__carousel-content">
              <p className="details__carousel-date">{date(item.release_date)}</p>
              <p className="details__carousel-percent">{percent(item.vote_average)}</p>
          </div>
        </a>
      </div>
      <p className="details__carousel-title">{item.title}</p>
    </div>
  );
};
const date = (w) => {
  return w.split("-").join("/")
}
const percent = (per, max = 10) => {
  const result = per / max * 100
  return Math.floor(result) + "%"
}

export default Slides;
