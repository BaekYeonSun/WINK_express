const mongoose = require('mongoose');

const Content = new mongoose.Schema({
    title: { type: String, required : true },
    body: String,
});

module.exports = mongoose.model('User', Content);