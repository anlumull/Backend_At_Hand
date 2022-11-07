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
    image: {
        public_id: String,
        url: String,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    }
)

export default mongoose.model('Ingredient', ingredientSchema)