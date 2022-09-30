const express = require('express');
const { route } = require('./routes');
const api = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
let notes = require('./db/db.json');
const { uid } = require('uid');

app.use(express.static('public'));
app.use(express.json());
app.use('/api', api);


app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


app.get('api/notes', (req, res) => {
    res.json(notes)
})



app.post('/api/notes', (req, res) => {
    let newNote = {
        title: req.body.title,
        text: req.body.text, 
        id: uid()
    }

    notes.push(newNote)
    res.json(200)
})

app.post('/api/notes', (req,res) => {
    res.json(notes)
})

app.delete('/api/notes/:id', (req, res) => {
      notes=notes.filter(note => note.id | req.params.id)
      res.json(notes)
})

app.listen(PORT, () => {
    console.log(`server start on: ${PORT}`);
});

