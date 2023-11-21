const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        message: 'ok',
        status: 200,
        data: [{
            name: 'Yogie',
            hobby: 'minjem 100'
        },
        {
            name: 'Saufie',
            hobby: 'merintah rakyat'
        }]
    })
})

app.listen(3002, () => {
    console.log('server is running in port 3002')
})