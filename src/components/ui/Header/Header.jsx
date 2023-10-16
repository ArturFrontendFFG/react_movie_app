import { MinButton } from "../../widgets/Button/Button";
import { useProvider } from "../../../hook/useProvider";
import Search from "../../screens/Search/Search";
import CustomLink from "../../widgets/Link";
import { useEffect, useRef, useState } from "react";
import { useCorrectName } from "../../../hook/useCorrectName";
import { Avatar, Tooltip } from "@mui/material";
import "./Header.scss";
import { useLocation, useNavigate } from "react-router-dom";
const Header = () => {
  const { user } = useProvider();
  const [account, setAccount] = useState(false);
  const header = useRef();
  const navigator = useNavigate();
  // const location = useLocation()
  // useEffect(() => {
  //   header.current.nextElementSibling.style.paddingTop = `${header.current.clientHeight}px`;
  // }, [location, window.location.reload]);
  // document.addEventListener(`scroll`, (e) => {
  //   if (parseInt(window.scrollY) > document.documentElement.scrollHeight / 5) {
  //     header.current.classList.add(`hidden`);
  //   } else {
  //     header.current.classList.remove(`hidden`);
  //   }
  // });
  document.addEventListener(`click`, (e) => {
    if (
      !!e.target.closest(`.profile__avatar`) ||
      !!e.target.closest(`.profile__content`)
    ) {
      setAccount(true);
    } else if (!!e.target.closest(`.profile__avatar`) && !!account) {
      setAccount(false);
    } else {
      setAccount(false);
    }
  });
  return (
    <header className="header" ref={header}>
      <div className="header__container container">
        <div className="header__inner">
          <CustomLink className="header__logo logo" to="/">
            M<span className="header__logo-letter logo-letter">oo</span>vie
          </CustomLink>
          <Search className="header__search" placeholder="Search"></Search>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <CustomLink className="menu__link" to="/">
                  Home
                </CustomLink>
              </li>

              {user !== null ? (
                <li className="menu__item">
                  <CustomLink
                    className="menu__link"
                    to={`/account/${user.name}#favorite`}
                  >
                    Favorite
                  </CustomLink>
                </li>
              ) : (
                ""
              )}
            </ul>
            {user !== null ? (
              Account(user, account, setAccount)
            ) : (
              <MinButton
                className="menu__sigin"
                onClick={() => navigator("/reg")}
              >
                {/* <CustomLink to="/reg">Sign up</CustomLink>
                 */}
                <span className="menu__sigin-span">Sign up</span>
              </MinButton>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

const Account = (user, account) => {
  const name = useCorrectName(user.name);
  const firstLetterName = user.name.split("")[0].toUpperCase();
  return (
    <>
      <div className="profile">
        {user.avatarSource !== null ? (
          <Avatar
            className="profile__avatar"
            src={user.avatarSource}
            sx={{ width: 36, height: 36 }}
          ></Avatar>
        ) : (
          <Tooltip title='Account' arrow >
            <Avatar
              className="profile__avatar"
              sx={{
                bgcolor: user.color,
                width: 36,
                height: 36,
              }}
            >
              {firstLetterName}
            </Avatar>
          </Tooltip>
        )}

        <div
          className="settings__popup"
          style={
            !account ? { visibility: "hidden" } : { visibility: "visible" }
          }
        >
          <div className="profile__content">
            <div className="profile__info">
              <h2>{name}</h2>
              <CustomLink to={`/account/${user.name.toLowerCase()}`}>
                See profile
              </CustomLink>
            </div>
            <div className="group">
              <a className="profile__btn" href="/accout/favorite">
                Favorite
              </a>
            </div>
            <a className="profile__btn" href="/" onClick={() => logOut()}>
              Log out
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
const logOut = () => {
  localStorage.removeItem("userId");
};

export default Header;
