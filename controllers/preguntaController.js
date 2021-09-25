const Pregunta = require('../models/pregunta');

// Cuando se crea un nuevo pregunta
exports.nuevaPregunta = async (req, res, next )  => {

   // crear objeto de Pregunta con datos de req.body
   const pregunta = new Pregunta(req.body);
   
   try {
       await pregunta.save();
       res.json({ mensaje : 'Pregunta se agregó correctamente'}); 
   } catch (error) {
       console.log(error);
       next();
   }
}


/** Obtiene todos los Preguntas */
exports.obtenerPreguntas= async(req,res,next)=>{
try {

   const preguntas = await Pregunta.find({})
   res.json(preguntas);
   
} catch (error) {
  console.log(error);
  next(); 
}
}

/** Obtiene un Pregunta en especifico por su ID */
exports.obtenerPregunta = async (req, res, next) => {
   try {
       const pregunta = await Pregunta.findById(req.params.id);
       res.json(pregunta);
   } catch (error) {
       console.log(error);
       next();
   }
}


// Actualiza un registro por su ID
exports.actualizarPregunta = async (req, res, next) => {
   try {
       const pregunta = await Pregunta.findOneAndUpdate({_id : req.params.id}, req.body, {
           new: true
       });
       res.json(pregunta);
   } catch (error) {
       console.log(error);
       next();
   }
}

// Elimina un Pregunta por su id
exports.eliminarPregunta = async(req, res, next) => {
   try {
       await Pregunta.findOneAndDelete({_id : req.params.id});
       res.json({mensaje: 'Pregunta fue eliminado'})
   } catch (error) {
       console.log(error);
       next();
   }
}