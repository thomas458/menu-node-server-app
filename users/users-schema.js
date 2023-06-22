import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    email: String,
    dob: Date,
    married: Boolean,
    type: {type: String, enum: ['ADMIN', 'VERIFIED', 'GUEST']},
}, {collection: 'users'})

export default usersSchema