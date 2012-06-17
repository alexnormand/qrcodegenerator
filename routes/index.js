var QRCode = require('qrcode');


/*
 * GET home page.
 */
exports.index = function (req, res) {
  res.render('index', { title: 'QR Code Generator' });
};


exports.getQRCodeImage = function (req, res) {
    var textToEncode = decodeURIComponent(req.params.text);
    
    QRCode.toDataURL(textToEncode, function (err, dataURI) {

        var base64Data = dataURI.replace(/^data:image\/png;base64,/,""),
            dataBuffer = new Buffer(base64Data, 'base64');

        res.contentType('image/png');
        res.end(dataBuffer, 'binary');
    });
};
