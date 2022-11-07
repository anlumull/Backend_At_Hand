import Recipe from '../models/recipe.js'
import {uploadImageRecipes, deleteImage} from '../libs/cloudinary.js';

export const getRecipes = async (req, res) => {
    try {
      //throw new Error("error de prueba");
      const recipe = await Recipe.find();
      res.send(recipe);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ message: error.message });
    }
};


export const postRecipe = async (req, res) => {
    try {
        const {nombre, details} = req.body;
        const newRecipe = new Recipe({nombre, details, ingredients});
        await newRecipe.save();
        return res.json(newRecipe);
    } catch (error) {
        console.log(error);
        console.log(error.message);
        return res.status(500).json({message: error.message});
    }
}

// export const putRecipe = (req, res) => res.send('actualizando una receta')

// export const deleteRecipe = (req, res) => res.send('borrando una receta')

// export const getRecipe = async (req, res) => {
//     const recipe = await Recipe.find()
//     res.send(recipe)
// }