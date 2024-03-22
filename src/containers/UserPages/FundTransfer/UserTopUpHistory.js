import React from "react";
import Loading from "../../../components/Loading/Loading";
import SectionCommonTable from "../../../components/SectionCommonTable";
import { useGetUserTopUpHistoryQuery } from "../../../Services/walletApi";
import UserTopUpHistoryTable from "./table/UserTopUpHistoryTable";

const FundTransferHistoryPage = () => {
  const { data,isLoading } = useGetUserTopUpHistoryQuery();
  if(isLoading){
    return <Loading/>
  }
  return (
    <>
      <SectionCommonTable
        wrapperClassName="fundtransferhistory_table"
        cardStyle={{ backgroundColor: "#fff" }}
        sectionTableTitle="User Top Up History"
        table={<UserTopUpHistoryTable data={data} />}
      />
    </>
  );
};

export default FundTransferHistoryPage;
