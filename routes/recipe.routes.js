import {Router} from 'express';
import {getRecipe, getRecipes, postRecipe, putRecipe, deleteRecipe} from '../controllers/recipes.controllers.js';
const router = Router()

router.get('/recipe/:id', getRecipe) 

router.get('/recipe', getRecipes)

router.post('/recipe', postRecipe)

router.put('/recipe', putRecipe)

router.delete('/recipe', deleteRecipe)
