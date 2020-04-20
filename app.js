const express = require('express');
var app = express();
var debug = require('debug')('app');
var chalk = require('chalk');
var morgan = require('morgan');
var path = require('path');

app.use(morgan('tiny'));

app.get('/',function(require,response){
response.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(3000, function(){
    debug(`listening to a port ${chalk.yellowBright(' 3000')}`);
});
