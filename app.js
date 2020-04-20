const express = require('express');
var app = express();
var debug = require('debug')('app');
var chalk = require('chalk');

app.get('/',function(require,response){
response.send('Hello World');
});

app.listen(3000, function(){
    debug(`listening to a port ${chalk.yellowBright(' 3000')}`);
});
