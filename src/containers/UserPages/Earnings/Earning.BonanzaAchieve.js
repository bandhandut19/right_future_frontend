import React, { useEffect, useState } from "react";
import CardLayout from "../../../components/CardLayout";
import { useGetBonanzaAchievementQuery } from "../../../Services/earningApi";

const BonanzaAchieve = () => {
  const { data } = useGetBonanzaAchievementQuery();
  const [percentage, setPercentage] = useState();
  // console.log("data", data)
  useEffect(() => {
    if (data?.direct_member_count > 0) {
      setPercentage(
        Math.round(
          // ((data?.direct_member_count > 20 ? 20 : data?.direct_member_count) / 20) * 100
          ((data?.direct_member_count > 10 ? 10 : data?.direct_member_count) / 10) * 100
        )
      );
    }
  }, [data?.direct_member_count]);
  const [indPercentage, setIndPercentage] = useState();
  // console.log("data", data)
  useEffect(() => {
    if (data?.indirect_member_count > 0) {
      setIndPercentage(
        Math.round(
          ((data?.indirect_member_count > 100 ? 100 : data?.indirect_member_count) /
          100) *
            100
        )
      );
    }
  }, [data?.indirect_member_count]);
  // const directMember = 240;
  // const percentage = Math.round(
  //   ((directMember > 250 ? 250 : directMember) / 250) * 100
  // );
  return (
    <>
      <CardLayout className="bonanza_achieve_dash_content card_row">
        <div className="offer-box">
          <span className="title">Bonanza Achieve</span>
          <span className="subTitle">
            Direct Active members:{" "}
            {data?.direct_member_count > 0 ? data?.direct_member_count : 0}{" "}
          </span>
          <div className="progress-bar">
            <span className="progress" style={{ width: `${percentage}%` }}>
              {data?.direct_member_count > 0 && (
                  <span className="tooltip">{data?.direct_member_count}</span>
                )}
            </span>
          </div>
          <span className="subTitle">
            Indirect Active members:{" "}
            {data?.indirect_member_count > 0 ? data?.indirect_member_count : 0}{" "}
          </span>
          <div className="progress-bar">
            <span className="progress" style={{ width: `${indPercentage}%` }}>
              {data?.indirect_member_count > 0 && (
                  <span className="tooltip">{data?.indirect_member_count}</span>
                )}
            </span>
          </div>
        </div>
      </CardLayout>
    </>
  );
};

export default BonanzaAchieve;
