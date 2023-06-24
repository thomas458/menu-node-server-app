import * as dao from "./reviews-dao.js"
import {getFiveRecentReviews} from "./reviews-dao.js";

const ReviewsController = (app) => {
    const createReview = async (req, res) => {
        const review = req.body
        const currentUser = req.session['currentUser']
        review.author = currentUser._id
        const actualReview = await dao.createReview(review)
        res.json(actualReview)
    }
    const findReviewsByMeal = async (req, res) => {
        const idMeal = req.params.idMeal
        const reviews = await dao.findReviewsByMeal(idMeal)
        res.json(reviews)
    }
    const findReviewsByAuthor = async (req, res) => {
        const author = req.params.author
        const reviews = await dao.findReviewsByAuthor(author)
        res.json(reviews)
    }
    const deleteReview = async (req, res) => {
        const reviewIdToDelete = req.params.rid;
        const status = await dao.deleteReview(reviewIdToDelete);
        res.json(status);
    }
    const getFiveRecentReviews = async (req, res) => {
        try {
            const reviews = await dao.getFiveRecentReviews();
            res.json(reviews);
        } catch (error) {
            // Handle error
            console.error(error);
        }
    };

    app.post('/api/reviews', createReview)
    app.get('/api/meals/:idMeal/reviews', findReviewsByMeal)
    app.get('/api/users/:author/reviews', findReviewsByAuthor)
    app.delete('/api/reviews/:rid', deleteReview)
    app.get('/api/reviews/recent', getFiveRecentReviews)


}

export default ReviewsController