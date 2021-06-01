const mongoose = require('mongoose')
const { Schema } = mongoose

const logSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now,
    },
    id_name: {
        type: String,
    },
    location: {
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
})

const Log = mongoose.model('Log', logSchema);

module.exports = Log;