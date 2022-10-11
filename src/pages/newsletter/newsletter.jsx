import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import "./newsletter.scss";
const Newsletter = () => {
  return (
    <section className="newsletter-container">
      <div className="newsletter">
        <div className="img-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GgmCmAaVkcpV1YyAHc0Xe7gxNTL39_AsGA&usqp=CAU" />
        </div>
        <div className="description">
          <h3>Subscribe</h3>
          <p>Subscribe to our newsletter & get weekly news</p>
        </div>
        <div className="email-box">
          <input type={"email"} placeholder="Enter Your Email" />
          <AiOutlineSend stroke="#fff" size={20} className="sendIcon" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
