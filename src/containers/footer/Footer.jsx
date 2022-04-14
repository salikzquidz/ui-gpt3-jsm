import React from "react";
import "./Footer.css";
import { gpt3Logo } from "../../assets";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others?
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request early access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>

          <p>Overrons</p>
          <p>Social media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <div className="">
            <h4>Company</h4>
          </div>

          <div className="">
            <p>Terms and conditions</p>
            <p>Privacy</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>

          <p>Klang Selangor</p>
          <p>011-9242481</p>
          <p>info@gpt3klang.com</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
