const fs= require('fs');
const path = require('path');

const folderPath = path.join('D:', 'murugaA03s', 'DCIM', 'Screenshots');
console.log(folderPath);


fs.readdir(folderPath, (err, files) => {
    if (err) {
        return console.error('Unable to read directory');
    }

    // Filter to only count files
    const fileCount = files.filter(file => {
        const fullPath = path.join(folderPath, file);
        return fs.lstatSync(fullPath).isFile();
    });

    // console.log(`Number of Files : ${(fileCount.length)}`);
    files.forEach(item => {
        console.log(item);        
    });
    
})
