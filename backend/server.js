import express from "express";
import dotEnv from "dotenv";
import { connectDB } from "./config/db.js";


import productRoutes from './routers/product.router.js';

dotEnv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middle ware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is Runing')
})

app.use('/api/products', productRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log(`Port runing on ${PORT}`)
})
