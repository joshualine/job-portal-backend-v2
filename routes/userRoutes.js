const express = require('express');

const userController = require('../controllers/userController.js')

const router = express.Router();


router.get('/', userController.getAllUsers)
router.get('/:id', userController.getOneUser)
router.post('/', userController.addUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

router.post('/auth', userController.authUser) //auth user
router.post('/logout', userController.logoutUser);

module.exports = router;