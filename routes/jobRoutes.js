const express = require('express');

// import controllers Jobs, Applications
const jobController = require('../controllers/jobController.js')

const router = express.Router();


router.get('/jobs', jobController.getAllJobs)



module.exports = router;