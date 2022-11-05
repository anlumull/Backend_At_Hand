import Recipe from '../models/recipe.js'

export const getRecipes = async (req, res) => {
    const recipe = await Recipe.find()
    res.send(recipe)
}

export const postRecipe = (req, res) => res.send('Creando una receta')

export const putRecipe = (req, res) => res.send('actualizando una receta')

export const deleteRecipe = (req, res) => res.send('borrando una receta')

export const getRecipe = async (req, res) => {
    const recipe = await Recipe.find()
    res.send(recipe)
}