import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const MailLogo = require("../assets/logos/MailLogo.png");
const TwitterLogo = require("../assets/logos/TwitterLogo.png");

const JSIcon = require("../assets/icons/JSIcon.png");
const TSIcon = require("../assets/icons/TSIcon.png");
const PHPIcon = require("../assets/icons/PHPIcon.png");
const PYIcon = require("../assets/icons/PYIcon.png");
const AngularIcon = require("../assets/icons/AngularIcon.png");
const SQLIcon = require("../assets/icons/SQLIcon.png");
const UnityIcon = require("../assets/icons/UnityIcon.png");

const LeftBar = () => {
  const [showWebList, SetShowWebList] = useState(true);
  const [showGitList, SetShowGitList] = useState(true);
  const [showProjectsList, SetShowProjectsList] = useState(true);

  const WebList = () => (
    <div>
      <a href="https://assignment-8-378900.wl.r.appspot.com/search">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={AngularIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Event Search</p>
        </div>
      </a>
      <a href="https://mahavirtechnocast.com/">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={JSIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>MahavirTechnocast</p>
        </div>
      </a>
      <a href="http://www.aitindia.in/aitnew/">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12 w-60">
          <img
            src={PHPIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>College Website</p>
        </div>
      </a>
      <a href="http://www.aitindia.in/aitnew/admin/login/finallogin1.php">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={PHPIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>College Web Admin</p>
        </div>
      </a>
    </div>
  );

  const GithubList = () => (
    <div>
      <a href="https://github.com/mitesh2205/inventory-cm">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={SQLIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Inventory Management</p>
        </div>
      </a>
      <a href="https://github.com/mitesh2205/theelitegamer">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={UnityIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Color Shifter</p>
        </div>
      </a>
      <a href="https://github.com/mitesh2205/flask-youtube-downloader">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12 w-60">
          <img
            src={PYIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>YTD</p>
        </div>
      </a>
    </div>
  );

  return (
    <div className="text-[#a2aabc] text-lg mt-5 flex bg-[#262526] h-full">
      <div>
        <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
          onClick={() => SetShowProjectsList(!showProjectsList)}
        >
          {showProjectsList ? (
            <ChevronDownIcon className="w-7 mr-1" />
          ) : (
            <ChevronRightIcon className="w-7 mr-1" />
          )}
          <p>Projects</p>
        </div>
        {showProjectsList ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowWebList(!showWebList)}
            >
              {showWebList ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Live</p>
            </div>
            {showWebList ? <WebList /> : null}
          </>
        ) : null}
        {showProjectsList ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowGitList(!showGitList)}
            >
              {showGitList ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Github</p>
            </div>
            {showGitList ? <GithubList /> : null}
          </>
        ) : null}
        <div className="absolute inset-x-0 bottom-10 ">
          <div className="flex px-6 space-x-7">
            <a href="https://github.com/mitesh2205">
              <img
                src={GitLogo}
                alt="Git Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="https://twitter.com/mitesh_chhatbar">
              <img
                src={TwitterLogo}
                alt="Twitter Logo"
                className="h-9 w-9 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="https://www.linkedin.com/in/mitesh-chhatbar/">
              <img
                src={LinkedinLogo}
                alt="Linkedin Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="mailto:chhatbarmitesh22@gmail.com">
              <img
                src={MailLogo}
                alt="Mail Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
