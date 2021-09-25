const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const evaluacionSchema = new Schema({
    id: {
        type: Number,
        trim: true,
    },
    numeroPregunta: {
        type: Number,
        trim: true,
    },
    fecha: {
        type: Date,
        trim: true
    },
    fechaInicio: {
        type: Date,
        trim: true
    },
    fechaFin: {
        type: Date,
        trim: true
    },
    codigoGrupo: {
        type: String,
        trim: true
    },
    nombre: {
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

module.exports  = mongoose.model('Evaluacion', evaluacionSchema); 
