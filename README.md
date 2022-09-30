## Note Taker App  

##Table of Contents
Description
Visuals
License



##Description

* The application frontend has already been created, it's your job to build the backend and connect the two.

* The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
  
##User Story

#This is a note-taking application makes life easy! 

WHEN you open the Note Taker

Ypu will presented with a landing page with a link to a notes page

WHEN you click on the link to the notes page

THEN you will presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

WHEN you enter a new note title and the note’s text

THEN a Save icon appears in the navigation at the top of the page

WHEN you click on the Save icon

THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

WHEN you click on an existing note in the list in the left-hand column

THEN that note appears in the right-hand column

WHEN you click on the Write icon in the navigation at the top of the page

THEN you will presented with empty fields to enter a new note title and the note’s text in the right-hand column

##VISUALS

![alt text](https://james-fisher-web-developer.com/media/note-taker-1.png)
