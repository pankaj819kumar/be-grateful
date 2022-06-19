const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function (req, res) {
    
})

app.listen(port, function (err) {
    if (err) {
        console.log(`error: ${err}`);
    }
    else {
        console.log(`server started successfully on port ${port}`);
    }
});