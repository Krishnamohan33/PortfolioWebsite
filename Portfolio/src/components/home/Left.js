import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import CV from "../../assets/Krishnamohan.Y Resume.pdf.pdf";
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Game Developer", "Web Developer", "Founder & CEO of Gadgetinsiderz"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Krishnamohan Yagneswaran</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
          <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
  <a href="https://github.com/Krishnamohan33" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>
</span>
<span className="hover:text-designColor duration-300 cursor-pointer text-xl">
  <a href="https://www.linkedin.com/in/krishnamohan-yagneswaran-546b4323a/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a>
</span>
<span className="hover:text-designColor duration-300 cursor-pointer text-xl">
  <a href="https://www.youtube.com/@krishnamohanyagoffcl/featured" target="_blank" rel="noopener noreferrer">
    <SiYoutubemusic />
  </a>
</span>
{/* <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <BsFacebook />
  </a>
</span> */}
<span className="hover:text-designColor duration-300 cursor-pointer text-xl">
  <a href="https://www.instagram.com/krishnamohan_yagneswaran/" target="_blank" rel="noopener noreferrer">
    <FiInstagram />
  </a>
</span>
<span className="hover:text-designColor duration-300 cursor-pointer text-xl">
  <a href="https://twitter.com/krishnamohan_y3" target="_blank" rel="noopener noreferrer">
    <AiFillTwitterCircle />
  </a>
</span>
<span className="hover:text-designColor duration-300 cursor-pointer text-xl">
  <a href="mailto:krishna.mohan.y003@example.com">
    <FiMail />
  </a>
</span>

          </div>
        </div>
        <div className="flex h-14">
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <button className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
            Contact me <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
