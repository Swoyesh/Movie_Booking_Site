module.exports = ({ selectedSeat, price, time, date, title, sno, vat, barcodeBase64 }) => {
    return `
        <!doctype html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Ticket Receipt</title>
        </head>
        <body>
             <div class="main" style="width: 45%;">
                <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; line-height: 0px;">
                    <h2>Cinestar Pvt. Ltd.</h2>
                    <h2>Big Movies</h2>
                    <h3>City Center, Kamalpokhari, Kathmandu</h3>
                    <p>Tax Invoice</p>
                </div>
                <div class="body" style="width: 100%; line-height: 0px;">
                    <div style="display: flex;">
                        <p>S.No: <span style="font-weight: bold;">ART ${sno}</span> </p>
                        <div style="flex: 1;"></div>
                        <p>Vat: ${vat}<span style="font-weight: bold;"></span></p>
                    </div>
                    <div style="display: flex;">
                        <p>Movie: ${title}<span style="font-weight: bold;"></span> </p>
                    </div>
                    <div style="display: flex;">
                        <p>Screen: <span style="font-weight: bold;">Audi 1 </span> </p>
                        <div style="flex: 1;"></div>
                        <p>Type: <span style="font-weight: bold;">Platinum</span></p>
                    </div>
                    <div style="display: flex; flex-direction: row;">
                        <p style="flex: 1; font-size: 12px;">Date: ${date}<span style="font-weight: bold;"> </span> </p>&nbsp;&nbsp;&nbsp;
                        <p style="flex: 1; font-size: 12px;">Time: ${time}</p>&nbsp;&nbsp;&nbsp;
                        <p style="flex: 1; font-size: 12px;">Seat No: ${selectedSeat}<span style="font-weight: bold;"></span></p>
                    </div>
                    <div style="display: flex; justify-content: flex-end; line-height: 10px;">
                        <p>Total Cost: ${price}</p>
                    </div>
                    <img src="data:image/png;base64,${barcodeBase64}" alt="Barcode" />
                </div>
                <div style="font-size: 10px; display: flex; justify-content: flex-start; width: 100%;" >
                    <ol style="margin: 0px; padding: 10px;">
                        <li>Tickets once sold cannot be refunded, transferred or exchanged.</li>
                        <li>Lost, stolen or damaged tickets will not be replaced.</li>
                        <li>Seat allocation cannot be altered after the purchase of the tickets.</li>
                    </ol>
                </div>
            </div>
        </body>
        </html>
    `;
};