import React from "react";
import SearchBox from "../../components/searchBox/searchBox";
import "./blog.scss";
const Blog = () => {
  return (
    <div className="blog-page">
      <h2>Blogs</h2>
      <SearchBox />
      <ul className="topics">
        <li>scss</li>
        <li>react</li>
        <li>git</li>
        <li>javascript</li>
        <li>javascript</li>
        <li>javascript</li>
        <li>javascript</li>
      </ul>
    </div>
  );
};

export default Blog;
