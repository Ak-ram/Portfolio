import React, { useEffect, useState } from "react";
import SearchBox from "../../components/searchBox/searchBox";
import Filters from "../../components/filters/filters";
import Article from "../../components/article/article";
import { TbMailbox } from "react-icons/tb";
import { Link } from "react-router-dom";
import axios from "axios";
import "./blog.scss";
const Blog = () => {
  const [devBlogs, setDevBlogs] = useState(null);
  const baseURL = "https://dev.to/api/articles?username=ak_ram";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDevBlogs(response.data);
    });
  }, []);
  if (!devBlogs) return "Loading...";
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
      {console.log(devBlogs)}
      <div className="articles-container">
        {devBlogs?.map(
          ({
            cover_image,
            id,
            title,
            comments_count,
            positive_reactions_count,
            reading_time_minutes,
            readable_publish_date,
            tag_list,
          }) => (
            <Article
              key={id}
              coverImage={cover_image}
              title={title}
              reactionsCount={positive_reactions_count}
              commentsCount={comments_count}
              readingTime={reading_time_minutes}
              publishDate={readable_publish_date}
              tagList={tag_list}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Blog;