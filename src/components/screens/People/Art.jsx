import { useQueries, useQuery } from "@tanstack/react-query";
import { useBackdropPath } from "../../../hook/useBackdropPath";
import { useCredits } from "../../../hook/useCredits";
import Popup from "./Popup";
const Art = ({ id }) => {
  const { data, isLoading, error } = useCredits(id);
  if (isLoading) return;
  if (error) return;

  const newData = data.cast
    .filter((item) => item.release_date !== undefined)
    .sort(
      (a, b) =>
        Number(a.release_date.split("-")[0]) -
        Number(b.release_date.split("-")[0])
    )
    .reverse();

  return (
    <div className="art">
      <h3 className="art__title">Acting Art</h3>
      <div className="art__wrapper">
        {newData.map((item) => (
          <div key={item.id} className="art__card">
            <span className="art__release">
              {item.release_date.split("-")[0] || "-"}
            </span>
            <Popup item={item}></Popup>
            <a className="art__subtitle" href={`/movie/${item.id}`}>
              {item.title}
              <br />
              <span className="art__subtitle-character">How :</span>{" "}
              <span>{item.character || "-"}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Art;
