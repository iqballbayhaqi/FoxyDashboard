const express = require("express");
const app = express();
const PORT = procces.env.PORT || 3000;
const route = require('./routes');
const session = require('express-session')
const rupiah = require('./helpers/rupiah')
const numberSeparator = require('./helpers/numberSeparator')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));
app.set('view engine', 'ejs')
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.locals.rupiah = rupiah;
app.locals.numberSeparator = numberSeparator;

app.use(route)

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
})