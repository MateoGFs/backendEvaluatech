const express = require('express');
const router = express.Router();

const alternativaController = require('../controllers/alternativaController'); 
const areaController = require('../controllers/areaController'); 
const evaluacionController = require('../controllers/evaluacionController'); 
const grupoController = require('../controllers/grupoController'); 
const notaController = require('../controllers/notaController'); 
const personaController = require('../controllers/personaController'); 
const preguntaController = require('../controllers/preguntaController'); 
const preguntaEvaluacionController = require('../controllers/preguntaevaluacionController'); 
const respuestaController = require('../controllers/respuestaController'); 
const subareaController = require('../controllers/subareaController'); 

module.exports = function() {

//---------------------------------------------------------------------------
        //Alternativas
        // Agrega nuevos pacientes via POST
        router.post('/alternativas', 
        alternativaController.nuevaAlternativa
        )

        // consultar los datos de la mongoBD

        router.get('/alternativas',
        alternativaController.obtenerAlternativas
        )

        // Obtiene un paciente en especifico (ID)
        router.get('/alternativas/:id',
        alternativaController.obtenerAlternativa
        )

        // Actualizar un registro con un ID especifico
        router.put('/alternativas/:id',
        alternativaController.actualizarAlternativa
        );

        // Elimina un paciente por su ID
        router.delete('/alternativas/:id',
        alternativaController.eliminarAlternativa
        );

//--------------------------------------------------------------------------------
        //Areas

                // Agrega nuevos pacientes via POST
            router.post('/areas', 
            areaController.nuevaArea
        )

        // consultar los datos de la mongoBD

        router.get('/areas',
        areaController.obtenerAreas
        )

        // Obtiene un paciente en especifico (ID)
        router.get('/areas/:id',
        areaController.obtenerArea
        )

        // Actualizar un registro con un ID especifico
        router.put('/areas/:id',
            areaController.actualizarArea
        );

        // Elimina un paciente por su ID
        router.delete('/areas/:id',
        areaController.eliminarArea
        );

//----------------------------------------------------------------------
    //Evaluacion
    
             // Agrega nuevos pacientes via POST
             router.post('/evaluacion', 
             evaluacionController.nuevaEvaluacion
         )
 
         // consultar los datos de la mongoBD
 
         router.get('/evaluacion',
         evaluacionController.obtenerEvaluaciones
         )
 
         // Obtiene un paciente en especifico (ID)
         router.get('/evaluacion/:id',
         evaluacionController.obtenerEvaluacion
         )
 
         // Actualizar un registro con un ID especifico
         router.put('/evaluacion/:id',
             evaluacionController.actualizarEvaluacion
         );
 
         // Elimina un paciente por su ID
         router.delete('/evaluacion/:id',
          evaluacionController.eliminarEvaluacion
         );

//------------------------------------------------------------------------------
    //Grupo

                    // Agrega nuevos pacientes via POST
                    router.post('/grupos', 
                    grupoController.nuevoGrupo
                )
        
                // consultar los datos de la mongoBD
        
                router.get('/grupos',
                grupoController.obtenerGrupos
                )
        
                // Obtiene un paciente en especifico (ID)
                router.get('/grupos/:id',
                grupoController.obtenerGrupo
                )
        
                // Actualizar un registro con un ID especifico
                router.put('/grupos/:id',
                    grupoController.actualizarGrupo
                );
        
                // Elimina un paciente por su ID
                router.delete('/grupos/:id',
                grupoController.eliminarGrupo
                );

//----------------------------------------------------------------------------------
    //Nota

                    // Agrega nuevos pacientes via POST
                    router.post('/notas', 
                    notaController.nuevaNota
                )
        
                // consultar los datos de la mongoBD
        
                router.get('/notas',
                notaController.obtenerNotas
                )
        
                // Obtiene un paciente en especifico (ID)
                router.get('/notas/:id',
                notaController.obtenerNota
                )
        
                // Actualizar un registro con un ID especifico
                router.put('/notas/:id',
                    notaController.actualizarNota
                );
        
                // Elimina un paciente por su ID
                router.delete('/notas/:id',
                notaController.eliminarNota
                );

//-----------------------------------------------------------------------
    //persona
    
                    // Agrega nuevos pacientes via POST
                    router.post('/personas', 
                    personaController.nuevaPersona
                )
        
                // consultar los datos de la mongoBD
        
                router.get('/personas',
                personaController.obtenerPersonas
                )
        
                // Obtiene un paciente en especifico (ID)
                router.get('/personas/:id',
                personaController.obtenerPersona
                )
        
                // Actualizar un registro con un ID especifico
                router.put('/personas/:id',
                    personaController.actualizarPersona
                );
        
                // Elimina un paciente por su ID
                router.delete('/personas/:id',
                personaController.eliminarPersona
                );
//----------------------------------------------------------------------------
    //Pregunta
    
                    // Agrega nuevos pacientes via POST
                    router.post('/preguntas', 
                    preguntaController.nuevaPregunta
                )
        
                // consultar los datos de la mongoBD
        
                router.get('/preguntas',
                preguntaController.obtenerPreguntas
                )
        
                // Obtiene un paciente en especifico (ID)
                router.get('/preguntas/:id',
                preguntaController.obtenerPregunta
                )
        
                // Actualizar un registro con un ID especifico
                router.put('/preguntas/:id',
                    preguntaController.actualizarPregunta
                );
        
                // Elimina un paciente por su ID
                router.delete('/preguntas/:id',
                preguntaController.eliminarPregunta
                );
//-----------------------------------------------------------------------------
    //PreguntaEvaluacion
    
                    // Agrega nuevos pacientes via POST
                    router.post('/preguntaevaluacion', 
                    preguntaEvaluacionController.nuevaPreguntaEvaluacion
                )
        
                // consultar los datos de la mongoBD
        
                router.get('/preguntaevaluacion',
                preguntaEvaluacionController.obtenerPreguntasEvaluacion
                )
        
                // Obtiene un paciente en especifico (ID)
                router.get('/preguntaevaluacion/:id',
                preguntaEvaluacionController.obtenerPreguntaEvaluacion
                )
        
                // Actualizar un registro con un ID especifico
                router.put('/preguntaevaluacion/:id',
                    preguntaEvaluacionController.actualizarPreguntaEvaluacion
                );
        
                // Elimina un paciente por su ID
                router.delete('/preguntaevaluacion/:id',
                preguntaEvaluacionController.eliminarPreguntaEvaluacion
                );
//---------------------------------------------------------------------------------------
    //Respuesta
    
                    // Agrega nuevos pacientes via POST
                    router.post('/respuestas', 
                    respuestaController.nuevaRespuesta
                )
        
                // consultar los datos de la mongoBD
        
                router.get('/respuestas',
                respuestaController.obtenerRespuestas
                )
        
                // Obtiene un paciente en especifico (ID)
                router.get('/respuestas/:id',
                respuestaController.obtenerRespuesta
                )
        
                // Actualizar un registro con un ID especifico
                router.put('/respuestas/:id',
                    respuestaController.actualizarRespuesta
                );
        
                // Elimina un paciente por su ID
                router.delete('/respuestas/:id',
                respuestaController.eliminarRespuesta
                );

//-------------------------------------------------------------------------------
    //Subarea
    
                    // Agrega nuevos pacientes via POST
                    router.post('/subareas', 
                    subareaController.nuevaSubarea
                )
        
                // consultar los datos de la mongoBD
        
                router.get('/subareas',
                subareaController.obtenerSubareas
                )
        
                // Obtiene un paciente en especifico (ID)
                router.get('/subareas/:id',
                subareaController.obtenerSubarea
                )
        
                // Actualizar un registro con un ID especifico
                router.put('/subareas/:id',
                    subareaController.actualizarSubarea
                );
        
                // Elimina un paciente por su ID
                router.delete('/subareas/:id',
                subareaController.eliminarSubarea
                );





    return router;
}