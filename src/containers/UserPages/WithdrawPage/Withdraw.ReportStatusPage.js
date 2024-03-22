import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import WithdrawHistoryTable from "./table/withdrawHistoryTable";

const WithdrawHistoryPage = () => {
  return (
    <>
      <SectionCommonTable
        wrapperClassName="withdrawrhistory_table"
        cardStyle={{ backgroundColor: "#fff" }}
        sectionTableTitle="Withdraw History"
        table={<WithdrawHistoryTable />}
      />
    </>
  );
};

export default WithdrawHistoryPage;
