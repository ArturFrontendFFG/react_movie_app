import { useNavigate } from "react-router-dom";
import { useProvider } from "../hook/useProvider";
import { useEffect } from "react";

export const withAuth = (Children) => {
  return function (props) {
    const { user } = useProvider();
    const navigator = useNavigate();
    if (user === null) {
      useEffect(() => {
        navigator("/reg");
      }, []);
    } else {
      return <Children {...props}></Children>;
    }
  };
};
