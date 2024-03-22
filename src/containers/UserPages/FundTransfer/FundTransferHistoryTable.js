import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import FundTransHistoryTable from "./table/FundTransferHistoryTable";
import { useTransferHistoryQuery } from "../../../Services/walletApi";
import Loading from "../../../components/Loading/Loading";

const FundTransferHistoryPage = () => {
  const { data, isLoading } = useTransferHistoryQuery();
  if(isLoading){
    return <Loading/>
  }
  return (
    <>
      <SectionCommonTable
        wrapperClassName="fundtransferhistory_table"
        cardStyle={{ backgroundColor: "#fff" }}
        sectionTableTitle="Fund Transfer History"
        table={<FundTransHistoryTable data={data} />}
      />
    </>
  );
};

export default FundTransferHistoryPage;
