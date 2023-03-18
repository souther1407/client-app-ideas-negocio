import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Filler,
} from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(
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

const AreaChart = () => {
  return (
    <Chart
      type="line"
      data={{
        labels: ["lun", "mar", "mie", "jue", "vie", "sab", "dom"],
        datasets: [
          {
            data: [10, 15, 9, 15, 8, 5, 20],
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
