const express = require('express');
const multer = require('multer');

const router = express.Router();


// =====================================
// Configuración de almacenamiento
// =====================================

const storage = multer.diskStorage({

  // Carpeta donde se guardarán los archivos
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },

  // Nombre único para evitar sobrescribir archivos
  filename: (req, file, cb) => {

    // Timestamp actual
    const uniqueName =
      Date.now() + '-' + file.originalname;

    cb(null, uniqueName);
  }
});


// =====================================
// Configuración de Multer
// =====================================

const upload = multer({

  storage,

  // Límite de 2MB
  limits: {
    fileSize: 2 * 1024 * 1024
  }
});


// =====================================
// POST /single
// =====================================

router.post(
  '/single',

  // Middleware de Multer
  upload.single('file'),

  (req, res) => {

    // Si no llegó archivo
    if (!req.file) {
      return res.status(400).json({
        error: 'No se recibió ningún archivo'
      });
    }

    res.json({
      message: 'Archivo recibido correctamente',
      filename: req.file.filename
    });
  }
);

module.exports = router;