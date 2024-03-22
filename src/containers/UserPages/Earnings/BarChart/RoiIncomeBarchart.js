import React, { useState } from "react";
import { useEffect } from "react";
// import { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import {
  useRoiIncomeDataUserQuery,
} from "../../../../Services/earningApi";

const RoiIncomeBarchart = () => {
  // const { data: roiIncomeChart } = useGetRoiIncomeDataUserChartQuery();
  const { data: roiIncome } = useRoiIncomeDataUserQuery();
  // console.log(roiIncome);
  /* graph state */
  const [state, setState] = useState({
    series: [
      {
        name: "daily Roi income",
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
      /* roi income */
      let roiIncomeDailyTotal = [];
      let roiIncomeDailyDate = [];
      for (let i = 0; i < 8; i++) {
        let date = new Date();
        let dailyIncome = 0;
        let week = date.setDate(date.getDate() - i);
        let specificDate = new Date(week).toDateString();
        for (let j = 0; j < roiIncome?.length; j++) {
          const checkingDate = new Date(roiIncome[j]?.date).toDateString();
          console.log(specificDate, checkingDate);
          if (specificDate === checkingDate) {
            dailyIncome += parseFloat(roiIncome[j].amount);
          }
        }
        roiIncomeDailyTotal.push(parseFloat(dailyIncome.toFixed(3)));
        roiIncomeDailyDate.push(specificDate);
      }
      /* extra data increase */
      let date = new Date();
      let week = date.setDate(date.getDate() + 1);
      let specificDate = new Date(week).toDateString();
      // roiIncomeDailyDate.unshift(specificDate);

      const newObj = {
        series: [
          {
            name: "daily Roi income",
            data: roiIncomeDailyTotal,
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
            width: 1,
            colors: ["transparent"],
          },
          xaxis: {
            type: "datetime",
            categories: roiIncomeDailyDate,
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
  }, [roiIncome]);
  // console.log(roiIncomeChart);
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

export default RoiIncomeBarchart;
