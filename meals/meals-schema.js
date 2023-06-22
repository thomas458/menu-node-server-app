import mongoose from "mongoose";

const mealsSchema = mongoose.Schema({
    name: {type:String, required: true},
    liked: {type: Boolean, default: false},
    likes: {type: Number, default: 0}

}, {collection: "meals"})

export default mealsSchema