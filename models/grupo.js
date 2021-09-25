const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const grupoSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
    }
});

module.exports  = mongoose.model('Grupo', grupoSchema); 
