import React from "react";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import "./article.scss";
const Article = ({
  coverImage,
  title,
  reactionsCount,
  commentsCount,
  readingTime,
}) => {
  return (
    <article>
      <img src={coverImage} alt={title} />
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
        </div>
      </div>
    </article>
  );
};

export default Article;
