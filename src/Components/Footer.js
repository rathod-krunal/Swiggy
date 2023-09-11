import React from "react";
import { SiSwiggy } from "react-icons/si";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-div">
      <div className="footer-inner">
        <div className="first-row">
          <SiSwiggy /> <span>Swiggy</span>
          <p>
            <AiOutlineCopyrightCircle />{" "}
            <span> 2023 Bundi Technologies Pvt.Ltd</span>
          </p>
        </div>
        <div className="second-row">
          <h2>Company</h2>
          <p>About</p>
          <p>Careers</p>
          <p>Team</p>
          <p>Swiggy One</p>
          <p>Swiggy Instamart</p>
          <p>Swiggy Genie</p>
        </div>
        <div className="third-row">
          <div className="subrows">
            <div className="first-sub">
              <h2>Contact Us</h2>
              <p>Help & Support</p>
              <p>Partner With Us</p>
              <p>Ride With Us</p>
            </div>
            <div className="second-sub">
              <h2>Legal</h2>
              <p>Tearm & Conditions</p>
              <p>Cookie Policy</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
        <div className="forth-row">
          <h2>We Deliver to:</h2>
          <p>Banglore</p>
          <p>Gurgaon</p>
          <p>Hyderabad</p>
          <p>Delhi</p>
          <p>Mumbai</p>
          <p>Pune</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
