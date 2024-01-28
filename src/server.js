const express = require('express')
const cors = require('cors')


const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()


// conexão com banco de dados
db.connect()

// habilita CORS
app.use(cors())

// habilita server para receber dados json
app.use(express.json())

// definindo as rotas
app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))

