import React, { useState } from "react";
// import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import tronClubDrakLogo from "../../../../assets/logo.png";

import CustomLink from "../../../../components/Link";
import {
  getLocalStorage,
  removeLocalStorage,
} from "../../../../utils/function/localStorage";
import { useNavigate } from "react-router-dom";
const Header = ({ hidePackageRoute }) => {
  const navigate = useNavigate();
  const [stickyNav, setStickyNav] = useState(false);
  const stickyNavbar = () => {
    if (window.pageYOffset > 100) {
      setStickyNav(true);
      return;
    } else {
      setStickyNav(false);
      return;
    }
  };
  const handleLogout = () => {
    removeLocalStorage("rf_token");
    window.location.reload();
  };
  window.addEventListener("scroll", stickyNavbar);
  const [showToggleNav, setShowToggleNav] = useState(false);
  return (
    <div
      className={`rf_frontpage_header_wrapper ${stickyNav ? "sticky" : ""}`}
    >
      <div className="container">
        <div className="rf_front_navbar">
          <div className="toggler_icon">
            <FaBars onClick={() => setShowToggleNav(!showToggleNav)} />
          </div>
          <div className="rf_front_logo">
            <CustomLink href="/" className="logo">
              <img src={tronClubDrakLogo} alt="logo" />
            </CustomLink>
            <ul className="rf_front_navbar_lists2">
              {getLocalStorage("rf_token") ? (
                <li className="rf_front_navbar_list2 ">
                  <CustomLink
                    href="/dashboard"
                    className="rf_front_nav_link2 rf_front_navbar_dashboard"
                  >
                    Dashboard
                  </CustomLink>
                </li>
              ) : (
                <li className="rf_front_navbar_list2">
                  <CustomLink
                    href="/login"
                    className="rf_front_nav_link2 login2"
                  >
                    Login
                  </CustomLink>
                </li>
              )}
              {getLocalStorage("rf_token") ? (
                <li className="rf_front_navbar_list2" onClick={handleLogout}>
                  <CustomLink
                    href="/login"
                    className="rf_front_nav_link2 rf_front_navbar_logOut"
                  >
                    Logout
                  </CustomLink>
                </li>
              ) : (
                <li className="rf_front_navbar_list2">
                  <CustomLink
                    href="/register"
                    className="rf_front_nav_link2 register2"
                  >
                    Register
                  </CustomLink>
                </li>
              )}
            </ul>
          </div>
          <div
            className={`rf_front_navbar_menu ${
              showToggleNav ? "toggle_navbar" : ""
            }`}
          >
            <ul className="rf_front_navbar_lists">
              <li className="rf_front_navbar_list">
                <CustomLink href="/" className="rf_front_nav_link">
                  Home
                </CustomLink>
              </li>
              {/* <li className="rf_front_navbar_list">
                {hidePackageRoute ? (
                  <Link
                    to="packages"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="rf_front_nav_link"
                  >
                    Incomes
                  </Link>
                ) : (
                  <CustomLink href="/packages" className="rf_front_nav_link">
                    Incomes
                  </CustomLink>
                )}
              </li> */}
              <li className="rf_front_navbar_list">
                <CustomLink href="/planPDF" className="rf_front_nav_link">
                  Plan PDF
                </CustomLink>
              </li>
              <li className="rf_front_navbar_list">
                <CustomLink href="/contact" className="rf_front_nav_link">
                  Contact US
                </CustomLink>
              </li>
              <li className="rf_front_navbar_list">
                <CustomLink className="rf_front_nav_link">
                  Coming soon
                </CustomLink>
                <div className="sub-menu-l">
                  <ul>
                    <li>
                      <CustomLink href="/netbanking">Net Banking</CustomLink>
                    </li>
                    {/* <li>
                      <CustomLink href="/tradeprofit">Trading Profit</CustomLink>
                    </li> */}
                    <li>
                      <CustomLink href="/utilityservice">Utility Services</CustomLink>
                    </li>
                    <li>
                      <CustomLink href="/shoppingprofit">Shopping Profit </CustomLink>
                    </li>
                  </ul>
                </div>
              </li>
              {getLocalStorage("rf_token") ? (
                <li className="rf_front_navbar_list register">
                  <CustomLink href="/dashboard" className="rf_front_nav_link">
                    Dashboard
                  </CustomLink>
                </li>
              ) : (
                <li className="rf_front_navbar_list login">
                  <CustomLink href="/login" className="rf_front_nav_link">
                    Login
                  </CustomLink>
                </li>
              )}
              {getLocalStorage("rf_token") ? (
                <li
                  className="rf_front_navbar_list login"
                  onClick={handleLogout}
                >
                  <CustomLink href="/login" className="rf_front_nav_link">
                    Logout
                  </CustomLink>
                </li>
              ) : (
                <li className="rf_front_navbar_list register">
                  <CustomLink href="/register" className="rf_front_nav_link">
                    Register
                  </CustomLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
