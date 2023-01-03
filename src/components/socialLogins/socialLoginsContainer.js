import React from "react";
import SocialLoginLink from "./socialLoginLink";
import githubLogo from "../../assets/img/icons/github.svg";
import twitterLogo from "../../assets/img/icons/twitter.svg";
import linkedinLogo from "../../assets/img/icons/linkedin.svg";
import googleLogo from "../../assets/img/icons/google.svg";

/**
 * @typedef {object} data
 * @property {string} imgUrl
 * @property {string} href
 */
/**
 * @type {Record<string,data>}
 */
const socialUrlMap = {
  google: {
    imgUrl: googleLogo,
    href: "/auth/google?state=login",
  },
  linkedIn: {
    imgUrl: linkedinLogo,
    href: "/auth/linkedin?state=login",
  },
  github: {
    imgUrl: githubLogo,
    href: "/auth/github?state=login",
  },
  twitter: {
    imgUrl: twitterLogo,
    href: "/auth/twitter?state=login",
  },
};

const SocialLoginsContainer = () => {
  const requiredThirdPartyLoginProviders = [
    "google",
    "github",
    "twitter",
    "linkedIn",
  ];

  return (
    <div className="flex justify-center items-center space-x-4 mt-9">
      {requiredThirdPartyLoginProviders.map((d) => (
        <SocialLoginLink
          key={d}
          imgUrl={socialUrlMap[d].imgUrl}
          href={socialUrlMap[d].href}
        />
      ))}
    </div>
  );
};

export default SocialLoginsContainer;
