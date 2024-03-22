import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import { useGetAllWalletQuery } from "../../../Services/walletApi";
import { useGetIncomeLevelUpdateAdminQuery } from "../../../Services/earningApi";
import IncomeLevelUpdateTable from "./Table/IncomeLevelUpdateTable";
const IncomeLevelUpdate = () => {
  const { data } = useGetAllWalletQuery();
  const { data: IncomeLevelUpdateData } = useGetIncomeLevelUpdateAdminQuery();

  return (
    <>
      <div className="UserEarning_wallet_page_wrapper">
        <SectionCommonTable
          wrapperClassName="roi_table"
          cardStyle={{ backgroundColor: "#fff" }}
          sectionTableTitle="Income Level Update"
          table={<IncomeLevelUpdateTable data={IncomeLevelUpdateData} />}
        />
      </div>
    </>
  );
};

export default IncomeLevelUpdate;
