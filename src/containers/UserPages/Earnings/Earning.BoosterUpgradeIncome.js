import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import { useGetBoosterUpgradeUserIncomeQuery } from "../../../Services/earningApi";
import Loading from "../../../components/Loading/Loading";
import BoosterUpgradeTable from "./Table/BoosterUpgradeTable";
const BoosterUpgradeIncome = () => {
  const { data: boosterUpgrade, isLoading: isLoadingBoosterUpgrade } = useGetBoosterUpgradeUserIncomeQuery();
  console.log("boosterUpgrade", boosterUpgrade)
  if (isLoadingBoosterUpgrade) {
    return <Loading />;
  }
  return (
    <>
      <div className="UserEarning_wallet_page_wrapper">
        <SectionCommonTable
          wrapperClassName="roi_table"
          cardStyle={{ backgroundColor: "#fff" }}
          sectionTableTitle="Booster Upgrade Income"
          table={<BoosterUpgradeTable data={boosterUpgrade?.data} />}
        />
      </div>
    </>
  );
};

export default BoosterUpgradeIncome;
