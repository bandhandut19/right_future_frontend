import React from "react";
import DataTable from "../../../../components/DataTable";

const BoosterUpgradeHistoryTable = ({data}) => {
  const columns = [
    { id: "sr", label: "Sr.", minWidth: 20 },
    { id: "user_id", label: "User ID", minWidth: 150 },
    {
      id: "boosterAmount",
      label: "Booster Amount", 
      minWidth: 150,
    },
    {
      id: "date",
      label: "Topup Date",
      minWidth: 120,
    }
  ];
  
  function createData(sr, user_id, boosterAmount, date, status) {
    return {
      sr,
      user_id,
      boosterAmount,
      date,
    };
  }
  
  const rows = data?.map((d,i) =>
    createData(
      i+1,
      d?.user_id,
      "$10" ,
      new Date(d?.createdAt).toDateString(),
    )
  );

  return (
    <DataTable
      columns={columns}
      rows={rows}
      perPageShow={6}
      tableHeight={440}
      className="common_table"
    />
  );
};

export default BoosterUpgradeHistoryTable;
