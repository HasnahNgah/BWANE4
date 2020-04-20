const express = require('express');

const app = express();
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');


const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.set('views', './src/views');
// app.set('view engine', 'pug');
app.set('view engine', 'ejs');

app.get('/', (require, response) => {
  response.render(
    'main',
    {
      nav: [{ link: '/books', title: 'Books' }, { link: '/authors', title: 'Authors' }],
      title: 'Jungle',
    },
  );
  // response.render('index', { list: ['a', 'b'] });
  // response.sendFile(path.join(`${__dirname}/views/index.html`));
});

app.listen(port, () => {
  debug(`listening on port ${chalk.yellowBright(port)}`);
});
