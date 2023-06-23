import reviewsModel from "./reviews-model.js";

export const createReview = (review) =>
    reviewsModel.create(review)

export const findReviewsByMeal = (idMeal) =>
    reviewsModel
        .find({idMeal})
        .populate('author')
        .exec()

export const findReviewsByAuthor = (author) =>
    reviewsModel.find({author})
