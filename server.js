// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// const { method, url } = request;
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const http = require('http');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// create 2 HTML ROUTES

// `index.html` file

 app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

// ` notes.html ` file

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "public", 'notes.html'));
});



// Create functon for `db.json` file  which will output stored note data, assign a id, and retrieve note data using the `fs` module.

function getNotes() {
    let data = fs.readFileSync('./public/db.json', 'utf8');
    let notes = JSON.parse(data);
    
    for (var i = 0; i < notes.length; i++) {
    notes[i] + "id";
       console.log(notes[i]+"id")
  }
  return res.json(note)
}
// getNotes()

// Create the following 3 API routes

// 1:  api get ALL notes , should read the db.json file and return saved notes as json

app.get('/api/notes', function (req, res) {
        noteData = getNotes();
        res.json(noteData);
    });


// 2: api post notes, takes in JSON input and saves to req.body and adds to the db.json file-return new note to client 

app.post("/api/notes", function(req, res) {
var newNote= res.send (req.body);
fs.writeFileSync('/public/db.json', JSON.stringify(newNote), 'utf8');
  
newNote = noteData.push(newNote);
console.log(newNote);

  return res.json(newNote);
   
});


// 3: api delete notes, should retreive a query parameters containing unique id of note - then read notes in db.json file - remove note with given id, then rewrite a note to db.json file



app.listen();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started ${PORT}`));

