const express = require('express')
const { JobSeekerModel } = require('../db/schema')
const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  // res.send('respond with a resource');
  JobSeekerModel.find().then(jobSeeker => {
    res.json(jobSeeker)
  })
  .catch((err) => console.log(err))
});

module.exports = router
