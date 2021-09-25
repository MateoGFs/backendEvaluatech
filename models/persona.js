const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const personaSchema = new Schema({
    identificacion: {
        type: String,
        trim: true,
    },
    nombre: {
        type: String,
        trim: true
    },
    apellido: {
        type: String,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    clave: {
        type: String,
        trim: true
    },
    tipo: {
        type: String,
        trim: true
    },
    codigoGrupo: {
        type: String,
        trim: true
    }
});

module.exports  = mongoose.model('Persona', personaSchema); 
