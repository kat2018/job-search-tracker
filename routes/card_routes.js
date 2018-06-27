const express = require('express')
const router = express.Router();
const { JobSeekerModel } = require("../db/schema");

router.get('/', function (req, res, next) {
    JobSeekerModel.find().then((jobSeeker) => {
        res.send({
            jobSeeker
        })
    })
    
})

router.get('/:jobCard', (req, res) => {
    JobSeekerModel.findById(req.params.id).then((jobSeeker) => {
        res.sendFile({
            jobSeeker
        })
    })
})

router.post('/', (req, res) => {
    const newJobSeeker = new JobSeekerModel(req.body)
    newJobSeeker.save().then((jobSeeker) => {
        res.send(jobSeeker)
    })
})

module.exports = router