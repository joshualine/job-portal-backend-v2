const express = require('express');

const jobController = require('../controllers/jobController.js')

const router = express.Router();


router.get('/', jobController.getAllJobs)
router.get('/:id', jobController.getOneJob)
router.post('/', jobController.addJob)
router.put('/:id', jobController.updateJob)
router.delete('/:id', jobController.deleteJob)

router.get('/:id/applications', jobController.getApplicationsForJob)



module.exports = router;