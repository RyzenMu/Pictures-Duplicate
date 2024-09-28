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
        const imagePath = path.join(__dirname, 'public', 'images', 'dragon.jpg');

        // Read the file into the buffer
        fs.readFile(imagePath, async (err, data) => {
            if (err) {
                console.error("Error reading the file", err);
                return; // Exit if there's an error
            }
            console.log('Data read into buffer');

            // Now that we have the data, create the new image document
            const newImage = new ImageModel({
                imageBuff: data, // Set the image buffer
                description: "A Dragon"
            });

            // Upload to MongoDB
            try {
                await newImage.save();
                console.log('Image saved successfully!');
            } catch (saveErr) {
                console.error("Error saving the image", saveErr);
            }
        });
    })
    .catch(err => {
        console.log(err);
    });
