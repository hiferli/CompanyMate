import express from 'express'
import dotenv from "dotenv";
import mongoose from 'mongoose'

dotenv.config()

const app = express();

const DATABASE_URI = process.env.MONGO_URI;

mongoose.connect(DATABASE_URI);
const db = mongoose.connection;
db.on('error' , (error) => console.error(error));
db.on('open' , () => console.log('Connection to database successful'));


app.use(express.json())


app.get('/', (request, response) => {
    response.send('Hello World!')
})

const port = process.env.BACKEND_PORT
app.listen(port, () => {
    console.log(`Careers listening on port ${port}`)
})
