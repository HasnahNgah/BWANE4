const express = require('express');

const app = express();
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.get('/', (require, response) => {
  response.sendFile(path.join(`${__dirname}/views/index.html`));
});

app.listen(3000, () => {
  debug(`listening to a port ${chalk.yellowBright(' 3000')}`);
});
