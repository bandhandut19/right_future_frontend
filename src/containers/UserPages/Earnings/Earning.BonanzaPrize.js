import React from "react";
import CardLayout from "../../../components/CardLayout";
import { useGetBonanzaPrizeQuery } from "../../../Services/earningApi";

const BonanzaPrize = () => {
  const { data, error } = useGetBonanzaPrizeQuery();
  return (
    <div>
      <CardLayout className="bonanza_prize_dash_content card_row">
      <h2 className="section_title">Bonanza Prize</h2>
        {data?.prize ? (
          <>
            <div className="bonanza_prize">
            <div className="bonanza_prize_content">
              <img src={require("../../../assets/bonanza-prize.png")} alt="" />
              <h3>Prize name : {data?.prize}</h3>
            </div>
            </div>
          </>
        ) : (
          <p className="message-p">{error?.data?.message}</p>
        )}
      </CardLayout>
    </div>
  );
};

export default BonanzaPrize;
