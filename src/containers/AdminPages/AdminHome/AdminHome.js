import React from "react";
import HomeCard from "../../UserPages/HomePage/Home.Card";
import totalUserIcon from "../../../assets/dashboardIcon/team.png";
import blockUserIcon from "../../../assets/dashboardIcon/block-user.png";
import TotalWithdrawIcon from "../../../assets/dashboardIcon/withdraw-money.png";
import activeUserIcon from "../../../assets/dashboardIcon/active-user.png";
import pendingWithdrawIcon from "../../../assets/dashboardIcon/pending-payment.png";
import totalInvestmentIcon from "../../../assets/dashboardIcon/invest.png";
import totalAutoPool from "../../../assets/dashboardIcon/team2.png";
import totalRoyalty from "../../../assets/dashboardIcon/totalactiveTeam.png";
import depositIcon from "../../../assets/dashboardIcon/reward.png";
import { useGetAllUserQuery } from "../../../Services/userApi";
import {
  useGetAutopoolMembersAdminQuery,
  useGetAllBoosterIncomeIDsAdminQuery,
  useGetRoyaltyMembersAdminQuery,
} from "../../../Services/earningApi";
import Loading from "../../../components/Loading/Loading";

const AdminHome = () => {
  const { data, isLoading } = useGetAllUserQuery();
  const { data: AutopoolMembersList, isLoading: isLoadingMember } =
    useGetAutopoolMembersAdminQuery();
  const { data: BoosterMembersList, isLoading: isLoadingBoosterMember } =
    useGetAllBoosterIncomeIDsAdminQuery();
  const { data: GetRoyaltyMemberData, isLoading: isLoadingRoyaltyMember } =
    useGetRoyaltyMembersAdminQuery();

  let extraAutopoolEarning = 0;
  if (BoosterMembersList?.users?.length > 0) {
    extraAutopoolEarning = AutopoolMembersList?.users?.length * 20;
  }
  // console.log(extraAutopoolEarning);

  let extraBoosterEarning = 0;
  if (BoosterMembersList?.totalboosteruser > 0) {
    extraBoosterEarning = BoosterMembersList?.totalboosteruser * 10;
  }
  // console.log(extraBoosterEarning);

  if (
    isLoading ||
    isLoadingRoyaltyMember ||
    isLoadingBoosterMember ||
    isLoadingMember
  ) {
    return <Loading />;
  }
  return (
    <div className="rf_adminHome_wrapper">
      <div className="rf_section_title">
        <h2>Dashboard</h2>
      </div>
      <div className="rf_dash_content_item">
        <div className="rf_dash_content card_row">
          <HomeCard
            cardName="Total User"
            cardValue={data?.allUser ? data?.allUser : "0"}
            icon={totalUserIcon}
            linkText="view details"
            bgColor="#FF87B2"
            cardBgColor="#fe9f43"
          />
          <HomeCard
            cardName="Total Active User"
            cardValue={data?.activeUser ? data?.activeUser : "0"}
            icon={activeUserIcon}
            linkText="view details"
            bgColor="#ffbd5a"
            cardBgColor="#00d0e7"
          />
          
          <HomeCard
            cardName="Pending Withdraw"
            cardValue={`$${
              data?.pendingWithdraws
                ? parseFloat(data?.pendingWithdraws)?.toFixed(2)
                : "0"
            }`}
            icon={pendingWithdrawIcon}
            linkText="view details"
            bgColor="#4ec2f0"
            cardBgColor="#28c66f"
          />
          <HomeCard
            cardName="Complete Withdraw"
            cardValue={`$${
              data?.allWithdraw
                ? parseFloat(data?.allWithdraw)?.toFixed(2)
                : "0"
            }`}
            icon={TotalWithdrawIcon}
            linkText="view details"
            bgColor="#38cab3"
            cardBgColor="#fe9f43"
          />
          <HomeCard
            cardName="Total AutoPool Members"
            cardValue={`${
              AutopoolMembersList?.users
                ? AutopoolMembersList?.users?.length
                : "0"
            }`}
            icon={totalAutoPool}
            linkText="view details"
            bgColor="#18a7b5"
            cardBgColor="#00d0e7"
          />
          <HomeCard
            cardName="Total Booster IDs"
            cardValue={`${
              BoosterMembersList?.totalboosteruser
                ? BoosterMembersList?.totalboosteruser
                : "0"
            }`}
            icon={totalAutoPool}
            linkText="view details"
            bgColor="#ffbd5a"
            cardBgColor="#28c66f"
          />
          <HomeCard
            cardName="Total Royalty Members"
            cardValue={`${
              GetRoyaltyMemberData ? GetRoyaltyMemberData.length : "0"
            }`}
            icon={totalRoyalty}
            linkText="view details"
            bgColor="#39bd57"
            cardBgColor="#fe9f43"
          />
          <HomeCard
            cardName="Total Admin Earning"
            cardValue={`$${
              data?.totalAdminEarn
                ? parseFloat(
                    data?.totalAdminEarn + extraAutopoolEarning
                  ).toFixed(2)
                : "0"
            }`}
            icon={totalInvestmentIcon}
            linkText="view details"
            bgColor="#f74f75"
            cardBgColor="#00d0e7"
          />
          <HomeCard
            cardName="Blocked User"
            cardValue={data?.blockUser ? data?.blockUser : "0"}
            icon={blockUserIcon}
            linkText="view details"
            bgColor="#ffbd5a"
            cardBgColor="#28c66f"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
