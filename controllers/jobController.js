import asyncHandler from 'express-async-handler';

// @desc    Get All Jobs
// @route   GET /api/jobs/
// @access  Public
const getJobs = ((req, res) => {
  const q = "SELECT * FROM jobs";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
})


export default {
  getJobs
};