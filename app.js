import mongoose from "mongoose"
import express from 'express'
import HelloController from "./controllers/hello-controller.js"
import MealsController from "./meals/meals-controller.js";
import UsersController from "./users/users-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
import cors from 'cors'
import LikesController from "./likes/likes-controller.js";
import FollowsController from "./follows/follows-controller.js";
import session from 'express-session';
import AlbumController from "./detailbackend/album-controller.js";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

mongoose.connect("mongodb+srv://chenyanghao615:ITLkai2a5i9vFfMY@cluster0.75nvzso.mongodb.net/project", options)

const app = express()

const allowedOrigins = ['http://localhost:3000'];

app.use(cors({
    credentials: true,
    origin: allowedOrigins,
}))
app.use(session({
    secret: 'should be environment variable',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}))
app.use(express.json())
HelloController(app)
MealsController(app)
LikesController(app)
UsersController(app)
ReviewsController(app)


FollowsController(app)


FollowsController(app)
AlbumController(app)
app.listen(process.env.PORT ||4000)