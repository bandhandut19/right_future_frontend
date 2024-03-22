import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import UserIncomeCard from "../../../components/UserIncomeCard/UserIncomeCard";
import roiIncomeIcon from "../../../assets/dashboardIcon/roi.png";
import { useGetAllWalletQuery } from "../../../Services/walletApi";
import { useGetGiftIncomeHistoryQuery } from "../../../Services/earningApi";
import GiftIncomeTable from "./Table/GiftIncomeTable";
import Loading from "../../../components/Loading/Loading";
const GiftIncome = () => {
  const { data, isLoading } = useGetAllWalletQuery();
  const { data: GiftIncomeHistoryData, isLoading: isLoadingGiftIncome } =
    useGetGiftIncomeHistoryQuery();

  if (isLoading || isLoadingGiftIncome) {
    return <Loading />;
  }
  return (
    <>
      <div className="UserEarning_wallet_page_wrapper">
        <div className="UserEarning_dash_content card_row">
          <UserIncomeCard
            cardName="Gift Income"
            cardValue={`$${data?.gift_income ? data?.gift_income : "0"}`}
            icon={roiIncomeIcon}
            bgColor="#38cab3"
            linkText="view details"
            cardBgColor="#fe9f43"
          />
        </div>
        <SectionCommonTable
          wrapperClassName="roi_table"
          cardStyle={{ backgroundColor: "#fff" }}
          sectionTableTitle="Gift Income"
          table={<GiftIncomeTable data={GiftIncomeHistoryData} />}
        />
      </div>
    </>
  );
};

export default GiftIncome;
