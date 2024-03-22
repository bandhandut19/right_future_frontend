import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import AutoTradeWithdrawHistoryTable from "./table/autoTradeWithdrawHistoryTable";
import { useGetAutoTradeWithdrawHistoryQuery } from "../../../Services/walletApi";

const AutoTradeWithdrawHistory = () => {
  const {data: withdrawHis} = useGetAutoTradeWithdrawHistoryQuery();
  return (
    <>
      <SectionCommonTable
        wrapperClassName="withdrawrhistory_table"
        cardStyle={{ backgroundColor: "#fff" }}
        sectionTableTitle="Auto Trade Withdraw History"
        table={<AutoTradeWithdrawHistoryTable data={withdrawHis?.data} />}
      />
    </>
  );
};

export default AutoTradeWithdrawHistory;
