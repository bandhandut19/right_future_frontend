import React from "react";
import DataTable from "../../../../components/DataTable";

const AllAutoTradeWithdrawTable = ({ data, showDetails, statusChange }) => {
  const columns = [
    { id: "sr", label: "Sr.", minWidth: 20 },
    { id: "userId", label: "User ID", minWidth: 100 },
    {
      id: "date",
      label: "Date",
      minWidth: 120,
    },
    {
      id: "request_amount",
      label: "Request Amount",
      minWidth: 110,
    },
    {
      id: "after_charge",
      label: "After Charge",
      minWidth: 110,
    },
    {
      id: "current_balance",
      label: "Current Balance",
      minWidth: 110,
    },
    {
      id: "transaction_id",
      label: "Transaction ID",
      minWidth: 110,
    },
    {
      id: "action",
      label: "Action",
      minWidth: 100,
    },
  ];
  function createData(
    sr,
    userId,
    date,
    request_amount,
    after_charge,
    current_balance,
    transaction_id,
    action
  ) {
    return {
      sr,
      userId,
      date,
      request_amount,
      after_charge,
      current_balance,
      transaction_id,
      action,
    };
  }

  const rows = data?.map((d, index) =>
    createData(
      index + 1,
      d?.user_id,
      new Date(d?.date).toDateString(),
      "$" + parseFloat(d?.request_amount)?.toFixed(2),
      "$" + parseFloat(d?.amount_after_charge)?.toFixed(2),
      "$" + parseFloat(d?.current_amount)?.toFixed(2),
      <span
        onClick={() => showDetails(d)}
        style={{
          userSelect: "none",
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        {d?.transaction_id}
      </span>,
      <span>
        <select
          name="status"
          style={{
            border: "none",
            outline: "none",
            padding: "5px 8px",
            borderRadius: "5px",
            textTransform: "capitalize",
            backgroundColor:
              d?.status === "pending"
                ? "rgba(255,189,90,.2)"
                : d.status === "success"
                ? "rgba(28,213,174,.2)"
                : "rgba(247,79,117,.2)",
            color:
              d?.status === "pending"
                ? "#ffc107"
                : d.status === "success"
                ? "#38cab3"
                : "#f74f75",
          }}
          value={d?.status}
          onChange={(e) => statusChange(e.target.value, d?.transaction_id)}
        >
          <option value="pending">pending</option>
          <option value="success">success</option>
          <option value="reject">reject</option>
        </select>
      </span>
    )
  );
  // console.log(data);
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

export default AllAutoTradeWithdrawTable;
