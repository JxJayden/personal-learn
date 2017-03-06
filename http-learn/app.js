// jsonp
const http = require('http'),
    URL = require('url');

http.createServer((request, response) => {
    var a = URL.parse(request.url, true);
    console.log(a.query.callback);
    if (a.query._cb === 'true') {
        if (a.query.callback) {
            if (~a.query.callback.indexOf('function')) {
                response.end(`(${decodeURIComponent(a.query.callback)})()`);
            } else {
                response.end(`${decodeURIComponent(a.query.callback)}()`);
            }
        } else {
            response.end('no callback function');
        }
    } else {
        response.end('end');
    }
}).listen(8080);
