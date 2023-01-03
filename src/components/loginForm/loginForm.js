import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ClosedEye from "../closedeye";
import OpenEye from "../openeye";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form className="w-full mb-0" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="mb-6">
          <label className="text-black font-almost-bold text-sm">
            E-mail or Username*
          </label>
          <input
            className="w-full mt-2.5 px-4 py-3 bg-light-gray border border-light-gray  focus:border-primary focus:outline-none rounded-sm text-sm font-almost-bold text-light-black"
            type="text"
            {...register("email", { required: true, minLength: 1 })}
          />
          <span
            className="color-skin-error text-[11px] pt-2 font-medium"
            id="email-error"
          ></span>
        </div>
        <div className="mb-6">
          <label className="text-black font-almost-bold text-sm">
            Password*
          </label>
          <div className="relative">
            <input
              className="w-full mt-2.5 px-4 py-3 bg-light-gray border border-light-gray  focus:border-primary focus:outline-none rounded-sm text-sm font-almost-bold text-light-black"
              type={showPassword ? "text" : "password"}
              {...register("password", { required: true })}
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
          <span className="text-red-600 text-[11px] pt-2 font-medium hidden ">
            Please enter a password
          </span>
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
