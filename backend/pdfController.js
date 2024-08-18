const puppeteer = require('puppeteer');
const path = require('path');
const bwipjs = require('bwip-js');
const pdfTemplate = require('./documents/document.js');
const nodemailer = require('nodemailer')
const fs = require('fs')
require('dotenv').config()


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

        console.log("Generated HTML Content:", htmlContent);

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(htmlContent);
        const pdfBuffer = await page.pdf({ format: 'A4' });
        await browser.close();

        fs.writeFileSync(path.join(__dirname, 'receipt.pdf'), pdfBuffer);

        res.json({ message: 'PDF generated', filename: 'reciept.pdf' });
    } catch (err) {
        console.error("Error in genPdf:", err);
        res.status(500).send('An error occurred while generating the PDF');
    }
};
exports.fetchPdf = async (req, res) => {
    const filePath = path.join(__dirname, 'receipt.pdf');
    console.log(filePath)

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error('File does not exist:', filePath);
            return res.status(404).send('File not found');
        }

        // Send the file
        res.sendFile(filePath, (err) => {
            if (err) {
                console.error('Error sending file:', err);
                res.status(500).send('An error occurred while sending the file');
            }
        });
    });
};

exports.deliverPdf = async(req, res) => {
    const pathToAttachment = path.join(__dirname, 'receipt.pdf');
    const attachment = fs.readFileSync(pathToAttachment);

    // Logging to ensure environment variables are accessible
    // console.log('Email user:', process.env.EMAIL_USER);
    // console.log('Email pass:', process.env.EMAIL_PASS ? '****' : 'Not set');

    let smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'Gmail',
        port: 465,
        secure: true, 
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        tls: { rejectUnauthorized: false }
    });

    smtpTransport.sendMail({
        from: process.env.EMAIL_USER,
        to: req.body.email,
        subject: 'Online Movie Tickets',
        html: `Show the tickets given in the PDF.`,
        attachments: [{
            filename: 'receipt.pdf',
            content: attachment,
            contentType: 'application/pdf',
            disposition: 'attachment'
        }]
    }, function(error, info) {
        if (error) {
            console.log("Error sending email:", error);
        } else {
            console.log("Email sent:", info.response);
        }
        res.send("Mail has been sent to your email. Check your mail!");
    });
}