import React from "react";
import DataTable from "../../../../components/DataTable";

const AutoPoolIncomeTable = ({ data }) => {
  /* data fetch by RTK */
  console.log(data);
  const columns = [
    { id: "sn", label: "S.N", minWidth: 20 },
    { id: "level_01", label: "Level 01", minWidth: 100 },
    { id: "level_02", label: "Level 02", minWidth: 100 },
    { id: "total_balance", label: "Total Balance", minWidth: 100 },
  ];

  function createData(sn, level_01, level_02, total_balance) {
    return { sn, level_01, level_02, total_balance };
  }

  const rows = data?.level_income?.map((d, i) =>
    createData(i + 1, d.level_01, d.level_02, d.total_balance)
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

export default AutoPoolIncomeTable;
