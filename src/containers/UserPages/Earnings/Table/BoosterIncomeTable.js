import React from "react";
import DataTable from "../../../../components/DataTable";

const BoosterIncomeTable = () => {
  const data =[];
  /* data fetch by RTK */
  // console.log(data);
  const columns = [
    { id: "sn", label: "S.N", minWidth: 20 },
    {
      id: "amount",
      label: "Amount",
      minWidth: 80,
    },
    {
      id: "level",
      label: "Level",
      minWidth: 80,
    },
    {
      id: "date",
      label: "Date",
      minWidth: 120,
    },
    {
      id: "user_id",
      label: "User Id",
      minWidth: 120,
    },
    // {
    //   id: "transaction_id",
    //   label: "Transaction ID",
    //   minWidth: 100,
    // },
  ];

  function createData(sn, amount, level, date, user_id, transaction_id) {
    return { sn, amount, level, date, user_id, transaction_id };
  }

  
  // const updata = [];
  // for (let i = 0; i < data?.length; i++) {
  //   for (let j = 0; j < data[i]?.length; j++) {
  //     updata.push(data[i][j]);
  //   }
  // }

  const rows = data?.map((d, i) =>
    createData(
      i + 1,
      "$" + d?.amount,
      d?.level,
      new Date(d.updatedAt).toDateString(),
      d?.child?.includes("dummy") ? d?.child?.slice(9) : d?.child
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

export default BoosterIncomeTable;
