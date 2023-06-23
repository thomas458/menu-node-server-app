import reviewsModel from "./reviews-model.js";
import mealsModel from "../meals/meals-model.js";

export const createReview = (review) =>
    reviewsModel.create(review)

export const findReviewsByMeal = (idMeal) =>
    reviewsModel
        .find({idMeal})
        .populate('author')
        .exec()

export const findReviewsByAuthor = (author) =>
    reviewsModel.find({author})

export const deleteReview = async (rid) => {
    const status = await reviewsModel.deleteOne({_id: rid})
    return status
}
