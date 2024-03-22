import React from "react";
import SectionCommonTable from "../../../components/SectionCommonTable";
import DirectTable from "./table/directTable";
import { useLevelTeamListQuery } from "../../../Services/userApi";
import Loading from "../../../components/Loading/Loading";

const DirectTeamPage = () => {
  const { data, isLoading } = useLevelTeamListQuery();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <SectionCommonTable
        wrapperClassName="directteam_table"
        cardStyle={{ backgroundColor: "#fff" }}
        sectionTableTitle="My Direct Team"
        table={<DirectTable data={data} />}
      />
    </>
  );
};

export default DirectTeamPage;
