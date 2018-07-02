require('dotenv').config()
const mongoose = require ('mongoose')
// mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)
// const db = mongoose.connection;

const { JobTrackerCardModel, JobSeekerModel} = require("./Schema")

const google = new JobTrackerCardModel({
    companyName: "Google",
    contactName: "Jane Doe",
    userRatingOfContactName: "True",
    dateSubmitted: new Date(06 / 15 / 2018),
    jobTitle: "Junior Developer",
    userComments: "Had a great phone interview"
})

const facebook = new JobTrackerCardModel({
    companyName: "Facebook",
    contactName: "Craby Patty",
    userRatingOfContactName: "True",
    dateSubmitted: new Date(06 / 29 / 2018),
    jobTitle: "Junior Developer",
    userComments: "Connected via LinkedIn"
});

const daisyDuck = new JobSeekerModel({
    userName: 'Daisy_Duck',
    jobSeekerCards: [google, facebook]
})

JobSeekerModel.remove({})
    .then(() => daisyDuck.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())

