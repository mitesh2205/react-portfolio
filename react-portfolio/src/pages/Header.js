import React from "react";
const LocationIcon = require("../assets/logos/LocationIcon.png");

function Header() {
  return (
    <div id="Header" className="mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify">
      <div className="flex items-center mb-4">
        <img
          src={LocationIcon}
          alt="Location Pin"
          className="h-5 w-5 mr-2 text-yellow_vs"
        />
        <code className="text-[#e6f1ff] text-lg lg:text-xl font-semibold">
          San Francisco, USA
        </code>
      </div>
      <div className="flex flex-col">
        <code className="text-lightblue_vs">Hi, my name is</code>
        <code className="text-[#e6f1ff] text-6xl mt-5">Mitesh Chhatbar</code>
      </div>
      {/* <button
        className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2"
      >
        <code>Download CV</code>
      </button> */}

      {/* download cv button: */}
      <a href="https://mitesh-chhatbar.web.app/Mitesh%20Chhatbar%20SDE.pdf" target="_blank">

      <button className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2">
          <code>Download CV</code>
      </button>
      </a>

    </div>
  );
}

export default Header;
