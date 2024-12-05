import React from 'react'
import Chart from "react-apexcharts";
function BarChart({options,series}) {
  return (
    <div className="mixed-chart">
            <Chart
              options={options}
              series={series}
              type="line"
              width="500"
            />
          </div>
  )
}

export default BarChart