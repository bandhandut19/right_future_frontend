import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../../../components/Loading/Loading";
import SectionCommonTable from "../../../components/SectionCommonTable";
import { Notification } from "../../../components/ToastNotification";
import {
  useBlockUserListQuery,
  useDeleteUserListMutation,
  useEditUserStatusMutation,
} from "../../../Services/userApi";
import BlockedMemberTable from "./table/blockedMemberTable";

const BlockedMember = () => {
  // get block user
  const { data, isLoadingBlockUser } = useBlockUserListQuery();
  // unblock member
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
  };
  // delete member
  const [deleteMember, { data: deleteData, error: deleteError }] =
    useDeleteUserListMutation();
  useEffect(() => {
    if (deleteData?.message) {
      Notification(deleteData?.message, "success");
    } else {
      Notification(deleteError?.data?.message, "error");
    }
  }, [deleteError, deleteData]);
  const deleteHandler = async (body) => {
    await deleteMember(body);
  };
  const [filterData, setFilterData] = useState([]);
  // console.log(filterData);
  if (isLoadingBlockUser) {
    return <Loading />;
  }
  return (
    <>
      <SectionCommonTable
        wrapperClassName="activemember_table"
        cardStyle={{ backgroundColor: "#fff" }}
        sectionTableTitle={`Blocked Members (${
          data?.length > 0 ? data?.length : "0"
        })`}
        data={data}
        setFilterData={setFilterData}
        table={
          <BlockedMemberTable
            data={filterData.length > 0 ? filterData : data}
            blockHandler={blockHandler}
            deleteHandler={deleteHandler}
          />
        }
      />
    </>
  );
};

export default BlockedMember;
