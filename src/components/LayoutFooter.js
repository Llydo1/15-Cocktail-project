import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube,
  FaGithubAlt,
} from "react-icons/fa";

const LayoutFooter = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>This is just a newbie Footer</h3>
        <p>I have no idea what I am doing with my footer haha</p>
        <ul className="socials">
          <li>
            <a href="https://github.com/Llydo1">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://github.com/Llydo1">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://github.com/Llydo1">
              <FaGooglePlusG />
            </a>
          </li>
          <li>
            <a href="https://github.com/Llydo1">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="https://github.com/Llydo1">
              <FaGithubAlt />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright ©2022 <a href="https://github.com/Llydo1">Llydo1</a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default LayoutFooter;
