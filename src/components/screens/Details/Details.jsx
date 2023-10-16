import React, { useState, useEffect } from "react";
import Loader from "../../widgets/Loader/Loader";
import Recomindations from "./Recomindations/Recomindations";
import Content from "./Content";
import { QueryRequest } from "./QueryRequest";
import { Actors } from "./Actors";
import { Outlet, useLocation } from "react-router-dom";
import { BACKDROP_PATH } from "../../../js/BACKDROP_PATH";
import { useBackdropPath } from "../../../hook/useBackdropPath";
import Reviews from "./Reviews";
import Aside from "./Aside";
import "./Details.scss";
import DetailContent from "./DetailContent";

const Details = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const [modal, setModal] = useState(false);
  const [src, setSrc] = useState("");
  const { data, isLoading, isError, id } = QueryRequest();
  if (isLoading) return <Loader></Loader>;
  if (isError) return <p className="container">Error: {isError.message}</p>;
  return (
    <>
      <div className="details">
        <div className="details__container">
          <div className="details__inner">
            <div
              className="details__modal-image"
              onClick={(e) => {
                if (e.target.closest(".details__modal-back")) return;
                setModal(false);
                document.body.classList.remove(`no-scroll`);
              }}
              style={!modal ? { scale: "0" } : { scale: "1" }}
            >
              <img className="details__modal-back" src={src} alt="" />
            </div>
            <div
              className="details__wrapper"
              style={{
                backgroundImage: `url(${BACKDROP_PATH(
                  data.backdrop_path,
                  "original"
                )})`,
              }}
            >
              <DetailContent
                data={data}
                setSrc={setSrc}
                setModal={setModal}
                id={id}
              ></DetailContent>
            </div>
            <div className="wrap">
              <div style={{ width: "75%" }}>
                <Actors id={id}></Actors>
                <Reviews id={id}></Reviews>
                <Recomindations id={id}></Recomindations>
              </div>
              <div style={{ width: "25%" }}>
                <Aside item={data}></Aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

// const [loader, setLoader] = useState(false);

// setTimeout(() => {
//   setLoader(true);
// }, 3000);
// if (!loader) return <Loader />;
