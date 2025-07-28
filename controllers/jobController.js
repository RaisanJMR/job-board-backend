const asyncHandler = require('express-async-handler')
const Job = require('../models/jobModel');



// @desc   Get all jobs
// @route  GET /api/jobs
// @desc    Get all jobs
// @route   GET /api/job
const getJobs = asyncHandler(async (req, res) => {
  const { search } = req.query; 
  const filter = {}; 

  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: 'i' } },
      { location: { $regex: search, $options: 'i' } }
    ];
  }

  const jobs = await Job.find(filter);

  res.json(jobs);
});


// @desc   Create a new job
// @route  POST /api/jobs
const createJob = asyncHandler(async (req, res) => {
  const { title, company, type, location, description } = req.body;

  if (!title || !company || !type || !location || !description) {
    res.status(400);
    throw new Error('Please fill in all fields');
  }

  const job = await Job.create({
    title,
    company,
    type,
    location,
    description
  });

  res.status(201).json(job);
});

// @desc  Get a job by ID
// @route GET /api/jobs/:id
const getJobById = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    res.status(404);
    throw new Error('Job not found');
  }

  res.json(job);
});

module.exports = {
  getJobs,
  createJob,
  getJobById,
}