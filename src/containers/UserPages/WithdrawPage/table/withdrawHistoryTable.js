import React from "react";
import DataTable from "../../../../components/DataTable";
import { useGetWithdrawHistoryQuery } from "../../../../Services/walletApi";

const WithdrawHistoryTable = () => {
  /* data fetch by RTK */
  const { data } = useGetWithdrawHistoryQuery();

  const columns = [
    { id: "id", label: "Sr.", minWidth: 20 },
    { id: "user_id", label: "User ID", minWidth: 100 },
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
    id,
    user_id,
    date,
    request_amount,
    transaction_id,
    status
  ) {
    return {
      id,
      user_id,
      date,
      request_amount,
      transaction_id,
      status,
    };
  }

  const rows = data?.history?.map((d, i) =>
    createData(
      i + 1,
      d.user_id,
      new Date(d.date).toDateString(),
      "$" + parseFloat(d?.request_amount).toFixed(3),
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

export default WithdrawHistoryTable;
