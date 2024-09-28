const fs= require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'public', 'images');

fs.readdir(folderPath, (err, files) => {
    if (err) {
        return console.error('Unable to read directory');
    }

    // Filter to only count files
    const fileCount = files.filter(file => {
        const fullPath = path.join(folderPath, file);
        return fs.lstatSync(fullPath).isFile();
    }).length;

    console.log(`Number of Files : ${fileCount}`);
})
