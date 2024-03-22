import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import AutoTradeUserTopupHistoryTable from "./table/AutoTradeUserTopupHistoryTable";
import { useGetAutoTradeUpgradeFriendlyHistoryQuery } from "../../../Services/topupApi";

const AutoTradeUserTopupHistory = () => {
  const {data:trade} = useGetAutoTradeUpgradeFriendlyHistoryQuery()

  return (
    <>
      <SectionCommonTable
        wrapperClassName="topuphistory_table"
        cardStyle={{ backgroundColor: "#fff" }}
        sectionTableTitle="Auto Trade User Topup History"
        table={<AutoTradeUserTopupHistoryTable data={trade?.data}/>}
      />
    </>
  );
};

export default AutoTradeUserTopupHistory;
