import React from 'react';
import Plot from 'react-plotly.js';


const Chart = ({ category, date }) =>  {
  const data = [
    {
      x: date,
      y: category,
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'blue', size: 6 }, // Customize marker color and size
      line: { 
        color: 'darkblue', 
        width: 1.5, 
        shape: 'spline', // Use spline interpolation for a more curved line
        
      },
    },
  ];

  
  const layout = {
      title: ` `,
      xaxis: {
      title: 'Дата',
      zeroline: false,
      tickangle: 35,
      tickformat: '%d/%m/%Y %H:%M:%S',
      tickmode: 'array',
      range: [Math.min(...date), Math.max(...date)]
      },

      yaxis: { title: category, zeroline: false, rangemode: 'tozero', fixedrange: true, },

      width: 1240,
      height: 650,
      margin: { t: 50, b: 120 },
      plot_bgcolor: '#f0f0f0',
      paper_bgcolor: '#f0f0f0',
      transition: {
      duration: 1000,
      easing: 'cubic-in-out',
      },
      
   };

   const chartConfig = {
      displayModeBar: true,
      responsive: true,
    };

  return (
    <div className="sensor-category-container">
      <Plot data={data} layout={layout} config={chartConfig} />
    </div>
  );
};

export default Chart;