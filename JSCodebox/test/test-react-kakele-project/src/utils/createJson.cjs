const fs = require('fs');

function createJson(data, fileName) {
  const jsonData = JSON.stringify(data, null, 2);

  const filePath = `${fileName}.json`;

  fs.writeFile(filePath, jsonData, 'utf-8', (err) => {
    if (err) {
      console.error('Error creating JSON file:', err);
    } else {
      console.log('JSON file created successfully:', filePath);
    }
  });
}

module.exports = { createJson };
