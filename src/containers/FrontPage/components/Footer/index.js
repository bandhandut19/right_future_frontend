import React from "react";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineWhatsApp
} from "react-icons/ai";
import { RiTelegramLine, RiPinterestFill } from "react-icons/ri";

// import Button from "../../../../components/Button";
// import CustomLink from "../../../../components/Link";
const Footer = () => {

  return (
    <div className="rf_front_footer_wrapper">
      <div className="container">
        <footer className="footer-container">
          <p style={{ color: "#fff !important" }}>
            Copyright © 2022-2040, Powered By {" "}
            <a href="https://rightfuture.in/">rightfuture.in</a>{" "}
          </p>
          <div className="content">
            <ul className="social_link">
            <li>
                <a className="footer_menu" rel="noreferrer" href=""  target="_blank">
                  <AiOutlineInstagram className="instagram"/>{" "}
                </a>
              </li>
              <li>
                <a className="footer_menu" rel="noreferrer" href=""  target="_blank">
                  <FaFacebookF className="facebook"/>{" "}
                </a>
              </li>
              <li>
                <a className="footer_menu" rel="noreferrer" href=""  target="_blank">
                  <AiFillYoutube className="youtube" />{" "}
                </a>
              </li>
              <li>
                <a className="footer_menu" rel="noreferrer" href=""  target="_blank">
                  <RiTelegramLine className="telegram" />{" "}
                </a>
              </li>
              <li>
                <a className="footer_menu" rel="noreferrer" href=""  target="_blank">
                  <AiOutlineWhatsApp className="whatsapp" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
