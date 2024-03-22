import React from "react";
import DataTable from "../../../../components/DataTable";

const FundTransHistoryTable = ({data}) => {
  const columns = [
    { id: "sr", label: "Sr.", minWidth: 20 },
    {
      id: "amount",
      label: "Amount",
      minWidth: 100,
    },
    {
      id: "receiver_id",
      label: "Transfer To",
      minWidth: 100,
    },
    {
      id: "name",
      label: "Receiver name",
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
    {
      id: "status",
      label: "Status",
      minWidth: 100,
    },
  ];

  function createData(
    sr,
    user_id,
    amount,
    receiver_id,
    name,
    date,
    transaction_id,
    status,
  ) {
    return {
      sr,
      user_id,
      amount,
      receiver_id,
      name,
      date,
      transaction_id,
      status,
    };
  }

  const rows = data?.history?.map((d, i) =>
    createData(
      i + 1,
      d.user_id,
      "$" + d.requested_amount,
      d.receiver_id,
      d?.name,
      new Date(d.date).toDateString(),
      d.transaction_id,
      <span
        style={{
          borderRadius: "50px",
          padding: "5px 8px",
          fontSize: "13px",
          textTransform: "capitalize",
          backgroundColor:
            d.status === "pending"
              ? "rgba(255,189,90,.2)"
              : d.status === "success"
              ? "rgba(28,213,174,.2)"
              : "rgba(247,79,117,.2)",
          color:
            d.status === "pending"
              ? "#ffc107"
              : d.status === "success"
              ? "#38cab3"
              : "#f74f75",
        }}
      >
        {d.status}
      </span>
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

export default FundTransHistoryTable;
