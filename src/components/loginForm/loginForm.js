import React, { useState } from "react";
import { useForm } from "react-hook-form";
import classnames from "classnames";
import ClosedEye from "../closedeye";
import OpenEye from "../openeye";

/**
 *
 * @param {{msg:string}} param0
 * @returns
 */
const ErrorMsg = ({ msg }) => (
  <span className="text-error text-[11px] pt-2 font-medium ">{msg}</span>
);

const LoginForm = () => {
  const loginApi = `${
    process.env.BLOCK_FUNCTION_URL || "http://localhost:5000"
  }/sample_shield_login_fn`;

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { isValid, errors },
  } = useForm();

  return (
    <form
      className="w-full mb-0"
      onSubmit={handleSubmit(async (data) => {
        console.log(data);
        const _j = await fetch(loginApi, {
          method: "POST",
          body: JSON.stringify(data),
        });
        const response = await _j.json();
        if (_j.status === 200 && response.err) {
          setError("email", { type: "wrongCreds" }, { shouldFocus: true });
          setError("password", { type: "wrongCreds" }, { shouldFocus: false });
          return;
        }

        const token = response.data.token;
        // handle token here
        window.location = `www.google.com`;
      })}
    >
      <div>
        <div className="mb-6">
          <label className="text-black font-almost-bold text-sm">
            E-mail or Username*
          </label>
          <input
            className={classnames(
              "w-full mt-2.5 px-4 py-3 bg-light-gray border focus:outline-none rounded-sm text-sm font-almost-bold text-light-black",
              {
                "border-light-gray": !errors.userNotFound,
                "focus:border-primary": !errors.userNotFound,
              },
              {
                "border-error": errors.userNotFound,
                "focus:border-error": errors.userNotFound,
              }
            )}
            type="text"
            {...register("email", {
              required: true,
              minLength: 1,
              validate: {
                userNotFound: (_) => {},
                wrongProvider: (_) => {},
                wrongCreds: (_) => {},
              },
            })}
          />
          {errors.email && errors.email.type === "userNotFound" && (
            <ErrorMsg msg="no user found" />
          )}
          {errors.email && errors.email.type === "wrongProvider" && (
            <ErrorMsg msg="email is associated with another provider" />
          )}
          {errors.email && errors.email.type === "wrongCreds" && (
            <ErrorMsg msg="password or email is wrong, please try again" />
          )}
        </div>
        <div className="mb-6">
          <label className="text-black font-almost-bold text-sm">
            Password*
          </label>
          <div className="relative">
            <input
              className={classnames(
                "w-full mt-2.5 px-4 py-3 bg-light-gray border focus:outline-none rounded-sm text-sm font-almost-bold text-light-black",
                {
                  "border-light-gray": !errors.wrongPassword,
                  "focus:border-primary": !errors.wrongPassword,
                },
                {
                  "border-error": errors.wrongPassword,
                  "focus:border-error": errors.wrongPassword,
                }
              )}
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: true,
                validate: {
                  wrongCreds: (_) => {},
                },
              })}
            />
            <div
              className={`absolute w-8 h-full right-1 cursor-pointer ${
                showPassword ? "top-7" : "top-8"
              }`}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <OpenEye /> : <ClosedEye />}
            </div>
          </div>
          {/* {errors.password && errors.password.type === "wrongCreds" && (
            <ErrorMsg msg="password or email is wrong, please try again" />
          )} */}
        </div>
      </div>
      <div className="">
        <p className="text-light-black text-sm text-grey mb-6">
          Forgot Password?{" "}
          <a
            className="text-primary text-sm font-bold cursor-pointer hover:underline underline-offset-4 focus:outline-none"
            href="#"
          >
            Reset
          </a>
        </p>
        <button
          className="w-full rounded-sm py-3 focus:outline-none mb-6 font-heavy text-white text-md  bg-primary disabled:bg-gray transition-all"
          disabled={!isValid}
          type="submit"
        >
          LogIn
        </button>
        <p className=" text-light-black text-sm mb-6 ">
          New to appblocks?{" "}
          <a
            className="text-primary text-sm font-heavy cursor-pointer hover:underline underline-offset-4 focus:outline-none"
            href="/auth/signup"
          >
            Sign Up Free
          </a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
