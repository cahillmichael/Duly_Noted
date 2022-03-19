const allNotes = require('../../db/db.json');
const fs = require('fs');
const router = require('express').Router();
const path = require('path');
const uniqid = require('uniqid');

router.get('/notes', (req, res) => {
    let results = allNotes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = uniqid.time();

    const note = req.body;

    allNotes.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'), 
        JSON.stringify(allNotes)
    );
    
    if(res) {
	console.log('Success');
        return res.json();
    };
});

module.exports = router;