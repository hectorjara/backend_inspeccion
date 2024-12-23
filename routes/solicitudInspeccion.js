const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const solicitudInspeccion = require('../controllers/solicitudInspeccionController');

// Obtener todas las personas
router.get('/',authMiddleware, solicitudInspeccion.solicitudesInspeccion);

router.get('/:id',authMiddleware, solicitudInspeccion.verSolicitudeInspeccion);

// Crear una nueva persona
router.post('/', solicitudInspeccion.crearSolicitudInspeccion);

// eliminar una solicitud
router.delete('/:id',authMiddleware,solicitudInspeccion.EliminarSolicitud)

// actualizar una inspeccion
router.put('/',authMiddleware,solicitudInspeccion.actualizarInspeccion)
module.exports = router;