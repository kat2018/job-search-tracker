require('dotenv').config()
const mongoose = require ('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

const { JobTrackerCardModel} = require("./schema")

const saved = async () => {
    await JobTrackerCardModel.remove()

    const companyNameOne = new JobTrackerCardModel({
        companyName: "Google",
        contactName: "Jane Doe",
        userRatingOfContactName: "True",
        dateSubmitted: (new Date),
        jobTitle: "Junior Developer",
        userComments: "Had a great phone interview"
    })

    db.close()
}
saved()

