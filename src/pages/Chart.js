import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import { eachDayOfInterval, format } from 'date-fns';

const Chart = ({ category, startDate, endDate }) => {
  // Генеруємо масив дат між початковою та кінцевою датами
  const dateArray = eachDayOfInterval({ start: startDate, end: endDate });

  // Приклад данних для графіка ( замінити на реальні дані)
  const chartData = [
    {
      x: dateArray.map((date) => format(date, 'yyyy-MM-dd')), // Форматуємо дати в строку
      y: [0, 15, 13, 17, 13,12,12,11,1,14,15,11,7,4,12,18], // Приклад значень
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'blue' },
    },
  ];

  //layout 
  const chartLayout = {
    title: ` ${category}  `,
    xaxis: {
      title: 'Дата',
      zeroline: false,
      tickangle: 35, // Поворот значень на 45 градусів
      tickformat: '%d/%m/%Y %H:%M:%S',
      tickmode: 'array', tickvals: dateArray.map((date) => format(date, 'yyyy-MM-dd')) 
    }, 
    yaxis: { title: category, zeroline: false,rangemode: 'tozero'  },
    width: 1200, 
    height: 650,
    margin: {t:50, b: 120},
    plot_bgcolor: '#f0f0f0', 
    paper_bgcolor: '#f0f0f0',// колір фону графіку
    transition: {
      duration: 1000, // Тривалість анімації в мілісекундах (1 секунда = 1000 мс)
      easing: 'cubic-in-out', // Тип ефекту анімації 
    },
  
  };

  //config
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

export default Chart;
