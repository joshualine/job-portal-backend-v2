const db = require('../models')

// model
const Application = db.applications


//1. Add Application
const addApplication = async (req, res) => {
    const id = req.params.id
    let data = {
        application_id: id,
        First_name: req.body.First_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        email: req.body.email,
    }
    const application = await Application.create(data)
    res.status(200).send(application)
}

// 2. Get All Applications
const getAllApplications = async (req, res) => {
    const applications = await Application.findAll({})
    res.status(200).send(applications)
}

// 3. get a single Application
const getOneApplication = async (req, res) => {
  let id = req.params.id
  let application = await Application.findOne({ where: { id: id }})
  res.status(200).send(application)
}

// 5. Update
const updateApplication = async (req, res) => {
  let id = req.params.id
  const application = await Application.update(req.body, { where: { id: id }})
  res.status(200).send('application updated')
}

// 6. Delete
const deleteApplication = async (req, res) => {
  let id = req.params.id
  await Application.destroy({ where: { id: id }} )
  res.status(200).send('Application is deleted !')
}

//-------------------
// 6. Get applications for a specified application id


module.exports = {
    addApplication,
    getAllApplications,
    getOneApplication,
    updateApplication,
    deleteApplication
}