import React from "react";
// import CardLayout from "../../../components/CardLayout";
import SectionCommonTable from "../../../components/SectionCommonTable";
import UserIncomeCard from "../../../components/UserIncomeCard/UserIncomeCard";
import { useGetLoginUserQuery } from "../../../Services/userApi";
import { useGetAutoPoolHistoryQuery } from "../../../Services/walletApi";
import AutoPoolIncomeTable from "./Table/AutoPoolIncomeTable";
import roiIncomeIcon from "../../../assets/dashboardIcon/roi.png";

const AutoPoolIncomeV2 = () => {
  const { data: userData } = useGetLoginUserQuery();
  console.log(userData?.data?._id);
  const { data: autoPoolData } = useGetAutoPoolHistoryQuery({
    id: userData?.data?._id,
  });
  // console.log(autoPoolData);
  const amount = 10.93;
  return (
    <>
      {autoPoolData?.firstautopool ? (
        <div className="UserEarning_wallet_page_wrapper">
          <div className="UserEarning_dash_content card_row">
            <UserIncomeCard
              cardName="AutoPool 01 Income "
              cardValue={`$${amount ? amount : "0"}`}
              icon={roiIncomeIcon}
              bgColor="#38cab3"
              linkText="view details"
            />
          </div>
          <SectionCommonTable
            wrapperClassName="roi_table"
            cardStyle={{ backgroundColor: "#fff" }}
            sectionTableTitle="AutoPool 01 Income"
            table={<AutoPoolIncomeTable data={autoPoolData?.firstautopool} />}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AutoPoolIncomeV2;
