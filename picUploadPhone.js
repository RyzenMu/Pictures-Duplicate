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
        
        fs.readdir(folderPath, (err, files) => {
            if (err) {
                return console.error('Unable to read directory:', err);
            }
        
            // Iterate over each file in the directory
            files.forEach(async (item, index) => {
                const imagePath = path.join(folderPath, item);
                
                fs.readFile(imagePath, async (err, data) => {
                    if (err) {
                        console.error('Error reading the file:', err);
                        return;
                    }
        
                    console.log('Data read into buffer', index);
        
                    // Create a new ImageModel for each image
                    const newImage = new ImageModel({
                        imageBuff: data, // Set the image buffer
                        description: `Screenshot ${index}` // Include the index in the description
                    });
        
                    // Save to MongoDB
                    try {
                        await newImage.save();
                        console.log('Image saved successfully!', index);
                    } catch (saveErr) {
                        console.error("Error saving the image:", saveErr);
                    }
                });
            });
        });
    })
    .catch(err => {
        console.log(err);
    });
