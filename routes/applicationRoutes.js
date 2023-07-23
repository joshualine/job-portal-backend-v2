const express = require('express');

const applicationController = require('../controllers/applicationController.js')

const router = express.Router();


router.get('/applications', applicationController.getAllApplications)
router.get('/applications/:id', applicationController.getOneApplication)
router.post('/applications/:job_id', applicationController.addApplication)
router.delete('/applications/:id', applicationController.deleteApplication)
router.put('/applications/:id', applicationController.updateApplication)



module.exports = router;