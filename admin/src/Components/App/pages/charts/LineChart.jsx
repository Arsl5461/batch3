import React from 'react'
import { Line} from "react-chartjs-2";
// import {Chart as ChartJS} from "chart.js/auto"
function LineChart({chartData}) {
  return (
    <div className="chart-container">
    <h2 style={{ textAlign: "center" }}>LineChart</h2>
    <Line
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

export default LineChart