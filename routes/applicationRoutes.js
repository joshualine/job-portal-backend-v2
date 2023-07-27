const express = require('express');

const applicationController = require('../controllers/applicationController.js')

const router = express.Router();


router.get('/', applicationController.getAllApplications)
router.get('/:id', applicationController.getOneApplication)
router.post('/:job_id', applicationController.addApplication)
router.delete('/:id', applicationController.deleteApplication)
router.put('/:id', applicationController.updateApplication)



module.exports = router;