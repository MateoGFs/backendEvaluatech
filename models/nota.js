const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const notaSchema = new Schema({
    evaluado: {
        type: String,
        trim: true,
    },
    evaluacion: {
        type: String,
        trim: true
    },
    nota: {
        type: Number,
        trim: true
    }
});

module.exports  = mongoose.model('Nota', notaSchema); 
