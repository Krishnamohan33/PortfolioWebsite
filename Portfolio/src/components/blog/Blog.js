import React from "react";
import Title from "../home/Title";
import { blogImgOne, blogImgTwo, blogImgThree } from "../../assets";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="Available" subTitle="Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <BlogCard
            image={blogImgOne}
            title="Available"
            subTitle="Game Testing"
            category="Software Testing"
             href="https://www.fiverr.com/s/EgmV8v7"
          />
          {/* <BlogCard
            image={blogImgTwo}
            title="Available"
            subTitle="One Page HTML CSS Web App"
            category="Website Creation"
          />
          <BlogCard
            image={blogImgThree}
            title="July 14, 2020"
            subTitle="Designers thoughts about mobile UI templates"
            category="Travel"
          />
          <BlogCard
            image={blogImgOne}
            title="July 13, 2020"
            subTitle="Designer Conference at Florida, USA 2020"
            category="Documentation"
          /> */}
        </div>
        <div className="px-6">
          <BlogCard
            image={blogImgThree}
            title="Available"
            subTitle="One Page Web App"
            category="Website Creation"
             href="https://www.fiverr.com/s/dD0gKwG"
          />
          {/* <BlogCard
            image={blogImgTwo}
            title="July 14, 2020"
            subTitle="Designers thoughts about mobile UI templates"
            category="Travel"
          />
          <BlogCard
            image={blogImgOne}
            title="September 16, 2020"
            subTitle="UI & UX Conference at Lviv 2022"
            category="Travel"
          />
          <BlogCard
            image={blogImgThree}
            title="September 16, 2020"
            subTitle="UI & UX Conference at Lviv 2022"
            category="Travel"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
