import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import BoosterUpgradeHistoryTable from "./table/BoosterUpgradeHistoryTable";
import { useGetBoosterUpgradeHistoryQuery } from "../../../Services/walletApi";
const BoosterUpgradeHistory = () => {
  const { data } = useGetBoosterUpgradeHistoryQuery();
  return (
    <>
      <SectionCommonTable
        wrapperClassName="topuphistory_table"
        cardStyle={{ backgroundColor: "#fff" }}
        sectionTableTitle="Booster Upgrade History"
        table={<BoosterUpgradeHistoryTable data={data}/>}
      />
    </>
  );
};

export default BoosterUpgradeHistory;
