import React from "react";
import {
  workImgOne,
  workImgTwo,
  behance,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
  dribble,
  website,
  itch
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="EXplore My" subTitle="projects on this website." />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Behance"
            category="Website"
            href="https://www.behance.net/krishnamohanyoffcl"
            
            image={behance}
            
            
          />
          <ProjectsCard
            title="Gadgetinsiderz"
            category="Blogs"
            image={website}
             href="https://www.gadgetinsiderz.com/"
          />
          {/* <ProjectsCard
            title="Infinity Logo"
            category="Logo"
            image={workImgTwo}
          />
          <ProjectsCard
            title="Mobile Application"
            category="Shopping"
            image={workImgFive}
          /> */}
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Dribble"
            category="Website"
            image={dribble}
            href="https://dribbble.com/krishdevninja"
          />
          <ProjectsCard
            title="Itchio"
            category="Video Games"
            image={itch}
              href="https://krishnamohan-yagneswaran.itch.io/"
          />
          {/* <ProjectsCard
            title="Ideas & Blog"
            category="Website"
            image={workImgEight}
          />
          <ProjectsCard
            title="ZOSS Logo"
            category="Logo"
            image={workImgSeven}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
