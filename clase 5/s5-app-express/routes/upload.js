const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({

  destination(req, file, cb) {
    cb(null, 'uploads/');
  },

  filename(req, file, cb) {

    const extension =
      path.extname(file.originalname);

    cb(
      null,
      `${uuidv4()}${extension}`
    );

  }

});

const fileFilter = (req, file, cb) => {

  const validTypes = [
    'image/jpeg',
    'image/png'
  ];

  if (
    validTypes.includes(file.mimetype)
  ) {
    cb(null, true);
  } else {
    cb(
      new Error(
        'Solo JPG y PNG'
      ),
      false
    );
  }
};

const upload = multer({

  storage,

  fileFilter,

  limits: {
    fileSize: 1.5 * 1024 * 1024
  }

});

router.get('/upload', (req, res) => {

  res.render('upload');

});

router.post('/upload', (req, res) => {

  upload.single('file')(
    req,
    res,
    (err) => {

      if (err) {

        return res.status(400).json({
          error: err.message
        });

      }

      res.json({
        message: 'Archivo recibido',
        file: req.file.filename
      });

    }
  );

});

module.exports = router;