const mongoose = require('mongoose')
const { Schema } = mongoose

const logSchema = new Schema ({
    latitude: {
        type: Number,
    },
    longitude: {
        type: Number,
    },
    location: {
        type: String,
    },
    id_name: {
        type: String,
    },
    classification: {
        type: String,
    },
    notes: {
        type: String,
    },
    img1: {
        type: String,
    },
    img2: {
        type: String,
    },
    img3: {
        type: String,
    },
    img4: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const Log = mongoose.model('Log', logSchema);

module.exports = Log;