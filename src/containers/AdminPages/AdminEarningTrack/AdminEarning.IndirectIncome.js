import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import UserIncomeCard from "../../../components/UserIncomeCard/UserIncomeCard";
import roiIncomeIcon from "../../../assets/dashboardIcon/roi.png";
import { useGetAllWalletQuery } from "../../../Services/walletApi";
import { useGetIndirectIncomeHistoryAdminQuery } from "../../../Services/earningApi";
import IndirectIncomeTable from "./Table/IndirectIncomeTable";
const IndirectIncome = () => {
  const { data } = useGetAllWalletQuery();
  const { data: IndirectIncome } = useGetIndirectIncomeHistoryAdminQuery();
  return (
    <>
      <div className="UserEarning_wallet_page_wrapper">
        <SectionCommonTable
          wrapperClassName="roi_table"
          cardStyle={{ backgroundColor: "#fff" }}
          sectionTableTitle="Indirect Income"
          table={<IndirectIncomeTable data={IndirectIncome} />}
        />
      </div>
    </>
  );
};

export default IndirectIncome;
