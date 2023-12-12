

export const readDataFromFile = (data) => {
   return {
     type: 'READ_DATA_FROM_FILE',
     payload: data,
   };
 };
 
 export const updateVisualization = (chartData, chartLayout) => {
   return {
     type: 'UPDATE_VISUALIZATION',
     payload: { chartData, chartLayout },
   };
 };
 