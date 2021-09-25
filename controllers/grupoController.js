const Grupo = require('../models/grupo');

// Cuando se crea un nuevo cliente
exports.nuevoGrupo = async (req, res, next )  => {

   // crear objeto de grupo con datos de req.body
   const grupo = new Grupo(req.body);
   
   try {
       await grupo.save();
       res.json({ mensaje : 'El grupo se agregó correctamente'}); 
   } catch (error) {
       console.log(error);
       next();
   }
}


/** Obtiene todos los grupos */
exports.obtenerGrupos= async(req,res,next)=>{
try {

   const grupos = await Grupo.find({})
   res.json(grupos);
   
} catch (error) {
  console.log(error);
  next(); 
}
}

/** Obtiene un grupo en especifico por su ID */
exports.obtenerGrupo = async (req, res, next) => {
   try {
       const grupo = await Grupo.findById(req.params.id);
       res.json(grupo);
   } catch (error) {
       console.log(error);
       next();
   }
}


// Actualiza un registro por su ID
exports.actualizarGrupo = async (req, res, next) => {
   try {
       const grupo = await Grupo.findOneAndUpdate({_id : req.params.id}, req.body, {
           new: true
       });
       res.json(grupo);
   } catch (error) {
       console.log(error);
       next();
   }
}

// Elimina un grupo por su id
exports.eliminarGrupo = async(req, res, next) => {
   try {
       await Grupo.findOneAndDelete({_id : req.params.id});
       res.json({mensaje: 'El grupo fue eliminado'})
   } catch (error) {
       console.log(error);
       next();
   }
}