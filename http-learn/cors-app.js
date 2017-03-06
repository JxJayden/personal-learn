// cors
const http = require('http');

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.end('200 ok');

}).listen(8090);
