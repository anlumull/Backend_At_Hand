import Ingredient from '../models/ingredient.js'

export const getIngredients = async (req, res) => {
    const ingredient = await Ingredient.find()
    res.send(ingredient)
}

export const postIngredient = async (req, res) => {
    const {idIngrediente, nombre, details} = req.body

    const newIngredient = new Ingredient({idIngrediente, nombre, details}) 

    await newIngredient.save()

    return res.json(newIngredient)
}

export const putIngredient = async (req, res) => {
    const ingrediente = await Ingredient.findByIdAndUpdate(req.params.id, req.body, {new : true}) 
    console.log(ingrediente)
    return res.send('recibido')
}

export const deleteIngredient = async (req, res) => {
    const ingredientRemoved = await Ingredient.findByIdAndDelete(req.params.id)
    if (!ingredientRemoved) return res.sendStatus(404)
    return res.sendStatus(204)
}

export const getIngredient = async (req, res) => {
    const ingredient = await Ingredient.findById(req.params.id)
    if(!ingredient) return res.sendStatus(404)
    return res.json(ingredient)
}