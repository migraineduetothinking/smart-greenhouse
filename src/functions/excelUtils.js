import * as XLSX from 'xlsx';

export const readExcelFile = (file, sheetName) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: 'binary' });
      const worksheet = workbook.Sheets[sheetName];

      const category = [];
      const date = [];

      // Start reading from the third row (assuming the sheet has headers in the first two rows)
      let startReading = false;

      for (const cell in worksheet) {
        // Skip the first  row
        if (cell[1] === '2') {
          startReading = true;
        }

        if (startReading) {
          if (cell[0] === 'A') {
            category.push(worksheet[cell].v);
          } else if (cell[0] === 'B') {
            date.push(worksheet[cell].v);
          }
        }
      }

      resolve({ category, date });
    };

    reader.readAsBinaryString(file);
  });
};