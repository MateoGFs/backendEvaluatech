const Respuesta = require('../models/respuesta');

// Cuando se crea un nuevo Respuesta
exports.nuevaRespuesta = async (req, res, next )  => {

   // crear objeto de Respuesta con datos de req.body
   const respuesta = new Respuesta(req.body);
   
   try {
       await respuesta.save();
       res.json({ mensaje : 'Respuesta se agregó correctamente'}); 
   } catch (error) {
       console.log(error);
       next();
   }
}


/** Obtiene todos las Respuestas */
exports.obtenerRespuestas= async(req,res,next)=>{
try {

   const respuestas = await Respuesta.find({})
   res.json(respuestas);
   
} catch (error) {
  console.log(error);
  next(); 
}
}

/** Obtiene un Respuesta en especifico por su ID */
exports.obtenerRespuesta = async (req, res, next) => {
   try {
       const respuesta = await Respuesta.findById(req.params.id);
       res.json(respuesta);
   } catch (error) {
       console.log(error);
       next();
   }
}


// Actualiza un registro por su ID
exports.actualizarRespuesta = async (req, res, next) => {
   try {
       const respuesta = await Respuesta.findOneAndUpdate({_id : req.params.id}, req.body, {
           new: true
       });
       res.json(respuesta);
   } catch (error) {
       console.log(error);
       next();
   }
}

// Elimina un Respuesta por su id
exports.eliminarRespuesta = async(req, res, next) => {
   try {
       await Respuesta.findOneAndDelete({_id : req.params.id});
       res.json({mensaje: 'Respuesta fue eliminado'})
   } catch (error) {
       console.log(error);
       next();
   }
}