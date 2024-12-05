import React from 'react'
import { Bubble } from 'react-chartjs-2';

function BubbleChart({chartData}) {
  return (
    <div className="chart-container">
    <h2 style={{ textAlign: "center" }}>Bubble Chart</h2>
    <Bubble
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

export default BubbleChart