import {Router} from 'express';
import {getIngredient, getIngredients, postIngredient, putIngredient, deleteIngredient} from '../controllers/ingredient.controllers.js';
const router = Router()

router.get('/ingredient/:id', getIngredient) 

router.get('/ingredient', getIngredients)

router.post('/ingredient', postIngredient)

router.put('/ingredient/:id', putIngredient)

router.delete('/ingredient/:id', deleteIngredient)

export default router