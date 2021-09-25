const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const preguntaEvaluacionSchema = new Schema({
    idEvaluacion: {
        type: String,
        trim: true,
    },
    idPregunta: {
        type: String,
        trim: true
    }
});

module.exports  = mongoose.model('PreguntaEvaluacion', preguntaEvaluacionSchema); 
