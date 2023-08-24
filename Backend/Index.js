import express from 'express'

const app = express()
const port = 3000

app.get('/', (request, response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Careers listening on port ${port}`)
})
