import React from "react";
import CustomLink from "../Link";
import { FiLogOut } from "react-icons/fi";
// import { AiOutlineWallet } from "react-icons/ai";
import avatar from "../../assets/avatar.png";
const AvatarDropdownMenu = ({ setOpenMenu, logout, data }) => {
  return (
    <>
      <ul className="submenu">
        <div className="header">
          <div className="img">
            <img src={data?.avatar ? data?.avatar : avatar} alt="img" />
          </div>
          <div className="name">
            <h4>{data?.name}</h4>
            <p>{data?.user_id}</p>
          </div>
        </div>
        {/* {avatarMenu
          .filter((pt) => pt?.permission?.includes(data?.role))
          ?.map((drop) => {
            return (
              <li
                key={drop.id}
                className="submenu_list"
                onClick={() => setOpenMenu(false)}
              >
                <CustomLink
                  href={drop.route}
                  className="submenu_link"
                >
                  {drop.icon}
                  &nbsp; {drop.menu}
                </CustomLink>
              </li>
            );
          })} */}
        {data?.role === "user" ? (
          <>
            <li className="submenu_list_static">
              <h4>{"joining date"}</h4>
              <p>{new Date(parseInt(data?.join_date)).toDateString()}</p>
            </li>
            <li className="submenu_list_static">
              <h4>{"Activation Date"}</h4>
              {
                <p>
                  {data?.topup_activation_date
                    ? new Date(
                        parseInt(data?.topup_activation_date)
                      ).toDateString()
                    : new Date(parseInt(data?.activation_date)).toDateString()
                    ? new Date(parseInt(data?.activation_date)).toDateString()
                    : ""}
                </p>
              }
            </li>
          </>
        ) : null}
        <li className="submenu_list" onClick={() => setOpenMenu(false)}>
          <CustomLink href="#" onClick={logout} className="submenu_link">
            <FiLogOut />
            &nbsp; Logout
          </CustomLink>
        </li>
      </ul>
    </>
  );
};

export default AvatarDropdownMenu;

// const avatarMenu = [
//   {
//     id: "my7s88ersr",
//     menu: "my profile",
//     icon: <FiUser />,
//     route: "/dashboard/profile/my-profile",
//     permission: ["user"],
//   },
//   {
//     id: "wl7s8er5s8",
//     menu: "my wallet",
//     icon: <AiOutlineWallet />,
//     route: "/dashboard/wallet/my-wallet",
//     permission: ["user"],
//   },
// ];

// const avatarMenu2 = [
//   {
//     id: "my7s88er5sr",
//     name: "Join Date",
//     data: "34 Dec 2022",
//     permission: ["user"],
//   },
//   {
//     id: "wl7s8er5s8",
//     name: "Activation Date",
//     data: "34 Dec 2022",
//     permission: ["user"],
//   },
// ];
