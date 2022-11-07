import dotenv from 'dotenv'

dotenv.config()
export const MONGODB_URI = process.env.MONGODB_URI
export const PORT = process.env.PORT
export const CLOUD_NAME = process.env.CLOUDINARY_NAME
export const CLOUD_APIKEY = process.env.CLOUDINARY_APIKEY
export const CLOUD_APISEC = process.env.CLOUDINARY_APISECRET