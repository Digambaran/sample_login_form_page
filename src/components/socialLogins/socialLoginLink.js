import React from "react";

const SocialLoginLink = ({ imgUrl, href }) => {
  return (
    <a
      className="w-[52px] h-[52px] flex flex-shrink-0 cursor-pointer justify-center items-center rounded border border-solid border-icon"
      href={href}
    >
      <img src={imgUrl} alt="" />
    </a>
  );
};

export default SocialLoginLink;
