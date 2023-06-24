import reviewsModel from "./reviews-model.js";

export const createReview = (review) =>
    reviewsModel.create(review)

export const findReviewsByMeal = (idMeal) =>
    reviewsModel
        .find({idMeal})
        .populate('author')
        .exec()

export const findReviewsByAuthor = (author) => {
    const reviews = reviewsModel.find({author}).sort({time: -1}).limit(5);
    return reviews;
}

export const deleteReview = async (rid) => {
    const status = await reviewsModel.deleteOne({_id: rid})
    return status;
}
export const getFiveRecentReviews = async () => {
    try {
        const reviews = await reviewsModel.find().sort({time: -1}).limit(5);
        return reviews;
    } catch (error) {
        // Handle error
        console.error(error);
    }
};