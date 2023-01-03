import React from "react";
import "./assets/css/main.css";
// import Header from "./components/header/header";
import LoginForm from "./components/loginForm";
// import SocialLoginsContainer from "./components/socialLogins/socialLoginsContainer";
// import env from 'env'
export const Sample_login_form_page = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="default w-full float-left flex sm:block bg-white sm:mt-16">
        <div className="w-full flex flex-col items-center sm:justify-center pt-16 sm:p-2 main-wraper">
          <div className="w-full sm:max-w-[420px] bg-white sm:border sm:border-mid-gray sm:rounded-sm sm:min-h-0 p-8 sm:p-16 sm:shadow-lg min-h-screen">
            <div className="text-lg text-light-black font-bold mb-6">
              Login to Appblocks
            </div>
            <div>
              <LoginForm />
              {/* <div className="realtive mt-9">
                <hr className="border-primary border-solid w-full" />
                <span className="absolute text-xs bg-white py-1 px-2  left-1/2 -translate-x-1/2 -translate-y-1/2">
                  OR
                </span>
              </div>
              <SocialLoginsContainer /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sample_login_form_page;
