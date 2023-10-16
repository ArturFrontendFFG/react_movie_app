import { useBackdropPath } from "../../../hook/useBackdropPath";
import "./Details.scss";
export const ActorsCard = ({ item }) => {
  return (
    <a className="actors__card" href={`/people/${item.id}-${String(item.original_name).split(" ").join('-')}`}>
      <div className="actors__card-inner">
        <div className="actors__card-profile">
          <img
            className="actors__card-path"
            src={useBackdropPath(item.profile_path)}
            alt=""
          />
        </div>
        <div className="actors__card-content">
          <strong className="actors__card-title">{item.name}</strong>
          <p className="actors__card-character">{item.character || "-"}</p>
        </div>
      </div>
    </a>
  );
};
