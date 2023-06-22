let likes = [
    {_id: '123', user: '111', meal: '123'},
    {_id: '234', user: '111', meal: '234'},
    {_id: '345', user: '222', meal: '345'},
    {_id: '456', user: '333', meal: '345'},

]

const LikesController = (app) => {
    const userLikesMeal = (req, res) => {
        const uid = req.params.uid
        const mid = req.params.mid
        const like = {
            _id: (new Date()).getTime() + '',
            user: uid,
            meal: mid
        }
        likes.push(like)
        res.json(like)
    }
    const userUnlikesMeal = (req, res) => {
        const uid = req.params.uid
        const mid = req.params.mid
        likes = likes.filter((l) => l.user !== uid && l.meal !== mid)
        res.send(200)
    }
    const findAllLike = (req, res) => {
        res.json(likes)
    }
    const findMealsLikedByUser = (req, res) => {
        const uid = req.params.uid
        const meals = likes.filter((like) => like.user === uid)
        res.json(meals)
    }
    const findUsersWhoLikedMeal = (req, res) => {
        const mid = req.params.mid
        const users = likes.filter((like) => like.meal === mid)
        res.json(users)
    }
    //const updateLike = (req, res) => {}

    app.post('/users/:uid/likes/:mid', userLikesMeal)
    app.delete('/users/:uid/likes/:mid',userUnlikesMeal)
    app.get('/likes', findAllLike)
    app.get('/users/:uid/likes', findMealsLikedByUser)
    app.get('/meals/:mid/likes', findUsersWhoLikedMeal)
    //app.put(updateLike)
}
export default LikesController

