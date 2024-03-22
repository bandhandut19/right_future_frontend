import React from "react";
import DataTable from "../../../../components/DataTable";

const GiftIncomeTable = ({ data }) => {
  /* data fetch by RTK */
  // console.log(data);
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
      id: "transaction_id",
      label: "Transaction ID",
      minWidth: 100,
    },
    {
      id: "remark",
      label: "Remark",
      minWidth: 120,
    },
  ];

  function createData(sn, date, amount, transaction_id, remark) {
    return { sn, date, amount, transaction_id, remark };
  }

  const rows = data?.gift_income?.map((d, i) =>
    createData(
      i + 1,
      new Date(d.createdAt).toDateString(),
      "$" + parseFloat(d?.amount).toFixed(3),
      d?.transaction_id,
      d?.type +  ` Income`,
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

export default GiftIncomeTable;
