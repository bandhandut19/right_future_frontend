import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import CardLayout from "../../../components/CardLayout";
import Select from "../../../components/Select";
import { useGetAllBonanzaAchieverListQuery, useGetSingleBonanzaAchieveMutation } from "../../../Services/earningApi";

const BonanzaAchiever = () => {
  const [searchUser, { data: searchData, isLoading }] = useGetSingleBonanzaAchieveMutation()
  const { data } = useGetAllBonanzaAchieverListQuery();
  const [options, setOptions] = useState([])
  const [value, setValue] = useState('')



  useEffect(() => {
    const opt = data?.map(d => d?.user_id)
    setOptions(opt)
  }, [data])



  const handleSubmit = () => {
    console.log(".............")
  }

  const handleChangeIncomeType = (e) => {
    setValue(e.target.value)
    const obj = {
      user_id: e.target.value
    }
    searchUser(obj)
  }

  const directMember = searchData?.direct_member_count;
  const percentage = Math.round(
    ((directMember > 10 ? 10 : directMember) / 10) * 100
  );
  const indirectMember = searchData?.indirect_member_count;
  const Indpercentage = Math.round(
    ((indirectMember > 100 ? 100 : indirectMember) / 100) * 100
  );

  return (
    <>
      <div className="rf_autopool">
        <CardLayout
          style={{ backgroundColor: "#fff" }}
          className="rf_autopool_form_card"
        >
          <div className="rf_section_title">
            <h2>Bonanza Achiever</h2>
          </div>
          <div className="rf_autopool_page_content">
            <form onSubmit={handleSubmit}>
              <div className="form_group" style={{ display: "inherit" }}>
                <Select
                  label="Bonanza Achiever List"
                  className="select_field"
                  value={value}
                  name="amount_type"
                  onChange={handleChangeIncomeType}
                  options={options || []}
                  isRequired={true}
                  autoComplete="off"
                />
              </div>
            </form>
          </div>

          {searchData && (
            <div className="offer-box">
              <span className="subTitle">Direct Active members: {directMember > 0 ? directMember : 0} </span>
              <div className="progress-bar">
                <span className="progress" style={{ width: `${percentage}%` }}>
                  {directMember > 0 && (
                      <span className="tooltip">{directMember}</span>
                    )}
                </span>
              </div>
              <span className="subTitle">Indirect Active members: {Indpercentage > 0 ? Indpercentage : 0} </span>
              <div className="progress-bar">
                <span className="progress" style={{ width: `${Indpercentage}%` }}>
                  {Indpercentage > 0 && (
                      <span className="tooltip">{Indpercentage}</span>
                    )}
                </span>
              </div>
            </div>
          )}

        </CardLayout>
      </div>
    </>
  );
};

export default BonanzaAchiever;
