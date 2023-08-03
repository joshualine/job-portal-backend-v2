const db = require('../models')
const {generateToken} = require('../utils/generateToken.js')

// model
const User = db.users;


//1. Add User
const addUser = async (req, res) => {
    let data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }
    const user = await User.create(data)
    if (user) {
      generateToken(res, user.id);  
      res.status(200).send(user)
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
    
}

// 2. Get All Users
const getAllUsers = async (req, res) => {
    const users = await User.findAll({})
    res.status(200).send(users)
}

// 3. get a single User
const getOneUser = async (req, res) => {
  let id = req.params.id
  let user = await User.findOne({ where: { id: id }})
  res.status(200).send(user)
}

// 5. Update
const updateUser = async (req, res) => {
  let id = req.params.id
  const user = await User.update(req.body, { where: { id: id }})
  res.status(200).send('user updated')
}

// 6. Delete
const deleteUser = async (req, res) => {
  let id = req.params.id
  await User.destroy({ where: { id: id }} )
  res.status(200).send('User is deleted !')
}

// 7.
// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email, password: password }});
  if (user) {
    generateToken(res, user.id);
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401).send('Invalid email or password');
    // throw new Error('Invalid email or password');
  }
};

// 8.
// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
};

module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    authUser,
    logoutUser
}