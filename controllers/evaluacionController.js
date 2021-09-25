const Evaluacion = require('../models/evaluacion');

// Cuando se crea un nuevo cliente
exports.nuevaEvaluacion = async (req, res, next )  => {

   // crear objeto de Evaluacion con datos de req.body
   const evaluacion = new Evaluacion(req.body);
   
   try {
       await evaluacion.save();
       res.json({ mensaje : 'la Evaluacion se agregó correctamente'}); 
   } catch (error) {
       console.log(error);
       next();
   }
}


/** Obtiene todos los Evaluaciones */
exports.obtenerEvaluaciones= async(req,res,next)=>{
try {

   const evaluaciones = await Evaluacion.find({})
   res.json(evaluaciones);
   
} catch (error) {
  console.log(error);
  next(); 
}
}

/** Obtiene un Evaluacion en especifico por su ID */
exports.obtenerEvaluacion = async (req, res, next) => {
   try {
       const evaluacion = await Evaluacion.findById(req.params.id);
       res.json(evaluacion);
   } catch (error) {
       console.log(error);
       next();
   }
}


// Actualiza un registro por su ID
exports.actualizarEvaluacion = async (req, res, next) => {
   try {
       const evaluacion = await Evaluacion.findOneAndUpdate({_id : req.params.id}, req.body, {
           new: true
       });
       res.json(evaluacion);
   } catch (error) {
       console.log(error);
       next();
   }
}

// Elimina un Evaluacion por su id
exports.eliminarEvaluacion = async(req, res, next) => {
   try {
       await Evaluacion.findOneAndDelete({_id : req.params.id});
       res.json({mensaje: 'la Evaluacion fue eliminado'})
   } catch (error) {
       console.log(error);
       next();
   }
}