const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const respuestaSchema = new Schema({
    identificacionEvaluado: {
        type: String,
        trim: true,
    },
    idEvaluacion: {
        type: String,
        trim: true
    },
    idAlternativaRespuesta: {
        type: String,
        trim: true
    },
    idPregunta: {
        type: String,
        trim: true
    }
});

module.exports  = mongoose.model('Respuesta', respuestaSchema); 
