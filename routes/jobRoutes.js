const express = require('express')

const {
  getJobs,
  createJob,
  getJobById
} = require('../controllers/jobController')

const router = express.Router()


router.route('/')
  .get(getJobs)
  .post(createJob)

router.route('/:id')
  .get(getJobById)

module.exports = router