# ExpressNoteTakerProject
This application  can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

The following HTML and API routes have been created to do the following.


GET /notes -  returns the notes.html file.
GET * -  returns the index.html file
* db.json file on the backend is created to store and retrieve notes using the fs module.
GET /api/notes - are created to interact db.json file and return all saved notes as JSON.

POST /api/notes - are crated to post a new note to save on the request body, add it to the db.json file, and then return the new note to the client.


DELETE /api/notes/:id - is crated to receive a query parameter containing the id of a note to delete;each note has a unique id asscociated to it when it's saved.







Checkout my Deployed App.
https://express-notepad-2020.herokuapp.com/

