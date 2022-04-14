import React from "react";

import google from "../../assets/google.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import slack from "../../assets/slack.png";
import shopify from "../../assets/shopify.png";

import "./Brand.css";

function Brand() {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="" />
      </div>
      <div>
        <img src={atlassian} alt="" />
      </div>
      <div>
        <img src={slack} alt="" />
      </div>
      <div>
        <img src={dropbox} alt="" />
      </div>
      <div>
        <img src={shopify} alt="" />
      </div>
    </div>
  );
}

export default Brand;
