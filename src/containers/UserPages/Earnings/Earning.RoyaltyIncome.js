import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import UserIncomeCard from "../../../components/UserIncomeCard/UserIncomeCard";
import roiIncomeIcon from "../../../assets/dashboardIcon/roi.png";
import { useGetRoyaltyIncomeHistoryQuery } from "../../../Services/earningApi";
import RoyaltyIncomeTable from "./Table/RoyaltyIncomeTable";
const RoyaltyIncome = () => {
  const { data: RoyaltyIncomeHistoryData } = useGetRoyaltyIncomeHistoryQuery();
  // console.log(RoyaltyIncomeHistoryData);

  return (
    <>
      <div className="UserEarning_wallet_page_wrapper">
        <div className="UserEarning_dash_content card_row">
          <UserIncomeCard
            cardName="Royalty Income"
            cardValue={`$${
              RoyaltyIncomeHistoryData?.total
                ? RoyaltyIncomeHistoryData?.total
                : "0"
            }`}
            icon={roiIncomeIcon}
            bgColor="#38cab3"
            linkText="view details"
          />
        </div>
        <SectionCommonTable
          wrapperClassName="roi_table"
          cardStyle={{ backgroundColor: "#fff" }}
          sectionTableTitle="Royalty Income"
          table={<RoyaltyIncomeTable data={RoyaltyIncomeHistoryData?.data} />}
        />
      </div>
    </>
  );
};

export default RoyaltyIncome;
