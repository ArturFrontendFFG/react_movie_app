import { AddAPhoto, ArrowBack } from "@mui/icons-material";
import { Avatar, Skeleton, Button, Input } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
const EditProfile = ({ setEdit, user }) => {
  const queryClient = useQueryClient();
  const [avatarSource, setAvatarSource] = useState(user.avatarSource ? user.avatarSource : null);
  const [overview, setOverview] = useState(user.overview ? user.overview : null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      setAvatarSource(reader.result);
    };
  };
  const saveCorrectData = () => {
    axios.put(`http://localhost:3000/users/${user.id}`, {
      ...user,
      overview: overview ? overview : null, 
      avatarSource: avatarSource ? avatarSource : null,
    });
    queryClient.refetchQueries([`account`]);
    alert('Succes')
  };
  return (
    <div
      className="edit-profile"
      style={{ width: `${window.visualViewport.width}px` }}
    >
      <ArrowBack
        className="close-edit"
        sx={{ fontSize: 30 }}
        onClick={() => setEdit(false)}
      ></ArrowBack>
      <div className="edit__avatar">
        <div className="edit__avatar-content" style={{ position: "relative" }}>
          {avatarSource ? (
            <>
              <Avatar
                src={avatarSource}
                sx={{ width: 150, height: 150, objectPosition: "center" }}
              ></Avatar>
            </>
          ) : (
            <Skeleton
              sx={{ bgcolor: "grey.800" }}
              variant="circular"
              animation="wave"
              width={150}
              height={150}
            ></Skeleton>
          )}
          <label htmlFor="contained-button-file">
            <AddAPhoto sx={{ color: "#ccc", fontSize: 56 }}></AddAPhoto>
          </label>
        </div>
        <Button
          variant="standard"
          size="small"
          onClick={() => {
            setAvatarSource(null);
            saveCorrectData();
          }}
          sx={{
            color: "red",
            border: "1px solid red",
            br: 2,
            mt: 1,
            left: 130,
            position: "absolute",
          }}
        >
          Delete
        </Button>
        <Input
          sx={{ display: "none" }}
          accept="image/*"
          onChange={handleFileChange}
          id="contained-button-file"
          multiple
          type="file"
        />
      </div>
      <div className="edit__overview" style={{ width: "100%" }}>
        <textarea
          onChange={(e) => setOverview(e.target.value)}
          value={overview ? overview : ''}
          placeholder="About you:"
          className="edit__overview-text"
        ></textarea>
      </div>
      <Button
        variant="outlined"
        size="large"
        sx={{
          position: "absolute",
          right: 35,
          bottom: "-15px",
        }}
        onClick={() => saveCorrectData()}
      >
        Save
      </Button>
    </div>
  );
};
export default EditProfile;
