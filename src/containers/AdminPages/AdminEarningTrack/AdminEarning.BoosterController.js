import React, { useEffect } from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import BoosterControllerTable from "./Table/BoosterControllerTable";
import { Notification } from "../../../components/ToastNotification";
import { useGetBoosterControllUsersQuery, useUpdateBoosterControllerMutation } from "../../../Services/earningApi";
const BoosterController = () => {
  // get booster controller users
  const {data} = useGetBoosterControllUsersQuery();
  // console.log("data", data)
  const [updateCondition, {data: updateData, error}] = useUpdateBoosterControllerMutation();
  const onCheckboxChange =(e, type, userid) =>{
    let post = {
      user_id: userid,
    };
    if(type === "conOne"){
      post.boosterController = e.target.checked
    }
    // console.log(e.target.checked,"type", type, "user", userid)
    updateCondition(post)
  }
  useEffect(() => {
    if (updateData?.message) {
      Notification(updateData?.message, "success");
    } else {
      Notification(error?.data?.message, "error");
    }
  }, [error, updateData]);
  return (
    <>
      <div className="UserEarning_wallet_page_wrapper">
        <SectionCommonTable
          wrapperClassName="roi_table"
          cardStyle={{ backgroundColor: "#fff" }}
          sectionTableTitle="Booster Controller"
          table={
            <BoosterControllerTable
              data={data?.users}
              onCheckboxChange={onCheckboxChange}
            />
          }
        />
      </div>
    </>
  );
};

export default BoosterController;
