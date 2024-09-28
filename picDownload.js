const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const imageSchema = new mongoose.Schema({
    imageBuff: Buffer,
    description: String
});

const ImageModel = mongoose.model('Image', imageSchema);

mongoose.connect('mongodb+srv://creativeblaster14:ejzS3i8XBNWKcg24@cluster0.0ep1y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/addDragon', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('MongoDB connected');
        const image = await ImageModel.findById('66f7a674a4b1274bade58d8f');

        if (!image) {
            console.log('Image not found');
        } else {
            // Specify the path where you want to save the image
            const imagePath = path.join(__dirname, 'public', 'downloads', 'dragon.jpg');

            // Write the image buffer to a file
            fs.writeFile(imagePath, image.imageBuff, (err) => {
                if (err) {
                    console.error('Error writing the file:', err);
                } else {
                    console.log('Image downloaded successfully!');
                }
            });
        }
    })
    .catch(err => console.log(err));
