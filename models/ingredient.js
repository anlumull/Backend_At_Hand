import mongoose from 'mongoose';

const ingredientSchema = new mongoose.Schema({
        nombre : {
        type: String,
        required: true,
        trim: true
    },
    details : {
        type: String,
        required: true,
        trim: true
    },
    images : {
        url: String,
        publicId : String
    },
})

export default mongoose.model('Ingredient', ingredientSchema)