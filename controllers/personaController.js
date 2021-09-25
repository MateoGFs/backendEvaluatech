const Persona = require('../models/persona');

// Cuando se crea un nuevo persona
exports.nuevaPersona = async (req, res, next )  => {

   // crear objeto de Persona con datos de req.body
   const persona = new Persona(req.body);
   
   try {
       await persona.save();
       res.json({ mensaje : 'persona se agregó correctamente'}); 
   } catch (error) {
       console.log(error);
       next();
   }
}


/** Obtiene todos los Personas */
exports.obtenerPersonas= async(req,res,next)=>{
try {

   const personas = await Persona.find({})
   res.json(personas);
   
} catch (error) {
  console.log(error);
  next(); 
}
}

/** Obtiene un persona en especifico por su ID */
exports.obtenerPersona = async (req, res, next) => {
   try {
       const persona = await Persona.findById(req.params.id);
       res.json(persona);
   } catch (error) {
       console.log(error);
       next();
   }
}


// Actualiza un registro por su ID
exports.actualizarPersona = async (req, res, next) => {
   try {
       const persona = await Persona.findOneAndUpdate({_id : req.params.id}, req.body, {
           new: true
       });
       res.json(persona);
   } catch (error) {
       console.log(error);
       next();
   }
}

// Elimina un Persona por su id
exports.eliminarPersona = async(req, res, next) => {
   try {
       await Persona.findOneAndDelete({_id : req.params.id});
       res.json({mensaje: 'Persona fue eliminado'})
   } catch (error) {
       console.log(error);
       next();
   }
}