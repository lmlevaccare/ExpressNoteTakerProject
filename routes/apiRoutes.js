const uuid = require('uuid');
// var data = require('./data/db.json');

const fs = require('fs');
var notesData = getNote();
// ===============================================================================
// api ROUTING
// ===============================================================================

function getNote() {
  let data = fs.readFileSync('./data/db.json', 'utf8');

  let newNote = JSON.parse(data);
    
  let index = 0;

    while (index < newNote.length) {
      console.log(newNote[index]);
      index += 1;
    }
  return newNote;
}


module.exports = function (app) {
  
  app.get("/api/notes", function (req, res,next) {
      notesData = getNote();
      res.json(notesData);
    
    // let newNote = JSON.parse(noteData);
    // let index = 0;
    // while (index < newNote.length) {
    //   console.log(newNote[index]);
    //   index += 1;
    // }
     next()
  });
 
  app.post("/api/notes", function (req, res) {


    var addNote = {
      id: uuid.v4(),
      title: req.body,
     
    }

    if (!addNote.title) {
      return res.status(400).json({ msg: "Please Add Note Title" })
    }
      
    notesData.push(addNote);
    fs.writeFileSync('./data/db.json', JSON.stringify(notesData), 'utf8');
        res.json(true);
    // fs.writeFile('./data/db.json');
    // res.json(addNote);
    
  });

  app.delete("/api/notes/:id", function (req, res) {
    const requestID = req.params.id;
    console.log(requestID);

    let note = newNote.filter(note => {
      return note.id === requestID;
    })[0];

    console.log(note);
    const index = newNote.indexOf(note);

    notes.splice(index, 1);

    fs.writeFileSync('./data/db.json', JSON.stringify(newNote), 'utf8');
    res.json("Note deleted");
  });


};





