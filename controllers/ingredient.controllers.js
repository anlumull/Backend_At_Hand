import Ingredient from '../models/ingredient.js'

export const getIngredients = async (req, res) => {
    const Ingredient = await Ingredient.find()
    res.send('obteniendo un ingrediente')
}

export const getIngredient = (req, res) => {
    console.log(req.body)
    return res.send('recibido')
}

export const postIngredient = (req, res) => {
    console.log(req.body)
    return res.send('creando ingrediente')
}

export const putIngredient = (req, res) => {
    res.send('acutalizando ingrediente')
}

export const deleteIngredient = (req, res) => {
    res.send('borrando ingrediente')
}