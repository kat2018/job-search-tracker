let express = require('express')
let router = express.Router()
const { JobSeekerModel } = require('../../db/Schema')


/* GET users listing. */
router.get('/', (req, res, next) => {
  // res.send('respond with a resource');
  JobSeekerModel.find().then((jobSeeker) => {
    res.json(jobSeeker)
  })
  .catch((err) => console.log(err))
})

module.exports = router
