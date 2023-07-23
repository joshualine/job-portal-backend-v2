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

// 3. get a single Job
const getOneJob = async (req, res) => {
  let id = req.params.id
  let job = await Job.findOne({ where: { id: id }})
  res.status(200).send(job)
}

// 4. update Job
const updateJob = async (req, res) => {
  let id = req.params.id
  const job = await Job.update(req.body, { where: { id: id }})
  res.status(200).send('job updated')
}

// 5. delete job by id
const deleteJob = async (req, res) => {
  let id = req.params.id
  await Job.destroy({ where: { id: id }} )
  res.status(200).send('Job is deleted !')
}

//-------------------
// 6. Get applications for a specified job id
const getApplicationsForJob = async (req, res) => {
  let id = req.params.id
  const job = await Job.findByPk(id, { include: ["applications"] })
  res.status(200).send(job)
}

// exports.findTutorialById = (jobId) => {
//   return Job.findByPk(jobId, { include: ["applications"] })
//     .then((job) => {
//       return job;
//     })
//     .catch((err) => {
//       console.log(">> Error while finding job: ", err);
//     });
// };

module.exports = {
  getAllJobs,
  addJob,
  getOneJob,
  updateJob,
  deleteJob,
  getApplicationsForJob
}