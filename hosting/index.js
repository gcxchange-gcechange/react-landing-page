var express = require('express');
var server = express();
var options = { index: 'index.html' };

server.use('/', express.static('/home/site/wwwroot', options));
server.use('/home', express.static('/home/site/wwwroot', options));
server.use('/accueil', express.static('/home/site/wwwroot', options));

server.get('*', (req, res) => {
    res.redirect('/');
  });

server.listen(process.env.PORT);