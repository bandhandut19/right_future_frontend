import React from "react";
import DataTable from "../../../../components/DataTable";
const columns = [
  { id: "id", label: "S.N", minWidth: 20 },
  { id: "user_id", label: "User ID", minWidth: 40 },
  {
    id: "user_name",
    label: "User Name",
    minWidth: 80,
  },
  {
    id: "email",
    label: "Email",
    minWidth: 100,
  },
  {
    id: "message",
    label: "Message",
    minWidth: 120,
  },
];

const ContactusHistoryTable = ({ data ,showMessage}) => {
  function createData(id, user_id, user_name, email, message) {
    return {
      id,
      user_id,
      user_name,
      email,
      message,
    };
  }

  const rows = data?.history?.map((d, i) =>
    createData(
      i + 1,
      d?.user_id,
      d?.user_name,
      d?.email,
      <span
        style={{
          cursor: "pointer",
          textDecoration: "underline",
        }}
        onClick={() => showMessage(d)}
      >
        {d?.message?.length > 40
          ? d?.message?.slice(0, 40 - 1) + "..."
          : d?.message}
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

export default ContactusHistoryTable;
