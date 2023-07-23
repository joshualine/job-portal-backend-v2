const express = require('express');

const jobController = require('../controllers/jobController.js')

const router = express.Router();


router.get('/jobs', jobController.getAllJobs)
router.get('/jobs/:id', jobController.getOneJob)
router.post('/jobs', jobController.addJob)
router.put('/jobs/:id', jobController.updateJob)
router.delete('/jobs/:id', jobController.deleteJob)

router.get('/jobs/:id/applications', jobController.getApplicationsForJob)



module.exports = router;