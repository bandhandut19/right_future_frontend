import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import Loading from "../../../components/Loading/Loading";
import AutoTradeIncomeTable from "./Table/AutoTradeIncomeTable";
import { useGetAutoTradeIncomeQuery } from "../../../Services/topupApi";
const AutoTradeIncome = () => {
  const { data: tradeIncome, isLoading: isLoadingTradeIncome } = useGetAutoTradeIncomeQuery();
  if (isLoadingTradeIncome) {
    return <Loading />;
  }
  return (
    <>
      <div className="UserEarning_wallet_page_wrapper">
        <SectionCommonTable
          wrapperClassName="roi_table"
          cardStyle={{ backgroundColor: "#fff" }}
          sectionTableTitle="Auto Trade Income"
          table={<AutoTradeIncomeTable data={tradeIncome?.data} />}
        />
      </div>
    </>
  );
};

export default AutoTradeIncome;
