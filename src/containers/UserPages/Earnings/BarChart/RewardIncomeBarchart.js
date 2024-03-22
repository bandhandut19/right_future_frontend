import React, { useState } from "react";
import { useEffect } from "react";
// import { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useGetRewardIncomeDataUserChartQuery } from "../../../../Services/earningApi";

const RewardIncomeBarchart = () => {
  const {data:rewardIncomeChart} = useGetRewardIncomeDataUserChartQuery()

  /* graph state */
  const [state, setState] = useState({
    series: [
      {
        name: "daily Reward income",
        data: [],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: true,
          tools: {
            download: false,
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        type: "datetime",
        categories: [],
      },
      yaxis: {
        title: {
          text: "$USD",
        },
      },
      fill: {
        opacity: 0.5,
      },
      tooltip: {
        x: {show: false},
        y: {
          formatter: function (val) {
            return "$ " + val + "USD";
          },
        },
      },
    },
  });

  useEffect(() => {
    const createIncomeLevelData = async () => {
      const newObj = {
        series: [
          {
            name: "daily Roi income",
            data: rewardIncomeChart?.rewardIncomeDailyTotal,
            // data: rewardIncomeDailyTotal,
          },
        ],
        options: {
          chart: {
            type: "bar",
            height: 350,
            foreColor: "orange",
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "55%",
              endingShape: "rounded",
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
          },
          xaxis: {
            type: "datetime",
            categories: rewardIncomeChart?.rewardIncomeDailyDate,
          },
          yaxis: {
            title: {
              text: "$USD",
            },
          },
          fill: {
            opacity: 0.5,
          },
          tooltip: {
            x: {},
            y: {
              formatter: function (val) {
                return "$ " + val + "USD";
              },
            },
          },
        },
      };
      // console.log(newObj);
     setState(newObj);
    };
    createIncomeLevelData();
  }, [rewardIncomeChart?.rewardIncomeDailyDate,rewardIncomeChart?.rewardIncomeDailyTotal]);

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={150}
      />
    </div>
  );
};

export default RewardIncomeBarchart;
