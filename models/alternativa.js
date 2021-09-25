const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const alternativaSchema = new Schema({
    respuesta: {
        type: String,
        trim: true,
    },
    idPregunta: {
        type: String,
        trim: true
    },
    correcta: {
        type: Boolean,
        trim: true
    }
});

module.exports  = mongoose.model('Alternativa', alternativaSchema);
