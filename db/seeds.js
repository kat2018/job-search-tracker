require('dotenv').config()
const mongoose = require ('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

const { JobTrackerCardModel, JobSeekerModel} = require("./schema")

const saved = async () => {
    await JobTrackerCardModel.remove()

    const google = new JobTrackerCardModel({
        companyName: "Google",
        contactName: "Jane Doe",
        userRatingOfContactName: "True",
        dateSubmitted: (new Date),
        jobTitle: "Junior Developer",
        userComments: "Had a great phone interview"
    })

    const facebook = new JobTrackerCardModel({
      companyName: "Facebook",
      contactName: "Craby Patty",
      userRatingOfContactName: "True",
      dateSubmitted: new Date(),
      jobTitle: "Junior Developer",
      userComments: "Connected via LinkedIn"
    });

    const jobSeeker = new JobSeekerModel({
        jobSeeker: [google, facebook]
    })

    await jobSeeker.save()

    db.close()
}
saved()

