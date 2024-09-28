const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const imageSchema = new mongoose.Schema({
    imageBuff: Buffer,
    description: String
});

const ImageModel = mongoose.model('Image', imageSchema);

mongoose.connect('mongodb+srv://creativeblaster14:ejzS3i8XBNWKcg24@cluster0.0ep1y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/addDragon', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('MongoDB connected...');
        const folderPath = path.join('D:', 'murugaA03s', 'DCIM', 'Screenshots');
        
        fs.readdir(folderPath, async (err, files) => {
            if (err) {
                return console.error('Unable to read directory:', err);
            }

            await Promise.all(files.map(async (item, index) => {
                const imagePath = path.join(folderPath, item);
                
                try {
                    const data = await fs.promises.readFile(imagePath);
                    console.log('Data read into buffer', index);
                    
                    const newImage = new ImageModel({
                        imageBuff: data,
                        description: `Screenshot ${index + 1}`
                    });

                    await newImage.save();
                    console.log('Image saved successfully!', index + 1);
                } catch (err) {
                    console.error('Error processing file:', item, err);
                }
            }));

            console.log('All images processed successfully.');
        });
    })
    .catch(err => {
        console.log(err);
    });
