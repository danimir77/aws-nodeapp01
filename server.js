// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('hello Danimir');
// })

// server.listen(3000);
// console.log('Server listening on 3000');

const express = require('express');
const port = 3000;
const server = express();

server.get('/', (req, res) => {
    res.send('Hello Danimir with express')
})


server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})