import React from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  React.useEffect(() => {
    const ctx = document.getElementById("salesChart");

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3]
          }
        ]
      }
    })
  });

  return (
    <div style={{border: "black 1px solid", borderRadius: "10px", width: "50%", height: "auto"}}>
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  )
}

export default LineChart;