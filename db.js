const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    content : String
})

const myModel = mongoose.model('addContent', schema)

mongoose.connect('mongodb+srv://creativeblaster14:ejzS3i8XBNWKcg24@cluster0.0ep1y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/addContent', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {console.log('MongoDB connected...')
  const doc = await myModel.find();
    doc.forEach((item) => {
        console.log(item.content);
    });
}

).catch(err => console.log(err));

