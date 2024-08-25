const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let queryObject = url.parse(req.url, true).query;
    console.log(queryObject);
    let bmiResult = parseFloat(queryObject.weight) / (parseFloat(queryObject.height) * parseFloat(queryObject.height));
    let txt= "Your BMI is:" + bmiResult.toFixed(2);;
    res.end(txt);
}).listen(1300);
console.log('Server started on port 1301...');