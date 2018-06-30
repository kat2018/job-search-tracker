const mongoose = require('mongoose')
const Schema = mongoose.Schema
const JobTrackerCardSchema = new Schema({
  companyName: {
    type: String,
    default: "New Company Name"
  },
  contactName: {
    type: String,
    default: "New Contact Name"
  },
  userRatingOfContactName: {
    type: Boolean
  },
  dateSubmitted: {
    type: Date,
    default: Date.now
  },
  jobTitle: {
    type: String,
    default: "New Job Title"
  }, 
  userComments: {
    type: String,
    default: "New Comment..."
  }
})

const JobSeekerSchema = new Schema({
    userName: String,
    jobSeekerCards: [JobTrackerCardSchema]
})

const JobSeekerModel = mongoose.model("User", JobSeekerSchema);

const JobTrackerCardModel = mongoose.model('JobTrackerCard', JobTrackerCardSchema)


module.exports = {
    JobTrackerCardModel, 
    JobSeekerModel
}
