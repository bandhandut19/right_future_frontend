import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import AutoTradeUpgradeHistoryTable from "./table/AutoTradeUpgradeHistoryTable";
import { useGetAutoTradeUpgradeHistoryQuery } from "../../../Services/topupApi";

const AutoTradeUpgradeHistory = () => {
  const {data} = useGetAutoTradeUpgradeHistoryQuery();
  return (
    <>
      <SectionCommonTable
        wrapperClassName="topuphistory_table"
        cardStyle={{ backgroundColor: "#fff" }}
        sectionTableTitle="Auto Trade Upgrade History"
        table={<AutoTradeUpgradeHistoryTable data={data?.data?.history}/>}
      />
    </>
  );
};

export default AutoTradeUpgradeHistory;
