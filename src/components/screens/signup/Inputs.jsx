import { createRef, useState } from "react";
import { Input } from "../../widgets/Inputs/Input";

export const Inputs = ({ error, register }) => {
  const [visible, setVisible] = useState(false);
  const inputRef = createRef();
  return (
    <>
      <div className="form__div">
        <div className="form__block">
          <Input
            ref={inputRef}
            {...register("name", {
              required: "Field is required",
              pattern: "^(?!.*s$)[^s]+$",
            })}
            className="form__input"
            placeholder="First Name*"
            type="text"
            aria-invalid={error?.name ? false : true}
          ></Input>
          <p className="form__error">{error?.name?.message}</p>
        </div>
        <div className="form__block">
          <Input
            {...register("lastname", { required: "Field is required" })}
            className="form__input"
            placeholder="Last Name*"
            type="text"
            aria-invalid={error?.lastname ? false : true}
          ></Input>
          <p className="form__error">{error?.lastname?.message}</p>
        </div>
      </div>
      <div className="form__block">
        <Input
          {...register("email", {
            required: "Field is required",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "Enter valid email",
            },
          })}
          className="form__input"
          type="email"
          placeholder="Email address*"
          aria-invalid={error?.email ? false : true}
        ></Input>
        <p className="form__error"> {error?.email?.message}</p>
      </div>
      <div className="form__block">
        <div className="password">
          <Input
            {...register("password", { required: "Field is required" })}
            className="form__input"
            type={!visible ? "password" : "text"}
            placeholder="Set a password"
            aria-invalid={error?.password ? false : true}
          ></Input>
          <div className="password__visible">
            {!visible ? (
              <i
                className="fa-regular fa-eye"
                onClick={() => setVisible(true)}
              ></i>
            ) : (
              <i
                className="fa-regular fa-eye-slash"
                onClick={() => setVisible(false)}
              ></i>
            )}
          </div>
        </div>
        <p className="form__error"> {error?.password?.message}</p>
      </div>
    </>
  );
};
