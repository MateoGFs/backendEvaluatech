const Subarea = require('../models/subarea');

// Cuando se crea un nuevo Subarea
exports.nuevaSubarea = async (req, res, next )  => {

   // crear objeto de Subarea con datos de req.body
   const subarea = new Subarea(req.body);
   
   try {
       await subarea.save();
       res.json({ mensaje : 'Subarea se agregó correctamente'}); 
   } catch (error) {
       console.log(error);
       next();
   }
}


/** Obtiene todos los Subareas */
exports.obtenerSubareas= async(req,res,next)=>{
try {

   const subareas = await Subarea.find({})
   res.json(subareas);
   
} catch (error) {
  console.log(error);
  next(); 
}
}

/** Obtiene un Subarea en especifico por su ID */
exports.obtenerSubarea = async (req, res, next) => {
   try {
       const subarea = await Subarea.findById(req.params.id);
       res.json(subarea);
   } catch (error) {
       console.log(error);
       next();
   }
}


// Actualiza un registro por su ID
exports.actualizarSubarea = async (req, res, next) => {
   try {
       const subarea = await Subarea.findOneAndUpdate({_id : req.params.id}, req.body, {
           new: true
       });
       res.json(subarea);
   } catch (error) {
       console.log(error);
       next();
   }
}

// Elimina un Subarea por su id
exports.eliminarSubarea = async(req, res, next) => {
   try {
       await Subarea.findOneAndDelete({_id : req.params.id});
       res.json({mensaje: 'Subarea fue eliminado'})
   } catch (error) {
       console.log(error);
       next();
   }
}