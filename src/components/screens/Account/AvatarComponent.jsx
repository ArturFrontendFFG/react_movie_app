import { Edit } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const AvatarComponent = ({ user, setEdit }) => {
  const isUser = user.id === JSON.parse(localStorage.getItem("userId"));
  console.log(isUser);
  return (
    <div className="line__avatar" style={{ position: "relative" }}>
      {user.avatarSource !== null ? (
        <>
          <Avatar
            onClick={() => (!isUser ? "" : setEdit(true))}
            className="avatar"
            src={user.avatarSource}
            sx={{ width: 150, height: 150, position: "relative" }}
          ></Avatar>
          <Edit className="edit"></Edit>
        </>
      ) : (
        <Avatar
          className={`avatar ${!isUser ? "not" : ""}`}
          onClick={() => (!isUser ? "" : setEdit(true))}
          sx={{
            position: "relative",
            bgcolor: user.color,
            width: 150,
            height: 150,
            fontSize: "4rem",
          }}
        >
          <Edit className="edit"></Edit>
          {user.name.split("")[0].toUpperCase()}
        </Avatar>
      )}
    </div>
  );
};
export default AvatarComponent;
