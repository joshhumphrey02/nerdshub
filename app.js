const express = require('express');
const app = express();
const port = 4000;


/////// Set Static Folders////////////////
app.use(express.static('public'))
////  Set View Engine ///////////////////
app.set('view engine', 'hbs')
////////// Import Your Router //////////////////
app.use('/', require('./routes/router'))
app.listen(port, console.log(`listening to port ${port}`))