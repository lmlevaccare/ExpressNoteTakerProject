const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const path = require('path');





app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));
require("./routes/apiRoutes")(app);
// require('./public/js/index.js');
// require("./routes/htmlRoutes");
// ===============================================================================
// ROUTING
// ===============================================================================


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

});
  


app.get('api/notes', function (req, res) {
res.sendFile(path.join(__dirname,'public', 'notes.html'));

});

// app.listen();



app.listen(PORT, () => console.log(`server started ${PORT}`));