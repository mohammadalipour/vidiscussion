let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let stream = require('./websevice/stream.js');
let path = require('path');
let favicon = require('serve-favicon');

//set favicon
app.use(favicon(path.join(__dirname,'favicon.ico')));

//set assets folder
app.use('/assets',express.static(path.join(__dirname,'assets')));
