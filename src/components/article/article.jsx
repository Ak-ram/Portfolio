import React from "react";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import "./article.scss";
const Article = () => {
  return (
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
  );
};

export default Article;
