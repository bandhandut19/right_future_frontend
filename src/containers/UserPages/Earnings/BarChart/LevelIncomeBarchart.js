import React, { useState } from "react";
import { useEffect } from "react";
// import { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
// import { useGetLevelIncomeDataUserChartQuery } from "../../../../Services/earningApi";

const LevelIncomeBarchart = ({ data }) => {
  // const { data: levelIncomeChart } = useGetLevelIncomeDataUserChartQuery();
  const LevelData = data?.level_income;
  /* graph state */
  const [state, setState] = useState({
    series: [
      {
        name: "daily Level income",
        data: [],
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
        x: {},
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
      /* level income */
      let levelIncomeDailyTotal = [];
      let levelIncomeDailyDate = [];
      for (let i = 0; i < 9; i++) {
        let date = new Date();
        let dailyIncome = 0;
        let week = date.setDate(date.getDate() - i);
        let specificDate = new Date(week).toDateString();
        for (let j = 0; j < LevelData?.length; j++) {
          const checkingDate = new Date(LevelData[j]?.date).toDateString();
          if (specificDate === checkingDate) {
            dailyIncome += LevelData[j].amount;
          }
        }
        levelIncomeDailyTotal.push(parseFloat(dailyIncome.toFixed(3)));
        levelIncomeDailyDate.push(specificDate);
      }

      levelIncomeDailyDate.pop();

      const newObj = {
        series: [
          {
            name: "daily Level income",
            data: levelIncomeDailyTotal,
          },
        ],
        options: {
          chart: {
            type: "bar",
            height: 350,
            foreColor: "orange",
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
            categories: levelIncomeDailyDate,
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
            x: { show: false },
            y: {
              formatter: function (val) {
                return "$ " + val + "USD";
              },
            },
          },
        },
      };
      // console.log(newObj);
      await setState(newObj);
    };
    createIncomeLevelData();
  }, [LevelData]);

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

export default LevelIncomeBarchart;
