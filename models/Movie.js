const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    engTitle: {
        type: String
    },
    yearOfProduction: {
        type: Number,
        required: true,
        min: 1800,
        max: 2050
    },
    duration: {
        type: String,
        required: true
    },
    poster: {
        type: String
    }
});

module.exports = mongoose.model('Movies', MovieSchema);