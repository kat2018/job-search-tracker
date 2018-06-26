const mongoose = require('mongoose')
const Schema = mongoose.Schema
const JobSearchApplicationTracker = new Schema({
  companyName: {
    type: String,
    default: "Company Name"
  },
  contactName: {
    type: String,
    default: "Contact Name"
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
      default: "Job Title"
  }, 
  userComments: {
      type: String,
      default: "How did it go? Your comments here"
  }
});