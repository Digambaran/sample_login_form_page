import React from "react";
import headerLogo from "../../assets/img/head/logo.svg";
import headerLogoText from "../../assets/img/head/logo-txt.svg";

const Header = () => {
  return (
    <header className="text-grey fixed top-0 left-0 z-[999] w-full border border-b bg-white">
      <div className="flex h-16 w-full px-4 md:items-center md:justify-between md:space-x-4 md:px-6 xl:px-12">
        <div className="flex flex-grow items-center">
          <div className="flex w-full flex-row items-center">
            <a
              className="flex flex-shrink-0 items-center focus:outline-none"
              href="/"
            >
              <img className="max-w-[48px]" src={headerLogo} />
              <img className="ml-3" src={headerLogoText} />
            </a>
          </div>
        </div>
        {/* <div className="flex items-center">
          <a className="hidden md:inline-block text-sm" href="/">
            Don't have an account?
          </a>
          <button
            type="button"
            className="bg-navbtn cursor-pointer rounded px-5 py-1.5 ml-3 text-center font-bold text-white transition-all hover:bg-opacity-80"
          >
            Sign Up
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
