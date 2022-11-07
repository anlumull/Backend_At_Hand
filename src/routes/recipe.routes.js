import {Router} from 'express';
import {getRecipes, postRecipe} from '../controllers/recipes.controllers.js';
const router = Router()

router.get('/recipe', getRecipes)

router.post('/recipe', postRecipe)

// router.put('/recipe', putRecipe)

// router.delete('/recipe', deleteRecipe)

// router.get('/recipe/:id', getRecipe) 

export default router