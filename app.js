const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');

// setting static files
app.use(express.static(path.join(__dirname, 'public')));

//setting view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// Routes
app.use('/', routes);

app.listen(8000, ()=>{
    console.log('server started');    
})