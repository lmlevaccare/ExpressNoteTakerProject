const uuid = require('uuid');
var data = require('../data/db.json');


// ===============================================================================
// api ROUTING
// ===============================================================================



module.exports = function (app) {
  
  app.get("/api/notes", function (req, res,) {
   


   res.json(data);
    console.log(data);

  });
 
  app.post('/api/notes', function (req, res) {
    console.log(req.body)
    let newNote = {
      id: data.length,
      title: req.body.title,
      text: req.body.text
    }

   data.push(newNote)
    res.json(data)


})



  app.delete("/api/notes/:id", function (req, res) {
    const requestID = req.params.id;
    console.log(requestID);

  
   data.splice(requestID, 1);

    res.json(data);
  });


};





