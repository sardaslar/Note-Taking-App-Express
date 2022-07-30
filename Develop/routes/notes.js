const { Router } = require ('express');
const fs = require ('fs');

const { v4: uuidv4 } = require('uuid');

const router = Router();

router.get('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8', (err,data) => {
        if (err) {
            console.log(err);
            res.status(400).send('There was an error please try again!');
   } else {
    console.log(JSON.parse(data));
    res.json(JSON.parse(data));
   }
    });
});


router.post ('/', (req, res) => {
    const { title, text } = req.body;
fs.readFile('./db/db.json', 'utf-8', (err, data) => {
    if(err) {
        console.log(err)
    } else {
        const oldData = JSON.parse(data);
        oldData.push({ title, text, id: uuidv4() });
        fs.writeFile(
            './db/db.json',
            JSON.stringify(oldData),
            'utf-8',
            (error) => {
                if (error) {
                    console.log(error);
                }
            }
        );
    }
});

res.send('we got ypour notes');
});


module.exports = router;

