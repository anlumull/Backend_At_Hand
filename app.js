import express from "express"
import recipeRoutes from './routes/recipe.routes.js'
import ingredientRoutes from './routes/ingredient.routes.js'

const app = express()

app.use(recipeRoutes)
app.use(ingredientRoutes) 

export default app