const db = require('../models');

// create main Model
const Job = db.jobs;
const Application = db.applications;


// ----------- 1. Create Job
// @desc    Add Job
// @route   POST /api/jobs/
// @access  Private
const addJob = async (req, res) => {

  let info = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
  }

  const job = await Job.create(info)
  res.status(200).send(job)
  console.log(job)

}

// ----------- 2. Read Job
// @desc    Get All Jobs
// @route   GET /api/jobs/
// @access  Public
const getAllJobs = async (req, res) => {

  let jobs = await Job.findAll({});
  res.status(200).send(jobs)

}


module.exports = {
  getAllJobs,
  addJob
  
}