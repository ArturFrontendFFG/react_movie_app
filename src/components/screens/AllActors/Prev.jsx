import { useQuery } from "@tanstack/react-query";
import React from "react";
import { MovieDetails } from "../../../services/details.service";
import "./AllActors.scss";
import { useBackdropPath } from "../../../hook/useBackdropPath";
import { useNavigate } from "react-router-dom";
const Prev = ({ id }) => {
  const navigator = useNavigate();
  const { data, isLoading, error } = useQuery([`prev`], () =>
    MovieDetails.detail(id)
  );
  if(isLoading) return
  if(error) return <p>Error</p>
  const back = () => {
    navigator(-1);
  }
  return (
    <div className="prev">
      <img onClick={() => back()} src={useBackdropPath(data.poster_path, "w58_and_h87_face")} alt="" />
      <div className="prev__content" onClick={() => back()}>
        <h2 className="title">
          {data.title}{" "}
          <span style={{ color: "grey", fontWeight: "100" }}>
            ({String(data.release_date).split("-")[0] || "-"})
          </span>
        </h2>
        <p className="prev__subtitle">← Back to the film</p>
      </div>
    </div>
  );
};

export default Prev;
