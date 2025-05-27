import express from "express";
import dotEnv from "dotenv";
import { connectDB } from "./config/db.js";


dotEnv.config();
const app = express();


app.get('/', (req, res) => {
    res.send('Server is Runing')
})

app.listen(3000, () => {
    connectDB();
    console.log('Port runing on 3000')
})
