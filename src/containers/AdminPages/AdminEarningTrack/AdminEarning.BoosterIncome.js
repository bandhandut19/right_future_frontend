import React, { useState } from "react";
import CardLayout from "../../../components/CardLayout";
import Select from "../../../components/Select";
// import userIcon from "../../../assets/tree_icon.png";
// import userIcon from "../../../assets/tree_icon.png";
// import "./BoosterTreeStructure/style.css"
import Loading from "../../../components/Loading/Loading";
// import useDragAndDrop from "../../../hooks/useDragAndDrop";
import {
  useAddBoostTreeAutPoolAdminMutation,
  useGetBoosterIncomeMembersAdminQuery,
} from "../../../Services/earningApi";
import BoosterIncomeTree from "./BoosterTreeStructure/boostTreeStructure";
import { BiArrowBack } from "react-icons/bi";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { useRef } from "react";
// import { useClickOutside } from "../../../hooks/useClickOutside";
// import { Link } from "react-router-dom";
// import Popover from "../../../components/Popover";

const BoosterIncome = () => {
  const [currentUserId, setCurrentUserId] = useState("--select--");
  const [perviousUserId, setPreviousUserId] = useState("--select--");
  const [addBoostTreeAutPool, { data: boostTreeData, isLoading }] =
    useAddBoostTreeAutPoolAdminMutation();
  // console.log(boostTreeData);
  const [search, setSearch] = useState("");
  // const profileRef = useRef(null);
  // const [openMenu, setOpenMenu] = useState(false);
  // useClickOutside(profileRef, () => setOpenMenu(false));

  const { data: BoosterMembersList } = useGetBoosterIncomeMembersAdminQuery();

  // const [data, setData] = useState({
  //   receiver_id: "",
  // });

  const handleChangeIncomeType = async (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    if (e.target.value !== "--select--") {
      const obj = {
        user_id: e.target.value,
      };
      setPreviousUserId(currentUserId);
      setCurrentUserId(e.target.value);
      addBoostTreeAutPool(obj);
      // setOpenMenu(false);
    }
  };
  const handleAutopoolTreeClick = async (user_id) => {
    // console.log(user_id);
    setPreviousUserId(currentUserId);
    setCurrentUserId(user_id);
    addBoostTreeAutPool({ user_id: user_id });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  // handle search
  const handleSearch = () =>{
    const obj = {
      user_id: search.toLocaleUpperCase(),
    };
    addBoostTreeAutPool(obj);
  }

  return (
    <div className="rf_boosterIncome" id="draggableZone2">
      <CardLayout
        style={{ backgroundColor: "#fff" }}
        className="rf_boosterIncome_form_card"
      >
        <div className="rf_section_title">
          <h2>Booster Income</h2>
          <div className="search__box__booster">
            <input type="search" placeholder="Search booster..." className="search__input" onChange={(e)=>setSearch(e.target.value)} />
            <button className="search__btn" onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div className="rf_boosterIncome_page_content">
          <form onSubmit={handleSubmit}>
            {/* <div className="form_group" style={{ display: "inherit" }}>
              <div className="booster_userList_box" ref={profileRef}>
                <div
                  className="list_field"
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  <span>{currentUserId}</span>
                  <span>
                    <MdKeyboardArrowDown />
                  </span>
                </div>
                {openMenu && (
                  <div className="list_dropdown">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search..."
                      className="search__box"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <ul className="search_box_dropdown">
                      {BoosterMembersList?.allBoosterUsers
                        .filter((dt) => {
                          if (search === "") {
                            return dt;
                          } else if (
                            dt?.toLowerCase() === search?.toLowerCase()
                          ) {
                            return dt;
                          }
                        })
                        .map((d) => (
                          <li onClick={() => handleChangeIncomeType(d)}>
                            {d}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            </div> */}
            <div className="form_group" style={{ display: "inherit" }}>
              <Select
                label="Booster User List"
                className="select_field"
                value={currentUserId}
                name="amount_type"
                options={
                  BoosterMembersList?.allBoosterUsers
                    ? BoosterMembersList?.allBoosterUsers
                    : []
                }
                onChange={handleChangeIncomeType}
                isRequired={true}
                autoComplete="off"
              />
            </div>
          </form>
          <div
            className="perviousBtn"
            onClick={() => handleAutopoolTreeClick(perviousUserId)}
          >
            <button>
              {" "}
              <BiArrowBack />{" "}
            </button>
          </div>
          {boostTreeData?.autopoolTree?.map((at, i) => (
            <BoosterIncomeTree
              key={i + 9}
              i={i}
              userAutopooldata={at}
              handleAutopoolTreeClick={handleAutopoolTreeClick}
            />
          ))}
          {isLoading ? (
            <div style={{ marginTop: "10px", borderRadius: "10px" }}>
              <Loading />
            </div>
          ) : null}
        </div>
      </CardLayout>
    </div>
  );
};

export default BoosterIncome;
