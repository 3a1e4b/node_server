const http = require('http');

const server = http.createServer((req, res) => {
        console.log('к серверу обратился какой то ...')
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
//      res.setHeader('charset', 'utf-8')
        res.write('<h1>Здорово, ...!</h1><form><button autofocus>... по мне</button></form>')
        res.end()
});

const PORT = 3000;
server.listen(PORT, (error) => {
        error ? console.log(error) : console.log(`listen on ${PORT}`)                                  
});
