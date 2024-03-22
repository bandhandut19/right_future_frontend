import React from "react";
import logoDark from "../../assets/logo.png";
import logoLight from "../../assets/logo.png";
import { menus } from "../../utils/tools/menu";
import MenuAccordion from "./MenuAccordion";
import { removeLocalStorage } from "../../utils/function/localStorage";
import { useGetLoginUserQuery } from "../../Services/userApi";
const Sidebar = ({ sideBarShow,theme }) => {
  const handleLogout = () => {
    removeLocalStorage("rf_token");
    window.location.reload();
  };
  // get user
  const { data } = useGetLoginUserQuery();
  return (
    <div className="rf_sidebar">
      <div className="rf_logo_container">
        <img
          src={theme === "dark" ? logoDark : logoLight}
          width="100%"
          alt="logo"
        />
      </div>
      <div className="rf_user_profile">
        <div className="rf_user_info">
          <h2>{data?.data?.name}</h2>
          <p>{data?.data?.email}</p>
        </div>
      </div>
      <div className="rf_sidebar_menu">
        <ul className="rf_sidebar_menu_lists">
          <MenuAccordion
            d={menus}
            sideBarShow={sideBarShow}
            logout={handleLogout}
            userRole={data?.data?.role}
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
