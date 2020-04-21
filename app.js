const express = require('express');

const app = express();
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const sql = require('mssql');


const port = process.env.PORT || 3000;

const config = {
  user: 'azlan',
  password: 'passw0rdMUKAH',
  server: 'azlanlibrary.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
  database: 'PSLibrary',
};
sql.connect(config).catch((err) => { debug(err); });
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.set('views', './src/views');
// app.set('view engine', 'pug');
app.set('view engine', 'ejs');

const nav = [
  { link: '/books', title: 'Book' },
  { link: '/authors', title: 'Author' },
];

const bookRouter = require('./src/routes/bookRoutes')(nav);

app.use('/books', bookRouter);
app.get('/', (require, response) => {
  response.render(
    'main',
    {
      nav: [{ link: '/books', title: 'Books' }, { link: '/authors', title: 'Authors' }],
      title: 'Jungle',
    },
  );
});

app.listen(port, () => {
  debug(`listening on port ${chalk.yellowBright(port)}`);
});
