import Ingredient from "../models/ingredient.js";

export const getIngredients = async (req, res) => {
  try {
    throw new Error("error de prueba");
    const ingredient = await Ingredient.find();
    res.send(ingredient);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const postIngredient = async (req, res) => {
  try {
    const { idIngrediente, nombre, details } = req.body;

    const newIngredient = new Ingredient({ idIngrediente, nombre, details });

    await newIngredient.save();

    return res.json(newIngredient);
  } catch (error) {
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
