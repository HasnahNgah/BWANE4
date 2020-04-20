const express = require('express');
var app = express();
var debug = require('debug')('app');
var chalk = require('chalk');
var morgan = require('morgan');
var path = require('path');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname,'/public')));
app.use('/css',express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')));
app.use('/js',express.static(path.join(__dirname,'node_modules/jquery/dist')));

app.get('/',function(require,response){
response.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(3000, function(){
    debug(`listening to a port ${chalk.yellowBright(' 3000')}`);
});
