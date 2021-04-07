let users = [
    {
        name: 'admin',
        pass: '123'
    },
    {
        name: 'teo',
        pass: '456'
    }
]

module.exports.getUsers = (req, res) => {
    res.status(200).json({
        isSuccess: true,
        message: 'success',
        users
    })
}

module.exports.getUserById = (req, res) => {
    const { username } = req.body
    const { password } = req.body

    if (!!!user) {
        return res.status(400).json({
            isSuccess: false,
            message: 'not found the id user',
        })
    }

    res.status(200).json({
        isSuccess: true,
        message: 'success',
        user
    })
}

module.exports.createUser = (req, res) => {
    console.log("req.body", req.body)
    const { name } = req.body

    if (!name) {
        return res.status(400).json({
            isSuccess: false,
            message: 'invalid name',
        })
    }

    users.push({ id: `${users.length + 1}`, name })

    res.status(200).json({
        isSuccess: true,
        message: 'success',
        users
    })
}

module.exports.updateUser = (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const user = users.find(user => user.id === id)

    if (!user) {
        return res.status(400).json({
            isSuccess: false,
            message: 'not found user'
        })
    }

    let index = users.indexOf(user)
    users[index] = { id, name }

    res.status(200).json({
        isSuccess: true,
        message: 'successfully updated user',
        users,
    })
}

module.exports.deleteUser = (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(400).json({
            isSuccess: false,
            message: 'not found user'
        })
    }

    users = users.filter((user) => user.id !== id)

    res.status(200).json({
        isSuccess: true,
        message: `the id ${id} was deleted from the database`,
        users
    })
}

