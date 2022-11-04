import express from "express"
import {connectDB} from './DB/db.js'
import {PORT} from './config.js';

const app = express()
connectDB()


app.get('/recipes', (req, res) => res.send('obteniendo las recetas'))
app.post('/recipes', (req, res) => res.send('creando las recetas'))
app.put('/recipes', (req, res) => res.send('actualizando las recetas'))
app.delete('/recipes', (req, res) => res.send('borando las recetas'))

app.listen(PORT)
console.log("server running on port ", PORT)