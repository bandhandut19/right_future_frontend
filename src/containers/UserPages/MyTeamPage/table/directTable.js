import React from "react";
import DataTable from "../../../../components/DataTable";

const DirectTable = ({ data }) => {
  console.log(data)
  const columns = [
    { id: "sn", label: "S.N", minWidth: 20 },
    {
      id: "user_id",
      label: "User ID",
      minWidth: 40,
    },
    {
      id: "name",
      label: "Full Name",
      minWidth: 100,
    },
    // {
    //   id: "mobile",
    //   label: "Mobile",
    //   minWidth: 100,
    // },
    // {
    //   id: "email",
    //   label: "Email",
    //   minWidth: 100,
    // },
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
    mobile,
    email,
    level,
    joining_date,
    activation_date
  ) {
    return {
      sn,
      user_id,
      name,
      mobile,
      email,
      level,
      joining_date,
      activation_date,
    };
  }

  const directTeamData = data?.level?.filter((team) => team.level === "1");
  // console.log(directTeamData);
  // console.log(data?.level?.map((d,i)=>d.activation_date));
  const rows = directTeamData?.map((d, i) =>
    createData(
      i + 1,
      d?.user_id,
      d?.name,
      d?.mobile,
      d?.email,
      d?.level,
      new Date(+d.joining_date).toDateString(),
      d.topup_activation_date ? new Date(+d?.topup_activation_date).toDateString() : d?.activation_date ? new Date(+d?.activation_date).toDateString() : "N/A"
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

export default DirectTable;
