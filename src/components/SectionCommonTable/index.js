import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "../Button";
// import { AiOutlineSearch } from "react-icons/ai";
import CardLayout from "../CardLayout";
import LevelTeamFilter from "../Filter/LevelTeamFilter";
import Input from "../Input";

const SectionCommonTable = ({
  wrapperClassName,
  cardStyle,
  sectionTableTitle,
  countContainer,
  table,
  calculateCredit,
  calculateDebit,
  calculateContainer,
  data,
  toDay,
  lastDay,
  firstDay,
  setFilterData,
  addGiftAllUser,
  setAllTeamSearch,
  dataTeam,
}) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (data) {
      const filterData = data?.filter((dt) => {
        if (search === "") {
          return dt;
        } else if (
          dt?.user_id?.toLowerCase() === search?.toLowerCase()
          // dt?.sponsor_id?.toLowerCase() === search?.toLowerCase() ||
          // dt?.email?.toLowerCase()?.includes(search?.toLowerCase())
        ) {
          return dt;
        }
      });
      setFilterData(filterData);
    }
  }, [search]);

  return (
    <div className={`rf_sectiontable_wrapper ${wrapperClassName}`}>
      <CardLayout style={cardStyle} className="rf_sectiontable_card">
        <div className="rf_sectiontable_title">
          <div className="rf_sectiontable_title_container">
            <h2>{sectionTableTitle}</h2>
            {addGiftAllUser && (
              <Button
                className="rf_giftAllButton"
                type="button"
                onClick={() => addGiftAllUser()}
                // hidden={lastDay}
                disabled={!(toDay === lastDay || toDay === firstDay)}
                style={{
                  display: (toDay === lastDay || toDay === firstDay) ? "inline-block" : "none",
                }}
              >
                Gift Send To All
              </Button>
            )}
          </div>
          {countContainer && (
            <div className="rf_sectiontable_balance">
              <h2>{countContainer}</h2>
            </div>
          )}
          {data && setFilterData && (
            <div className="searchbar_input">
              <Input
                type="text"
                name="search"
                className="spacial_search_input"
                placeholder="Search user id or email..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          )}
        </div>
        {dataTeam && (
          <LevelTeamFilter
            setAllTeamSearch={setAllTeamSearch}
            dataTeam={dataTeam}
          />
        )}
        <div className="rf_sectiontable_table">{table}</div>
        {calculateContainer && (
          <div className="rf_sectiontable_calculate">
            {calculateCredit && (
              <h2 className="credit_balance">{calculateCredit}</h2>
            )}
            {calculateDebit && (
              <h2 className="debit_balance">{calculateDebit}</h2>
            )}
          </div>
        )}
      </CardLayout>
    </div>
  );
};

export default SectionCommonTable;
