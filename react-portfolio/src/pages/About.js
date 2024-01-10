import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";

const PythonLogo = require("../assets/logos/PythonLogo.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
// const NextLogo = require("../assets/logos/NextLogo.png");
const TailwindLogo = require("../assets/logos/TailwindLogo.png");
const SqlLogo = require("../assets/logos/SqlLogo.png");
const ReduxLogo = require("../assets/logos/ReduxLogo.png");
const FirebaseLogo = require("../assets/logos/FirebaseLogo.png");
const MongoDBLogo = require("../assets/logos/MongoDBLogo.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
const DockerLogo = require("../assets/logos/DockerLogo.png");
const PHPLogo = require("../assets/logos/PHPLogo.png");
const BootstrapLogo = require("../assets/logos/BootstrapLogo.png");
const AngularLogo = require("../assets/logos/AngularLogo.png");
const DjangoLogo = require("../assets/logos/DjangoLogo.png");
const GoLogo = require("../assets/logos/GoLogo.png");
const JavaLogo = require("../assets/logos/JavaLogo.png");
const LaravelLogo = require("../assets/logos/LaravelLogo.png");

const About = () => {
  return (
    <div
      id="About"
      className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
          Welcome! I'm Mitesh Chhatbar, a results-driven Software Developer blending creativity and efficiency. With a Master's in Computer Science from USC and a Bachelor's in IT, I've crafted solutions ranging from optimizing data processes in Golang to leading SEO-driven projects in PHP. As a freelancer, I've honed a diverse skill set, delivering user-friendly web applications and fostering client satisfaction. I'm passionate about building scalable software, creating effective solutions, and learning new technologies. 

          
          </code>
          <br />
          <br />
          <code>Here are a few technologies I’ve been working with recently::</code>
          <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
            <div className="flex flex-row  mb-3">
              <img
                src={JsLogo}
                alt="Js Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>JavaScript</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={PHPLogo}
                alt="PHP Logo"
                className="h-5 w-8 ml-1 mr-4 text-yellow_vs"
              />
              <code>PHP</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={LaravelLogo}
                alt="Laravel Logo"
                className="h-5 w-8 ml-1 mr-4 text-yellow_vs"
              />
              <code>Laravel</code>
            </div>
            {/* <div className="flex flex-row mb-3">
              <img
                src={NextLogo}
                alt="Next Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Next.js</code>
            </div> */}
            <div className="flex flex-row mb-3">
              <img
                src={ReactLogo}
                alt="React Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>React</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={TypescriptLogo}
                alt="Typescript Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>TypeScript</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={TailwindLogo}
                alt="Tailwind Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Tailwind CSS</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={BootstrapLogo}
                alt="Bootstrap Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Bootstrap</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={GoLogo}
                alt="GO Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>GOLang</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={ReduxLogo}
                alt="Redux Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Redux</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={PythonLogo}
                alt="Python Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Python</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={DjangoLogo}
                alt="Django Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Django</code>
            </div>
            
            <div className="flex flex-row mb-3">
              <img
                src={FirebaseLogo}
                alt="Firebase Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Firebase</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={NodeJSLogo}
                alt="NodeJS Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Nodejs</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={AngularLogo}
                alt="Angular Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>AngularJS</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={SqlLogo}
                alt="SQL Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>SQL</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={MongoDBLogo}
                alt="MongoDB Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>MongoDB</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={DockerLogo}
                alt="MongoDB Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Docker</code>
            </div>
            <div className="flex flex-row  mb-3">
              <img
                src={JavaLogo}
                alt="Java Logo"
                className="h-8 w-8 ml-2 mr-2 text-yellow_vs"
              />
              <code>Java</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
