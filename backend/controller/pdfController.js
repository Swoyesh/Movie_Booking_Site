const pdf = require('html-pdf')
const path = require('path')

const pdfTemplate = require("./documents/document")

exports.genPdf = (req, res)=>{
    pdf.create(pdfTemplate(req.body(), {}).toFile('reciept.pdf',(err)=>{
        if(err){
            console.log(err)
        }
        res.send('pdf generated')
    }))
}