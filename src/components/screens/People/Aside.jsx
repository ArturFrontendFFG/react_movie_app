import Social from "./Social";
import { BACKDROP_PATH } from "../../../js/BACKDROP_PATH";
import './People.scss'
import Info from "./Info";
import { peopleDetails } from "../../../services/people.service";
const Aside = ({data, id}) => {
  return (
    <aside className="aside">
      <img
        className="aside__profile"
        src={BACKDROP_PATH(data.profile_path, "w300_and_h450_bestv2")}
        alt=""
      />
      <div className="aside__content">
        <Social id={id} homepage={data.homepage} query={peopleDetails.social(id)}/>
        <Info id={id} item={data}/>
      </div>
    </aside>
  );
};
export default Aside;
