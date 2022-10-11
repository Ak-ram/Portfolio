import React from "react";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineUpdate } from "react-icons/md";
import "./article.scss";
const Article = ({
  coverImage,
  title,
  reactionsCount,
  commentsCount,
  readingTime,
  publishDate,
  tagList,
}) => {
  return (
    <article>
      <div className="img-container">
        <img src={coverImage} alt={title} />
        <span className="tag">{tagList[0]}</span>
      </div>
      <div className="article-content">
        <span className="time-of-read">{readingTime} Minutes Read</span>
        <h5 className="article-headline">{title}</h5>
        <div className="article-traffic">
          <div className="likes">
            {reactionsCount} <AiOutlineLike />
          </div>
          <div className="comments">
            {commentsCount}
            <FaRegComment />
          </div>
          <div className="publish-date">
            {publishDate}
            <MdOutlineUpdate />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
