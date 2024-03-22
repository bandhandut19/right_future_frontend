import React from "react";
import DataTable from "../../../../components/DataTable";

const AutoTradeUserTopupHistoryTable = ({ data }) => {
  const columns = [
    { id: "sr", label: "Sr.", minWidth: 20 },
    { id: "user_id", label: "User ID", minWidth: 150 },
    {
      id: "full_name",
      label: "Full Name",
      minWidth: 150,
    },
    {
      id: "packages",
      label: "Package",
      minWidth: 150,
    },
    {
      id: "start_date",
      label: "Start Date",
      minWidth: 150,
    },
    {
      id: "end_date",
      label: "End Date",
      minWidth: 120,
    },
  ];

  function createData(sr, user_id,full_name, packages, start_date, end_date) {
    return {sr, user_id, packages,full_name, start_date, end_date};
  }

  const rows = data?.map((d, i) =>
    createData(
      i + 1,
      d?.userId,
      d?.fullName,
      `$${d?.packages} ${d?.privilege ? "-" + d?.privilege : " "}`,
      d?.startDate,
      d?.endDate,
    )
  );

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

export default AutoTradeUserTopupHistoryTable;
