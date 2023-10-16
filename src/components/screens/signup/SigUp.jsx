import { Inputs } from "./Inputs";
import { useForm } from "react-hook-form";
import { ecryptedPassword } from "./ecryptedPassword";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { regService } from "../../../services/registration.service";
import CustomLink from "../../widgets/Link";
import { useColor } from "../../../hook/useColors";
import "./signup.scss";

const SigUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const navigator = useNavigate();
  const color = useColor();
  const modal = useRef();
  const date = new Date();
  const sendData = async (data) => {
    const modifiedData = {
      ...data,
      password: ecryptedPassword(data.password),
      name: String(data.name).toLowerCase(),
      color: color,
      avatarSource: null,
      overview: null,
      date: `${
        date.getMonth().toString().length === 1 ? "0" + date.getMonth() : date.getMonth()
      }-${date.getFullYear()}`,
      favorite: [],
    };
    const dataForPost = await modifiedData;
    try {
      await regService.registration(dataForPost);
      modal.current.className += " anim";
      window.scrollTo(0, 0);
      reset();
      setTimeout(() => {
        navigator("/auth");
      }, 2000);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <div className="succes" ref={modal}>
        Succes, will now redirect to auth page
      </div>

      <div className="to-main-page">
        <CustomLink to="/">
          <i className="fa-solid fa-arrow-left"></i> Home
        </CustomLink>
      </div>
      <div className="reg">
        <div className="wrapper">
          <h3 className="title">Sign Up for Free</h3>
          <form className="form" onSubmit={handleSubmit(sendData)}>
            <Inputs error={errors} register={register}></Inputs>
            <button
              className="form__btn"
              style={
                Object.keys(errors).length > 0
                  ? { cursor: "not-allowed" }
                  : { cursor: "pointer" }
              }
            >
              Get Started
            </button>
          </form>
          <p
            className="title"
            style={{ fontSize: "15px", margin: "10px 0", padding: "0" }}
          >
            Already registered?{" "}
            <CustomLink style={{ fontSize: "inherit" }} to="/auth">
              Sign in{" "}
            </CustomLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default SigUp;
