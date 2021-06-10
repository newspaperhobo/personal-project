const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true 
}, error => {
    if (error) {
        console.log('Error connecting to MongoDB server.')
        console.log(error)
    } else {
        console.log('Connection to MongoDB successful.')
    }
})