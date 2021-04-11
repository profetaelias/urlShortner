const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')

const app = express()

app.use(helmet());
app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.json({
//         message: 'Shortner URL'
//     })
// })

// app.get('/:id', (req, res) => {
//    //TODO: redirecionar para a url
// })

// app.post('/url', (req, res) => {
//     //TODO: criar a url
// })

// app.get('/url/:id', (req, res) => {
//     //TODO: devolver informacao sobre a url pelo id
// })

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`)
})