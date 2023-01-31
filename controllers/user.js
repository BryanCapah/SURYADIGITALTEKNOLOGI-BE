const { user } = require("../models")

const getUser = async (req, res) => {
    try {
        const data = await user.findAll()
        res.json(data)

    } catch (error) {
        res.status(500).json(error.message)
    }
}

const createUser = async (req, res) => {
    try {
        const { first_name, last_name, date_of_birth, location } = req.body

        const newUser = await user.create({
            first_name,
            last_name,
            date_of_birth,
            location,
        })
        res.json({ data: newUser, message: 'User Created Successfully!' })

    } catch (error) {
        res.status(500).json(error.message)
    }
}

const editUser = async (req, res) => {
    try {

        const payload = req.body
        const { id } = payload

        await user.update({ ...payload }, {
            where: {
                id
            }
        })

        res.json({ data: {}, message: 'User Edited Successfully!' })

    } catch (error) {
        res.status(500).json(error.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.body

        await user.destroy({
            where: {
                id
            }
        })
        res.json({ data: {}, message: 'User Deleted Successfully!' })
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const userController = {
    getUser,
    createUser,
    editUser,
    deleteUser
}

module.exports = userController