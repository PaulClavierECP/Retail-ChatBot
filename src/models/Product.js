var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
    name: {
    type: String,
    required: true
    },
    description: {
    type: String,
    required: false
    },
    stock: {
    type: Number,
    required: false
    }
});

module.exports = mongoose.model('Product', Product);