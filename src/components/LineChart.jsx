import React from 'react';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  canvas: {
    width: "60%",
    height: "30%",
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: "#172b4d",
    marginTop: "3%",
    marginLeft: "5%"
  }
})


const LineChart = () => {
  const classes = useStyles();
	const chartRef = React.useRef();

  React.useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
		
		const salesChart = new Chart(ctx, {
			type: "line",
      color: "#fff",
			data: {
				labels: ["April", "May", "June", "July", "August", "September", "October"],
				datasets: [{ 
					data: [86,114,106,106,107,111,133],
					label: "Monthly Sales Trend",
          color: "#fff",
					borderColor: "#5e72e4",
					backgroundColor: "#5e72e4",
					fill: false,
          tension: 0.2
				}
				]
			},
      options: {
        scales: {
          y: {
              beginAtZero: true
          }
        },
        onClick: (e) => {
          const canvasPosition = getRelativePosition(e, salesChart);
    

          const dataX = salesChart.scales.x.getValueForPixel(canvasPosition.x);
          const dataY = salesChart.scales.y.getValueForPixel(canvasPosition.y);
        }
      }
		});
  }, []);

  return (
    <div className={classes.canvas}>
      <canvas
      id="salesChart"
      ref={chartRef}
      />
    </div>
    )
}

export default LineChart;