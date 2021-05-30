require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
require('./config/connection');
const PORT = process.env.PORT || 3000;
const path = require('path');
const app = express();
const routes = require('./routes/index-routes');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use(methodOverride('_method'));

app.use(routes);

app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}`)
})