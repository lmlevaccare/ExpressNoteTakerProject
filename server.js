const express = require('express');

const app = express();

const path = require('path');





app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));

require("./routes/apiRoutes");
// require('./public/js/index.js');
// require("./routes/htmlRoutes");
// ===============================================================================
// ROUTING
// ===============================================================================

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public/html/index.html'));

});
  


app.get('/notes', function (req, res) {
res.sendFile(path.join(__dirname,'./public/html/notes.html'));

});

app.listen();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started ${PORT}`));