import React, { useEffect } from 'react';
import XLSX from 'xlsx';

const readCSV = ({ filename, sheetName, columnName }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Завантажуємо файл
        const response = await fetch(`path/to/${filename}`);
        const arrayBuffer = await response.arrayBuffer();

        // Створюємо буфер та отримуємо назви сторінок
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetNames = workbook.SheetNames;

        // Отримуємо дані з обраної сторінки та колонки
        const sheet = workbook.Sheets[sheetName];
        const columnData = XLSX.utils.sheet_to_json(sheet, { header: 1 })[0];
        const dateData = XLSX.utils.sheet_to_json(sheet, { header: 1, range: 1 });

        // Отримуємо індекси колонок
        const columnIndex = columnData.indexOf(columnName);
        const dateIndex = dateData.indexOf('Дата');

        // Отримуємо значення з обраної колонки та створюємо об'єкт даних
        const result = XLSX.utils.sheet_to_json(sheet, {
          header: dateIndex,
          range: 1,
        })
          .map((row) => {
            return {
              date: row[dateIndex],
              value: row[columnIndex],
            };
          })
          .slice(1); // Відкидаємо перший рядок, оскільки він містить заголовок

        console.log(result);
        // Тепер у вас є масив об'єктів { date, value } з обраними даними

      } catch (error) {
        console.error('Error reading Excel file:', error);
      }
    };

    fetchData();
  }, [filename, sheetName, columnName]);

  return <div>Data from Excel</div>;
};

export default readCSV;