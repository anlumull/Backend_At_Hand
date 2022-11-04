import mongoose from 'mongoose';

const ingredientSchema = new mongoose.Schema({
    idIngrediente: {
        type: String,
        required: true,
        trim: true
    },
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

export default mongoose.model('ingredient', ingredientSchema)