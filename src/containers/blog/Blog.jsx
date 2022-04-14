import React from "react";
import "./Blog.css";
import { Article } from "../../components";

import { blog01, blog02, blog03, blog04, blog05 } from "../../assets";

const imgListGroupA = [
  {
    imgUrl: blog01,
    description: "ini adalah blog01",
    date: "6 April 2022",
    title: "GPT-3 and Open  AI is the future. Let us explore how it is?",
  },
];
const imgListGroupB = [
  {
    imgUrl: blog02,
    description: "ini adalah blog02",
    date: "6 April 2022",
    title: "GPT-3 and Open  AI is the future. Let us explore how it is?",
  },
  {
    imgUrl: blog03,
    description: "ini adalah blog03",
    date: "6 April 2022",
    title: "GPT-3 and Open  AI is the future. Let us explore how it is?",
  },
  {
    imgUrl: blog04,
    description: "ini adalah blog04",
    date: "6 April 2022",
    title: "GPT-3 and Open  AI is the future. Let us explore how it is?",
  },
  {
    imgUrl: blog05,
    description: "ini adalah blog05",
    date: "6 April 2022",
    title: "GPT-3 and Open  AI is the future. Let us explore how it is?",
  },
];

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening. We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          {imgListGroupA.map((img) => (
            <div>
              <Article
                imgUrl={img.imgUrl}
                description={img.description}
                date={img.date}
                title={img.title}
              />
            </div>
          ))}
        </div>

        <div className="gpt3__blog-container_groupB">
          {imgListGroupB.map((img) => (
            <div>
              <Article
                imgUrl={img.imgUrl}
                description={img.description}
                date={img.date}
                title={img.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
