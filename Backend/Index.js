import express from 'express'
import dotenv from "dotenv";

dotenv.config()

const app = express()
const port = process.env.BACKEND_PORT

app.get('/', (request, response) => {
    response.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Careers listening on port ${port}`)
})
