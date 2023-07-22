const dbConfig = require('../config/mysql_db.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD, {
      host: dbConfig.HOST,
      dialect: dbConfig.dialect,
      operatorsAliases: false,

      pool: {
          max: dbConfig.pool.max,
          min: dbConfig.pool.min,
          acquire: dbConfig.pool.acquire,
          idle: dbConfig.pool.idle

      }
  }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize


db.jobs = require('./jobModel.js')(sequelize, DataTypes);
db.applications = require('./applicationModel.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})


// 1 to Many Relation
db.jobs.hasMany(db.applications, {
  foreignKey: 'job_id',
  as: 'application'
})

db.applications.belongsTo(db.jobs, {
  foreignKey: 'job_id',
  as: 'job'
})





module.exports = db