var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Stock = new Schema({
    codart: {
        type: Number,
        required: true
    },
    descrip: {
        type: String,
        required: true
    },
    resto: {
        type: Number,
        required: true
    },
    peso: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        required: false
    },
});

module.exports = mongoose.model('Stock', Stock);