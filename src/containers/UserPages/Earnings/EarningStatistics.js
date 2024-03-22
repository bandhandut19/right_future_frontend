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
// import monthIncome from "../../../assets/dashboardIcon/month_income.png";
import GiftIncome from "../../../assets/dashboardIcon/bonus.png";
import RoyaltyIncome from "../../../assets/dashboardIcon/royalty_income.png";
import {
  useGetAllWalletQuery,
  useGetAutoPoolHistoryQuery,
} from "../../../Services/walletApi";
import Loading from "../../../components/Loading/Loading";
import { AutoPoolTotalIncomeCal } from "../../../config/autoPoolTotalIncomeCalculate";

const EarningStatistics = () => {
  const { data } = useGetAllWalletQuery();
  const { data: autoPoolData, isLoading } = useGetAutoPoolHistoryQuery();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="team_over_view">
      <div className="rf_dash_content_item">
        <div className="rf_dash_content card_row">
          <HomeCard
            cardName="Total Income"
            cardValue={`$${
              data?.active_amount
                ? parseFloat(data?.active_amount).toFixed(2)
                : "0"
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
            icon={AutoPoolIncome}
            bgColor="#F49D1A"
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
            cardName="Active Income"
            cardValue={`$${
              data?.total_income
                ? parseFloat(data?.total_income).toFixed(2)
                : "0"
            }`}
            icon={totalIncome}
            bgColor="#6C4AB6"
            cardBgColor="#00d0e7"
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
            cardBgColor="#28c66f"
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
            cardBgColor="#fe9f43"
          />
          <HomeCard
            cardName="Active Auto Pool Income"
            cardValue={`$${
              data?.autopool_income
                ? parseFloat(data?.autopool_income).toFixed(2)
                : "0"
            }`}
            icon={AutoPoolIncome}
            bgColor="#F49D1A"
            cardBgColor="#00d0e7"
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
            cardBgColor="#28c66f"
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
            cardBgColor="#fe9f43"
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
            cardBgColor="#00d0e7"
          />
          <HomeCard
            cardName="Booster Income"
            cardValue={`$${data?.booster_income ? data?.booster_income : "0"}`}
            icon={BoosterIncome}
            bgColor="#38cab3"
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
            cardValue={`$${
              data?.roi_bonus ? parseFloat(data?.roi_bonus).toFixed(2) : "0"
            }`}
            icon={monthIncome}
            bgColor="#FF6464"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default EarningStatistics;
