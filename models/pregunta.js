const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const preguntaSchema = new Schema({
    enunciado: {
        type: String,
        trim: true,
    },
    tipo: {
        type: String,
        trim: true
    },
    identificacionEvaluador: {
        type: String,
        trim: true
    },
    idArea: {
        type: String,
        trim: true
    },
    idSubarea: {
        type: String,
        trim: true
    }
});

module.exports  = mongoose.model('Pregunta', preguntaSchema); 
