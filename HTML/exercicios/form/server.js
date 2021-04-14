const express = require('express')
const app = express()
//const bodyParser = require('body-parser')
//
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns, usuário incluido!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(resp.body)
    resp.send('<h1>Parabéns, usuário alterado!</h1>')
})

app.listen(3003)