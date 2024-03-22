import React, { useState } from "react";
import { useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const EarningChart = () => {
  const [levelIncomeDailyUpdate, setLevelIncomeDailyUpdate] = useState([]);
  const [levelIncomeDailyDateUpdate, setLevelIncomeDailyDateUpdate] = useState(
    []
  );
  const LeveLdata = [
    {
      user_id: "rakibul1",
      date: "2022-09-06T14:35:55.269Z",
      amount: 5,
      level: 1,
    },
    {
      user_id: "rakibul1",
      date: "2022-09-06T14:36:50.137Z",
      amount: 5,
      level: 1,
    },
    {
      user_id: "rakibul1",
      date: "2022-09-06T14:37:14.021Z",
      amount: 5,
      level: 1,
    },
    {
      user_id: "rakibul1",
      date: "2022-09-06T15:00:49.049Z",
      amount: 5,
      level: 1,
    },
    {
      user_id: "sakib1",
      date: "2022-09-06T15:16:19.826Z",
      amount: 5,
      level: 1,
    },
    {
      user_id: "suvo1",
      date: "2022-09-06T15:22:35.944Z",
      amount: 5,
      level: 1,
    },
    {
      user_id: "suvo1",
      date: "2022-09-06T15:25:23.532Z",
      amount: 5,
      level: 1,
    },
    {
      user_id: "mehedi1",
      date: "2022-09-06T16:43:56.048Z",
      amount: 5,
      level: 1,
    },
    {
      user_id: "mehedi1",
      date: "2022-09-06T17:21:04.932Z",
      amount: 5,
      level: 1,
    },
    {
      user_id: "pollob1",
      date: "2022-09-06T17:23:57.365Z",
      amount: 0.5,
      level: 2,
    },
  ];

  const [state, setState] = useState({
    series: [
      {
        name: "ROI",
        data: [25, 5, 0, 15],
      },
      {
        name: "Level Income",
        data: [30, 23, 44, 23, 44],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        foreColor: "#80558C",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      // chart: {
      //   foreColor: "#80558C",
      // },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  useEffect(() => {
    const createIncomeLevelData = async () => {
      const createDate = "2022-09-06T14:19:03.135Z";
      let priDate = new Date(createDate);
      let levelIncomeADay = 0;
      let levelIncomeDailyTotal = [];
      let levelIncomeDailyDate = [createDate];
      for (let i = 0; i < LeveLdata.length; i++) {
        const currentTime = new Date(LeveLdata[i]?.date);
        if (
          priDate.getTime() < currentTime.getTime() &&
          currentTime.getTime() < priDate.getTime() + 60 * 60 * 1000
        ) {
          // console.log((LeveLdata[i].date))
          levelIncomeADay += LeveLdata[i].amount;
          // console.log(currentTime);
        } else {
          levelIncomeDailyTotal.push(levelIncomeADay);
          levelIncomeDailyDate.push(`${LeveLdata[i]?.date}`);
          priDate = new Date(priDate.getTime() + 60 * 60 * 1000); // if *24 add then it will be 1 day
          levelIncomeADay = 0;
          // console.log("1 hour done");
        }
      }
      levelIncomeDailyDate.pop();
      await setLevelIncomeDailyUpdate(levelIncomeDailyTotal);
      await setLevelIncomeDailyDateUpdate(levelIncomeDailyDate);
      // console.log("inside", levelIncomeDailyUpdate);
      // console.log("inside", levelIncomeDailyDateUpdate);
      const newObj = {
        series: [
          {
            name: "ROI",
            data: [33, 44, 22],
          },
          {
            name: "Level Income",
            data: levelIncomeDailyTotal,
          },
        ],
        options: {
          chart: {
            height: 350,
            type: "area",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            type: "datetime",
            categories: levelIncomeDailyDate,
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
        },
      };
      // console.log(newObj);
      await setState(newObj);
    };
    createIncomeLevelData();
  }, []);

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={200}
      />
    </div>
  );
};

export default EarningChart;
