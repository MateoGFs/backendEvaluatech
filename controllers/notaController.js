const Nota = require('../models/nota');

// Cuando se crea un nuevo Nota
exports.nuevaNota = async (req, res, next )  => {

   // crear objeto de Nota con datos de req.body
   const nota = new Nota(req.body);
   
   try {
       await nota.save();
       res.json({ mensaje : 'la nota se agregó correctamente'}); 
   } catch (error) {
       console.log(error);
       next();
   }
}


/** Obtiene todos los Nota */
exports.obtenerNotas= async(req,res,next)=>{
try {

   const notas = await Nota.find({})
   res.json(notas);
   
} catch (error) {
  console.log(error);
  next(); 
}
}

/** Obtiene un Nota en especifico por su ID */
exports.obtenerNota = async (req, res, next) => {
   try {
       const nota = await Nota.findById(req.params.id);
       res.json(nota);
   } catch (error) {
       console.log(error);
       next();
   }
}


// Actualiza un registro por su ID
exports.actualizarNota = async (req, res, next) => {
   try {
       const nota = await Nota.findOneAndUpdate({_id : req.params.id}, req.body, {
           new: true
       });
       res.json(nota);
   } catch (error) {
       console.log(error);
       next();
   }
}

// Elimina un Nota por su id
exports.eliminarNota = async(req, res, next) => {
   try {
       await Nota.findOneAndDelete({_id : req.params.id});
       res.json({mensaje: 'El Nota fue eliminado'})
   } catch (error) {
       console.log(error);
       next();
   }
}