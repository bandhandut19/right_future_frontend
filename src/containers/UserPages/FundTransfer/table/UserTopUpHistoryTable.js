import React from "react";
import DataTable from "../../../../components/DataTable";

const columns = [
  { id: "sr", label: "Sr.", minWidth: 20 },
  {
    id: "user_id",
    label: "User ID",
    minWidth: 100,
  },
  {
    id: "amount",
    label: "Amount",
    minWidth: 100,
  },
  {
    id: "transfer_to",
    label: "Transfer To",
    minWidth: 100,
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

const UserTopUpHistoryTable = ({ showDetails, data }) => {
  function createData(sr, user_id, amount, transfer_to, date, transaction_id) {
    return {
      sr,
      user_id,
      amount,
      transfer_to,
      date,
      transaction_id,
    };
  }

  const rows = data?.map((d, index) =>
    createData(
      index + 1,
      d?.user_id,
      "$" + parseInt(55)?.toFixed(2),
      d?.income_from,
      new Date(d?.createdAt).toDateString(),
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

export default UserTopUpHistoryTable;
