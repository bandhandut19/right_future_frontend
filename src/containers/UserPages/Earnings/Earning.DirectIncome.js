import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import UserIncomeCard from "../../../components/UserIncomeCard/UserIncomeCard";
import roiIncomeIcon from "../../../assets/dashboardIcon/roi.png";
import { useGetAllWalletQuery } from "../../../Services/walletApi";
import { useGetDirectLevelIncomeQuery } from "../../../Services/earningApi";
import DirectIncomeTable from "./Table/DirectIncomeTable";
import Loading from "../../../components/Loading/Loading";
const DirectIncome = () => {
  const { data, isLoading } = useGetAllWalletQuery();
  const { data: DirectLevelIncome, isLoading: isLoadingDirectIncome } =
    useGetDirectLevelIncomeQuery();
  if (isLoading || isLoadingDirectIncome) {
    return <Loading />;
  }
  return (
    <>
      <div className="UserEarning_wallet_page_wrapper">
        <div className="UserEarning_dash_content card_row">
          <UserIncomeCard
            cardName="Direct Income"
            cardValue={`$${
              data?.direct_income
                ? parseFloat(data?.direct_income).toFixed(2)
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
          sectionTableTitle="Direct Income"
          table={<DirectIncomeTable data={DirectLevelIncome} />}
        />
      </div>
    </>
  );
};

export default DirectIncome;
