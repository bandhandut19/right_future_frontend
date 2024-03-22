import React from "react";
import DataTable from "../../../../components/DataTable";

const DepositHistoryTable = ({data,showImageDetails}) => {
  const columns = [
    { id: "index", label: "Sr.", minWidth: 20 },
    { id: "user_id", label: "User ID", minWidth: 100 },
    { id: "user_name", label: "Name", minWidth: 100 },
    {
      id: "amount",
      label: "Amount",
      minWidth: 100,
    },
    {
      id: "date",
      label: "Date",
      minWidth: 120,
    },
    {
      id: "image",
      label: "Transaction Proof",
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
      minWidth: 80,
    },
  ];

  function createData(
    index,
    user_id,
    user_name,
    amount,
    date,
    image,
    transaction_id,
    status
  ) {
    return {
      index,
      user_id,
      user_name,
      amount,
      date,
      image,
      transaction_id,
      status,
    };
  }

  const rows = data?.history?.map((d, index) =>
    createData(
      index + 1,
      d.user_id,
      d.name,
      "$" + d.amount,
      new Date(d.date).toDateString(),
      <span
        onClick={() => showImageDetails(d)}
        style={{
          userSelect: "none",
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        <img style={{ width: "30px" ,height:"30px"}} src={d?.proof_pic?.avatar} alt=""></img>
      </span>,
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

export default DepositHistoryTable;
