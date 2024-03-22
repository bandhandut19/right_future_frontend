import React from "react";
import Loading from "../../../components/Loading/Loading";
import SectionCommonTable from "../../../components/SectionCommonTable";
import { useTopupHistoryQuery } from "../../../Services/walletApi";
import TopupHistoryTable from "./table/topupHistoryTable";
const TopupHistoryPage = () => {
  const {data, isLoading} = useTopupHistoryQuery();
  if(isLoading){
    return <Loading/>
  }
  return (
    <>
      <SectionCommonTable
        wrapperClassName="topuphistory_table"
        cardStyle={{ backgroundColor: "#fff" }}
        sectionTableTitle="Topup History"
        table={<TopupHistoryTable data={data}/>}
      />
    </>
  );
};

export default TopupHistoryPage;
