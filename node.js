var http = require('http'),
    fs = require('fs');
function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function (err, data) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}
http.createServer(function (req, res) {
    // Приводим URL к единому виду путем удаления 
    // строки запроса, необязательной косой черты 
    // в конце строки и приведения к нижнему регистру
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case '':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Homepage');
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('About');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Не найдено');

            break;
    }
}).listen(3000);
console.log('Сервер запущен на localhost:3000; нажмите Ctrl+C для завершения....');