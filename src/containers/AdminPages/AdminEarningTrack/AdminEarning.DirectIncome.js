import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import { useGetAllWalletQuery } from "../../../Services/walletApi";
import { useGetDirectIncomeHistoryAdminQuery } from "../../../Services/earningApi";
import DirectIncomeTable from "./Table/DirectIncomeTable";
const DirectIncome = () => {
  const { data } = useGetAllWalletQuery();
  const { data: DirectIncome } = useGetDirectIncomeHistoryAdminQuery();

  return (
    <>
      <div className="UserEarning_wallet_page_wrapper">
        <SectionCommonTable
          wrapperClassName="roi_table"
          cardStyle={{ backgroundColor: "#fff" }}
          sectionTableTitle="Direct Income"
          table={<DirectIncomeTable data={DirectIncome} />}
        />
      </div>
    </>
  );
};

export default DirectIncome;
