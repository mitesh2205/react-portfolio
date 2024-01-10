import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">University of Southern California</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Master of Science in Computer Science
            </code>
            <br />
            {/* GPA */}
            <code className="text-xs text-white_vs">• 3.78/4.00</code>
            <br />
            <code className="text-xs text-brown_vs">
              • May 2022 - December 2023
            </code>
          </div>
        </div>
        <br />
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Gujarat Technological University</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Bachelor of Engineering in Information Technology
            </code>
            <br />
            {/* GPA */}
            <code className="text-xs text-white_vs">• 9.84/10.00</code>
            <br />
            <code className="text-xs text-brown_vs">
              • August 2017 - July 2021
            </code>
          </div>
        </div>
        
        
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Software Developer Intern</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              NeuroLeap - San Jose, United States{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• May 2023 - August 2023</code>
            <br />
            <code className="text-sm">
              <br />• Collaborated in backend development using Golang and MVC architecture by participating in code reviews and applying best practices to ensure high code efficiency and maintainability.
              <br />• Utilized PostgreSQL as database, optimizing data retrieval and storage processes, while showcasing strong problem-solving skills to deliver efficient solutions that contribute to project's overall success.
             
            </code>
          </div>
        </div>

        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Software Developer</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
            Droid7 Technolabs - Pune, India{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• September 2021 - April 2022</code>
            <br />
            <code className="text-sm">
              <br />• Spearheaded with cross-functional teams, project managers, and designers to develop an SEO-driven dynamic sitemap generation script. This effort indexed over <b>100,000</b> website pages, leading to a <b>20%</b> increase in website traffic.
              <br />• Fixed bugs in admin panel's filter system and synthesized validation for posting reviews, contributing to web development by ensuring efficiency in website functioning and an improved user experience.
              <br />• Led system development and deployment of website's incentive, social, and community components, as well as compare-page, enhanced database infrastructure to ensure flawless support for these functionalities.
             
            </code>
          </div>
        </div>

        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Software Developer</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
            Freelancer - Ahmedabad, India{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• January 2020 - January 2022</code>
            <br />
            <code className="text-sm">
              <br />• Collaborated closely with clients to provide tailored software development solutions aligned with specific business needs. Delivered projects sourced from platform freelancer.com and personal referrals.
              <br />• Devised user-friendly web applications by leveraging API expertise, information retrieval, application architectures, and software design knowledge. Seamlessly integrated APIs, employed agile methodologies, meeting deadlines, and ensuring customer satisfaction.
              <br />• Managed projects, communicated progress, and maintained technical documentation. Improved operations and software functionality with distribution system expertise, ensuring on-time project delivery and implementing automation solution.
            </code>
          </div>
        </div>

        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Sound understanding of MVC and design patterns.
              <br />• Experience in using Git and VSCode.
              <br />• Strong ability to coordinate with external or internal clients
              <br />• Solid understanding of software development lifecycles
              <br />• Excellent brainstorming abilities
              <br />• Ability to meet strict deadlines
              <br />• Strong analytical skills
              <br />• Excellent communication skills
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
