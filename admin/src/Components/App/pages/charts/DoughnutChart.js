import React from 'react'
import { Doughnut} from "react-chartjs-2";
// import {Chart as ChartJS} from "chart.js/auto"
function DoughnutChart({chartData}) {
  return (
    <div className="chart-container">
    <h2 style={{ textAlign: "center" }}>DoughnutChart</h2>
    <Doughnut
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Users Gained between 2016-2020"
          }
        }
      }}
    />
  </div>
  )
}

export default DoughnutChart