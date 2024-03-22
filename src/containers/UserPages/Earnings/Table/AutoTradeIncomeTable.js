import React from "react";
import DataTable from "../../../../components/DataTable";

const AutoTradeIncomeTable = ({ data }) => {
  /* data fetch by RTK */
  // console.log(data);
  const columns = [
    { id: "sn", label: "S.N", minWidth: 20 },
    {
      id: "user_id",
      label: "User Id",
      minWidth: 120,
    },
    {
      id: "packages",
      label: "Package",
      minWidth: 120,
    },
    {
      id: "commissionPerDay",
      label: "Amount Per Day",
      minWidth: 120,
    },
    {
      id: "amount",
      label: "Amount",
      minWidth: 80,
    },
    {
      id: "total_amount",
      label: "Total Amount",
      minWidth: 80,
    },
    {
      id: "date",
      label: "Date",
      minWidth: 120,
    },
  ];

  function createData(
    sn,
    user_id,
    packages,
    commissionPerDay,
    amount,
    total_amount,
    date
  ) {
    return {
      sn,
      user_id,
      packages,
      commissionPerDay,
      amount,
      total_amount,
      date,
    };
  }

  const rows = data?.map((d, i) =>
    createData(
      i + 1,
      d?.userId,
      `$${d?.packages} ${d?.privilege ? "-" + d?.privilege : " "}`,
      d?.commissionPerDay + "%",
      "$" + d?.commissionAmount,
      "$" + d?.totalCommissionAmount,
      d?.incomeDate
    )
  );

  return (
    <DataTable
      columns={columns}
      rows={rows}
      perPageShow={10}
      tableHeight={600}
      className="common_table"
    />
  );
};

export default AutoTradeIncomeTable;
