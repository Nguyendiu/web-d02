const User = require('../models/user.model') // import user model
module.exports.getUsers = async (req, res) => {
  const users = await User.find()
  res.status(200).json({
    isSuccess: true,
    message: 'success got',
    users
  })
}

module.exports.getUserById = async (req, res) => {
  const { id } = req.params
  const user = await User.findById(id)
  if (user) {
    return res.status(200).json({
      isOk: true,
      message: 'successfully received user by id',
      user
    })
  }
  res.status(400).json({
    isOK: false,
    message: "not found the id user"
  })

}

module.exports.createUser = (req, res) => {
  console.log("req.body", req.body)
  const { email, password, firstName, lastName, birthday, isMale } = req.body

  if (!email || !password || !firstName || !lastName || !birthday) {
    return res.status(400).json({
      isSuccess: false,
      message: 'missing required fields',
    })
  }

  const newUser = new User({ ...req.body }) // tao new document tu model user

  newUser.save(function (err, doc) {
    if (err) {
      return res.status(500).json({
        isSuccess: false,
        message: 'database error',
      })
    } else {
      return res.status(200).json({
        isSuccess: true,
        message: 'Successful created',
        newUser: doc
      })
    }
  })
}

module.exports.updateUser = (req, res) => {
  const { id } = req.params
  User.findByIdAndUpdate(id, req.body, function (err, doc) {
    if (err) {
      return res.status(500).json({
        isOk: false,
        message: "user update failure with id"
      })
    }
    res.status(200).json({
      isOk: true,
      message: "user is successfully updated",
      updateUser: { ...doc._doc, ...req.body }
    })
  })
}

module.exports.deleteUser = async (req, res) => {
  const { id } = req.params
  // const { email } = req.body

  await User.findByIdAndDelete(id, req.body, function (err, doc) {
    if (err) {
      return res.status(400).json({
        isOk: false,
        message: "fail to deteleted"
      })
    }
    res.status(200).json({
      isOk: true,
      message: " successfully deleted",
      infordeleteUser: { ...doc._doc, ...req.body }
    })
  })
}

