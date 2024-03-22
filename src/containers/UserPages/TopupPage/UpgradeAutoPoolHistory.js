import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import { useGetAutoPoolUpdateHistoryQuery } from "../../../Services/walletApi";
import UpgradeAutoPoolHistoryTable from "./table/UpgradeAutoPoolHistoryTable";

const UpgradeAutoPoolHistory = () => {
  const { data } = useGetAutoPoolUpdateHistoryQuery();
  return (
    <>
      <SectionCommonTable
        wrapperClassName="topuphistory_table"
        cardStyle={{ backgroundColor: "#fff" }}
        sectionTableTitle="Upgrade Auto Pool History"
        table={<UpgradeAutoPoolHistoryTable data={data}/>}
      />
    </>
  );
};

export default UpgradeAutoPoolHistory;
