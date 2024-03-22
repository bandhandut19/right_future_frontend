import React from "react";
import DataTable from "../../../../components/DataTable";

const AutoTradeReferralTable = ({data}) => {
  /* data fetch by RTK */
  // console.log(data);
  const columns = [
    { id: "sn", label: "S.N", minWidth: 20 },
    {
      id: "user_id",
      label: "User Id",
      minWidth: 120,
    },
    {
      id: "full_name",
      label: "Full Name",
      minWidth: 120,
    },
    {
      id: "packages",
      label: "Package",
      minWidth: 120,
    },
    {
      id: "amount",
      label: "Amount",
      minWidth: 80,
    },
    {
      id: "activation_date",
      label: "Activation Date",
      minWidth: 120,
    },
  ];

  function createData(sn,user_id, full_name, packages, amount, activation_date) {
    return { sn,user_id, full_name, packages, amount, activation_date };
  }

  const rows = data?.map((d, i) =>
    createData(
      i + 1,
      d?.incomeFromUserId,
      d?.incomeFromUserFullName,
      `$${d?.packages} ${d?.privilege ? "-" + d?.privilege : " "}`,
      "$" + d?.commissionAmount,
      d?.packagesStartDate,
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

export default AutoTradeReferralTable;
