import React from "react";
import HomeCard from "../HomePage/Home.Card";
import levelIncome from "../../../assets/dashboardIcon/level.png";
import BonanzaIncome from "../../../assets/dashboardIcon/reward.png";
import totalIncome from "../../../assets/dashboardIcon/income.png";
import BoosterIncome from "../../../assets/dashboardIcon/booster_income.png";
import InDirectIncome from "../../../assets/dashboardIcon/indriectincome.png";
import DirectIncome from "../../../assets/dashboardIcon/direct_income.png";
import withdrawIncome from "../../../assets/dashboardIcon/withdraw_income.png";
import AutoPoolIncome from "../../../assets/dashboardIcon/autopool_income.png";
import ThisMonthsTeamIcon from "../../../assets/dashboardIcon/team2.png";
// import monthIncome from "../../../assets/dashboardIcon/month_income.png";
import RoyaltyIncome from "../../../assets/dashboardIcon/royalty_income.png";
import GiftIncome from "../../../assets/dashboardIcon/bonus.png";
import TotalDeposit from "../../../assets/dashboardIcon/withdraw-money.png";
import {
  useGetAllWalletQuery,
  useGetAutoPoolHistoryQuery,
} from "../../../Services/walletApi";
import { useGetMonthlyDirectMemberQuery } from "../../../Services/userApi";
import Loading from "../../../components/Loading/Loading";
import { AutoPoolTotalIncomeCal } from "../../../config/autoPoolTotalIncomeCalculate";
import { useGetBoosterUpgradeUserIncomeQuery } from "../../../Services/earningApi";

const Wallet = () => {
  const { data: boosterUpgrade, isLoading: isLoadingBoosterUpgrade } = useGetBoosterUpgradeUserIncomeQuery();
  const totalSum = boosterUpgrade?.data?.reduce((acc, curr) => {
    return acc + curr?.totalIncome;
  }, 0);
  const { data: autoPoolData, isLoading } = useGetAutoPoolHistoryQuery();

  const { data } = useGetAllWalletQuery();
  const { data: MonthlyDirectMember } = useGetMonthlyDirectMemberQuery();
  if (isLoading || isLoadingBoosterUpgrade) {
    return <Loading />;
  }
  
  return (
    <div className="wallet_page_wrapper">
      <div className="rf_dash_content card_row">
        <HomeCard
          cardName="Total Income"
          cardValue={`$${
            data?.active_amount ? (data?.active_amount + totalSum) : "0"
          }`}
          icon={totalIncome}
          bgColor="#6C4AB6"
          cardBgColor="#fe9f43"
        />
        <HomeCard
          cardName="Total Auto Pool Income"
          cardValue={`$${
            AutoPoolTotalIncomeCal(autoPoolData)
              ? AutoPoolTotalIncomeCal(autoPoolData)
              : "0"
          }`}
          icon={DirectIncome}
          linkText="view details"
          bgColor="#38cab3"
          cardBgColor="#00d0e7"
        />
        <HomeCard
            cardName="Auto Trade Income"
            cardValue={`$${
              data?.autoTradeIncome                         
                ? parseFloat(data?.autoTradeIncome).toFixed(2)
                : "0"
            }`}
            icon={AutoPoolIncome}
            bgColor="#6C4AB6"
            cardBgColor="#28c66f"
          />
          <HomeCard
            cardName="Auto Trade Referral"
            cardValue={`$${
              data?.autoTradeReferralIncome              
                ? parseFloat(data?.autoTradeReferralIncome).toFixed(2)
                : "0"
            }`}
            icon={AutoPoolIncome}
            bgColor="#38cab3"
            cardBgColor="#fe9f43"
          />
        <HomeCard
          cardName="Direct Income"
          cardValue={`$${
            data?.direct_income
              ? parseFloat(data?.direct_income).toFixed(2)
              : "0"
          }`}
          icon={DirectIncome}
          linkText="view details"
          bgColor="#38cab3"
          cardBgColor="#00d0e7"
        />
        <HomeCard
          cardName="Indirect Income"
          cardValue={`$${
            data?.indirect_income
              ? parseFloat(data?.indirect_income).toFixed(2)
              : "0"
          }`}
          icon={InDirectIncome}
          linkText="view details"
          bgColor="#ffbd5a"
          cardBgColor="#28c66f"
        />
        <HomeCard
          cardName="Active Auto Pool Income "
          cardValue={`$${
            data?.autopool_income
              ? parseFloat(data?.autopool_income).toFixed(2)
              : "0"
          }`}
          icon={AutoPoolIncome}
          bgColor="#F49D1A"
          cardBgColor="#fe9f43"
        />
        <HomeCard
          cardName="Bonanza Income"
          cardValue={`$${
            data?.reward_income
              ? parseFloat(data?.reward_income).toFixed(2)
              : "0"
          }`}
          icon={BonanzaIncome}
          bgColor="#4ec2f0"
          cardBgColor="#00d0e7"
        />
        <HomeCard
          cardName="Income Level Update"
          cardValue={`$${
            data?.level_update_income
              ? parseFloat(data?.level_update_income).toFixed(2)
              : "0"
          }`}
          icon={levelIncome}
          bgColor="#5F8D4E"
          cardBgColor="#28c66f"
        />{" "}
        <HomeCard
          cardName="Direct Withdraw Income"
          cardValue={`$${
            data?.direct_withdraw_income ||
            data?.direct_fund_transfer_income ||
            data?.user_activation_income
              ? parseFloat(
                  data?.direct_withdraw_income +
                    data?.direct_fund_transfer_income +
                    data?.user_activation_income
                ).toFixed(2)
              : "0"
          }`}
          icon={withdrawIncome}
          bgColor="#9ED5C5"
          cardBgColor="#fe9f43"
        />
        <HomeCard
          cardName="Booster Income"
          cardValue={`$${data?.booster_income ? data?.booster_income : "0"}`}
          icon={BoosterIncome}
          bgColor="#38cab3"
          cardBgColor="#00d0e7"
        />
        <HomeCard
          cardName="Booster Upgrade Income"
          cardValue={`$${totalSum ? totalSum : "0"}`}
          icon={BoosterIncome}
          bgColor="#9ED5C5"
          cardBgColor="#28c66f"
        />
        <HomeCard
          cardName="Gift Income"
          cardValue={`$${data?.gift_income ? data?.gift_income : "0"}`}
          icon={GiftIncome}
          bgColor="#ffbd5a"
          cardBgColor="#fe9f43"
        />
        <HomeCard
          cardName="Royalty Income"
          cardValue={`$${data?.royalty_income ? data?.royalty_income : "0"}`}
          icon={RoyaltyIncome}
          bgColor="#6C4AB6"
          cardBgColor="#00d0e7"
        />
        {/* <HomeCard
          cardName="This Month Income"
          cardValue={`${
            MonthlyDirectMember?.Current_direct_member
              ? MonthlyDirectMember?.Current_direct_member
              : "0"
          }`}
          icon={monthIncome}
          bgColor="#FF6464"
        /> */}
        <HomeCard
          cardName="Total Deposit"
          cardValue={`$${data?.total_deposite ? data?.total_deposite : "0"}`}
          icon={TotalDeposit}
          bgColor="#4ec2f0"
          cardBgColor="#28c66f"
        />
        <HomeCard
          cardName="Active Income"
          cardValue={`$${
            data?.total_income ? parseFloat(data?.total_income).toFixed(2) : "0"
          }`}
          icon={totalIncome}
          bgColor="#6C4AB6"
          cardBgColor="#fe9f43"
        />
        <HomeCard
          cardName="This Month Direct Team"
          cardValue={`${
            MonthlyDirectMember?.Current_direct_member
              ? MonthlyDirectMember?.Current_direct_member
              : "0"
          }`}
          icon={ThisMonthsTeamIcon}
          bgColor="#D989B5"
          cardBgColor="#00d0e7"
        />
      </div>
    </div>
  );
};

export default Wallet;
