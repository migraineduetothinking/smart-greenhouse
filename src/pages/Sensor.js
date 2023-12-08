import React from 'react';
import Plot from 'react-plotly.js';

const Sensor = ({ category }) => {

  // Приклад данних для графіка ( замінити на реальні дані)
  const chartData = [
    {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'blue' },
    },
  ];

  // Приклад layout та config
  const chartLayout = {
    title: ` ${category}  `,
    xaxis: { title: 'Дата', zeroline: false }, //відключаємо лінію осей 
    yaxis: { title: category, zeroline: false },
    width: 1200, 
    height: 600,
    plot_bgcolor: '#f0f0f0', // колір фону за графіком
    paper_bgcolor: '#f0f0f0',// колір фону графіку
    transition: {
      duration: 1000, // Тривалість анімації в мілісекундах (1 секунда = 1000 мс)
      easing: 'cubic-in-out', // Тип ефекту анімації 
    },
  };

  const chartConfig = {
    displayModeBar: true,
    responsive: true,
  };

  
  return (
    <div className="sensor-category-container">
      <Plot data={chartData} layout={chartLayout} config={chartConfig} />
    </div>
  );
 
};

export default Sensor;