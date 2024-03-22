import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../../../components/Loading/Loading";
import SectionCommonTable from "../../../components/SectionCommonTable";
import { Notification } from "../../../components/ToastNotification";
import {
  useActiveUserListQuery,
  useEditUserStatusMutation,
} from "../../../Services/userApi";
import ActiveMemberTable from "./table/activeMemberTable";

const ActiveMember = () => {
  // get all active member
  const { data, isLoadingActiveUser } = useActiveUserListQuery();
  // blocked member
  const [blockMember, { data: blockData, error: blockError }] =
    useEditUserStatusMutation();
  useEffect(() => {
    if (blockData?.message) {
      Notification(blockData?.message, "success");
    } else {
      Notification(blockError?.data?.message, "error");
    }
  }, [blockError, blockData]);
  const blockHandler = async (body) => {
    await blockMember(body);
    // console.log("block", body);
  };
  const [filterData, setFilterData] = useState([]);
  // console.log(filterData);

  if (isLoadingActiveUser) {
    return <Loading />;
  }
  return (
    <>
      <SectionCommonTable
        wrapperClassName="activemember_table"
        cardStyle={{ backgroundColor: "#fff" }}
        sectionTableTitle={`Active Members (${data?.length>0?data?.length:"0"})`}
        data={data}
        setFilterData={setFilterData}
        table={
          <ActiveMemberTable
            data={filterData.length > 0 ? filterData : data}
            blockHandler={blockHandler}
          />
        }
      />
    </>
  );
};

export default ActiveMember;
