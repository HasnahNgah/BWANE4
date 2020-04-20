const express = require('express');
var app = express();
var chalk = require('chalk');

app.get('/',function(require,response){
response.send('Hello World');
});

app.listen(3000, function(){
    console.log('listening to a port' + chalk.redBright(' 3000'));
});
