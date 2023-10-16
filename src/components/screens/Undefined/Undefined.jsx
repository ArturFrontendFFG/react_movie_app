import React from "react";
import "./Undefined.scss";
import { useNavigate } from "react-router-dom";
import { ButtonSecond } from "../../widgets/Button/Button";

const Undefined = () => {
  const navigator = useNavigate();

  return (
    <div className="undefined">
      <div className="undefined__container">
        <h1 className="undefined__title">404</h1>
        <p className="undefined__subtitle">Sorry page not found</p>
        <ButtonSecond onClick={() => navigator("/")} className="undefined__button">
          Home
        </ButtonSecond>
      </div>
    </div>
  );
};

export default Undefined;
