import React from "react";
import SearchBox from "../../components/searchBox/searchBox";
import Filters from "../../components/filters/filters";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import "./blog.scss";
const Blog = () => {
  return (
    <div className="blog-page">
      <h2>Blogs</h2>
      <SearchBox />
      <Filters
        filters={[
          "Js",
          "React",
          "Redux",
          "React-route-dom",
          "Scss",
          "Css",
          "Html",
          "Git",
        ]}
      />
      <article>
        <img
          src={
            "http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
          }
        />
        <div className="article-content">
          <span className="time-of-read">05 Minutes Read</span>
          <h5 className="article-headline">SASS: The code you want</h5>
          <div className="article-traffic">
            <div className="likes">
              2.3K <AiOutlineLike />
            </div>
            <div className="comments">
              33
              <FaRegComment />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Blog;
