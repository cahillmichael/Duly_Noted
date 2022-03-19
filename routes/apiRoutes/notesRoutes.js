const fs = require('fs')
const path = require('path')
const router = require('express').Router()
const uniqid = require('uniqid')
const notes = require('../../db/db.json')

router.get('/notes', (req, res) => {
    let results = notes
    res.json(results)
})

router.post('/notes', (req, res) => {
    req.body.id = uniqid.time()

    const note = req.body

    notes.push(note)

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'), 
        JSON.stringify(notes)
    )
    
    if(res) {
	console.log('Success');
        return res.json();
    }
})

module.exports = router;