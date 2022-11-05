import express from "express"
import fileupload from 'express-fileupload';
import recipeRoutes from './routes/recipe.routes.js'
import ingredientRoutes from './routes/ingredient.routes.js'

//middlewares
const app = express()
app.use(express.json())
app.use(fileupload({
    useTempFiles : true,
    tempFileDir: "./upload"
}))
//Routes 
app.use(recipeRoutes)
app.use(ingredientRoutes) 

export default app