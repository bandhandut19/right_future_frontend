import React from "react";
import DataTable from "../../../../components/DataTable";

const BoosterUpgradeTable = ({data}) => {
  console.log("data", data)
  /* data fetch by RTK */
  const columns = [
    { id: "sn", label: "S.N", minWidth: 20 },
    { id: "userId", label: "User ID", minWidth: 100 },
    {
      id: "income_from_user_id",
      label: "Income From User ID",
      minWidth: 80,
    },
    {
      id: "income_from_fullname",
      label: "Income From Full Name",
      minWidth: 120,
    },
    {
      id: "amount",
      label: "Amount",
      minWidth: 100,
    },
    {
      id: "date",
      label: "Date",
      minWidth: 100,
    },
  ];

  function createData(sn, userId, income_from_user_id,income_from_fullname,amount, date) {
    return { sn, userId, income_from_user_id,income_from_fullname,amount, date };
  }

  const rows = data?.map((d, i) =>
    createData(
      i + 1,
      d?._id?.userId,
      d?._id?.incomeFromUserId,
      d?._id?.incomeFromFullName,
      d?._id?.amount,
      new Date(parseInt(d?._id?.date)).toDateString()
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

export default BoosterUpgradeTable;
