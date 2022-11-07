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
    ingredients : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ingrediet',
    }]
    },
    {
        versionKey: false,
    },
)

export default mongoose.model('recipes', recipeSchema)