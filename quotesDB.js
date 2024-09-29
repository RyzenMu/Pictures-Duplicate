const mongoose = require('mongoose');

// Define the schema and model
const schema = new mongoose.Schema({
    content: String
});
const myModel = mongoose.model('addContent', schema);

// Connect to MongoDB
mongoose.connect('mongodb+srv://creativeblaster14:ejzS3i8XBNWKcg24@cluster0.0ep1y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/addContent', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log('MongoDB connected...');
})
.catch(err => console.log(err));

// Function to retrieve data asynchronously
async function getContents() {
    try {
        const docs = await myModel.find();
        let newArr = docs.map(doc => doc.content);  // Create an array with content values
        console.log("new Array:", newArr);  // Log the new array
        return newArr;
    } catch (error) {
        console.error("Error retrieving documents:", error);
        return [];
    }
}

module.exports = getContents;
