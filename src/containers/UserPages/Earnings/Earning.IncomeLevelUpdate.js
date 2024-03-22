import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import UserIncomeCard from "../../../components/UserIncomeCard/UserIncomeCard";
import roiIncomeIcon from "../../../assets/dashboardIcon/roi.png";
import { useGetAllWalletQuery } from "../../../Services/walletApi";
import { useGetIncomeLevelUpdateQuery } from "../../../Services/earningApi";
import IncomeLevelUpdateTable from "./Table/IncomeLevelUpdateTable";
const IncomeLevelUpdate = () => {
  const { data } = useGetAllWalletQuery();
  const { data: IncomeLevelUpdateData } = useGetIncomeLevelUpdateQuery();

  return (
    <>
      <div className="UserEarning_wallet_page_wrapper">
        <div className="UserEarning_dash_content card_row">
          <UserIncomeCard
            cardName="Income Level"
            cardValue={`$${
              data?.level_update_income
                ? parseFloat(data?.level_update_income).toFixed(2)
                : "0"
            }`}
            icon={roiIncomeIcon}
            bgColor="#38cab3"
            linkText="view details"
            cardBgColor="#fe9f43"
          />
        </div>
        <SectionCommonTable
          wrapperClassName="roi_table"
          cardStyle={{ backgroundColor: "#fff" }}
          sectionTableTitle="Income Level Update"
          table={
            <IncomeLevelUpdateTable data={IncomeLevelUpdateData} />
          }
        />
      </div>
    </>
  );
};

export default IncomeLevelUpdate;
