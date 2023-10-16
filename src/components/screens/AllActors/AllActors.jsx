import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import { MovieDetails } from "../../../services/details.service";
import "./AllActors.scss";
import { BACKDROP_PATH } from "../../../js/BACKDROP_PATH";
import Prev from "./Prev";
const AllActors = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { id } = useParams();
  const { data, isLoading, error } = useQuery(["all_people"], () =>
    MovieDetails.actors(id)
  );

  if (isLoading) return;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div>
        <Prev id={id}></Prev>
      </div>
      <div className="wrapper container">
        <div className="wrapper__cast">
          <h3 className="wrapper__cast-title title">
            The cast of the series{" "}
            <span style={{ color: "grey" }}>({data.cast.length})</span>
          </h3>
          {data.cast.map((item) => (
            <a
              href={`/people/${item.id}-${String(item.original_name)
                .split(" ")
                .join("-")}`}
              className="card"
              key={item.id}
            >
              <div className="card__content">
                <img
                  className="card__image"
                  src={BACKDROP_PATH(item.profile_path)}
                  alt=""
                />
                <div className="card__info">
                  <strong className="card__name">{item.name}</strong>

                  <p className="card__character">{item.character}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="wrapper__cast">
          <h3 className="wrapper__cast-title title">
            Film crew{" "}
            <span style={{ color: "grey" }}>({data.crew.length})</span>
          </h3>
          {data.crew.map((item, idx) => (
            <a href={`/people/${item.id}`} className="card" key={idx}>
              <div className="card__content">
                <img
                  className="card__image"
                  src={BACKDROP_PATH(item.profile_path)}
                  alt=""
                />
                <div className="card__info">
                  <strong className="card__name">{item.name}</strong>

                  <p className="card__character">{item.job}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
export default AllActors