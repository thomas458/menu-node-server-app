import usersModel from "./users-model.js"

export const createUser = async (user) =>
    usersModel.create(user)

export const register = async (user) => {
    const existingUser = await findByUsername(user.username)
    if(existingUser){

    }
}

export const findAllUsers = async() =>
    usersModel.find()

// export const findUserById = async (uid) =>
//     usersModel.findById(uid)

export const findByUsername = async (username) =>
    usersModel.findOne({username})

export const findByCredentials = async (username, password) =>
    await usersModel.findOne(
        {username, password},
        {password: false})

export const deleteUser = async (uid) =>
    usersModel.deleteOne({_id: uid})

export const updateUser = async(uid, userUpdates) =>
    usersModel.updateOne({_id: uid},
        {$set: userUpdates})

export const findUserById = (uid) =>
    usersModel.findById(uid, {password: false})
