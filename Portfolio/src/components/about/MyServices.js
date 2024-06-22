import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="I am a passionate web developer with expertise in creating responsive and visually appealing websites. I am proficient in HTML, CSS, JavaScript, and various web development frameworks. My goal is to build user-friendly and functional web experiences that meet both client requirements and modern web standards."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Game Design & Development"
        subTitle="I have already published four games and am currently working on creating more. My aim is to continue innovating and refining my skills to produce engaging and enjoyable gaming experiences for players."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Game Testing"
        subTitle="I have already tested more games and am currently working on evaluating more. My aim is to continue improving my testing skills and techniques to ensure the games are engaging and enjoyable for players."
      />
      {/* <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Game Devlopment"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      /> */}
    </div>
  );
};

export default MyServices;
