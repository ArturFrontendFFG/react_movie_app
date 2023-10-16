import React, { useState } from "react";
import './Details.scss'
import {useNavigate, useParams } from "react-router-dom/dist";

const Video = () => {
  const navigator = useNavigate()
  const { key } = useParams();
  const close = () => {
    navigator(-1)
  }
  return (
    <div className="trailer" onClick={() => close()}>
      <iframe
        src={`https://www.youtube.com/embed/${key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="close">
      <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default Video;
