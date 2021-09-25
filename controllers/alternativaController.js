const Alternativa = require('../models/alternativa');

// Cuando se crea un nuevo cliente
exports.nuevaAlternativa = async (req, res, next )  => {

   // crear objeto de alternativa con datos de req.body
   const alternativa = new Alternativa(req.body);
   
   try {
       await alternativa.save();
       res.json({ mensaje : 'El cliente se agregó correctamente'}); 
   } catch (error) {
       console.log(error);
       next();
   }
}


/** Obtiene todos los alternativas */
exports.obtenerAlternativas= async(req,res,next)=>{
try {

   const alternativas = await Alternativa.find({})
   res.json(alternativas);
   
} catch (error) {
  console.log(error);
  next(); 
}
}

/** Obtiene un Alternativa en especifico por su ID */
exports.obtenerAlternativa = async (req, res, next) => {
   try {
       const alternativa = await Alternativa.findById(req.params.id);
       res.json(alternativa);
   } catch (error) {
       console.log(error);
       next();
   }
}


// Actualiza un registro por su ID
exports.actualizarAlternativa = async (req, res, next) => {
   try {
       const alternativa = await Alternativa.findOneAndUpdate({_id : req.params.id}, req.body, {
           new: true
       });
       res.json(alternativa);
   } catch (error) {
       console.log(error);
       next();
   }
}

// Elimina un Alternativa por su id
exports.eliminarAlternativa = async(req, res, next) => {
   try {
       await Alternativa.findOneAndDelete({_id : req.params.id});
       res.json({mensaje: 'la Alternativa fue eliminado'})
   } catch (error) {
       console.log(error);
       next();
   }
}