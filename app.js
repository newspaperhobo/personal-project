require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const routes = require('./routes/index-routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use(methodOverride('_method'));

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

require('./config/connection');

app.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}`)
})