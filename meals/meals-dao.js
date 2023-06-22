import mealsModel from "./meals-model.js";


export const createMeal = async (meal) => {
    const actualMeal = mealsModel.create(meal)
    return actualMeal
}

export const findAllMeals = async() =>{
    const allMeals = await mealsModel.find()
    return allMeals
}

export const deleteMeal = async (mid) => {
    const status = await mealsModel.deleteOne({_id: mid})
    return status
}

export const updateMeal = async (mid, mealUpdates) => {
    const status = await mealsModel.updateOne(
        {_id: mid},
        {$set: mealUpdates})
    return status
}