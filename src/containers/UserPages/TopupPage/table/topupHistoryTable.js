import React from "react";
import DataTable from "../../../../components/DataTable";
// import { useTopupHistoryQuery } from "../../../../Services/topupApi";

const TopupHistoryTable = ({data}) => {
  const columns = [
    { id: "sr", label: "Sr.", minWidth: 20 },
    { id: "user_id", label: "User ID", minWidth: 150 },
    {
      id: "packages",
      label: "Package",
      minWidth: 150,
    },
    {
      id: "date",
      label: "Topup Date",
      minWidth: 120,
    },
    {
      id: "status",
      label: "Status",
      minWidth: 80,
    },
  ];
  
  function createData(sr, user_id, packages, date, status) {
    return {
      sr,
      user_id,
      packages,
      date,
      status,
    };
  }
  
  const rows = data?.history?.map((d,i) =>
    createData(
      i+1,
      d.user_id,
      "$" + d.packages,
      new Date(d.date).toDateString(),
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

export default TopupHistoryTable;
