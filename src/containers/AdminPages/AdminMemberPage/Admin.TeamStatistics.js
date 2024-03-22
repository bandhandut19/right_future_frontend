import React, { useState } from "react";
import team from "../../../assets/dashboardIcon/team2.png";
import level1 from "../../../assets/dashboardIcon/levelicon/level1.png";
import level2 from "../../../assets/dashboardIcon/levelicon/level2.png";
import level3 from "../../../assets/dashboardIcon/levelicon/level3.png";
import level4 from "../../../assets/dashboardIcon/levelicon/level4.png";
import level5 from "../../../assets/dashboardIcon/levelicon/level5.png";
import level6 from "../../../assets/dashboardIcon/levelicon/level6.png";
import level7 from "../../../assets/dashboardIcon/levelicon/level7.png";
import level8 from "../../../assets/dashboardIcon/levelicon/level8.png";
import directTeam from "../../../assets/dashboardIcon/directTeam.png";
import roiIcon from "../../../assets/dashboardIcon/roi.png";
import userListIcon from "../../../assets/dashboardIcon/level.png";
import teamIcon from "../../../assets/dashboardIcon/team.png";
import totalActiveTeam from "../../../assets/dashboardIcon/totalactiveTeam.png";
import Input from "../../../components/Input";
import HomeCard from "../../UserPages/HomePage/Home.Card";
import CardLayout from "../../../components/CardLayout";
import Button from "../../../components/Button";
import { useAddTeamStatisticsMutation } from "../../../Services/userApi";
import Loading from "../../../components/Loading/Loading";

const TeamStatistics = () => {
  const data = [];

  const [
    addTeamStatistics,
    { error: teamStatisticsError, data: TeamStatisticsResponse, isLoading },
  ] = useAddTeamStatisticsMutation();

  const [value, setValue] = useState({
    username: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      user_id: value.username.toUpperCase().trim(),
    };
    // console.log(obj);
    addTeamStatistics(obj);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="tp_updatepassword_page_wrapper">
      <CardLayout
        style={{ backgroundColor: "#fff" }}
        className="tp_accountpassword_card"
      >
        <div className="tp_accountpassword_title">
          <h2>Users Info</h2>
        </div>
        <div className="tp_accountpassword_field">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <Input
                label=""
                type="text"
                value={value.username}
                name="username"
                placeholder="Search Username..."
                onChange={handleChange}
                inputGroupClass="left"
              />
            </div>
            <div className="form_group">
              <Button type="submit" className="submit_btn" disabled={false}>
                {false ? "Loading..." : "Search"}
              </Button>
            </div>
          </form>
        </div>
        {true ? (
          <div className="team_over_view">
            <div className="tp_dash_content_item">
              <div className="tp_dash_content card_row">
                {TeamStatisticsResponse?.name ? (
                  <HomeCard
                    cardName="Full Name"
                    cardValue={TeamStatisticsResponse?.name}
                    icon={team}
                    bgColor="#38CAB3"
                    cardBottom={true}
                    cardBgColor="#fe9f43"
                  />
                ) : null}
                {TeamStatisticsResponse?.total_team ? (
                  <HomeCard
                    cardName="Total Team"
                    cardValue={
                      TeamStatisticsResponse?.total_team
                        ? TeamStatisticsResponse?.total_team
                        : "0"
                    }
                    icon={team}
                    bgColor="#38CAB3"
                    cardBottom={true}
                    cardBgColor="#00d0e7"
                  />
                ) : null}
                {TeamStatisticsResponse?.direct_active_team ? (
                  <HomeCard
                    cardName="Direct Active Team"
                    cardValue={
                      TeamStatisticsResponse?.direct_active_team
                        ? TeamStatisticsResponse?.direct_active_team
                        : "0"
                    }
                    icon={directTeam}
                    bgColor="#59CE8F"
                    cardBottom={true}
                    cardBgColor="#00d0e7"
                  />
                ) : null}
                {TeamStatisticsResponse?.total_active_team ? (
                  <HomeCard
                    cardName="Total Active Team"
                    cardValue={
                      TeamStatisticsResponse?.total_active_team
                        ? TeamStatisticsResponse?.total_active_team
                        : "0"
                    }
                    icon={totalActiveTeam}
                    bgColor="#42855B"
                    cardBottom={true}
                    cardBgColor="#28c66f"
                  />
                ) : null}
                {TeamStatisticsResponse?.level1 ? (
                  <HomeCard
                    cardName="Level 1"
                    cardValue={
                      TeamStatisticsResponse?.level1
                        ? TeamStatisticsResponse?.level1
                        : "0"
                    }
                    icon={level1}
                    bgColor="#F74F75"
                    cardBottom={true}
                    cardBgColor="#fe9f43"
                  />
                ) : null}
                {TeamStatisticsResponse?.level2 ? (
                  <HomeCard
                    cardName="level 2"
                    cardValue={
                      TeamStatisticsResponse?.level2
                        ? TeamStatisticsResponse?.level2
                        : "0"
                    }
                    icon={level2}
                    bgColor="#F74F75"
                    cardBottom={true}
                    cardBgColor="#00d0e7"
                  />
                ) : null}
                {TeamStatisticsResponse?.level3 ? (
                  <HomeCard
                    cardName="Level 3 "
                    cardValue={
                      TeamStatisticsResponse?.level3
                        ? TeamStatisticsResponse?.level3
                        : "0"
                    }
                    icon={level3}
                    bgColor="#F74F75"
                    cardBottom={true}
                    cardBgColor="#28c66f"
                  />
                ) : null}
                {TeamStatisticsResponse?.level4 ? (
                  <HomeCard
                    cardName="Level 4 "
                    cardValue={
                      TeamStatisticsResponse?.level4
                        ? TeamStatisticsResponse?.level4
                        : "0"
                    }
                    icon={level4}
                    bgColor="#F74F75"
                    cardBottom={true}
                    cardBgColor="#fe9f43"
                  />
                ) : null}
                {TeamStatisticsResponse?.level5 ? (
                  <HomeCard
                    cardName="Level 5 "
                    cardValue={
                      TeamStatisticsResponse?.level5
                        ? TeamStatisticsResponse?.level5
                        : "0"
                    }
                    icon={level5}
                    bgColor="#F74F75"
                    cardBottom={true}
                    cardBgColor="#00d0e7"
                  />
                ) : null}
                {TeamStatisticsResponse?.level6 ? (
                  <HomeCard
                    cardName="Level 6"
                    cardValue={
                      TeamStatisticsResponse?.level6
                        ? TeamStatisticsResponse?.level6
                        : "0"
                    }
                    icon={level6}
                    bgColor="#F74F75"
                    cardBottom={true}
                    cardBgColor="#28c66f"
                  />
                ) : null}
                {TeamStatisticsResponse?.level7 ? (
                  <HomeCard
                    cardName="Level 7 "
                    cardValue={
                      TeamStatisticsResponse?.level7
                        ? TeamStatisticsResponse?.level7
                        : "0"
                    }
                    icon={level7}
                    bgColor="#F74F75"
                    cardBottom={true}
                    cardBgColor="#fe9f43"
                  />
                ) : null}
                {TeamStatisticsResponse?.level8 ? (
                  <HomeCard
                    cardName="Level 8 "
                    cardValue={
                      TeamStatisticsResponse?.level8
                        ? TeamStatisticsResponse?.level8
                        : "0"
                    }
                    icon={level8}
                    bgColor="#F74F75"
                    cardBottom={true}
                    cardBgColor="#00d0e7"
                  />
                ) : null}
                {TeamStatisticsResponse?.active_amount ? (
                  <HomeCard
                    cardName="Total Income"
                    cardValue={`$${
                      TeamStatisticsResponse?.active_amount
                        ? parseFloat(
                            TeamStatisticsResponse?.active_amount
                          ).toFixed(2)
                        : "0"
                    }`}
                    icon={userListIcon}
                    bgColor="#F49D1A"
                    cardBgColor="#28c66f"
                  />
                ) : null}
                
                 {TeamStatisticsResponse?.wallet?.total_autopool_income ? (
                  <HomeCard
                    cardName="Total Auto Pool Income"
                    cardValue={`$${
                      TeamStatisticsResponse?.wallet?.total_autopool_income
                        ? parseFloat(
                            TeamStatisticsResponse?.wallet?.total_autopool_income
                          ).toFixed(2)
                        : "0"
                    }`}
                    icon={userListIcon}
                    bgColor="#38cab3"
                    cardBgColor="#fe9f43"
                  />
                ) : null}

                {TeamStatisticsResponse?.wallet?.total_income ? (
                  <HomeCard
                    cardName="Active Income"
                    cardValue={`$${
                      TeamStatisticsResponse?.wallet?.total_income
                        ? parseFloat(
                            TeamStatisticsResponse?.wallet?.total_income
                          ).toFixed(2)
                        : "0"
                    }`}
                    icon={userListIcon}
                    bgColor="#6C4AB6"
                    cardBgColor="#00d0e7"
                  />
                ) : null}

                {TeamStatisticsResponse?.wallet?.direct_income ? (
                  <HomeCard
                    cardName="Direct Income"
                    cardValue={`$${
                      TeamStatisticsResponse?.wallet?.direct_income
                        ? parseFloat(
                            TeamStatisticsResponse?.wallet?.direct_income
                          ).toFixed(2)
                        : "0"
                    }`}
                    icon={teamIcon}
                    linkText="view details"
                    bgColor="#38cab3"
                    cardBgColor="#28c66f"
                  />
                ) : null}
                {TeamStatisticsResponse?.wallet?.indirect_income ? (
                  <HomeCard
                    cardName="Indirect Income"
                    cardValue={`$${
                      TeamStatisticsResponse?.wallet?.indirect_income
                        ? parseFloat(
                            TeamStatisticsResponse?.wallet?.indirect_income
                          ).toFixed(2)
                        : "0"
                    }`}
                    icon={roiIcon}
                    linkText="view details"
                    bgColor="#ffbd5a"
                    cardBgColor="#fe9f43"
                  />
                ) : null}
                {TeamStatisticsResponse?.wallet?.autopool_income ? (
                  <HomeCard
                    cardName="Active Auto Pool Income"
                    cardValue={`$${
                      TeamStatisticsResponse?.wallet?.autopool_income
                        ? parseFloat(
                            TeamStatisticsResponse?.wallet?.autopool_income
                          ).toFixed(2)
                        : "0"
                    }`}
                    icon={userListIcon}
                    bgColor="#F49D1A"
                    cardBgColor="#00d0e7"
                  />
                ) : null}
                {TeamStatisticsResponse?.wallet?.reward_income ? (
                  <HomeCard
                    cardName="Bonanza Income"
                    cardValue={`$${
                      TeamStatisticsResponse?.wallet?.reward_income
                        ? parseFloat(
                            TeamStatisticsResponse?.wallet?.reward_income
                          ).toFixed(2)
                        : "0"
                    }`}
                    icon={userListIcon}
                    bgColor="#4ec2f0"
                    cardBgColor="#28c66f"
                  />
                ) : null}
                {TeamStatisticsResponse?.wallet?.income_level_update ? (
                  <HomeCard
                    cardName="Income Level Update"
                    cardValue={`$${
                      TeamStatisticsResponse?.wallet?.income_level_update
                        ? parseFloat(
                            TeamStatisticsResponse?.wallet?.income_level_update
                          ).toFixed(2)
                        : "0"
                    }`}
                    icon={userListIcon}
                    bgColor="#5F8D4E"
                    cardBgColor="#fe9f43"
                  />
                ) : null}
                {TeamStatisticsResponse?.wallet?.direct_withdraw_income ||
                TeamStatisticsResponse?.wallet?.direct_fund_transfer_income ||
                TeamStatisticsResponse?.wallet?.user_activation_income ? (
                  <HomeCard
                    cardName="Direct Withdraw Income"
                    cardValue={`$${
                      TeamStatisticsResponse?.wallet?.direct_withdraw_income ||
                      TeamStatisticsResponse?.wallet
                        ?.direct_fund_transfer_income ||
                      TeamStatisticsResponse?.wallet?.user_activation_income
                        ? parseFloat(
                            TeamStatisticsResponse?.wallet
                              ?.direct_withdraw_income
                          ) +
                          parseFloat(
                            TeamStatisticsResponse?.wallet
                              ?.user_activation_income
                          ) +
                          parseFloat(
                            TeamStatisticsResponse?.wallet
                              ?.direct_fund_transfer_income
                          )
                        : "0"
                    }`}
                    icon={userListIcon}
                    bgColor="#9ED5C5"
                    cardBgColor="#00d0e7"
                  />
                ) : null}
                {TeamStatisticsResponse?.wallet?.booster_income ? (
                  <HomeCard
                    cardName="Booster Income"
                    cardValue={`$${
                      TeamStatisticsResponse?.wallet?.booster_income
                        ? parseFloat(
                            TeamStatisticsResponse?.wallet?.booster_income
                          ).toFixed(2)
                        : "0"
                    }`}
                    icon={userListIcon}
                    bgColor="#38cab3"
                    cardBgColor="#fe9f43"
                  />
                ) : null}
                {TeamStatisticsResponse?.wallet?.gift_income ? (
                  <HomeCard
                    cardName="Gift Income"
                    cardValue={`$${
                      TeamStatisticsResponse?.wallet?.gift_income
                        ? parseFloat(
                            TeamStatisticsResponse?.wallet?.gift_income
                          ).toFixed(2)
                        : "0"
                    }`}
                    icon={userListIcon}
                    bgColor="#ffbd5a"
                    cardBgColor="#fe9f43"
                  />
                ) : null}
                {TeamStatisticsResponse?.wallet?.royalty_income ? (
                  <HomeCard
                    cardName="Royalty Income"
                    cardValue={`$${
                      TeamStatisticsResponse?.wallet?.royalty_income
                        ? parseFloat(
                            TeamStatisticsResponse?.wallet?.royalty_income
                          ).toFixed(2)
                        : "0"
                    }`}
                    icon={userListIcon}
                    bgColor="#6C4AB6"
                    cardBgColor="#00d0e7"
                  />
                ) : null}
                {TeamStatisticsResponse?.monthly_direct_team ? (
                  <HomeCard
                    cardName="This Month Direct Team "
                    cardValue={
                      TeamStatisticsResponse?.monthly_direct_team
                        ? TeamStatisticsResponse?.monthly_direct_team
                        : "0"
                    }
                    icon={teamIcon}
                    bgColor="#FF6464"
                    cardBgColor="#28c66f"
                  />
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <p className="team_data">{"not data found"}</p>
        )}
      </CardLayout>
    </div>
  );
};

export default TeamStatistics;
