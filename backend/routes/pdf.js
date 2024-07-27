const express = require('express')
const router = require('express').Router()
const genPdf = require('../controller/pdfController')

router.post('/generatePDF', genPdf)