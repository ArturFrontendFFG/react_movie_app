import { Edit } from "@mui/icons-material";
import { Months } from "../../ui/Slider/Date";
import { useCorrectName } from "../../../hook/useCorrectName";

const About = ({ user, isUser }) => {
    const name = useCorrectName(user.name);
  
    const date = (date) => {
      const month = Months[date.split("-")[0]];
      const year = date.split("-")[1];
      return `${month} ${year}`;
    };
    return (
      <div className="about">
        <div className="about__content">
          <div>
            <h3 className="about__title">{name}</h3>
            <span className="about__subtitle">
              Member since {date(user.date)}
            </span>
            {isUser ? <Edit className="edit"></Edit> : ""}
          </div>
          <div className="about__overview">
            {user.overview !== null ? (
              <p>{user.overview}</p>
            ) : (
              <p>About: The user did not provide data about himself</p>
            )}
          </div>
        </div>
      </div>
    );
  };
  export default About