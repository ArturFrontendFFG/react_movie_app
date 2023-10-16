import { useParams } from "react-router-dom";
import { useAccount } from "../../../hook/queries/useAccount";
import Favorite from "./Favorite";

import { useState } from "react";

import AvatarComponent from "./AvatarComponent";
import EditProfile from "./EditProfile";
import "./Account.scss";
import About from "./About";
import UserNotFound from "./UserNotFound";
import AdminList from "./AdminList";
const Account = () => {
  const [isEdit, setEdit] = useState(false);
  const { name } = useParams();
  const { data, isLoading, error } = useAccount(name);
  if (isLoading) return;
  if (error) return alert(error.message);

  if (data.length) {
    const user = data[0];
    const isUser = user.id === JSON.parse(localStorage.getItem(`userId`));
    return (
      <div className="account">
        <div className="account__container">
          <div
            className="account__inner"
            style={{
              width: `${window.visualViewport.width * 2}px`,
              transform: `translateX(-${
                isEdit ? window.visualViewport.width : 0
              }px)`,
            }}
          >
            <div
              className="line"
              style={{ width: `${window.visualViewport.width}px` }}
            >
              <AvatarComponent user={user} setEdit={setEdit}></AvatarComponent>
              <About user={user} isUser={isUser}></About>
            </div>
            <EditProfile setEdit={setEdit} user={user}></EditProfile>
          </div>
          {isUser ? (
            <>
              {user.name === "admin" ? <AdminList></AdminList> : ""}
              <Favorite
                favoriteList={user.favorite}
                user={user}
                userId={user.id}
              ></Favorite>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  } else {
    return <UserNotFound name={name}></UserNotFound>;
  }
};

export default Account;
