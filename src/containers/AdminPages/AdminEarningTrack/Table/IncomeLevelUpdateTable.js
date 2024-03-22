import React from "react";
import DataTable from "../../../../components/DataTable";

const IncomeLevelUpdateTable = ({ data }) => {
  /* data fetch by RTK */
  // console.log(data);
  const columns = [
    { id: "sn", label: "S.N", minWidth: 20 },
    { id: "receiver_id", label: "Receiver ID", minWidth: 100 },
    { id: "income_from", label: "Income From", minWidth: 100 },
    {
      id: "date",
      label: "Date",
      minWidth: 120,
    },
    {
      id: "amount",
      label: "Amount",
      minWidth: 80,
    },
    {
      id: "transaction_id",
      label: "Transaction ID",
      minWidth: 100,
    },
  ];

  function createData(
    sn,
    receiver_id,
    income_from,
    date,
    amount,
    transaction_id
  ) {
    return { sn, receiver_id, income_from, date, amount, transaction_id };
  }

  const rows = data?.map((d, i) =>
    createData(
      i + 1,
      d?.user_id,
      d?.income_from,
      new Date(d?.createdAt).toDateString(),
      "$" + parseFloat(d?.amount).toFixed(2),
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

export default IncomeLevelUpdateTable;
