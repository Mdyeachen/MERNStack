import express from "express";
import dotEnv from "dotenv";
import { connectDB } from "./config/db.js";
import path from 'path'

import productRoutes from './routers/product.router.js';

dotEnv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";
const __dirname = path.resolve();


//middle ware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is Runing')
})

app.use('/api/products', productRoutes)

if(NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res) => {
        console.log("hello")
        res.sendFile(path.resolve(__dirname, "frontend", 'dist', "index.html"));
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log(`Port runing on ${PORT}`)
})
