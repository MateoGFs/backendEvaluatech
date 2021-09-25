const Area = require('../models/area');

// Cuando se crea un nuevo cliente
exports.nuevaArea = async (req, res, next )  => {

   // crear objeto de area con datos de req.body
   const area = new Area(req.body);
   
   try {
       await area.save();
       res.json({ mensaje : 'El area se agregó correctamente'}); 
   } catch (error) {
       console.log(error);
       next();
   } 
}


/** Obtiene todos los areas */
exports.obtenerAreas= async(req,res,next)=>{
try {

   const areas = await Area.find({})
   res.json(areas);
   
} catch (error) {
  console.log(error);
  next(); 
}
}

/** Obtiene un area en especifico por su ID */
exports.obtenerArea = async (req, res, next) => {
   try {
       const area = await Area.findById(req.params.id);
       res.json(area);
   } catch (error) {
       console.log(error);
       next();
   }
}


// Actualiza un registro por su ID
exports.actualizarArea = async (req, res, next) => {
   try {
       const area = await Area.findOneAndUpdate({_id : req.params.id}, req.body, {
           new: true
       });
       res.json(area);
   } catch (error) {
       console.log(error);
       next();
   }
}

// Elimina un area por su id
exports.eliminarArea = async(req, res, next) => {
   try {
       await Area.findOneAndDelete({_id : req.params.id});
       res.json({mensaje: 'El area fue eliminada'})
   } catch (error) {
       console.log(error);
       next();
   }
}