const express = require('express');
const router = express.Router();
require('dotenv').config()
const { genPdf, fetchPdf, deliverPdf } = require('../pdfController'); // Make sure this is the correct path

router.post('/generatePDF', genPdf);

router.get('/fetchPDF', fetchPdf)

router.post('/deliverPDF', deliverPdf)


module.exports = router;