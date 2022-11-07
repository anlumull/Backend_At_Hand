import Ingredient from "../models/ingredient.js";
import {uploadImageIngredients, deleteImage} from '../libs/cloudinary.js'
import fs from 'fs-extra'

export const getIngredients = async (req, res) => {
  try {
    //throw new Error("error de prueba");
    const ingredient = await Ingredient.find();
    res.send(ingredient);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const postIngredient = async (req, res) => {
  try {
    const { nombre, details} = req.body;

    let image;

    if(req.files.image){
        const result = await uploadImageIngredients(req.files.image.tempFilePath)
        await fs.remove(req.files.image.tempFilePath)
        image = {
            url : result.secure_url,
            public_id : result.public_id
        };
    }
    const newIngredient = new Ingredient({ nombre, details, image});
    await newIngredient.save();
    return res.json(newIngredient);
  } catch (error) {
    console.log(error);
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const putIngredient = async (req, res) => {
  try {
    const ingrediente = await Ingredient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    console.log(ingrediente);
    return res.send(ingrediente);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteIngredient = async (req, res) => {
  try {
    const ingredientRemoved = await Ingredient.findByIdAndDelete(req.params.id);
    if (!ingredientRemoved) return res.sendStatus(404);
    if (ingredientRemoved.image.public_id) {
        await deleteImage(ingredientRemoved.image.public_id)
    }
    return res.sendStatus(204);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const getIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.findById(req.params.id);
    if (!ingredient) return res.sendStatus(404);
    return res.json(ingredient);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
};
