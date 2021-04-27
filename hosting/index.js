var express = require('express');
const helmet = require("helmet");
var server = express();

server.use(helmet.noSniff());
server.use(helmet.hidePoweredBy());
server.use(helmet.frameguard());

var options = { index: 'index.html' };

server.use('/', express.static('/home/site/wwwroot', options));
server.use('/home', express.static('/home/site/wwwroot', options));
server.use('/accueil', express.static('/home/site/wwwroot', options));

server.use((req, res) => {
  res.setHeader("X-XSS-Protection", "1; mode=block");
});

server.get('*', (req, res) => {
    res.redirect('/');
  });

server.listen(process.env.PORT);