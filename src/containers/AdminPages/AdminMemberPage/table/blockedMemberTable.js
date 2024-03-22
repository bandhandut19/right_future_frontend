import React from "react";
import Button from "../../../../components/Button";
import DataTable from "../../../../components/DataTable";

const columns = [
  { id: "sn", label: "S.N", minWidth: 20 },
  { id: "userId", label: "User ID", minWidth: 100 },
  {
    id: "fullName",
    label: "Full Name",
    minWidth: 80,
  },
  {
    id: "sponsorId",
    label: "Sponsor ID",
    minWidth: 80,
  },
  {
    id: "mobile",
    label: "Mobile",
    minWidth: 80,
  },
  {
    id: "email",
    label: "Email",
    minWidth: 100,
  },
  {
    id: "joining_date",
    label: "Joining Date",
    minWidth: 120,
  },
  {
    id: "activation_date",
    label: "Activation Date",
    minWidth: 120,
  },
  {
    id: "action",
    label: "Action",
    minWidth: 80,
  },
];

const BlockedMemberTable = ({ data, blockHandler, deleteHandler }) => {
  function createData(
    sn,
    userId,
    fullName,
    sponsorId,
    mobile,
    email,
    joining_date,
    activation_date,
    action
  ) {
    return {
      sn,
      userId,
      fullName,
      sponsorId,
      mobile,
      email,
      joining_date,
      activation_date,
      action,
    };
  }

  const rows = data?.map((d, index) =>
    createData(
      index + 1,
      d.user_id,
      d.name,
      d.sponsor_id,
      d.mobile,
      d.email,
      new Date(parseInt(d?.join_date)).toDateString(),
      d?.topup_activation_date
        ? parseInt(d?.topup_activation_date)
          ? new Date(parseInt(d?.topup_activation_date)).toDateString()
          : d?.topup_activation_date
        : "--",
      <p style={{ display: "flex" }}>
        <Button
          type="button"
          onClick={() => blockHandler(d)}
          style={{
            marginRight: "5px",
            border: "none",
            borderRadius: "5px",
            padding: "5px 10px",
            color: "white",
            cursor: "pointer",
            backgroundColor: "rgb(41 156 13)",
          }}
        >
          Unblock
        </Button>
        <Button
          type="button"
          onClick={() => deleteHandler(d)}
          style={{
            marginRight: "5px",
            border: "none",
            borderRadius: "5px",
            padding: "5px 10px",
            color: "white",
            cursor: "pointer",
            backgroundColor: "rgb(254 0 0)",
          }}
        >
          Delete
        </Button>
      </p>
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

export default BlockedMemberTable;
