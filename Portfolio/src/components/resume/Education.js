import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Founder & CEO | Website/Blogger "
          subTitle="Gadgetinsiderz"
          des="Manage and maintain a personal tech and gaming blog website called Gadgetinisderz.
Produce engaging and informative content on various subjects, including technology and gaming."
        />
        <ResumeCard
          badge="Mar 2023 - Apr 2023"
          title="Web Development Intern"
          subTitle="TEACHNOOK (TEACHSCAPE ONLINE LEARNING SERVICES PRIVATE LIMITED) · Internship"
          des=""
        />
        <ResumeCard
          badge="Apr 2023 - May 2023"
          title="Internshala Student Partner (ISP) | Year 2023"
          subTitle="Internshala"
          des=""
        />
        <ResumeCard
          badge="Aug 2023 - Sept 2023"
          title="Web Development Intern"
          subTitle="Hansoft Technologies private limited"
          des=""
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2021 - 2025"
          title="Sri Krishna College of Technology"
          subTitle="India"
          des="B.E CSE"
        />
        <ResumeCard
         
          title="Bharathi Matric Higher Secondary School "
          subTitle="India"
          des="School"
        />
        
      </div>
    </div>
  );
};

export default Education;
