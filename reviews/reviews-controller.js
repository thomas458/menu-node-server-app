import * as dao from "./reviews-dao.js"
const ReviewsController = (app) => {
    const createReview = async (req, res) => {
        const review = req.body
        const currentUser = req.session['currentUser']
        review.author = currentUser._id
        const actualReview = await dao.createReview(review)
        res.json(actualReview)
    }
    const findReviewsByMeal = async(req, res) => {
        const idMeal = req.params.idMeal
        const reviews = await dao.findReviewsByMeal(idMeal)
        res.json(reviews)
    }
    const findReviewsByAuthor = async (req, res) =>{
        const author = req.params.author
        const reviews = await dao.findReviewsByAuthor(author)
        res.json(reviews)
    }
    app.post('/api/reviews', createReview)
    app.get('/api/meals/:idMeal/reviews', findReviewsByMeal)
    app.get('/api/users/:author/reviews', findReviewsByAuthor)

}

export default ReviewsController