const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const areaSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
    }
});

module.exports  = mongoose.model('Area', areaSchema); 
