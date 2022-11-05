import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name: 'diegocloud221',
    api_key: '346945789445874',
    api_secret: 'p7DeaN5Grlir91LM3Z7yJ9FK0VU'
})

export const uploadImageIngredients = async filePath => {
    return await cloudinary.uploader.upload(filePath,{
        folder : 'At_hand/Ingredients'
    })
}

