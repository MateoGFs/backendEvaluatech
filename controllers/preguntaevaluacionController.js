const PreguntaEvaluacion = require('../models/preguntaevaluacion');

// Cuando se crea un nuevo PreguntaEvaluacion
exports.nuevaPreguntaEvaluacion = async (req, res, next )  => {

   // crear objeto de PreguntaEvaluacion con datos de req.body
   const preguntaevaluacion = new PreguntaEvaluacion(req.body);
   
   try {
       await preguntaevaluacion.save();
       res.json({ mensaje : 'PreguntaEvaluacion se agregó correctamente'}); 
   } catch (error) {
       console.log(error);
       next();
   }
}


/** Obtiene todos PreguntaEvaluacion */
exports.obtenerPreguntasEvaluacion= async(req,res,next)=>{
try {

   const preguntasevaluacion = await PreguntaEvaluacion.find({})
   res.json(preguntasevaluacion);
   
} catch (error) {
  console.log(error);
  next(); 
}
}

/** Obtiene un PreguntaEvaluacion en especifico por su ID */
exports.obtenerPreguntaEvaluacion = async (req, res, next) => {
   try {
       const preguntaevaluacion = await PreguntaEvaluacion.findById(req.params.id);
       res.json(preguntaevaluacion);
   } catch (error) {
       console.log(error);
       next();
   }
}


// Actualiza un registro por su ID
exports.actualizarPreguntaEvaluacion= async (req, res, next) => {
   try {
       const preguntaevaluacion = await PreguntaEvaluacion.findOneAndUpdate({_id : req.params.id}, req.body, {
           new: true
       });
       res.json(preguntaevaluacion);
   } catch (error) {
       console.log(error);
       next();
   }
}

// Elimina un PreguntaEvaluacion por su id
exports.eliminarPreguntaEvaluacion = async(req, res, next) => {
   try {
       await PreguntaEvaluacion.findOneAndDelete({_id : req.params.id});
       res.json({mensaje: 'la PreguntaEvaluacion fue eliminado'})
   } catch (error) {
       console.log(error);
       next();
   }
}