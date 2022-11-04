import express from "express"

const app = express()

app.get('/recipes', (req, res) => res.send('obteniendo las recetas'))
app.post('/recipes', (req, res) => res.send('creando las recetas'))
app.put('/recipes', (req, res) => res.send('actualizando las recetas'))
app.delete('/recipes', (req, res) => res.send('borando las recetas'))

app.listen(3000)
console.log("server running on port 3000")