import React, { useState } from "react";
import Loading from "../../../components/Loading/Loading";
import SectionCommonTable from "../../../components/SectionCommonTable";
import { useLevelTeamListQuery } from "../../../Services/userApi";
import LevelTeam from "./table/levelTeam";

const LevelTeamHistory = () => {
  const { data, isLoading } = useLevelTeamListQuery();
  const [allTeamSearch, setAllTeamSearch] = useState([]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <SectionCommonTable
        dataTeam={data?.level}
        setAllTeamSearch={setAllTeamSearch}
        wrapperClassName="levelteam_table"
        cardStyle={{ backgroundColor: "#fff" }}
        sectionTableTitle="Level Team"
        table={<LevelTeam data={allTeamSearch?.length >= 0 ? allTeamSearch : data?.level} />}
      />
    </>
  );
};

export default LevelTeamHistory;
