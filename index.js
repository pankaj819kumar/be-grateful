const express = require('express');
const app = express();
const port = 8000;
const router = express.Router();
const db = require('./config/mongoose');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('assets'));
app.use(express.urlencoded());
app.use('/', require('./routes/index'));

app.listen(port, function (err) {
    if (err) {
        console.log(`error: ${err}`);
    }
    else {
        console.log(`server started successfully on port ${port}`);
    }
});