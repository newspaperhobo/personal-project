const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true}, error => {
    if (error) {
        console.log('Error connecting to MongoDB server.')
    } else {
        console.log('Connection to MongoDB successful.')
    }
})