import React from "react";
import { Feature } from "../../components";
import "./Features.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
];

export const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The futures is now and you just need to realize it. Step into future
          today and make it happen.
        </h1>
        <p>Request early access to get started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((data, index) => (
          <Feature
            text={data.text}
            title={data.title}
            key={data.text + data.title + index}
          />
        ))}
      </div>
    </div>
  );
};
