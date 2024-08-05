const express = require('express');
const router = express.Router();
const { genPdf, fetchPdf, deliverPdf } = require('../pdfController'); // Make sure this is the correct path

router.post('/generatePDF', genPdf);

router.get('/fetchPDF', fetchPdf)

router.get('/deliverPDF', deliverPdf)

module.exports = router;