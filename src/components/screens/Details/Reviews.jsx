import React from "react";
import "./Details.scss";
import { useQuery } from "@tanstack/react-query";
import { MovieDetails } from "../../../services/details.service";
import { useBackdropPath } from "../../../hook/useBackdropPath";
import Release from "../../ui/Slider/Release";
import {useReviews} from '../../../hook/queries/useReviews'
const Reviews = ({ id }) => {
  const { data, isLoading, error } = useReviews(id);
  if (isLoading) return;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="reviews">
      <h3 className="reviews__title title">Reviews</h3>
      <div className="review__wrapper">
        {data.length > 0
          ? data.map((item) => (
              <div className="reviews__card" key={item.id}>
                {profile(item)}
                <a className="reviews__overview" href={item.url}>
                  {content(item.content)}
                </a>
                <div className="reviews__info">
                  <span className="reviews__date">
                    <Release el={item} releaseProps="created_at"></Release>
                  </span>
                  <div className="reviews__info-name">
                    <span
                      className="reviews__author-name"
                      style={{
                        textTransform: "lowercase",
                        fontSize: "14px",
                        color: "gray",
                      }}
                    >
                      From:{" "}
                    </span>
                    <span className="reviews__author-name">
                      {item.author ? item.author : "-"}
                    </span>
                  </div>
                </div>
              </div>
            ))
          : <span style={{fontFamily: "sans-serif"}}>Film don't have reviews</span>}
      </div>
    </div>
  );
};

const profile = (item) => {
  if (item.author_details.avatar_path !== null) {
    return (
      <img
        onClick={() =>
          (window.location = `https://www.themoviedb.org/u/${item.author}`)
        }
        className="reviews__profile"
        src={useBackdropPath(
          item.author_details.avatar_path,
          "w45_and_h45_face"
        )}
        alt=""
      />
    );
  } else {
    return (
      <div
        onClick={() =>
          (window.location = `https://www.themoviedb.org/u/${item.author}`)
        }
        style={background(item)}
        className="reviews__profile reviews__profile_null"
      >
        {String(item.author).substring(0, 1)}
      </div>
    );
  }
};
const background = (item) => {
  const grade = item.author_details.rating;

  if (grade >= 0 && grade <= 2) {
    return { background: "rgb(212,2,66)" };
  } else if (grade >= 3 && grade <= 5) {
    return { background: "rgb(210,144,1)" };
  } else if (grade >= 6 && grade <= 8) {
    return { background: "rgb(234,20,140)" };
  } else if (grade >= 9 && grade <= 10) {
    return { background: "rgb(255, 5, 101)" };
  }
};
const content = (text) => {
  return text.substring(0, 46) + "...";
};
export default Reviews;
