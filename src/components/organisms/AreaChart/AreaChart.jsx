import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LineController,
  LinearScale,
  CategoryScale,
  Title,
  Filler,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { parseDay } from "../../../utils/parse/parseDay";
ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler
);
const plugin = {
  id: "customCanvasBackgroundColor",
  beforeDraw: (chart, args, options) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = options.color || "#99ffff0";
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

const AreaChart = ({ earnings, label }) => {
  const labels = useMemo(() => {
    return earnings.map((earning) => {
      const date = new Date(earning.date.timestamp * 1000);
      console.log(date.toString());
      return `${parseDay(date.getDay())}`;
    });
  }, [earnings]);
  const data = useMemo(() => {
    return earnings.map((earning) => {
      return earning[label];
    });
  }, [earnings]);
  return (
    <Chart
      type="line"
      data={{
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: "#3e59f0",
            borderColor: "#4a63f0",
            borderJoinStyle: "bevel",
            pointRadius: 1,
            fill: "origin",
          },
        ],
      }}
      options={{
        scales: {
          y: { display: false },
          x: { grid: { display: false } },
        },
      }}
    />
  );
};

export default AreaChart;
