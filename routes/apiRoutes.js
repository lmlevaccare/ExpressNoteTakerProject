const uuid = require('uuid');
var noteData = require('./../data/db.json');
// var postNote = require('./../server');
// var index=require('./../public/js/index')
const fs = require('fs');
const render=require('./../public/js/index')
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  

  app.get('./../public/html/notes', function (req, res) {
    let newNote = JSON.parse(noteData);
    let index = 0;
    while (index < newNote.length) {
      console.log(newNote[index]);
      index += 1;
    }
    res.json(noteData);
  });

  app.post('./../public/html/notes', function (req, res) {


    var addNote = {
      id: uuid.v4(),
      title: req.body,
     
    }

    if (!addNote.title) {
      return res.status(400).json({ msg: "Please Add Note Title" })
    }
    
  addNote.push(newNote);
    fs.writeFile('./../data/db.json');
    res.json(addNote);
    
  });

  app.delete("./../public/html/notes/:id", function (req, res) {
    const requestID = req.params.id;
    console.log(requestID);

    let note = newNote.filter(note => {
      return note.id === requestID;
    })[0];

    console.log(note);
    const index = newNote.indexOf(note);

    notes.splice(index, 1);

    fs.writeFileSync('./db.json', JSON.stringify(newNote), 'utf8');
    res.json("Note deleted");
  });


};





