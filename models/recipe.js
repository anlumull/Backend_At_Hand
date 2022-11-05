import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
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
    ingredients : {
        
    },
})

export default mongoose.model('recipes', recipeSchema)