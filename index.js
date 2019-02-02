const config = require('config');
const express = require('express');
const app = express();

const router = require('./lib/route').router;

const port = config.get('server.port');

app.use('/',router);

app.listen(port, () => console.log(`Fibonacci Server Listening on ${port}!`))