const {Router} = require('express');
const notesRouter = require('./notes');
const {notes} = require("../db/db.json")
const router = Router();

router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
})

router.post("notes", (req, res) => {
    req.body.id = uuidv4();
    const writtenNotes = createWrittenNotes(req.body, notes);
    res.json(writtenNotes);
});

router.delete("./notes/:id" , (req, res) => {
    const params = req.params.id
updateDb(params, notes);
res.redirect('');
});
router.use('/notes', notesRouter);

module.exports = router;
