const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // Sadece anasayfa isteğini (/) ele alıyoruz
    if (req.url === '/') {
        // index.html dosyasını okuyun
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Sunucu hatası');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Sayfa bulunamadı');
    }
});

server.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});