import express from 'express';
// import getJobs from '../controllers/jobController.js';
import db from '../config/mysql_db.js';

const router = express.Router();

router.get('/jobs', (req, res) => {
  const q = "SELECT * FROM jobs";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});








export default router;