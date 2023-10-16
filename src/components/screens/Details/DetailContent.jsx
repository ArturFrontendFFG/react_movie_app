import React from "react";
import { Outlet } from "react-router-dom";
import Content from "./Content";
import { useBackdropPath } from "../../../hook/useBackdropPath";

const DetailContent = ({data, setSrc, setModal, id}) => {
  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        gap: "7rem",
        alignItems: "center",
      }}
    >
      <img
        className="details__poster"
        onClick={(e) => {
          setSrc(e.target.src);
          setModal(true);
          document.body.classList.add(`no-scroll`);
        }}
        src={useBackdropPath(data.poster_path)}
        alt=""
      />
      <Outlet />
      <Content item={data} id={id}></Content>
    </div>
  );
};

export default DetailContent;
