import "./Button.scss";
import { Button, IconButton } from "@mui/material";
import { widthAddMovieToFavoriteList } from "../../../hoc/withAddMovieToFavoriteList";
import { styled } from "styled-components";
import { useEffect } from "react";
export const ButtonSecond = ({ children, ...props }) => {
  return (
    <button {...props} className="button">
      <span>{children}</span>
    </button>
  );
};
const FavoriteButton = ({
  sendFavorite,
  ariadisabled,
  setariadisabled,
  movieid,
  innerText,
  favoritelist,
  variant,
  classInnerButton,
  style,
  ...props
}) => {
  useEffect(() => {
    if (favoritelist.includes(movieid)) {
      setariadisabled(false);
    }
  }, [movieid, favoritelist]);
  return (
    <div onClick={() => sendFavorite()} {...props}>
      <Button variant={!!variant ? variant : "contained"} style={{...style}} color={ariadisabled ? "secondary" : "error"}>
        {innerText}
      </Button>
    </div>
  );
};

export default widthAddMovieToFavoriteList(FavoriteButton);
const IconFavorite = ({
  sendFavorite,
  movieid,
  favoritelist,
  ariadisabled,
  setariadisabled,
  children,
  ...props
}) => {
  useEffect(() => {
    if (favoritelist.includes(movieid)) {
      setariadisabled(false);
    }
  }, [movieid, favoritelist]);
  return (
    <div onClick={() => sendFavorite()} ariadisabled={ariadisabled} {...props}>
      <IconButton
        variant="contained"
        color={ariadisabled ? "inherit" : "error"}
      >
        {children}
      </IconButton>
    </div>
  );
};

export const IconFavoriteButton = widthAddMovieToFavoriteList(IconFavorite);

const ButtonExam = ({ userid, sendFavorite, children, ...props }) => {
  if (!userid) return;
  return (
    <button {...props} className="button__blur" onClick={() => sendFavorite()}>
      <span>{children}</span>
    </button>
  );
};
export const ButtonUn = widthAddMovieToFavoriteList(ButtonExam);

export const MinButton = ({ children, ...props }) => {
  return (
    <button {...props} className={`${props.className} min_button`}>
      {children}
    </button>
  );
};
