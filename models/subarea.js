const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const subareaSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
    },
    idArea: {
        type: String,
        trim: true
    }
});

module.exports  = mongoose.model('Subarea', subareaSchema); 
