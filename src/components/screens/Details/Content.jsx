import React from "react";
import { date, genres, release, runtime, videoRedirect } from "./functions";
import { useNavigate } from "react-router-dom";
import CustomLink from "../../widgets/Link";
import { useVideo } from "../../../hook/queries/useVideo";
import { IconButton } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { IconFavoriteButton } from "../../widgets/Button/Button";
const Content = ({ item, id }) => {
  const { data } = useVideo(id);
  const navigator = useNavigate();
  return (
    <div className="details__content">
      <CustomLink className="details__title" to={item.homepage} target="_blank">
        {item.title} <span>({date(item.release_date)})</span>
      </CustomLink>

      <div className="details__informations">
        <p className="details__release">{release(item.release_date)}</p>
        <p className="details__genres">{genres(item.genres)}</p>
        <p className="details__runtime">{runtime(item.runtime)}h</p>
      </div>
      <div className="details__line">
        <IconFavoriteButton movieid={item.id}>
          <Favorite></Favorite>
        </IconFavoriteButton>

        <p
          className="details__trailer"
          onClick={() => {
            navigator(
              videoRedirect(data.results.length > 0 ? data.results : "")
            );
          }}
        >
          Воспроизвести трейлер
        </p>
      </div>
      <p className="details__tagline">{item.tagline}</p>
      <p className="details__review">
        <span
          style={{
            fontSize: "1.6rem",
          }}
        >
          Review:
        </span>{" "}
        <br />
        {item.overview ||
          `We don't have a overview for ${item.title || item.name}`}
      </p>
    </div>
  );
};

export default Content;
