const dotenv = require('dotenv');
dotenv.config();


module.exports = {
  HOST: 'localhost',
  USER: 'proouts_admin2',
  PASSWORD: process.env.DB_PASSWORD,
  DB: 'proouts_job_portal_db',
  dialect: 'mysql',

  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
}
