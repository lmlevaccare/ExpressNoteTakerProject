const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const path = require('path');





app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// ===============================================================================
// ROUTING
// ===============================================================================


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

});
  


app.get('/notes', function (req, res) {
res.sendFile(path.join(__dirname,'public', 'notes.html'));

});

require('./routes/apiRoutes')(app)



app.listen(PORT, () => console.log(`server started ${PORT}`));