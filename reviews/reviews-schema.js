import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema({
    review: String,
    idMeal: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    time: {
        type: Date,
        default: Date.now
    },
    details: JSON
}, {collection: 'reviews'})

export default reviewsSchema