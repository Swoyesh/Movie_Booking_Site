const pdf = require('html-pdf');
const path = require('path');
const bwipjs = require('bwip-js');
const pdfTemplate = require('./documents/document.js');
const nodemailer = require('nodemailer')
const fs = require('fs')

// Generate barcode as base64
const generateBarcode = (text) => {
    return new Promise((resolve, reject) => {
        bwipjs.toBuffer({
            bcid: 'code128',       // Barcode type
            text: text,            // Text to encode
            scale: 3,              // 3x scaling factor
            height: 10,            // Bar height, in millimeters
            includetext: true,     // Show human-readable text
            textxalign: 'center',  // Always good to set this
        }, (err, png) => {
            if (err) {
                return reject(err);
            }
            // Convert buffer to base64
            const base64 = png.toString('base64');
            resolve(base64);
        });
    });
};

exports.genPdf = async (req, res) => {
    try {
        const { selectedSeat, price, time, date, title } = req.body;
        const sno = Math.floor(Math.random() * 1000) + "-" + Math.floor(Math.random() * 1000000);
        const vat = Math.floor(Math.random() * 1000000000);
        const barcodeBase64 = await generateBarcode(sno);

        const htmlContent = pdfTemplate({ selectedSeat, price, time, date, title, sno, vat, barcodeBase64 });

        // Log the generated HTML content to ensure it's correctly formed
        console.log("Generated HTML Content:", htmlContent);

        pdf.create(htmlContent, {}).toFile(path.join(__dirname, 'receipt.pdf'), (err, result) => {
            if (err) {
                console.error("Error generating PDF:", err);
                return res.status(500).send('An error occurred while generating the PDF');
            }
            res.json({ message: 'PDF generated', filename: result.filename });
        });
    } catch (err) {
        console.error("Error in genPdf:", err);
        res.status(500).send('An error occurred while generating the PDF');
    }
};

exports.fetchPdf = async (req, res) => {
    res.sendFile(path.join(__dirname,'receipt.pdf'));
};

exports.deliverPdf = async(req,res) => {
   
        res.send("Mail has been sent to your email. Check your mail!")
    
}