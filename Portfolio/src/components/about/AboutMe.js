import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Krishnamohan Yagneswaran</h2>
          <p className="text-base leading-6 ">
            Game And Web Devleoper from India. 
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            India

          </li>
          <li className="aboutRightLi">
  <span className="aboutRightLiSpan">Freelance:</span> Available{' '}
  <a
    href="https://www.gadgetinsiderz.com/services-5"
    target="_blank"
    rel="noopener noreferrer"
    className="aboutRightLiSpan aboutRightLiLink"
    style={{ fontSize: '10px', padding: '5px 10px' }}
  >
    Let's work together!
  </a>
</li>


          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Country:</span>
            India
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
