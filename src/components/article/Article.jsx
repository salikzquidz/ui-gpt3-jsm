import React from "react";
import "./Article.css";

const Article = ({ imgUrl, description, date, title }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt={description} />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div className="">
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read full article</p>
      </div>
    </div>
  );
};

export default Article;
