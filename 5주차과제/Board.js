const mongoose = require('mongoose');

const Board = new mongoose.Schema({
    title: { type: String, required : true },
    body: String,
});

module.exports = mongoose.model('Board', Board);