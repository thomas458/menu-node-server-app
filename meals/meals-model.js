import mongoose from "mongoose";
import mealsSchema from "./meals-schema.js";

const mealsModel = mongoose.model(
    'MealModel', mealsSchema)

export default mealsModel;