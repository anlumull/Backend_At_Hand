import {v2 as cloudinary} from 'cloudinary'
import {CLOUD_NAME, CLOUD_APISEC, CLOUD_APIKEY} from '../config.js'

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_APIKEY,
    api_secret: CLOUD_APISEC
})

export const uploadImageIngredients = async filePath => {
    return await cloudinary.uploader.upload(filePath,{
        folder : 'At_hand/Ingredients'
    })
}

export const uploadImageRecipes = async filePath => {
    return await cloudinary.uploader.upload(filePath,{
        folder : 'At_hand/Recipes'
    })
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}
