import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import Loading from "../../../components/Loading/Loading";
import AutoTradeReferralTable from "./Table/AutoTradeReferralTable";
import { useGetAutoTradeReferralIncomeQuery } from "../../../Services/topupApi";
const AutoTradeReferral = () => {
  const { data: autoTradeReferral, isLoading: isLoadingAutoTrade } = useGetAutoTradeReferralIncomeQuery();
  if (isLoadingAutoTrade) {
    return <Loading />;
  }
  return (
    <>
      <div className="UserEarning_wallet_page_wrapper">
        <SectionCommonTable
          wrapperClassName="roi_table"
          cardStyle={{ backgroundColor: "#fff" }}
          sectionTableTitle="Auto Trade Referral"
          table={<AutoTradeReferralTable data={autoTradeReferral?.data} />}
        />
      </div>
    </>
  );
};

export default AutoTradeReferral;
