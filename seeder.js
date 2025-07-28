require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const Job = require('./models/jobModel');


const seed = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    await Job.deleteMany();

    const jobs = JSON.parse(fs.readFileSync('./data/jobs.json', 'utf-8'));

    await Job.insertMany(jobs);
    console.log("Seed complete");
    process.exit();
};

seed();
