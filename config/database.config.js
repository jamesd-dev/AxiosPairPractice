const mongoose = require('mongoose');

// We connect to our local database here called `axios-practice`
let configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect('mongodb://localhost:27017/axios-practice', configOptions)
    .then(() => {
        console.log('Yayyy Database is connected');
    })
    .catch(() => {
        console.log('Something went wrong!');
    })