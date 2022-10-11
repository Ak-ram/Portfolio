import React from "react";
import SearchBox from "../../components/searchBox/searchBox";
import Filters from "../../components/filters/filters";
import Article from "../../components/article/article";
import { TbMailbox } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./blog.scss";
const Blog = () => {
  return (
    <div className="blog-page">
      <h2>
        Blogs{" "}
        <Link to={"/newsletter"}>
          <TbMailbox />
        </Link>
      </h2>
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
      <div className="articles-container">
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
};

export default Blog;
