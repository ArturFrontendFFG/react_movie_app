import FavoriteButton, {
  ButtonSecond,
  ButtonUn,
} from "../../widgets/Button/Button";
import { useNavigate } from "react-router-dom";
import { FormatTitle } from "./FormatTitle";
import { Genres } from "./Genres";
import Release from "./Release";
import "./Slider.scss";

const Info = ({ el }) => {
  const navigator = useNavigate();
  return (
    <div className="slider__slide-info">
      <Release el={el} releaseProps="release_date"></Release>
      <div className="slider__slide-title-content">
        <div
          dangerouslySetInnerHTML={{
            __html: FormatTitle(
              el.title,
              "slider__slide-title",
              "slider__slide-subtitle"
            ),
          }}
        ></div>
        <span className="slider__slide-average text">{el.vote_average}</span>
      </div>
      <p className="slider__slide-overview">{el.overview}</p>
      <p className="slider__slide-genres">
        Genres :{" "}
        <span className="slider__slide-subgenres">{Genres(el.genre_ids)}</span>
      </p>
      <div className="slider__slide-buttons">
        <ButtonSecond
          style={{ marginRight: "10px" }}
          onClick={() => navigator(`/movie/${el.id}`)}
          type="button"
          className="slider__slide-watch"
        >
          Watch now
        </ButtonSecond>

        <FavoriteButton movieid={el.id} style={{borderRadius: '15px', height: '100%'}} innerText="Add to favorite">
          <ButtonUn type="button" className="slider__slide-favorite"></ButtonUn>
        </FavoriteButton>
      </div>
    </div>
  );
};

export default Info;
