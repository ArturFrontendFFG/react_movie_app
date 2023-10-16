import { useForm } from "react-hook-form";
import "../signup/signup.scss";
import CustomLink from "../../widgets/Link";
import { Input } from "../../widgets/Inputs/Input";
import { regService } from "../../../services/registration.service";
import { ecryptedPassword } from "../signup/ecryptedPassword";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });
  const authData = async (fields) => {
    try {
      const response = await regService.authentication();
      const newData = await Object.defineProperty(fields, "password", {
        value: ecryptedPassword(fields.password),
      });
      if (response.status === 200) {
        const data = await response.data;
        const user = await data.filter(
          (el) => el.email === newData.email && el.password === newData.password
        );
        if (user.length > 0) {
          localStorage.setItem(`userId`, user[0].id);
          reset();
          setTimeout(() => {
            window.location = "/";
          }, 1000);
        } else {
          alert("User not found, try again");
        }
      } else {
        alert(`Error: status ${response.status}`);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="to-main-page">
        <CustomLink to="/">
          <i className="fa-solid fa-arrow-left"></i> Home
        </CustomLink>
      </div>
      <div className="reg">
        <div className="wrapper">
          <h3 className="title">Auth</h3>
          <form className="form" onSubmit={handleSubmit(authData)}>
            <div className="form__block">
              <Input
                className="form__input"
                {...register("email", {
                  required: "field is required",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: "Enter valid email",
                  },
                })}
                aria-invalid={errors?.email ? false : true}
                type="text"
                placeholder="Enter your email"
              ></Input>
              <p className="form__error">{errors?.email?.message}</p>
            </div>
            <div className="form__block">
              <Input
                className="form__input"
                aria-invalid={errors?.password ? false : true}
                {...register("password", {
                  required: "field is required",
                })}
                type="text"
                placeholder="Enter your password"
              ></Input>
              <p className="form__error">{errors?.password?.message}</p>
            </div>
            <button
              className="form__btn"
              style={
                Object.keys(errors).length > 0
                  ? { cursor: "not-allowed" }
                  : { cursor: "pointer" }
              }
            >
              Submit
            </button>
          </form>
          <p
            className="title"
            style={{ fontSize: "15px", margin: "10px 0", padding: "0" }}
          >
            Not yet registered?{" "}
            <CustomLink to="/reg" style={{ fontSize: "inherit" }}>
              Sign up{" "}
            </CustomLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Auth;
