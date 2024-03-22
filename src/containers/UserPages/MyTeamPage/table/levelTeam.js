import React from "react";
import DataTable from "../../../../components/DataTable";

const LevelTeam = ({ data }) => {
  const columns = [
    { id: "sn", label: "S.N", minWidth: 20 },
    {
      id: "user_id",
      label: "User ID",
      minWidth: 80,
    },
    {
      id: "name",
      label: "Full Name",
      minWidth: 100,
    },
    {
      id: "sponsor_id",
      label: "Sponsor ID",
      minWidth: 80,
    },
    {
      id: "level",
      label: "Level",
      minWidth: 20,
    },
    {
      id: "joining_date",
      label: "Joining Date",
      minWidth: 120,
    },
    {
      id: "activation_date",
      label: "Activation date",
      minWidth: 120,
    },
  ];

  function createData(
    sn,
    user_id,
    name,
    sponsor_id,
    level,
    joining_date,
    activation_date
  ) {
    return {
      sn,
      user_id,
      name,
      sponsor_id,
      level,
      joining_date,
      activation_date,
    };
  }
  const rows = data?.map((d, i) =>
    createData(
      i + 1,
      d?.user_id,
      d?.name,
      d?.sponsor_id,
      d?.level,
      new Date(+d.joining_date).toDateString(),
      d.topup_activation_date ? new Date(+d?.topup_activation_date).toDateString() : d?.activation_date ? new Date(+d?.activation_date).toDateString() : "N/A"
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

export default LevelTeam;
