const mongoose = require('mongoose');

let BBQuotesSchema = new mongoose.Schema({
    author: String, 
    quote: String,
    series: String
});

let BBQuotesModel = mongoose.model('bb-quotes', BBQuotesSchema);

module.exports =  BBQuotesModel;