var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Articulos = new Schema({
    codart: {
        type: Number,
        required: true
    },
    uniart: {
        type: Number,
        required: false
    },
    descrip: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: false
    },
    resto: {
        type: Number,
        required: true
    },
    unipaq: {
        type: Number,
        required: false
    },
    unidmin: {
        type: Number,
        required: false
    },
    peso: {
        type: Number,
        required: true
    },
    codprecan: {
        type: String,
        required: false
    },
    codepreres: {
        type: String,
        required: false
    },
    factor: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Articulos', Articulos);