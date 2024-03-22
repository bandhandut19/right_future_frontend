import React from "react";
import DataTable from "../../../../components/DataTable";

const UpgradeAutoPoolHistoryTable = ({ data }) => {
  console.log(data);
  const columns = [
    { id: "sr", label: "Sr.", minWidth: 20 },
    { id: "user_id", label: "User ID", minWidth: 150 },
    {
      id: "upgradeAutopool",
      label: "Upgrade Autopool",
      minWidth: 150,
    },
    {
      id: "upgradeAmount",
      label: "Upgrade Amount",
      minWidth: 150,
    },
    {
      id: "date",
      label: "Topup Date",
      minWidth: 120,
    },
  ];

  function createData(sr, user_id, upgradeAutopool, upgradeAmount, date) {
    return {
      sr,
      user_id,
      upgradeAutopool,
      upgradeAmount,
      date,
    };
  }

  const rows = data?.map((d, i) =>
    createData(
      i + 1,
      d?.Username,
      d?.updatedautopool,
      "$" + d?.amount,
      new Date(d.createdAt).toDateString()
    )
  );

  // console.log(data);
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

export default UpgradeAutoPoolHistoryTable;
