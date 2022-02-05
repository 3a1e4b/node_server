const http = require('http');

const server = http.createServer((req, res) => {
        console.log('к серверу обратился какой то уебок')
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
//      res.setHeader('charset', 'utf-8')
        res.write('<h1>Здорово хуила</h1><form><button autofocus>Ёбни по мне</button></form>')
        res.end()
});

const PORT = 3000;
server.listen(PORT, (error) => {
        error ? console.log(error) : console.log(`listen on ${PORT}`)                                  
});
