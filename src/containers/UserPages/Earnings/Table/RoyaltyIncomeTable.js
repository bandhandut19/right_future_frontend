import React from "react";
import DataTable from "../../../../components/DataTable";

const RoyaltyIncomeTable = ({ data }) => {
  /* data fetch by RTK */
  const columns = [
    { id: "sn", label: "S.N", minWidth: 20 },
    {
      id: "amount",
      label: "Amount",
      minWidth: 80,
    },
    {
      id: "date",
      label: "Date",
      minWidth: 120,
    },
    {
      id: "remark",
      label: "Remark",
      minWidth: 120,
    },
  ];

  function createData(sn, amount, date, remark) {
    return { sn, amount, date, remark };
  }

  const rows = data?.map((d, i) =>
    createData(
      i + 1,
      "$" + parseFloat(d?.amount).toFixed(3),
      new Date(d.date).toDateString(),
      "Royalty Bonus"
      // d?.remark
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

export default RoyaltyIncomeTable;
