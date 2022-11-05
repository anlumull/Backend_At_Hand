import Ingredient from '../models/ingredient.js'

export const getIngredients = async (req, res) => {
    const Ingredient = await Ingredient.find()
    res.send('obteniendo un ingrediente')
}

export const postIngredient = async (req, res) => {
    const {idIngrediente, nombre, details} = req.body

    const newIngredient = new Ingredient({idIngrediente, nombre, details}) 

    await newIngredient.save()

    return res.json(newIngredient)
}

export const putIngredient = (req, res) => {
    res.send('acutalizando ingrediente')
}

export const deleteIngredient = (req, res) => {
    res.send('borrando ingrediente')
}

export const getIngredient = (req, res) => {
    console.log(req.body)
    return res.send('recibido')
}