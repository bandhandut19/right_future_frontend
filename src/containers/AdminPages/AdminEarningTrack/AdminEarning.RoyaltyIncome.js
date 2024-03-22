import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
// import UserIncomeCard from "../../../components/UserIncomeCard/UserIncomeCard";
// import roiIncomeIcon from "../../../assets/dashboardIcon/roi.png";
// import { useGetAllWalletQuery } from "../../../Services/walletApi";
import { useRoiIncomeDataUserQuery } from "../../../Services/earningApi";
// import IncomeLevelUpdateTable from "./Table/IncomeLevelUpdateTable";
import RoyaltyIncomeTable from "./Table/RoyaltyIncomeTable";
const RoyaltyIncome = () => {
  // const { data } = useGetAllWalletQuery();
  const { data: roiIncome } = useRoiIncomeDataUserQuery();
  // const amount = parseFloat(data?.roi_bonus).toFixed(3);

  return (
    <>
      <div className="UserEarning_wallet_page_wrapper">
        <SectionCommonTable
          wrapperClassName="roi_table"
          cardStyle={{ backgroundColor: "#fff" }}
          sectionTableTitle="Royalty Income"
          table={<RoyaltyIncomeTable data={roiIncome} />}
        />
      </div>
    </>
  );
};

export default RoyaltyIncome;
