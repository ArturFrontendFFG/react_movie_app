import React, { useEffect, useRef, useState } from "react";
import { useBackdropPath } from "../../../hook/useBackdropPath";

const Popup = (props) => {
  const { item } = props;
  const [popup, setPopup] = useState(false);
  const ref = useRef();
  const overview = (text) => {
    if (text === undefined || text === "" || text === null) {
      return "-";
    } else if (text.toString().length > 120) {
      return text.substring(0, 120) + "...";
    }
  };
  useEffect(() => {
    document.addEventListener(`click`, (e) => {
      if (
        !e.target.closest(".art__round") &&
        !e.target.closest(`.art__popup`)
      ) {
        setPopup(false);
      }
    });
  }, []);
  return (
    <div className="art__info">
      <a className="art__round" onClick={() => setPopup(true)} tabIndex="1"></a>
      {!popup ? (
        ""
      ) : (
        <div
          ref={ref}
          className="art__popup"
        >
          <img
            className="art__popup-image"
            src={useBackdropPath(item.poster_path)}
            alt="poster"
          />
          <div>
            <p className="art__popup-title">
              {item.title || "-"}{" "}
              <span className="art__popup-stars">
                {" "}
                {String(item.vote_average).substring(0, 3) || 0}
              </span>
            </p>
            <p className="art__popup-overview">{overview(item.overview)}</p>
            <button className="art__popup-favorite"></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;

// const [requestToken, setRequestToken] = useState("");
//   useEffect(() => {
//     localStorage.setItem(`requestToken`, JSON.stringify(requestToken));
//   }, [requestToken]);
//   const handleRequest = async () => {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/authentication/token/new?api_key=${
//         import.meta.env.VITE_API_KEY
//       }`
//     );
//     setRequestToken(response.data.request_token);
//     // console.log(response.data);
//   };
//   const handleFavorite = async () => {
//     const response = await axios.post(
//       `https://api.themoviedb.org/3/account/20032948/favorite?api_key=${import.meta.env.VITE_API_KEY}&session_id=${JSON.parse(
//         localStorage.getItem("requestToken")
//       )}`,
//       JSON.stringify({ media_type: "movie", media_id: 872585, favorite: true }),
//       {
//         headers: {
//           Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
//         },
//       }
//     );
//     console.log(response.data);
//   };
