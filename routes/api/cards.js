const express = require('express')
const router = express.Router()

const Card = require('../../db/Schema')

router.get('/', (req, res) => {
    Card.find()
        .sort({ date: -1})
        .then(JobTrackerCardSchema => res.json(JobTrackerCardSchema));
})

module.exports = router