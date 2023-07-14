// config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()

//middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

//rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

//rota inicial / endpoint
app.get('/', (req, res) => {
    res.json({message: 'oi express'})
})

//entregar uma porta
const DB_USER = seuusuario
const DB_PASSWORD = suasenha

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.n35r2ri.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log("Conectamos ao MongoDB!")
    app.listen(3000)
}).catch((err) => console.log(err))

