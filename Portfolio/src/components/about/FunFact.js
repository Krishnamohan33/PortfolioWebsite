import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<BsTrophyFill />} des="4 Awards Won" />
      <FunFactCard icon={<SiAntdesign />} des="5+ Finished Projects" />
      <FunFactCard icon={<BiCodeAlt />} des="Published 4 Games" />
      <FunFactCard icon={<IoLogoYoutube />} des="470+ Subscription" />
    </div>
  );
};

export default FunFact;
