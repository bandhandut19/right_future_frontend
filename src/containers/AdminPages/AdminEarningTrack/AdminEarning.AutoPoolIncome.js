import React, { useEffect, useState } from "react";
import CardLayout from "../../../components/CardLayout";
import Select from "../../../components/Select";
import useDragAndDrop from "../../../hooks/useDragAndDrop";
import { BiArrowBack } from "react-icons/bi";

import {
  useAddTreeAutoPoolAdminMutation,
  useGetAutopoolMembersAdminQuery,
} from "../../../Services/earningApi";
import AutopoolTree from "./AutopoolTreeStructure/AutopoolTree";
import Loading from "../../../components/Loading/Loading";

// let amount_type_array = ["RF001","RF002","RF003","RF004","RF005","RF006","RF007"];

const AutopoolIncome = () => {
  const { data: AutopoolMembersList } = useGetAutopoolMembersAdminQuery();

  const [addTreeAutoPoolUser, { data: autoPoolData, error, isLoading }] =
    useAddTreeAutoPoolAdminMutation();

  const [data, setData] = useState({
    receiver_id: "",
  });

  const handleChangeIncomeType = async (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    if (e.target.value !== "--select--") {
      const obj = {
        user_id: e.target.value,
      };
      setPreviousUserId(currentUserId);
      setCurrentUserId(e.target.value);
      addTreeAutoPoolUser(obj);
    }
  };
  const [currentUserId, setCurrentUserId] = useState("--select--");
  const [perviousUserId, setPreviousUserId] = useState("--select--");
  const handleAutopoolTreeClick = async (user_id) => {
    // console.log(user_id);
    setPreviousUserId(currentUserId);
    setCurrentUserId(user_id);
    addTreeAutoPoolUser({ user_id: user_id });
  };

  // console.log(perviousUserId);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  // const { dragElement } = useDragAndDrop();
  // useEffect(() => {
  //   const dragable = document.getElementById("draggableElem"),
  //     dragzone = document.getElementById("draggableZone");
  //   dragElement(dragable, dragzone);
  // }, [dragElement]);

  return (
    <div className="rf_autopool">
      <CardLayout
        style={{ backgroundColor: "#fff" }}
        className="rf_autopool_form_card"
      >
        <div className="rf_section_title">
          <h2>AutoPool Income</h2>
        </div>
        <div className="rf_autopool_page_content">
          <form onSubmit={handleSubmit}>
            <div className="form_group" style={{ display: "inherit" }}>
              <Select
                label="AutoPool User List"
                className="select_field"
                value={currentUserId}
                name="amount_type"
                onChange={handleChangeIncomeType}
                options={
                  AutopoolMembersList?.users ? AutopoolMembersList?.users : []
                }
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
          {autoPoolData?.autopoolTree?.map((at, i) => (
            <AutopoolTree
              key={i + 9}
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

export default AutopoolIncome;

const userAutopooldataArray = [
  {
    name: "RF001",
    autopool: 1,
    show: true,
    level: 0,
    child: [
      {
        name: "RF002",
        show: true,
        level: 1,
        child: [
          {
            name: "RF005",
            show: true,
            level: 2,
            child: [],
          },
          {
            name: "RF006",
            show: true,
            level: 2,
            child: [],
          },
          {
            name: "RF007",
            level: 2,
            child: [],
          },
        ],
      },
      {
        name: "RF003",
        show: true,
        level: 1,
        child: [
          {
            name: "RF008",
            show: true,
            level: 2,
            child: [],
          },
          {
            name: "RF009",
            show: true,
            level: 2,
            child: [],
          },
          {
            name: "RF010",
            level: 2,
            child: [],
          },
        ],
      },
      {
        name: "RF004",
        show: true,
        level: 1,
        child: [
          {
            name: "RF0011",
            show: true,
            level: 2,
            child: [],
          },
          {
            name: "RF0012",
            show: true,
            level: 2,
            child: [],
          },
          {
            name: "RF0013",
            level: 2,
            child: [],
          },
        ],
      },
    ],
  },
  {
    name: "RF0011",
    autopool: 2,
    show: true,
    level: 0,
    child: [
      {
        name: "RF002",
        show: true,
        level: 1,
        child: [
          {
            name: "RF005",
            show: true,
            level: 2,
            child: [],
          },
          {
            name: "RF006",
            show: true,
            level: 2,
            child: [],
          },
          {
            name: "RF007",
            level: 2,
            child: [],
          },
        ],
      },
      {
        name: "RF003",
        show: true,
        level: 1,
        child: [
          {
            name: "RF008",
            show: true,
            level: 2,
            child: [],
          },
          {
            name: "RF009",
            show: true,
            level: 2,
            child: [],
          },
          {
            name: "RF010",
            level: 2,
            child: [],
          },
        ],
      },
      {
        name: "RF004",
        show: true,
        level: 1,
        child: [
          {
            name: "RF0011",
            show: true,
            level: 2,
            child: [],
          },
          {
            name: "RF0012",
            show: true,
            level: 2,
            child: [],
          },
          {
            name: "RF0013",
            level: 2,
            child: [],
          },
        ],
      },
    ],
  },
];
