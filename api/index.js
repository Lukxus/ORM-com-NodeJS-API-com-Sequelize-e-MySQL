const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
const PORT = 3000

app.get('/teste', (req, res) => {
    res.status(200).send({
        mesnagem: "Conectado"
    })}
)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

module.exports = app