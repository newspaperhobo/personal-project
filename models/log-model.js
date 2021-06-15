const mongoose = require('mongoose')
const { Schema } = mongoose

const logSchema = new Schema ({
    coords: {
        type: Array,
    },
    location: {
        type: String,
    },
    name: {
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
        required: [true, "Please upload an image."]
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
    user_id: {
        type: String,
    },
    username: {
        type: String,
    }

})

const Log = mongoose.model('Log', logSchema);

module.exports = Log;