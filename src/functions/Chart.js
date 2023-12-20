import React from 'react';
import Plot from 'react-plotly.js';

const Chart = ({ category, date }) => {
  const minValue = Math.min(...category);
  const maxValue = Math.max(...category);

  const roundedMinValue = minValue.toFixed(1);
  const roundedMaxValue = maxValue.toFixed(1);

  const data = [
    {
      x: date,
      y: category,
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'blue', size: 6 },
      line: {
        color: 'darkblue',
        width: 1.5,
        shape: 'spline',
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
      range: [Math.min(...date), Math.max(...date)],
    },
    yaxis: {
      title: category,
      zeroline: false,
      rangemode: 'tozero',
      fixedrange: true,
      showline: false,
    },
    shapes: [
      {
        type: 'line',
        xref: 'paper',
        x0: 0,
        x1: 1,
        yref: 'y',
        y0: minValue,
        y1: minValue,
        line: {
          color: 'red',
          width: 2,
          dash: 'dash',
        },
      },
      {
        type: 'line',
        xref: 'paper',
        x0: 0,
        x1: 1,
        yref: 'y',
        y0: maxValue,
        y1: maxValue,
        line: {
          color: 'red',
          width: 2,
          dash: 'dash',
        },
      },
    ],
    annotations: [
      {
        x: 0.5, // Center of the plot
        y: minValue - 0.06 * (maxValue - minValue), // Adjust the multiplier as needed
        xref: 'paper',
        yref: 'y',
        text: `Мінімальне значення: ${roundedMinValue}`,
        showarrow: false,
        font: {
          color: 'red',
        },
      },
      {
        x: 0.5, // Center of the plot
        y: maxValue + 0.06 * (maxValue - minValue), // Adjust the multiplier as needed
        xref: 'paper',
        yref: 'y',
        text: `Максимальне значення: ${roundedMaxValue}`,
        showarrow: false,
        font: {
          color: 'red',
        },
      },
    ],
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