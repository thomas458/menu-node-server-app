import * as mealsDao from "./meals-dao.js"

export let meals = [
    {
        _id: '123',
        "name": "Arrabiata"
    },
    {
        _id: '234',
        "name": "chicken"
    },
    {
        _id: '345',
        "name": "rice"
    },
    {
        _id: '456',
        "name": "burger"
    },
]


const MealsController = (app) => {
    // crud
    const createMeal =  async (req, res) => {
        const meal = req.body
        // meal["_id"] = (new Date()).getTime() + ''
        // meal["likes"] = 0
        // meal["liked"] = false
        // meals.push(meal)
        const actualMeal = await mealsDao.createMeal(meal)
        res.send(actualMeal)
    }
    const findAllMeals = async (req, res) => {
        const allMeals = await mealsDao.findAllMeals()
        res.send(allMeals)
    }
    const updateMeal =  async (req, res) => {
        const mid = req.params['mid']
        const mealUpdates = req.body
        const status = await mealsDao.updateMeal(mid, mealUpdates)
        // const mealIndex = meals.findIndex(
        //     (m) => m._id === mid)
        // meals[mealIndex] = {
        //     ...meals[mealIndex],
        //     ...mealUpdates
        // }
        res.send(status)
    }
    const deleteMeal =  async (req, res) => {
        const mid = req.params['mid']
        const status = mealsDao.deleteMeal(mid)
        // meals = meals.filter((m) => m._id !== mid)
        res.send(status)
    }

    app.post    ('/meals',createMeal)
    app.get     ('/meals', findAllMeals)
    app.put     ('/meals/:mid', updateMeal)
    app.delete  ('/meals/:mid', deleteMeal)
}

export default MealsController;
