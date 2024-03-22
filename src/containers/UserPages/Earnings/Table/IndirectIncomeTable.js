import React from "react";
import DataTable from "../../../../components/DataTable";

const IndirectIncomeTable = ({ data }) => {
  /* data fetch by RTK */
  // console.log(data);
  const columns = [
    { id: "sn", label: "S.N", minWidth: 20 },
    { id: "income_from_user_id", label: "Income From User ID", minWidth: 100 },
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
  ];

  function createData(sn, income_from_user_id, date, amount, level, transaction_id) {
    return { sn, income_from_user_id, date, amount, level, transaction_id };
  }

  const rows = data?.map((d, i) =>
    createData(
      i + 1,
      d?.income_from,
      new Date(d?.updatedAt).toDateString(),
      "$" + parseFloat(d?.amount).toFixed(3),
      d?.level,
      d?.transaction_id
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

export default IndirectIncomeTable;
