import React from "react";
import CardLayout from "../../../components/CardLayout";
import { useGetAllBonanzaPrizeQuery } from "../../../Services/earningApi";

const BonanzaPrizeList = () => {
  const { data, error } = useGetAllBonanzaPrizeQuery();
  return (
    <div>
      <CardLayout className="admin_bonanza_prize_dash card_row">
        <div className="bonanza_prize_title">
          <h2>Prize Lists</h2>
        </div>
        <div className="bonanza_prize_dash_content">
          {
            data?.length > 0 ? (
              data?.map(d => (
                <div className="prize_box" key={d?._id}>
                  <img src={require("../../../assets/bonanza-prize.png")} style={{ margin: "5px auto" }} alt="" />
                  <h4>UserId: {d?.user_id}</h4>
                  <p>Prize Name: {d?.prize}</p>
                </div>
                
              ))
            ) : (
              <p className="no_prize">{error?.data?.message}</p>
            )
          }
        </div>
      </CardLayout>
    </div>
  );
};

export default BonanzaPrizeList;
