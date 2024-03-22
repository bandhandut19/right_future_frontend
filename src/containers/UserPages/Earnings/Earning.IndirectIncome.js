import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import UserIncomeCard from "../../../components/UserIncomeCard/UserIncomeCard";
import roiIncomeIcon from "../../../assets/dashboardIcon/roi.png";
import { useGetAllWalletQuery } from "../../../Services/walletApi";
import { useGetInDirectLevelIncomeQuery } from "../../../Services/earningApi";
import IndirectIncomeTable from "./Table/IndirectIncomeTable";
import Loading from "../../../components/Loading/Loading";
const IndirectIncome = () => {
  const { data, isLoading } = useGetAllWalletQuery();
  const { data: InDirectLevelIncome, isLoading: isLoadingDirectIncome } =
    useGetInDirectLevelIncomeQuery();

  if (isLoading || isLoadingDirectIncome) {
    return <Loading />;
  }
  return (
    <>
      <div className="UserEarning_wallet_page_wrapper">
        <div className="UserEarning_dash_content card_row">
          <UserIncomeCard
            cardName="Indirect Income"
            cardValue={`$${
              data?.indirect_income
                ? parseFloat(data?.indirect_income).toFixed(2)
                : "0"
            }`}
            icon={roiIncomeIcon}
            bgColor="#38cab3"
            linkText="view details"
            cardBgColor="#00d0e7"
          />
        </div>
        <SectionCommonTable
          wrapperClassName="roi_table"
          cardStyle={{ backgroundColor: "#fff" }}
          sectionTableTitle="Indirect Income"
          table={<IndirectIncomeTable data={InDirectLevelIncome} />}
        />
      </div>
    </>
  );
};

export default IndirectIncome;
